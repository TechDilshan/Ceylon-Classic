import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import plantation from "@/assets/img2.jpg";
import { ArrowRight } from "lucide-react";

export default function OurStorySection() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-spice-forest mb-3">Our Story</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Rooted in Our Land, Grown with Care
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            CEYLONCLASSIC began with our own cinnamon trees and pepper harvests. What started as a small family business
            has grown into a trusted brand committed to delivering authentic Sri Lankan spices.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Today, we combine carefully harvested produce from our own land with responsibly sourced spices from local
            farmers, ensuring freshness, quality, and authenticity in every package.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-spice-forest transition-colors"
          >
            Read Our Full Story <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <img
            src={plantation}
            alt="Sri Lankan spice plantation"
            className="w-full rounded-lg shadow-[var(--shadow-elevated)] aspect-[4/3] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
