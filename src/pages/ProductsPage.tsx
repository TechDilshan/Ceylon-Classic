import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function ProductsPage() {
  const { addItem } = useCart();

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">All Products</h1>
        <p className="text-muted-foreground">Hand-packed in Sri Lanka · Delivered within Finland</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-[var(--shadow-elevated)] transition-shadow"
          >
            <Link to={`/products/${product.id}`}>
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
            <div className="p-4">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? "fill-spice-turmeric text-spice-turmeric" : "text-border"}`} />
                ))}
                <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>
              </div>
              <Link to={`/products/${product.id}`}>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.shortDescription}</p>
              <div className="flex items-center justify-between">
                <span className="font-heading text-xl font-bold text-foreground">€{product.price.toFixed(2)}</span>
                <button
                  onClick={() => addItem({ id: product.id, name: product.name, price: product.price, image: product.image })}
                  className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
