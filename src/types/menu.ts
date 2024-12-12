export type DishCategory = 'appetizers' | 'soups' | 'main-courses' | 'desserts' | 'drinks';

export type SpicyLevel = 0 | 1 | 2 | 3;

export interface Dish {
  id: string;
  name: string;
  description: string;
  category: DishCategory;
  price: number;
  imageUrl: string;
  spicyLevel?: SpicyLevel;
  allergens?: string[];
}