import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  { id: '1', name: 'Dresses', slug: 'dresses' },
  { id: '2', name: 'Tops', slug: 'tops' },
  { id: '3', name: 'Bottoms', slug: 'bottoms' },
  { id: '4', name: 'Outerwear', slug: 'outerwear' },
  { id: '5', name: 'Accessories', slug: 'accessories' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Silk Midi Dress',
    brand: 'LUXE ATELIER',
    price: 485,
    originalPrice: 650,
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    ],
    category: 'dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Navy', 'Emerald'],
    description: 'Elegant silk midi dress with a timeless silhouette',
    isNew: true,
    onSale: true,
    featured: true
  },
  {
    id: '2',
    name: 'Cashmere Turtleneck',
    brand: 'LUXE ATELIER',
    price: 295,
    images: [
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop'
    ],
    category: 'tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Camel', 'Charcoal'],
    description: 'Luxurious cashmere turtleneck sweater',
    isNew: false,
    featured: true
  },
  {
    id: '3',
    name: 'Tailored Blazer',
    brand: 'LUXE ATELIER',
    price: 695,
    images: [
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=600&fit=crop'
    ],
    category: 'outerwear',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Navy', 'Gray'],
    description: 'Perfectly tailored blazer for the modern woman',
    featured: true
  },
  {
    id: '4',
    name: 'Wide-Leg Trousers',
    brand: 'LUXE ATELIER',
    price: 385,
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop'
    ],
    category: 'bottoms',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Beige'],
    description: 'High-waisted wide-leg trousers in premium fabric'
  },
  {
    id: '5',
    name: 'Leather Handbag',
    brand: 'LUXE ATELIER',
    price: 850,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=600&fit=crop'
    ],
    category: 'accessories',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Cognac'],
    description: 'Handcrafted leather handbag with gold hardware',
    isNew: true
  },
  {
    id: '6',
    name: 'Silk Blouse',
    brand: 'LUXE ATELIER',
    price: 325,
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop'
    ],
    category: 'tops',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['White', 'Blush', 'Midnight Blue'],
    description: 'Classic silk blouse with pearl buttons'
  },
  {
    id: '7',
    name: 'Wool Coat',
    brand: 'LUXE ATELIER',
    price: 1250,
    images: [
      'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=600&fit=crop'
    ],
    category: 'outerwear',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Camel', 'Black', 'Gray'],
    description: 'Double-breasted wool coat with belt',
    featured: true
  },
  {
    id: '8',
    name: 'Evening Gown',
    brand: 'LUXE ATELIER',
    price: 1850,
    originalPrice: 2200,
    images: [
      'https://images.unsplash.com/photo-1566479179817-c0e8b4b4b2d5?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop'
    ],
    category: 'dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Burgundy', 'Navy'],
    description: 'Elegant floor-length evening gown',
    onSale: true,
    featured: true
  }
];