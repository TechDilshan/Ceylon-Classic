import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { featuredProducts } from "@/data/products";
import { formatPrice } from "@/lib/site";

export default function FeaturedProductsSection() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold tracking-widest uppercase text-spice-forest mb-3">Our Collection</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Featured Products</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Premium spices from our farms — available in convenient sizes for every kitchen.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {featuredProducts.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-[var(--shadow-elevated)] transition-shadow"
          >
            <Link to={`/shop/${product.slug}`}>
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Link>
            <div className="p-6">
              <Link to={`/shop/${product.slug}`}>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.shortDescription}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.variants.map((v) => (
                  <span
                    key={v.weight}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {v.weight}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  from <span className="font-semibold text-foreground">{formatPrice(product.variants[0].price)}</span>
                </span>
                <Link
                  to={`/shop/${product.slug}`}
                  className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
                >
                  View Product
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
