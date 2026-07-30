import { contacts } from "@/shared/constants";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

const normalizeUrl = (url: string) => url.replace(/\/$/, "");

export const SITE_URL = normalizeUrl(rawSiteUrl);
export const SITE_NAME = "Инспектор Гаджет";
export const SITE_TITLE = "Ремонт телефонов в Курске | Инспектор Гаджет";
export const SITE_DESCRIPTION =
  "Сервисный центр Инспектор Гаджет в Курске: ремонт телефонов, планшетов, ноутбуков и техники Apple, бесплатная диагностика, гарантия до 6 месяцев.";

export const SITE_KEYWORDS = [
  "ремонт телефонов Курск",
  "сервисный центр Курск",
  "ремонт смартфонов Курск",
  "ремонт планшетов Курск",
  "ремонт ноутбуков Курск",
  "ремонт Apple Курск",
  "замена экрана Курск",
  "замена аккумулятора Курск",
];

export const businessAddress = {
  streetAddress: "Союзная ул. 16",
  addressLocality: "Курск",
  addressRegion: "Курская область",
  addressCountry: "RU",
};

export const businessGeo = {
  latitude: 51.74719,
  longitude: 36.2445,
};

export const businessHours = {
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "09:00",
  closes: "21:00",
};

export const repairServices = [
  "Ремонт телефонов и смартфонов",
  "Замена дисплея, стекла и аккумулятора",
  "Ремонт планшетов",
  "Ремонт ноутбуков и компьютеров",
  "Ремонт техники Apple",
  "Восстановление после попадания влаги",
  "Диагностика цифровой техники",
];

export const absoluteUrl = (path = "/") => {
  if (path.startsWith("http")) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export const localBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  alternateName: "Сервисный центр Инспектор Гаджет",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: contacts.phone,
  email: contacts.email,
  image: [
    absoluteUrl("/assets/images/devices.png"),
    absoluteUrl("/assets/images/about-us-1.jpg"),
    absoluteUrl("/assets/images/about-us-2.jpg"),
    absoluteUrl("/assets/images/about-us-3.jpg"),
  ],
  logo: absoluteUrl("/icon.png"),
  priceRange: "₽₽",
  address: {
    "@type": "PostalAddress",
    ...businessAddress,
  },
  geo: {
    "@type": "GeoCoordinates",
    ...businessGeo,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: businessHours.days,
      opens: businessHours.opens,
      closes: businessHours.closes,
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Курск",
  },
  sameAs: [contacts.telegram, "https://vk.com/youphonevk"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Услуги ремонта техники",
    itemListElement: repairServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
        areaServed: "Курск",
        provider: {
          "@id": `${SITE_URL}/#business`,
        },
      },
    })),
  },
};
