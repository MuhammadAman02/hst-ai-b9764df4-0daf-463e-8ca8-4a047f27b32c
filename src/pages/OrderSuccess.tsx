import { CheckCircle, Package, Truck, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const orderNumber = `LX${Date.now().toString().slice(-6)}`;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-4" />
            <h1 className="text-4xl font-serif font-bold mb-4">Order Confirmed!</h1>
            <p className="text-xl text-gray-600">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">Order Number:</span>
                <span className="font-mono text-luxury-gold">{orderNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Order Date:</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Estimated Delivery:</span>
                <span>{new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Mail className="h-12 w-12 text-luxury-gold mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Confirmation Email</h3>
              <p className="text-sm text-gray-600">
                You'll receive an email confirmation shortly with your order details.
              </p>
            </div>
            <div className="text-center">
              <Package className="h-12 w-12 text-luxury-gold mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Order Processing</h3>
              <p className="text-sm text-gray-600">
                We'll prepare your items with care and attention to detail.
              </p>
            </div>
            <div className="text-center">
              <Truck className="h-12 w-12 text-luxury-gold mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">
                Your order will be shipped within 1-2 business days.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-luxury-gold hover:bg-luxury-gold-dark text-black"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                console.log("Track order clicked for:", orderNumber);
                // This could navigate to an order tracking page
              }}
            >
              Track Your Order
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Need help? Contact our customer service team at{" "}
            <a href="mailto:support@luxeatelier.com" className="text-luxury-gold hover:underline">
              support@luxeatelier.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;