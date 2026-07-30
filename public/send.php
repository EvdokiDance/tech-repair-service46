<?php

declare(strict_types=1);

/**
 * Приемник заявок с формы для хостинга без Node.js.
 * Токен бота лежит рядом в config.php и в браузер не попадает.
 */

const NAME_MIN_LENGTH = 3;
const PHONE_PATTERN = '/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/';
const TELEGRAM_ATTEMPTS = 3;

function respond(int $status, array $payload): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

function readConfig(): array
{
    $path = __DIR__ . '/config.php';

    if (is_readable($path)) {
        $config = require $path;

        if (is_array($config)) {
            return $config;
        }
    }

    return [];
}

function sendTelegramMessage(string $botToken, string $chatId, string $message): bool
{
    $url = "https://api.telegram.org/bot{$botToken}/sendMessage";
    $body = json_encode([
        'chat_id' => $chatId,
        'text' => $message,
    ], JSON_UNESCAPED_UNICODE);

    for ($attempt = 1; $attempt <= TELEGRAM_ATTEMPTS; $attempt++) {
        $curl = curl_init($url);
        curl_setopt_array($curl, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 15,
        ]);

        $response = curl_exec($curl);
        $status = (int) curl_getinfo($curl, CURLINFO_RESPONSE_CODE);
        $error = curl_error($curl);
        curl_close($curl);

        if ($status >= 200 && $status < 300) {
            return true;
        }

        // 4xx означает ошибку в самом запросе - повтор не поможет.
        if ($status >= 400 && $status < 500) {
            error_log("Telegram sendMessage failed: {$status} {$response}");

            return false;
        }

        error_log("Telegram sendMessage attempt {$attempt} failed: {$status} {$error} {$response}");

        if ($attempt < TELEGRAM_ATTEMPTS) {
            sleep($attempt);
        }
    }

    return false;
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    header('Location: /');
    exit;
}

$config = readConfig();
$botToken = (string) ($config['telegram_bot_token'] ?? getenv('TELEGRAM_BOT_TOKEN') ?: '');
$chatId = (string) ($config['telegram_chat_id'] ?? getenv('TELEGRAM_CHAT_ID') ?: '');

if ($botToken === '' || $chatId === '') {
    error_log('send.php: telegram credentials are not configured');
    respond(500, ['message' => 'Отправка заявок не настроена']);
}

$raw = file_get_contents('php://input');
$payload = json_decode($raw === false ? '' : $raw, true);

if (!is_array($payload)) {
    respond(400, ['message' => 'Некорректные данные заявки']);
}

$firstName = is_string($payload['firstName'] ?? null) ? trim($payload['firstName']) : '';
$phone = is_string($payload['phone'] ?? null) ? trim($payload['phone']) : '';

if (mb_strlen($firstName) < NAME_MIN_LENGTH) {
    respond(400, ['message' => 'Введите имя не короче 3 символов']);
}

if (preg_match(PHONE_PATTERN, $phone) !== 1) {
    respond(400, ['message' => 'Введите корректный номер телефона']);
}

$message = implode("\n", [
    '🔥 Заявка от клиента!',
    '',
    "👤 Имя: {$firstName}",
    "📞 Телефон: {$phone}",
]);

if (!sendTelegramMessage($botToken, $chatId, $message)) {
    respond(502, ['message' => 'Не удалось отправить заявку']);
}

respond(200, ['ok' => true]);
