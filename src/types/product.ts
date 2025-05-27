export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  isNew: boolean;
  onSale: boolean;
  featured: boolean;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
}