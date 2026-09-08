import ClinicalMedicalHero from "@/components/sections/ClinicalMedicalHero";
import ClinicalMedicalOverview from "@/components/sections/ClinicalMedicalOverview";
import ClinicalMedicalSolutions from "@/components/sections/ClinicalMedicalSolutions";
import WhyClinicalMedicalSolutions from "@/components/sections/WhyClinicalMedicalSolutions";
import ClinicalMedicalCTA from "@/components/sections/ClinicalMedicalCTA";

export default function ClinicalMedicalEquipmentPage() {
  return (
    <>
      <ClinicalMedicalHero />
      <ClinicalMedicalOverview />
      <ClinicalMedicalSolutions />
      <WhyClinicalMedicalSolutions />
      <ClinicalMedicalCTA />
    </>
  );
}