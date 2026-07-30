import { NextResponse } from "next/server";

type RequestPayload = {
  firstName?: unknown;
  phone?: unknown;
};

const phonePattern =
  /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

const normalizeField = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

export function GET(request: Request) {
  return NextResponse.redirect(new URL("/", request.url));
}

const sendTelegramMessage = async (
  botToken: string,
  chatId: string,
  message: string
) => {
  let lastError: unknown;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        }
      );

      if (response.ok || response.status < 500 || attempt === 3) {
        return response;
      }
    } catch (error) {
      lastError = error;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
  }

  throw lastError;
};

export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json(
      { message: "Отправка заявок не настроена" },
      { status: 500 }
    );
  }

  let payload: RequestPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Некорректные данные заявки" },
      { status: 400 }
    );
  }

  const firstName = normalizeField(payload.firstName);
  const phone = normalizeField(payload.phone);

  if (firstName.length < 3) {
    return NextResponse.json(
      { message: "Введите имя не короче 3 символов" },
      { status: 400 }
    );
  }

  if (!phonePattern.test(phone)) {
    return NextResponse.json(
      { message: "Введите корректный номер телефона" },
      { status: 400 }
    );
  }

  const message = [
    "🔥 Заявка от клиента!",
    "",
    `👤 Имя: ${firstName}`,
    `📞 Телефон: ${phone}`,
  ].join("\n");

  let telegramResponse: Response;

  try {
    telegramResponse = await sendTelegramMessage(botToken, chatId, message);
  } catch (error) {
    console.error("Telegram sendMessage failed:", error);

    return NextResponse.json(
      { message: "Не удалось отправить заявку" },
      { status: 502 }
    );
  }

  if (!telegramResponse.ok) {
    const error = await telegramResponse.text();
    console.error("Telegram sendMessage failed:", error);

    return NextResponse.json(
      { message: "Не удалось отправить заявку" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
