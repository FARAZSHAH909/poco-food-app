"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: "pizza",
    name: "Pizza",
    count: 14,
    image: "https://ext.same-assets.com/868996137/2955946160.png",
  },
  {
    id: "burger",
    name: "Burger",
    count: 9,
    image: "https://ext.same-assets.com/868996137/1612393117.png",
  },
  {
    id: "pasta",
    name: "Pasta",
    count: 6,
    image: "https://ext.same-assets.com/868996137/2026718985.png",
  },
  {
    id: "coldDrink",
    name: "Cold Drinks",
    count: 20,
    image: "https://ext.same-assets.com/868996137/3773569900.png",
  },
  {
    id: "hotDrink",
    name: "Hot Drinks",
    count: 5,
    image: "https://ext.same-assets.com/868996137/625848627.png",
  },
  {
    id: "combo",
    name: "Combo",
    count: 12,
    image: "https://ext.same-assets.com/868996137/3773569900.png",
  },
  {
    id: "chicken",
    name: "Chicken",
    count: 8,
    image: "https://ext.same-assets.com/868996137/3275103958.png",
  },
  {
    id: "sauce",
    name: "Sauces",
    count: 10,
    image: "https://ext.same-assets.com/868996137/2849757483.png",
  },
];

export function Categories() {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <h2 className="text-center text-2xl font-bold mb-8">Our Menu Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/menu?category=${category.id}`}
              className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-20 w-20 mb-3">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-medium text-center">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count} items</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
