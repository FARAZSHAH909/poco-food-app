import { Cart, CartItem, FoodItem, APIResponse } from "../types";

// Use local storage to persist cart data
const CART_STORAGE_KEY = "poco_cart";

// Initialize an empty cart
const defaultCart: Cart = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

// Helper functions to read/write cart from localStorage
function getStoredCart(): Cart {
  if (typeof window === "undefined") return defaultCart;

  const storedCart = localStorage.getItem(CART_STORAGE_KEY);

  if (!storedCart) {
    return defaultCart;
  }

  try {
    return JSON.parse(storedCart) as Cart;
  } catch (error) {
    console.error("Error parsing cart from localStorage:", error);
    return defaultCart;
  }
}

function saveCart(cart: Cart): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function calculateCartTotals(items: CartItem[]): Cart {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = items.reduce((total, item) => {
    const itemPrice = item.item.discountedPrice || item.item.price;
    return total + itemPrice * item.quantity;
  }, 0);

  return {
    items,
    totalItems,
    totalPrice,
  };
}

// Cart API functions
export async function getCart(): Promise<APIResponse<Cart>> {
  try {
    const cart = getStoredCart();
    return {
      success: true,
      data: cart,
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch cart.",
    };
  }
}

export async function addToCart(
  item: FoodItem,
  quantity: number = 1
): Promise<APIResponse<Cart>> {
  try {
    const cart = getStoredCart();
    const existingItemIndex = cart.items.findIndex(
      (cartItem) => cartItem.item.id === item.id
    );

    if (existingItemIndex >= 0) {
      // Item exists in cart, update quantity
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Item doesn't exist in cart, add it
      cart.items.push({
        item,
        quantity,
      });
    }

    const updatedCart = calculateCartTotals(cart.items);
    saveCart(updatedCart);

    return {
      success: true,
      data: updatedCart,
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to add item to cart.",
    };
  }
}

export async function updateCartItemQuantity(
  itemId: string,
  quantity: number
): Promise<APIResponse<Cart>> {
  try {
    const cart = getStoredCart();
    const itemIndex = cart.items.findIndex(
      (cartItem) => cartItem.item.id === itemId
    );

    if (itemIndex === -1) {
      return {
        success: false,
        error: "Item not found in cart.",
      };
    }

    if (quantity <= 0) {
      // Remove item if quantity is zero or negative
      cart.items.splice(itemIndex, 1);
    } else {
      // Update quantity
      cart.items[itemIndex].quantity = quantity;
    }

    const updatedCart = calculateCartTotals(cart.items);
    saveCart(updatedCart);

    return {
      success: true,
      data: updatedCart,
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to update cart item.",
    };
  }
}

export async function removeFromCart(
  itemId: string
): Promise<APIResponse<Cart>> {
  try {
    const cart = getStoredCart();
    const updatedItems = cart.items.filter(
      (cartItem) => cartItem.item.id !== itemId
    );

    const updatedCart = calculateCartTotals(updatedItems);
    saveCart(updatedCart);

    return {
      success: true,
      data: updatedCart,
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to remove item from cart.",
    };
  }
}

export async function clearCart(): Promise<APIResponse<Cart>> {
  try {
    saveCart(defaultCart);
    return {
      success: true,
      data: defaultCart,
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to clear cart.",
    };
  }
}
