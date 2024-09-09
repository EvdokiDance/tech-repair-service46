import { Contacts, Faq, Gallery, Hero, OurService, StagesWork } from "@/shared/ui";

import { ScrollToTop } from "@/shared/ui/scroll-to-top";



  
  export default async function Home() {

  
    return (
      <>
        <ScrollToTop/>
        <Hero/>
        <OurService/>
        <StagesWork/>
        <Gallery/>
        <Contacts/>
        <Faq/>
      </>
    );
  }
  