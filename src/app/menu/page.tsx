"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FoodGrid } from "@/components/food-items/FoodGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FoodItem, FoodCategory } from "@/lib/types";

export default function MenuClient({ foodItems: initialFoodItems, initialCategory }: { foodItems: FoodItem[]; initialCategory: FoodCategory | null }) {
  const [foodItems, setFoodItems] = useState(initialFoodItems);
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as FoodCategory | null;

  useEffect(() => {
    // Update foodItems if the category changes via search params
    setFoodItems(initialFoodItems);
  }, [initialFoodItems]);

  // Group items by category for the tabs
  const categories = {
    pizza: foodItems.filter(item => item.category === "pizza"),
    burger: foodItems.filter(item => item.category === "burger"),
    pasta: foodItems.filter(item => item.category === "pasta"),
    drinks: foodItems.filter(item => item.category === "coldDrink" || item.category === "hotDrink"),
    all: foodItems,
  };

  return (
    <Tabs defaultValue={categoryParam || initialCategory || "all"} className="w-full">
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
  );
}