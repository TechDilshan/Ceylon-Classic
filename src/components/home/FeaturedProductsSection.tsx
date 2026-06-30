import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { featuredProducts } from "@/data/products";
import { formatPrice } from "@/lib/site";
import ProductImage from "@/components/ProductImage";

export default function FeaturedProductsSection() {
  return (
    <section className="page-section">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-spice-forest mb-3">Our Collection</p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">Featured Products</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto px-2">
            Premium spices from our farms — available in convenient sizes for every kitchen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {featuredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-[var(--shadow-elevated)] transition-shadow flex flex-col"
            >
              <Link to={`/shop/${product.slug}`}>
                <div className="aspect-[4/3] overflow-hidden bg-secondary">
                  <ProductImage src={product.image} alt={product.name} className="group-hover:scale-105" />
                </div>
              </Link>
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <Link to={`/shop/${product.slug}`}>
                  <h3 className="font-heading text-xl sm:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{product.shortDescription}</p>
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
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-sm text-muted-foreground">
                    from <span className="font-semibold text-foreground">{formatPrice(product.variants[0].price)}</span>
                  </span>
                  <Link
                    to={`/shop/${product.slug}`}
                    className="text-sm font-semibold bg-primary text-primary-foreground px-5 py-2 rounded-md hover:opacity-90 transition-opacity w-full sm:w-auto text-center"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
