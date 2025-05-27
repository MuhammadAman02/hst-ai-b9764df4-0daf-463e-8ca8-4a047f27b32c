import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addItem, openCart } = useCart();
  const { toast } = useToast();

  const handleImageHover = () => {
    if (product.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleImageLeave = () => {
    setCurrentImageIndex(0);
  };

  const handleQuickAdd = () => {
    // Use first available size and color for quick add
    const defaultSize = product.sizes[0];
    const defaultColor = product.colors[0];
    
    addItem(product, defaultSize, defaultColor);
    openCart();
    
    toast({
      title: "Added to cart!",
      description: `${product.name} in ${defaultColor}, size ${defaultSize}`,
    });
    
    console.log('Quick add clicked for:', product.name);
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden hover-lift">
      {/* Image Container */}
      <div 
        className="relative aspect-[3/4] overflow-hidden bg-gray-100"
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageLeave}
      >
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            console.error('Image failed to load:', product.images[currentImageIndex]);
            e.currentTarget.src = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop';
          }}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-luxury-gold text-black font-semibold">
              NEW
            </Badge>
          )}
          {product.onSale && (
            <Badge variant="destructive" className="font-semibold">
              SALE
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart 
            className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
          />
        </Button>

        {/* Quick Add Button */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button 
            className="w-full bg-black hover:bg-gray-800 text-white"
            onClick={handleQuickAdd}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
          <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
        </div>

        {/* Colors */}
        <div className="flex gap-1 mb-3">
          {product.colors.slice(0, 3).map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ 
                backgroundColor: color.toLowerCase() === 'black' ? '#000' : 
                               color.toLowerCase() === 'white' ? '#fff' :
                               color.toLowerCase() === 'navy' ? '#1e3a8a' :
                               color.toLowerCase() === 'gray' ? '#6b7280' :
                               color.toLowerCase() === 'beige' ? '#f5f5dc' :
                               color.toLowerCase() === 'cream' ? '#fffdd0' :
                               color.toLowerCase() === 'camel' ? '#c19a6b' :
                               color.toLowerCase() === 'emerald' ? '#10b981' :
                               color.toLowerCase() === 'charcoal' ? '#374151' :
                               color.toLowerCase() === 'brown' ? '#8b4513' :
                               color.toLowerCase() === 'cognac' ? '#9a4444' :
                               color.toLowerCase() === 'midnight blue' ? '#191970' :
                               color.toLowerCase() === 'burgundy' ? '#800020' :
                               color.toLowerCase() === 'blush' ? '#ffc0cb' :
                               '#d1d5db'
              }}
              title={color}
            />
          ))}
          {product.colors.length > 3 && (
            <span className="text-xs text-gray-500 ml-1">+{product.colors.length - 3}</span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Sizes */}
        <div className="mt-2">
          <p className="text-xs text-gray-500">
            Sizes: {product.sizes.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;