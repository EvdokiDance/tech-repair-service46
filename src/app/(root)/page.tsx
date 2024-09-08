import {  AboutUs, Hero } from "@/shared/ui";
import { Contacts } from "@/shared/ui/contacts";
import { Faq } from "@/shared/ui/faq";
import { OurService } from "@/shared/ui/our-service";
import { StagesWork } from "@/shared/ui/stages-work";


  
  export default async function Home() {

  
    return (
      <>
        <Hero/>
        <OurService/>
        <StagesWork/>
        <AboutUs/>
        <Contacts/>
        <Faq/>
      </>
    );
  }
  