"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PromoBanner() {
  return (
    <section className="py-16 bg-[#131211] text-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
              Hot Fresh <br />
              <span className="text-white">HOTDOG</span>
            </h2>
            <div className="mb-6 flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-secondary fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-yellow-500">5.0</span>
            </div>
            <p className="text-gray-300 mb-6">
              Juicy all-beef hotdog topped with your choice of condiments,
              served in a soft, warm bun. A classic American favorite!
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/menu?category=hotdog">ORDER NOW</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative h-64 md:h-96 w-full">
              <Image
                src="https://ext.same-assets.com/868996137/331721225.png"
                alt="Hot Fresh Hotdog"
                fill
                style={{ objectFit: "contain" }}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-secondary/10 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-accent/10 rounded-full blur-xl" />
      </div>
    </section>
  );
}
