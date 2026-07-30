This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Публикация на хостинге без Node.js

Проект собирается статикой (`output: "export"` в `next.config.mjs`), поэтому
подходит обычный хостинг с PHP.

1. Создать `.env.local` с адресом сайта — он вшивается в сборку, а не читается
   на сервере:

   ```bash
   NEXT_PUBLIC_SITE_URL=https://your-domain.ru
   ```

   Отсюда берутся canonical, `robots.txt`, `sitemap.xml`, Open Graph и
   структурированные данные LocalBusiness. Если собрать без этой переменной, в
   них попадет `http://localhost:3000`.

2. `npm run build` — готовые файлы окажутся в `out/`.

3. Содержимое `out/` залить в корень сайта.

4. Рядом с `index.html` создать `config.php` по образцу `config.sample.php` и
   вписать туда токен бота и chat id. Форма заявки отправляет данные в
   `send.php`, который читает этот файл; в браузер токен не попадает.

Картинки в `public/assets/images` уже пережаты под верстку: при статическом
экспорте `next/image` не оптимизирует их на лету, поэтому новые файлы нужно
сжимать вручную и указывать в коде реальные размеры.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
