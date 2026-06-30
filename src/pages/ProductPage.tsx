import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Truck, ArrowLeft, MessageCircle, Check } from "lucide-react";
import { products, getProductBySlug } from "@/data/products";
import SEO from "@/components/SEO";
import ProductImage from "@/components/ProductImage";
import { formatPrice, whatsAppOrderLink, WHATSAPP_NUMBER } from "@/lib/site";

export default function ProductPage() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <SEO title="Product Not Found" description="The product you are looking for could not be found." path={`/shop/${slug}`} />
        <h1 className="font-heading text-2xl text-foreground mb-4">Product not found</h1>
        <Link to="/shop" className="text-primary hover:underline">Browse all products</Link>
      </div>
    );
  }

  const variant = product.variants[selectedVariant];
  const related = product.relatedProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products;

  const avgRating =
    product.reviews.length > 0
      ? product.reviews.reduce((s, r) => s + r.rating, 0) / product.reviews.length
      : 5;

  return (
    <div className="page-container py-6 sm:py-8 md:py-12">
      <SEO
        title={product.name}
        description={product.shortDescription}
        path={`/shop/${product.slug}`}
        image={product.image}
        type="product"
      />

      <Link to="/shop" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 mb-12 md:mb-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="aspect-square max-w-lg mx-auto lg:max-w-none rounded-lg overflow-hidden bg-secondary mb-3">
            <ProductImage src={product.images[selectedImage]} alt={product.name} />
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

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.round(avgRating) ? "fill-spice-gold text-spice-gold" : "text-border"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {avgRating.toFixed(1)} ({product.reviews.length} reviews)
            </span>
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">{product.name}</h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6">{product.shortDescription}</p>

          <div className="mb-6">
            <p className="text-sm font-medium text-foreground mb-2">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v, i) => (
                <button
                  key={v.weight}
                  onClick={() => setSelectedVariant(i)}
                  className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium border transition-colors ${
                    selectedVariant === i
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:border-primary"
                  }`}
                >
                  {v.weight} — {formatPrice(v.price)}
                </button>
              ))}
            </div>
          </div>

          <div className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-6">{formatPrice(variant.price)}</div>

          <div className="flex flex-col gap-3 mb-8">
            {WHATSAPP_NUMBER ? (
              <a
                href={whatsAppOrderLink(product.name, variant.weight)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-md font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4" /> Order via WhatsApp
              </a>
            ) : (
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-md font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4" /> Order via WhatsApp
              </Link>
            )}
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center gap-3 text-sm border-t border-border pt-4">
            <Truck className="w-4 h-4 text-spice-forest flex-shrink-0" />
            <span className="text-muted-foreground">{product.shipping}</span>
          </div>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="space-y-8">
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Description</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Benefits</h2>
            <ul className="space-y-2">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-spice-forest flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Ingredients</h2>
            <p className="text-sm text-muted-foreground">{product.ingredients}</p>
          </section>
        </div>
        <div className="space-y-8">
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">How to Use</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{product.usage}</p>
          </section>
          <section>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Storage</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{product.storage}</p>
          </section>
          {product.nutrition && (
            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">Nutrition</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{product.nutrition}</p>
            </section>
          )}
        </div>
      </div>

      {product.reviews.length > 0 && (
        <section className="mb-16">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Customer Reviews</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {product.reviews.map((review) => (
              <div key={review.author} className="bg-card border border-border rounded-lg p-5">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-spice-gold text-spice-gold" />
                  ))}
                </div>
                <p className="text-sm text-foreground mb-2">&ldquo;{review.text}&rdquo;</p>
                <p className="text-xs text-muted-foreground">— {review.author}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">Related Products</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {related.map((p) => (
              <Link
                key={p.id}
                to={`/shop/${p.slug}`}
                className="flex gap-4 bg-card border border-border rounded-lg p-4 hover:shadow-[var(--shadow-soft)] transition-shadow"
              >
                <img src={p.image} alt={p.name} className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-contain bg-secondary p-1 shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">from {formatPrice(p.variants[0].price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
