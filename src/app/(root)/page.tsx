import {
  Contacts,
  Faq,
  Hero,
  OurService,
  StagesWork,
} from "@/shared/ui";

import { ScrollToTop } from "@/shared/ui/scroll-to-top";
import { faqItems } from "@/shared/constants";
import { localBusinessStructuredData } from "@/shared/config/seo";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";

const DynamicGallery = dynamic(
  () => import("@/shared/ui/sections/gallery").then((mod) => mod.Gallery),
  {
    ssr: false,
  }
);

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const structuredData = [localBusinessStructuredData, faqStructuredData];

export default async function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <ScrollToTop />
      <Hero />
      <OurService />
      <StagesWork />
      <DynamicGallery />
      <Contacts />
      <Faq />
    </>
  );
}
