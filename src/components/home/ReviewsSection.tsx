import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/reviews";

export default function ReviewsSection() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm font-semibold tracking-widest uppercase text-spice-forest mb-3">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What Our Customers Say</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((review, i) => (
          <motion.div
            key={review.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-lg p-6"
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(review.rating)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-spice-gold text-spice-gold" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
            <p className="text-sm font-semibold text-muted-foreground">— {review.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
