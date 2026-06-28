import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useOrders } from "@/contexts/OrderContext";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const { user, isLoggedIn } = useAuth();
  const { placeOrder } = useOrders();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"paypal" | "bank_transfer">("paypal");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Please log in to checkout</h1>
        <Link to="/login" className="text-primary hover:underline">Sign In</Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-2">Order ID: <span className="font-mono font-medium text-foreground">{orderId}</span></p>
          <p className="text-sm text-muted-foreground mb-6">
            {paymentMethod === "paypal"
              ? "Your PayPal payment has been confirmed."
              : "Please complete your bank transfer. We'll confirm once received."}
          </p>
          <div className="flex justify-center gap-3">
            <Link to="/my-orders" className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90">
              View My Orders
            </Link>
            <Link to="/products" className="border border-border px-6 py-3 rounded-md font-medium hover:bg-secondary">
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Nothing to checkout</h1>
        <Link to="/products" className="text-primary hover:underline">Browse products</Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    const order = placeOrder({
      userId: user.id,
      customerName: name,
      customerEmail: email,
      address,
      postalCode,
      city,
      items: items.map((i) => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity, image: i.image })),
      total: totalPrice,
      paymentMethod,
    });
    setOrderId(order.id);
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
      <Link to="/cart" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Cart
      </Link>

      <h1 className="font-heading text-3xl font-bold text-foreground mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Delivery Information</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Street Address</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Postal Code</label>
                  <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">City</label>
                  <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Country</label>
                <input type="text" value="Finland" disabled className="w-full px-3 py-2.5 rounded-md border border-input bg-muted text-muted-foreground text-sm" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Payment Method</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 border border-border rounded-md cursor-pointer hover:bg-secondary transition-colors">
                <input type="radio" name="payment" checked={paymentMethod === "paypal"} onChange={() => setPaymentMethod("paypal")} className="accent-primary" />
                <div>
                  <span className="text-sm font-medium text-foreground">PayPal</span>
                  <p className="text-xs text-muted-foreground">Pay securely with your PayPal account</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-4 border border-border rounded-md cursor-pointer hover:bg-secondary transition-colors">
                <input type="radio" name="payment" checked={paymentMethod === "bank_transfer"} onChange={() => setPaymentMethod("bank_transfer")} className="accent-primary" />
                <div>
                  <span className="text-sm font-medium text-foreground">EU Bank Transfer</span>
                  <p className="text-xs text-muted-foreground">Manual confirmation — details sent by email</p>
                </div>
              </label>
            </div>
          </div>

          <div className="bg-card border border-border rounded-md p-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Prepayment required:</span> Your order will be processed once payment is confirmed.
            </p>
          </div>

          <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
            Place Order — €{totalPrice.toFixed(2)}
          </button>
        </motion.form>

        {/* Order Summary */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-lg p-6 h-fit">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Order Summary</h2>
          <div className="space-y-3 mb-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md object-cover bg-secondary" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                  <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                </div>
                <p className="text-sm font-medium text-foreground">€{(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-4">
            <div className="flex justify-between font-heading text-lg font-bold">
              <span>Total</span>
              <span>€{totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
