import MolecularDiagnosticsHero from "@/components/sections/MolecularDiagnosticsHero";
import MolecularOverview from "@/components/sections/MolecularOverview";
import MolecularSolutions from "@/components/sections/MolecularSolutions";
import WhyMolecularSolutions from "@/components/sections/WhyMolecularSolutions";
import MolecularCTA from "@/components/sections/MolecularCTA";

export default function MolecularDiagnosticsPage() {
  return (
    <>
      <MolecularDiagnosticsHero />
      <MolecularOverview />
      <MolecularSolutions />
      <WhyMolecularSolutions />
      <MolecularCTA />
    </>
  );
}