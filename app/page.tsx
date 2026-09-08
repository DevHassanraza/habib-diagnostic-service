import HeroSlider from "@/components/sections/HeroSlider";
import AboutExperience from "@/components/sections/AboutExperience";
import ServiceCapabilities from "@/components/sections/ServiceCapabilities";
import JourneySection from "@/components/sections/JourneySection";
import WhatWeDoBest from "@/components/sections/WhatWeDoBest";
import WhyChooseUs from "@/components/sections/WhyChooseUs";


export default function Home() {
  return (
    <>
      <HeroSlider />
      <AboutExperience />
      <ServiceCapabilities />
      <JourneySection />
      <WhatWeDoBest />
      <WhyChooseUs />
      
    </>
  );
}