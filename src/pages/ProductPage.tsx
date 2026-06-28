import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart, Truck, Gift, Shield, ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-2xl text-foreground mb-4">Product not found</h1>
        <Link to="/products" className="text-primary hover:underline">Browse all products</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Image Gallery */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="aspect-square rounded-lg overflow-hidden bg-secondary mb-3">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? "border-primary" : "border-border"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Product Info */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? "fill-spice-turmeric text-spice-turmeric" : "text-border"}`} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{product.rating} ({product.reviewCount} reviews)</span>
          </div>

          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">{product.name}</h1>
          <p className="text-lg text-muted-foreground mb-6">{product.shortDescription}</p>
          <div className="font-heading text-3xl font-bold text-foreground mb-6">€{product.price.toFixed(2)}</div>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button
              onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              <ShoppingCart className="w-4 h-4" /> Add to Cart
            </button>
            <button className="flex-1 inline-flex items-center justify-center gap-2 bg-spice-turmeric text-accent-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
              Buy Now — PayPal
            </button>
          </div>

          <p className="text-xs text-muted-foreground mb-6">
            Alternative: <span className="font-medium text-foreground">Pay by EU Bank Transfer</span> — contact us for details.
          </p>

          <div className="space-y-3 border-t border-border pt-6">
            <div className="flex items-center gap-3 text-sm">
              <Truck className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">Estimated delivery: <span className="text-foreground font-medium">2–4 business days within Finland</span></span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Shield className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-muted-foreground">Prepayment required · Secure checkout</span>
            </div>
            {product.isGiftReady && (
              <div className="flex items-center gap-3 text-sm">
                <Gift className="w-4 h-4 text-spice-cardamom flex-shrink-0" />
                <span className="text-muted-foreground">Gift-ready packaging included</span>
              </div>
            )}
          </div>

          <div className="mt-8 border-t border-border pt-6">
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">About This Product</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
