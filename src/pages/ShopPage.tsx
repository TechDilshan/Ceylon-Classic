import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/site";
import SEO from "@/components/SEO";

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
      <SEO
        title="Shop"
        description="Shop premium Sri Lankan spices — pepper powder, whole black pepper, and Ceylon cinnamon. Farm fresh, hygienically packed, islandwide delivery."
        path="/shop"
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">Shop</h1>
        <p className="text-muted-foreground">Premium spices from our farms — available in multiple sizes.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
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
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h2>
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
    </div>
  );
}
