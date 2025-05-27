import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CartProvider } from "@/contexts/CartContext";
import CartSidebar from "@/components/CartSidebar";
import Index from "./pages/Index";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

const queryClient = new QueryClient();

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_demo_key');

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Elements stripe={stripePromise}>
          <CartProvider>
            <div className="min-h-screen">
              <Toaster />
              <Sonner />
              <CartSidebar />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success" element={<OrderSuccess />} />
              </Routes>
            </div>
          </CartProvider>
        </Elements>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;