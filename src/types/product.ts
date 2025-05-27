export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  description?: string;
  isNew?: boolean;
  onSale?: boolean;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}