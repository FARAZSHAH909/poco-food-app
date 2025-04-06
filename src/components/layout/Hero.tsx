"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="w-full bg-[#1a3f31] relative overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-20 relative z-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            UNLIMITED<br />
            <span className="text-white">MEDIUM</span>{" "}
            <span className="text-secondary">PIZZAS</span>
          </h1>
          <p className="text-gray-300 mb-6 text-lg">
            Medium 2-topping* pizza
          </p>
          <p className="text-sm text-gray-400 mb-8">
            *Additional charge for premium toppings. Minimum of 2 required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="px-8">
              <Link href="/menu">ORDER NOW</Link>
            </Button>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-secondary">$12.99</span>
              <span className="text-sm text-gray-400 line-through">$19.99</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="https://ext.same-assets.com/868996137/3174341551.png"
              alt="Pizza"
              fill
              style={{ objectFit: "contain" }}
              className="drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
      {/* Decorative shape for bottom right */}
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/20 rounded-tl-[100px] z-0" />
      {/* Decorative shape for top left */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-secondary/20 rounded-br-[50px] z-0" />
    </div>
  );
}
