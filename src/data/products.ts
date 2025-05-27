import { Product, Category } from "@/types/product";

export const categories: Category[] = [
  {
    id: "1",
    name: "Dresses",
    slug: "dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop"
  },
  {
    id: "2",
    name: "Tops",
    slug: "tops",
    image: "https://images.unsplash.com/photo-1564257577-2d5d8b1b3d7e?w=400&h=600&fit=crop"
  },
  {
    id: "3",
    name: "Bottoms",
    slug: "bottoms",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop"
  },
  {
    id: "4",
    name: "Outerwear",
    slug: "outerwear",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop"
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Silk Midi Dress",
    brand: "LUXE",
    price: 450,
    originalPrice: 600,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566479179817-c0c8b5b7b5a8?w=600&h=800&fit=crop"
    ],
    category: "dresses",
    description: "Elegant silk midi dress with a timeless silhouette. Perfect for special occasions or elevated everyday wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Emerald"],
    inStock: true,
    featured: true,
    onSale: true
  },
  {
    id: "2",
    name: "Cashmere Sweater",
    brand: "PURE",
    price: 320,
    images: [
      "https://images.unsplash.com/photo-1564257577-2d5d8b1b3d7e?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=600&h=800&fit=crop"
    ],
    category: "tops",
    description: "Luxurious 100% cashmere sweater with a relaxed fit. Incredibly soft and perfect for layering.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Cream", "Camel", "Gray"],
    inStock: true,
    featured: true,
    isNew: true
  },
  {
    id: "3",
    name: "Tailored Blazer",
    brand: "ELITE",
    price: 680,
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop"
    ],
    category: "outerwear",
    description: "Impeccably tailored blazer crafted from premium wool. A wardrobe essential for the modern professional.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Charcoal"],
    inStock: true,
    featured: true
  },
  {
    id: "4",
    name: "High-Waist Trousers",
    brand: "MODERN",
    price: 280,
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1566479179817-c0c8b5b7b5a8?w=600&h=800&fit=crop"
    ],
    category: "bottoms",
    description: "Sophisticated high-waist trousers with a flattering wide-leg silhouette. Perfect for both office and evening wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Beige"],
    inStock: true,
    isNew: true
  },
  {
    id: "5",
    name: "Evening Gown",
    brand: "COUTURE",
    price: 1200,
    images: [
      "https://images.unsplash.com/photo-1566479179817-c0c8b5b7b5a8?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop"
    ],
    category: "dresses",
    description: "Stunning floor-length evening gown with intricate beadwork. Perfect for galas and special events.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Midnight Blue", "Burgundy"],
    inStock: true,
    featured: true
  },
  {
    id: "6",
    name: "Leather Jacket",
    brand: "REBEL",
    price: 850,
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=600&h=800&fit=crop"
    ],
    category: "outerwear",
    description: "Premium leather jacket with a modern edge. Crafted from buttery-soft lambskin for ultimate comfort.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Brown", "Cognac"],
    inStock: true
  }
];