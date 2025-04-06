"use client";

import { useEffect, useState } from "react";
import { FoodGrid } from "./FoodGrid";
import { FoodItem } from "@/lib/types";
import { getPopularFoodItems } from "@/lib/api/foodService";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockFoodItems } from "@/lib/api/mockData";

export function FeaturedFoods() {
  const [isLoading, setIsLoading] = useState(true);
  const [popularFoods, setPopularFoods] = useState<FoodItem[]>([]);

  // Pizza items for tab display
  const pizzaItems = mockFoodItems.filter(item => item.category === 'pizza');
  // Burger items for tab display
  const burgerItems = mockFoodItems.filter(item => item.category === 'burger');
  // Drink items for tab display
  const drinkItems = mockFoodItems.filter(item =>
    item.category === 'coldDrink' || item.category === 'hotDrink'
  );

  useEffect(() => {
    const fetchPopularFoods = async () => {
      setIsLoading(true);
      try {
        const response = await getPopularFoodItems();
        if (response.success && response.data) {
          setPopularFoods(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch popular foods:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularFoods();
  }, []);

  if (isLoading) {
    return (
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-8">Popular dishes</h2>
          <div className="flex justify-center">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-8">Popular dishes</h2>

        <Tabs defaultValue="popular" className="w-full">
          <TabsList className="mx-auto grid w-[80%] max-w-lg grid-cols-4 mb-8">
            <TabsTrigger value="popular">All</TabsTrigger>
            <TabsTrigger value="pizza">Pizza</TabsTrigger>
            <TabsTrigger value="burger">Burger</TabsTrigger>
            <TabsTrigger value="drinks">Drinks</TabsTrigger>
          </TabsList>
          <TabsContent value="popular" className="space-y-4">
            <FoodGrid foods={popularFoods} />
          </TabsContent>
          <TabsContent value="pizza" className="space-y-4">
            <FoodGrid foods={pizzaItems} />
          </TabsContent>
          <TabsContent value="burger" className="space-y-4">
            <FoodGrid foods={burgerItems} />
          </TabsContent>
          <TabsContent value="drinks" className="space-y-4">
            <FoodGrid foods={drinkItems} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
