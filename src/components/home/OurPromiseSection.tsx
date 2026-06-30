import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function OurPromiseSection() {
  return (
    <section className="relative overflow-hidden page-section" style={{ background: "var(--gradient-warm)" }}>
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-spice-gold/20 text-spice-gold mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <p className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/70 mb-3">Our Promise</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Quality You Can Trust
          </h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Every package is carefully inspected, hygienically packed, and sealed to preserve the natural aroma and
            freshness of authentic Sri Lankan spices.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
