"use client";

import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { CartProvider, useCart } from "@/lib/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash, Plus, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { formatPrice } from "@/lib/utils/format";
import Link from "next/link";

function CartContent() {
  const { cart, isLoading, updateQuantity, removeItem, emptyCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate a checkout process
    setTimeout(() => {
      emptyCart();
      setIsCheckingOut(false);
      // In a real app, we would redirect to checkout page or show confirmation
      alert("Thank you for your order! Your food is on the way.");
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div className="text-center py-20">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Button asChild>
          <Link href="/menu">Browse Menu</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        <div className="space-y-4">
          {cart.items.map((cartItem) => (
            <div
              key={cartItem.item.id}
              className="flex items-center p-4 border rounded-lg bg-white shadow-sm"
            >
              <div className="relative h-20 w-20 mr-4">
                <Image
                  src={cartItem.item.image}
                  alt={cartItem.item.name}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{cartItem.item.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {cartItem.item.description}
                </p>
                <p className="font-semibold">
                  {formatPrice(
                    cartItem.item.discountedPrice || cartItem.item.price
                  )}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    updateQuantity(cartItem.item.id, cartItem.quantity - 1)
                  }
                  disabled={isLoading || isCheckingOut}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{cartItem.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() =>
                    updateQuantity(cartItem.item.id, cartItem.quantity + 1)
                  }
                  disabled={isLoading || isCheckingOut}
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 text-red-500"
                  onClick={() => removeItem(cartItem.item.id)}
                  disabled={isLoading || isCheckingOut}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatPrice(cart.totalPrice)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>{formatPrice(3.99)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>{formatPrice(cart.totalPrice * 0.1)}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>{formatPrice(cart.totalPrice + 3.99 + cart.totalPrice * 0.1)}</span>
              </div>
            </div>
          </div>
          <Button
            className="w-full"
            size="lg"
            onClick={handleCheckout}
            disabled={isLoading || isCheckingOut}
          >
            {isCheckingOut ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Processing...
              </>
            ) : (
              "Checkout"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function CartPage() {
  return (
    <CartProvider>
      <MainLayout>
        <div className="bg-[#f5f5f5] py-12">
          <div className="container">
            <CartContent />
          </div>
        </div>
      </MainLayout>
    </CartProvider>
  );
}
