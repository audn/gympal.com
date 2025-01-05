const API_URL = process.env.NEXT_PUBLIC_API_URL;
export interface Meal {
  id: string;
  name: string;
  total_clones: number;
  total_views: number;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  user: { displayName: string };
  sizes: Size[];
}
export interface Size {
  id: string;
  name: string;
  default: boolean;
  primary: boolean;
  sync_entries: boolean;
  image_url?: string;
  is_public: boolean;
  is_active: boolean;
  createdAt: Date;
  updatedAt: Date;
  mealId: string;
  entries: {
    id: string;
    servingSize: ServingSize;
    foodProductId: string;
    mealSizeId: string;
    foodProduct: FoodProduct;
  }[];
}
export interface FoodProduct {
  name: string;
  weight: number | null;
  ean: string;
  brand: string;
  macros: Macros;
  image: null | string;
  updatedAt: Date;
  createdAt: Date;
}
type Macros = {
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
};
export interface Product {
  id: string;
  ean: string;
  name: string;
  brand?: string | null;

  weight: number;
  servingSize: ServingSize;
  servingSizes: ServingSize[];

  macros: Macros;
  // nutrients?: Partial<Nutrients>;

  allergens: string[] | [];
  countries: string[] | [];

  image?: string | null;
  image_small?: string | null;
  scans: number;
  isBeverage: boolean;
  addedByUserId?: string;

  createdAt?: string;
  updatedAt?: string;

  isVerified: boolean;
  isPublic: boolean;

  source?: string;
  boost?: number;
}

type ServingSize = {
  gramWeight: number;
  unit: string;
  abbreviation?: string;
  // value: number;
  quantity: number;
};

export async function getMeal(mealId: string): Promise<{ payload: Meal }> {
  const res = await fetch(`${API_URL}/meals/shared/${mealId}`, {
    method: 'GET',
  });
  return res.json();
}
