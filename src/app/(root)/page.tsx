import { Contacts, Faq, Gallery, Hero, OurService, StagesWork } from "@/shared/ui";

import { ScrollToTop } from "@/shared/ui/scroll-to-top";
import dynamic from "next/dynamic";


const DynamicGallery = dynamic(() => import("@/shared/ui/sections/gallery").then((mod) => mod.Gallery), {
  ssr: false
});
  
  export default async function Home() {

  
    return (
      <>
        <ScrollToTop/>
        <Hero/>
        <OurService/>
        <StagesWork/>
        <DynamicGallery/>
        <Contacts/>
        <Faq/>
      </>
    );
  }
  