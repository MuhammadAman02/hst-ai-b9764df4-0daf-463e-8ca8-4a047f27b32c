import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  { id: '1', name: 'Dresses', slug: 'dresses', description: 'Elegant dresses for every occasion' },
  { id: '2', name: 'Tops', slug: 'tops', description: 'Sophisticated blouses and tops' },
  { id: '3', name: 'Bottoms', slug: 'bottoms', description: 'Premium pants and skirts' },
  { id: '4', name: 'Outerwear', slug: 'outerwear', description: 'Luxury coats and jackets' },
  { id: '5', name: 'Accessories', slug: 'accessories', description: 'Designer accessories' }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Silk Midi Dress',
    brand: 'LUXE ATELIER',
    price: 485,
    originalPrice: 650,
    description: 'Elegant silk midi dress with a timeless silhouette',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566479179817-c0b7b8c8b5b7?w=400&h=600&fit=crop'
    ],
    category: 'dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Navy', 'Emerald'],
    isNew: true,
    onSale: true,
    featured: true,
    inStock: true
  },
  {
    id: '2',
    name: 'Cashmere Turtleneck',
    brand: 'LUXE ATELIER',
    price: 295,
    description: 'Ultra-soft cashmere turtleneck sweater',
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400&h=600&fit=crop'
    ],
    category: 'tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Camel', 'Gray'],
    isNew: false,
    onSale: false,
    featured: true,
    inStock: true
  },
  {
    id: '3',
    name: 'Tailored Blazer',
    brand: 'LUXE ATELIER',
    price: 695,
    description: 'Perfectly tailored blazer in premium wool',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop'
    ],
    category: 'outerwear',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Navy', 'Charcoal'],
    isNew: true,
    onSale: false,
    featured: true,
    inStock: true
  },
  {
    id: '4',
    name: 'Wide-Leg Trousers',
    brand: 'LUXE ATELIER',
    price: 385,
    description: 'High-waisted wide-leg trousers in luxe fabric',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506629905607-d405b7a30db4?w=400&h=600&fit=crop'
    ],
    category: 'bottoms',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Beige'],
    isNew: false,
    onSale: false,
    featured: false,
    inStock: true
  },
  {
    id: '5',
    name: 'Leather Handbag',
    brand: 'LUXE ATELIER',
    price: 1250,
    description: 'Handcrafted leather handbag with gold hardware',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=600&fit=crop'
    ],
    category: 'accessories',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Cognac'],
    isNew: true,
    onSale: false,
    featured: true,
    inStock: true
  },
  {
    id: '6',
    name: 'Silk Blouse',
    brand: 'LUXE ATELIER',
    price: 325,
    originalPrice: 425,
    description: 'Elegant silk blouse with pearl buttons',
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400&h=600&fit=crop'
    ],
    category: 'tops',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['White', 'Cream', 'Blush'],
    isNew: false,
    onSale: true,
    featured: false,
    inStock: true
  },
  {
    id: '7',
    name: 'Wool Coat',
    brand: 'LUXE ATELIER',
    price: 895,
    description: 'Double-breasted wool coat with belt',
    images: [
      'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop'
    ],
    category: 'outerwear',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Camel', 'Black', 'Gray'],
    isNew: true,
    onSale: false,
    featured: true,
    inStock: true
  },
  {
    id: '8',
    name: 'Pleated Skirt',
    brand: 'LUXE ATELIER',
    price: 285,
    description: 'A-line pleated skirt in premium fabric',
    images: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a13d44?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506629905607-d405b7a30db4?w=400&h=600&fit=crop'
    ],
    category: 'bottoms',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Navy', 'Burgundy'],
    isNew: false,
    onSale: false,
    featured: false,
    inStock: true
  }
];