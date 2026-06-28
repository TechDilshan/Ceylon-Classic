import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Truck, Gift, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-spice-box.jpg";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

function ProductCard({ product }: { product: typeof products[0] }) {
  const { addItem } = useCart();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
  );
}

export default function Index() {
  const featuredProduct = products[0];
  const otherProducts = products.slice(1);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-sm font-medium text-spice-cardamom tracking-widest uppercase mb-4">
                Hand-packed in Sri Lanka · Available in Finland
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Premium Sri Lankan Spice Wooden Box
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
                A curated collection of the finest whole spices, elegantly presented in a handcrafted wooden tray. Perfect for cooking enthusiasts and gifting.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={`/products/${featuredProduct.id}`}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                >
                  View Spice Box <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors"
                >
                  How Ordering Works
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <img
                src={heroImage}
                alt="Ceylon Classic Spice Wooden Box"
                className="w-full rounded-lg shadow-[var(--shadow-elevated)]"
              />
              {featuredProduct.isGiftReady && (
                <div className="absolute top-4 right-4 bg-spice-turmeric text-accent-foreground px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
                  <Gift className="w-3.5 h-3.5" /> Perfect for Gifting
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-primary" />
              <span>Delivery within Finland (2–4 days)</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-spice-turmeric text-spice-turmeric" />
              <span>4.8 average rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-spice-cardamom" />
              <span>Gift-ready packaging</span>
            </div>
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Our Products</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Premium spices and curated collections, sourced directly from Sri Lanka's spice belt.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">How Ordering Works</h2>
            <p className="text-muted-foreground">Simple, transparent, and reliable.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Choose Your Spices", desc: "Browse our collection and add products to your cart." },
              { step: "02", title: "Prepay Securely", desc: "Pay via PayPal or EU bank transfer. Prepayment required for all orders." },
              { step: "03", title: "Delivered to Finland", desc: "Your spices are hand-packed in Sri Lanka and shipped directly to you within 2–4 business days." },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-heading font-bold text-primary/20 mb-2">{item.step}</div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
