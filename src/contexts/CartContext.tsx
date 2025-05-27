import React, { createContext, useContext, useReducer } from 'react';
import { Product } from '@/types/product';

interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; size: string; color: string } }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, size, color } = action.payload;
      const itemId = `${product.id}-${size}-${color}`;
      
      const existingItemIndex = state.items.findIndex(
        item => `${item.product.id}-${item.selectedSize}-${item.selectedColor}` === itemId
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;
        return { ...state, items: updatedItems };
      }

      return {
        ...state,
        items: [...state.items, { product, quantity: 1, selectedSize: size, selectedColor: color }],
      };
    }

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          item => `${item.product.id}-${item.selectedSize}-${item.selectedColor}` !== action.payload
        ),
      };

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            item => `${item.product.id}-${item.selectedSize}-${item.selectedColor}` !== id
          ),
        };
      }

      return {
        ...state,
        items: state.items.map(item =>
          `${item.product.id}-${item.selectedSize}-${item.selectedColor}` === id
            ? { ...item, quantity }
            : item
        ),
      };
    }

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'OPEN_CART':
      return { ...state, isOpen: true };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    case 'CLEAR_CART':
      return { ...state, items: [], isOpen: false };

    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addItem: (product: Product, size: string, color: string) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product: Product, size: string, color: string) => {
    console.log('Adding item to cart:', { product: product.name, size, color });
    dispatch({ type: 'ADD_ITEM', payload: { product, size, color } });
  };

  const removeItem = (id: string) => {
    console.log('Removing item from cart:', id);
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    console.log('Updating quantity:', { id, quantity });
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const toggleCart = () => {
    console.log('Toggling cart');
    dispatch({ type: 'TOGGLE_CART' });
  };

  const openCart = () => {
    console.log('Opening cart');
    dispatch({ type: 'OPEN_CART' });
  };

  const closeCart = () => {
    console.log('Closing cart');
    dispatch({ type: 'CLOSE_CART' });
  };

  const clearCart = () => {
    console.log('Clearing cart');
    dispatch({ type: 'CLEAR_CART' });
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        toggleCart,
        openCart,
        closeCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};