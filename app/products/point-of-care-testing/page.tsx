import PointOfCareHero from "@/components/sections/PointOfCareHero";
import PointOfCareOverview from "@/components/sections/PointOfCareOverview";
import PointOfCareSolutions from "@/components/sections/PointOfCareSolutions";
import WhyPointOfCareSolutions from "@/components/sections/WhyPointOfCareSolutions";
import PointOfCareCTA from "@/components/sections/PointOfCareCTA";

export default function PointOfCareTestingPage() {
  return (
    <>
      <PointOfCareHero />
      <PointOfCareOverview />
      <PointOfCareSolutions />
      <WhyPointOfCareSolutions />
      <PointOfCareCTA />
    </>
  );
}