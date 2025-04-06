"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Cart, CartItem, FoodItem } from "../types";
import {
  getCart,
  addToCart,
  updateCartItemQuantity,
  removeFromCart,
  clearCart,
} from "../api/cartService";
import { toast } from "sonner";

interface CartContextType {
  cart: Cart;
  isLoading: boolean;
  addItem: (item: FoodItem, quantity?: number) => Promise<void>;
  updateQuantity: (itemId: string, quantity: number) => Promise<void>;
  removeItem: (itemId: string) => Promise<void>;
  emptyCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>({
    items: [],
    totalItems: 0,
    totalPrice: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  // Load cart on initial render
  useEffect(() => {
    const loadCart = async () => {
      setIsLoading(true);
      try {
        const response = await getCart();
        if (response.success && response.data) {
          setCart(response.data);
        }
      } catch (error) {
        console.error("Failed to load cart:", error);
        toast.error("Failed to load cart");
      } finally {
        setIsLoading(false);
      }
    };

    loadCart();
  }, []);

  const addItem = async (item: FoodItem, quantity = 1) => {
    setIsLoading(true);
    try {
      const response = await addToCart(item, quantity);
      if (response.success && response.data) {
        setCart(response.data);
        toast.success(`${item.name} added to cart`);
      } else {
        toast.error(response.error || "Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      toast.error("Failed to add item to cart");
    } finally {
      setIsLoading(false);
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    setIsLoading(true);
    try {
      const response = await updateCartItemQuantity(itemId, quantity);
      if (response.success && response.data) {
        setCart(response.data);
        toast.success("Cart updated");
      } else {
        toast.error(response.error || "Failed to update cart");
      }
    } catch (error) {
      console.error("Error updating cart:", error);
      toast.error("Failed to update cart");
    } finally {
      setIsLoading(false);
    }
  };

  const removeItem = async (itemId: string) => {
    setIsLoading(true);
    try {
      const response = await removeFromCart(itemId);
      if (response.success && response.data) {
        setCart(response.data);
        toast.success("Item removed from cart");
      } else {
        toast.error(response.error || "Failed to remove item from cart");
      }
    } catch (error) {
      console.error("Error removing item from cart:", error);
      toast.error("Failed to remove item from cart");
    } finally {
      setIsLoading(false);
    }
  };

  const emptyCart = async () => {
    setIsLoading(true);
    try {
      const response = await clearCart();
      if (response.success && response.data) {
        setCart(response.data);
        toast.success("Cart cleared");
      } else {
        toast.error(response.error || "Failed to clear cart");
      }
    } catch (error) {
      console.error("Error clearing cart:", error);
      toast.error("Failed to clear cart");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, isLoading, addItem, updateQuantity, removeItem, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
