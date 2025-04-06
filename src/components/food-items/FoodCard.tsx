"use client";

import { FoodItem } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/lib/context/CartContext";
import { formatPrice } from "@/lib/utils/format";

interface FoodCardProps {
  food: FoodItem;
}

export function FoodCard({ food }: FoodCardProps) {
  const { addItem, isLoading } = useCart();

  const handleAddToCart = () => {
    addItem(food, 1);
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden group">
      <div className="relative overflow-hidden aspect-square">
        <div className="absolute top-2 right-2 z-10 flex flex-col gap-1">
          {food.isNew && (
            <span className="bg-primary text-white text-xs px-2 py-1 rounded-md">
              New
            </span>
          )}
          {food.isSale && (
            <span className="bg-accent text-white text-xs px-2 py-1 rounded-md">
              Sale
            </span>
          )}
        </div>
        <Image
          src={food.image}
          alt={food.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center gap-1 text-amber-500 mb-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < Math.floor(food.rating) ? "fill-amber-500" : ""
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            {food.rating.toFixed(1)}
          </span>
        </div>
        <CardTitle className="text-lg line-clamp-1">{food.name}</CardTitle>
        <CardDescription className="line-clamp-2 h-10">
          {food.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {food.discountedPrice ? (
              <>
                <p className="font-bold text-lg">{formatPrice(food.discountedPrice)}</p>
                <p className="text-muted-foreground line-through text-sm">
                  {formatPrice(food.price)}
                </p>
              </>
            ) : (
              <p className="font-bold text-lg">{formatPrice(food.price)}</p>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full"
          disabled={isLoading}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
