import MicroscopyImagingHero from "@/components/sections/MicroscopyImagingHero";
import MicroscopyOverview from "@/components/sections/MicroscopyOverview";
import MicroscopySolutions from "@/components/sections/MicroscopySolutions";
import WhyMicroscopySolutions from "@/components/sections/WhyMicroscopySolutions";
import MicroscopyCTA from "@/components/sections/MicroscopyCTA";

export default function MicroscopyImagingPage() {
  return (
    <>
      <MicroscopyImagingHero />
      <MicroscopyOverview />
      <MicroscopySolutions />
      <WhyMicroscopySolutions />
      <MicroscopyCTA />
    </>
  );
}