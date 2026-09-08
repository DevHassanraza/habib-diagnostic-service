import ProductsHero from "@/components/sections/ProductsHero";
import ProductCategories from "@/components/sections/ProductCategories";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyProductSolutions from "@/components/sections/WhyProductSolutions";
import ProductCTA from "@/components/sections/ProductCTA";

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductCategories />
      <FeaturedProducts />
      <WhyProductSolutions />
      <ProductCTA />
    </>
  );
}