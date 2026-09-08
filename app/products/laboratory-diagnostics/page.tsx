import LaboratoryDiagnosticsHero from "@/components/sections/LaboratoryDiagnosticsHero";
import LaboratoryOverview from "@/components/sections/LaboratoryOverview";
import LaboratorySolutions from "@/components/sections/LaboratorySolutions";
import WhyLaboratorySolutions from "@/components/sections/WhyLaboratorySolutions";
import LaboratoryCTA from "@/components/sections/LaboratoryCTA";

export default function LaboratoryDiagnosticsPage() {
  return (
    <>
      <LaboratoryDiagnosticsHero />
      <LaboratoryOverview />
      <LaboratorySolutions />
      <WhyLaboratorySolutions />
      <LaboratoryCTA />
    </>
  );
}