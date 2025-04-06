import { Suspense } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { CartProvider } from "@/lib/context/CartContext";
import { getAllFoodItems, getFoodItemsByCategory } from "@/lib/api/foodService";
import { FoodItem, FoodCategory, APIResponse } from "@/lib/types";
import MenuClient from "./MenuClient";

async function fetchFoodItems(categoryParam: FoodCategory | null): Promise<FoodItem[]> {
  try {
    let response: APIResponse<FoodItem[]>;
    if (categoryParam) {
      response = await getFoodItemsByCategory(categoryParam);
    } else {
      response = await getAllFoodItems();
    }
    return response.success && response.data ? response.data : [];
  } catch (error) {
    console.error("Failed to fetch food items:", error);
    return [];
  }
}

export default async function MenuPage({ searchParams }: { searchParams: { category?: string } }) {
  const categoryParam = (searchParams.category as FoodCategory) || null;
  const foodItems = await fetchFoodItems(categoryParam);

  return (
    <CartProvider>
      <MainLayout>
        <div className="bg-[#f5f5f5] py-12">
          <div className="container">
            <h1 className="text-3xl font-bold mb-8 text-center">Our Menu</h1>
            <Suspense fallback={<div className="flex justify-center py-20"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
              <MenuClient foodItems={foodItems} initialCategory={categoryParam} />
            </Suspense>
          </div>
        </div>
      </MainLayout>
    </CartProvider>
  );
}