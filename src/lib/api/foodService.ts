import { FoodCategory, FoodItem, APIResponse } from "../types";
import { mockFoodItems } from "./mockData";

// Simulate API calls with delayed responses
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getAllFoodItems(): Promise<APIResponse<FoodItem[]>> {
  try {
    // Simulate network delay
    await delay(500);
    return {
      success: true,
      data: mockFoodItems,
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch food items.",
    };
  }
}

export async function getFoodItemsByCategory(
  category: FoodCategory
): Promise<APIResponse<FoodItem[]>> {
  try {
    await delay(300);
    const filteredItems = mockFoodItems.filter(
      (item) => item.category === category
    );
    return {
      success: true,
      data: filteredItems,
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to fetch ${category} items.`,
    };
  }
}

export async function getFoodItemById(
  id: string
): Promise<APIResponse<FoodItem>> {
  try {
    await delay(200);
    const item = mockFoodItems.find((item) => item.id === id);
    if (!item) {
      return {
        success: false,
        error: "Item not found.",
      };
    }
    return {
      success: true,
      data: item,
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch food item.",
    };
  }
}

export async function getPopularFoodItems(): Promise<APIResponse<FoodItem[]>> {
  try {
    await delay(400);
    const popularItems = mockFoodItems.filter((item) => item.isPopular);
    return {
      success: true,
      data: popularItems,
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch popular items.",
    };
  }
}

export async function getDiscountedFoodItems(): Promise<APIResponse<FoodItem[]>> {
  try {
    await delay(400);
    const discountedItems = mockFoodItems.filter((item) => item.isSale);
    return {
      success: true,
      data: discountedItems,
    };
  } catch (error) {
    return {
      success: false,
      error: "Failed to fetch discounted items.",
    };
  }
}

export async function searchFoodItems(
  query: string
): Promise<APIResponse<FoodItem[]>> {
  try {
    await delay(300);
    const searchResults = mockFoodItems.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    return {
      success: true,
      data: searchResults,
    };
  } catch (error) {
    return {
      success: false,
      error: "Search failed. Please try again.",
    };
  }
}
