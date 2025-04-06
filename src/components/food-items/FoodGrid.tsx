"use client";

import { FoodItem } from "@/lib/types";
import { FoodCard } from "./FoodCard";

interface FoodGridProps {
  foods: FoodItem[];
  title?: string;
  emptyMessage?: string;
}

export function FoodGrid({
  foods,
  title,
  emptyMessage = "No food items found"
}: FoodGridProps) {
  if (!foods || foods.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-2xl font-bold">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}
