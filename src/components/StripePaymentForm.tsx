import { useState } from 'react';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, CreditCard, Shield } from 'lucide-react';

interface StripePaymentFormProps {
  amount: number;
  onSuccess: () => void;
  onError: (error: string) => void;
  customerInfo: {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

const StripePaymentForm = ({ amount, onSuccess, onError, customerInfo }: StripePaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [nameOnCard, setNameOnCard] = useState('');

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
        fontFamily: 'system-ui, -apple-system, sans-serif',
      },
      invalid: {
        color: '#9e2146',
      },
    },
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe has not loaded yet');
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);
    if (!cardElement) {
      console.error('Card element not found');
      return;
    }

    setIsProcessing(true);

    try {
      // Create payment method
      const { error: paymentMethodError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: nameOnCard,
          email: customerInfo.email,
          address: {
            line1: customerInfo.address,
            city: customerInfo.city,
            state: customerInfo.state,
            postal_code: customerInfo.zipCode,
            country: 'US',
          },
        },
      });

      if (paymentMethodError) {
        console.error('Payment method creation failed:', paymentMethodError);
        onError(paymentMethodError.message || 'Payment method creation failed');
        setIsProcessing(false);
        return;
      }

      console.log('Payment method created:', paymentMethod);

      // In a real application, you would send the payment method to your backend
      // to create a payment intent and confirm the payment
      // For demo purposes, we'll simulate a successful payment
      
      // Simulate API call to your backend
      const response = await simulatePaymentIntent({
        paymentMethodId: paymentMethod.id,
        amount: Math.round(amount * 100), // Convert to cents
        currency: 'usd',
        customerInfo,
      });

      if (response.success) {
        // Confirm payment on the client side (in real app, this would be done on backend)
        const { error: confirmError } = await stripe.confirmCardPayment(response.clientSecret, {
          payment_method: paymentMethod.id,
        });

        if (confirmError) {
          console.error('Payment confirmation failed:', confirmError);
          onError(confirmError.message || 'Payment confirmation failed');
        } else {
          console.log('Payment successful!');
          toast({
            title: "Payment successful!",
            description: "Your order has been processed.",
          });
          onSuccess();
        }
      } else {
        onError(response.error || 'Payment processing failed');
      }
    } catch (error) {
      console.error('Payment processing error:', error);
      onError('An unexpected error occurred during payment processing');
    } finally {
      setIsProcessing(false);
    }
  };

  // Simulate backend payment intent creation
  const simulatePaymentIntent = async (paymentData: any) => {
    console.log('Simulating payment intent creation with data:', paymentData);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate successful payment intent creation
    // In a real app, this would be an API call to your backend
    return {
      success: true,
      clientSecret: 'pi_test_client_secret_' + Date.now(),
    };
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 text-blue-800 mb-2">
          <Shield className="h-5 w-5" />
          <span className="font-semibold">Secure Payment</span>
        </div>
        <p className="text-sm text-blue-700">
          Your payment information is encrypted and secure. We use Stripe for payment processing.
        </p>
      </div>

      <div>
        <Label htmlFor="nameOnCard">Name on Card</Label>
        <Input
          id="nameOnCard"
          value={nameOnCard}
          onChange={(e) => setNameOnCard(e.target.value)}
          placeholder="Enter cardholder name"
          required
          className="mt-1"
        />
      </div>

      <div>
        <Label>Card Number</Label>
        <div className="mt-1 p-3 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
          <CardNumberElement options={cardElementOptions} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Expiry Date</Label>
          <div className="mt-1 p-3 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
            <CardExpiryElement options={cardElementOptions} />
          </div>
        </div>
        <div>
          <Label>CVC</Label>
          <div className="mt-1 p-3 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
            <CardCvcElement options={cardElementOptions} />
          </div>
        </div>
      </div>

      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold py-3"
      >
        {isProcessing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing Payment...
          </>
        ) : (
          <>
            <CreditCard className="mr-2 h-4 w-4" />
            Pay ${amount.toFixed(2)}
          </>
        )}
      </Button>

      <div className="text-center">
        <p className="text-xs text-gray-500">
          By completing your purchase, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </form>
  );
};

export default StripePaymentForm;