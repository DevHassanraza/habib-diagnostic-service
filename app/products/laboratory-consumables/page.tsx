import LaboratoryConsumablesHero from "@/components/sections/LaboratoryConsumablesHero";
import LaboratoryConsumablesOverview from "@/components/sections/LaboratoryConsumablesOverview";
import LaboratoryConsumableSolutions from "@/components/sections/LaboratoryConsumableSolutions";
import WhyLaboratoryConsumables from "@/components/sections/WhyLaboratoryConsumables";
import LaboratoryConsumablesCTA from "@/components/sections/LaboratoryConsumablesCTA";

export default function LaboratoryConsumablesPage() {
  return (
    <>
      <LaboratoryConsumablesHero />
      <LaboratoryConsumablesOverview />
      <LaboratoryConsumableSolutions />
      <WhyLaboratoryConsumables />
      <LaboratoryConsumablesCTA />
    </>
  );
}