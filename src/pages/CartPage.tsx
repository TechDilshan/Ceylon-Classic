import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingCart as CartIcon } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <CartIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Please log in to view your cart</h1>
        <p className="text-muted-foreground mb-6">You need an account to manage your cart and place orders.</p>
        <Link
          to="/login"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90"
        >
          Sign In
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <CartIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Add some spices to get started!</p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="w-4 h-4" /> Continue Shopping
      </Link>

      <h1 className="font-heading text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex gap-4 bg-card border border-border rounded-lg p-4"
            >
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-md object-cover bg-secondary" />
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-lg font-semibold text-foreground truncate">{item.name}</h3>
                <p className="text-sm text-muted-foreground">€{item.price.toFixed(2)} each</p>
                <div className="flex items-center gap-3 mt-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center rounded-md border border-border hover:bg-secondary">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center rounded-md border border-border hover:bg-secondary">
                    <Plus className="w-3 h-3" />
                  </button>
                  <button onClick={() => removeItem(item.id)} className="ml-auto p-2 text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="font-heading text-lg font-bold text-foreground">
                €{(item.price * item.quantity).toFixed(2)}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-6 h-fit">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4 border-b border-border pb-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">€{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping (Finland)</span>
              <span className="text-foreground">Calculated at checkout</span>
            </div>
          </div>
          <div className="flex justify-between font-heading text-lg font-bold mb-6">
            <span>Total</span>
            <span>€{totalPrice.toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            className="block w-full text-center bg-primary text-primary-foreground py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Proceed to Checkout
          </Link>
          <p className="text-xs text-muted-foreground text-center mt-3">Prepayment required for all orders.</p>
        </div>
      </div>
    </div>
  );
}
