import { MainLayout } from "@/components/layout/MainLayout";
import { Hero } from "@/components/layout/Hero";
import { Categories } from "@/components/layout/Categories";
import { Promotions } from "@/components/layout/Promotions";
import { FeaturedFoods } from "@/components/food-items/FeaturedFoods";
import { PromoBanner } from "@/components/layout/PromoBanner";
import { CartProvider } from "@/lib/context/CartContext";

export default function Home() {
  return (
    <CartProvider>
      <MainLayout>
        <Hero />
        <Categories />
        <Promotions />
        <FeaturedFoods />
        <PromoBanner />
      </MainLayout>
    </CartProvider>
  );
}
