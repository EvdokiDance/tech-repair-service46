/** @type {import('next').NextConfig} */
const nextConfig = {
  // Статический экспорт: npm run build кладет готовые файлы в out/,
  // их можно залить на обычный хостинг без Node.js.
  output: "export",
  // На таком хостинге нет сервера, который ресайзит картинки на лету,
  // поэтому изображения отдаются как есть - они пережаты заранее.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
