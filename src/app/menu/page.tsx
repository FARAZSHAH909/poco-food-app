"use client";

import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { FoodGrid } from "@/components/food-items/FoodGrid";
import { CartProvider } from "@/lib/context/CartContext";
import { FoodItem, FoodCategory, APIResponse } from "@/lib/types";
import { getAllFoodItems, getFoodItemsByCategory } from "@/lib/api/foodService";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MenuPage() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as FoodCategory | null;

  useEffect(() => {
    const fetchFoodItems = async () => {
      setIsLoading(true);
      try {
        let response: APIResponse<FoodItem[]>;
        if (categoryParam) {
          response = await getFoodItemsByCategory(categoryParam);
        } else {
          response = await getAllFoodItems();
        }

        if (response.success && response.data) {
          setFoodItems(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch food items:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFoodItems();
  }, [categoryParam]);

  // Group items by category for the tabs
  const categories = {
    pizza: foodItems.filter(item => item.category === "pizza"),
    burger: foodItems.filter(item => item.category === "burger"),
    pasta: foodItems.filter(item => item.category === "pasta"),
    drinks: foodItems.filter(item => item.category === "coldDrink" || item.category === "hotDrink"),
    all: foodItems,
  };

  return (
    <CartProvider>
      <MainLayout>
        <div className="bg-[#f5f5f5] py-12">
          <div className="container">
            <h1 className="text-3xl font-bold mb-8 text-center">Our Menu</h1>

            {isLoading ? (
              <div className="flex justify-center py-20">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <Tabs defaultValue={categoryParam || "all"} className="w-full">
                <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-5 mb-8">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="pizza">Pizza</TabsTrigger>
                  <TabsTrigger value="burger">Burger</TabsTrigger>
                  <TabsTrigger value="pasta">Pasta</TabsTrigger>
                  <TabsTrigger value="drinks">Drinks</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  <FoodGrid foods={categories.all} />
                </TabsContent>
                <TabsContent value="pizza">
                  <FoodGrid foods={categories.pizza} />
                </TabsContent>
                <TabsContent value="burger">
                  <FoodGrid foods={categories.burger} />
                </TabsContent>
                <TabsContent value="pasta">
                  <FoodGrid foods={categories.pasta} />
                </TabsContent>
                <TabsContent value="drinks">
                  <FoodGrid foods={categories.drinks} />
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </MainLayout>
    </CartProvider>
  );
}
