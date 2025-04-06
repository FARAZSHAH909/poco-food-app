"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function Promotions() {
  return (
    <section className="py-12 bg-[#faf9f4]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Promotion 1 */}
          <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl p-6 relative overflow-hidden flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Any day offers</h3>
            <p className="mb-1">new phenomenon</p>
            <p className="mb-4">burger taste</p>
            <p className="text-xl font-bold">$12.90</p>
            <div className="absolute right-0 bottom-0 h-28 w-28">
              <Image
                src="https://ext.same-assets.com/868996137/3275874790.png"
                alt="Burger"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Promotion 2 */}
          <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-6 relative overflow-hidden flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Other flavors</h3>
            <p className="mb-1">Save room.</p>
            <p className="mb-4">we made salats</p>
            <p className="text-xl font-bold">$12.90</p>
            <div className="absolute right-0 bottom-0 h-28 w-28">
              <Image
                src="https://ext.same-assets.com/868996137/3275874790.png"
                alt="Salad"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Promotion 3 */}
          <div className="bg-gradient-to-br from-amber-50 to-red-50 rounded-xl p-6 relative overflow-hidden flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-2">Find a Poco store</h3>
            <p className="mb-1">near you</p>
            <div className="mt-auto">
              <Button asChild variant="secondary">
                <Link href="/contact">
                  <MapPin className="mr-2 h-4 w-4" /> Contact us
                </Link>
              </Button>
            </div>
            <div className="absolute right-0 bottom-0 h-28 w-28">
              <Image
                src="https://ext.same-assets.com/868996137/1018872099.png"
                alt="Map Marker"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
