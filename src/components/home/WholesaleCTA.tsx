import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, ArrowRight } from "lucide-react";

export default function WholesaleCTA() {
  return (
    <section className="bg-card border-y border-border py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                Become a Wholesale Partner
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Hotels, restaurants, and retailers — partner with CEYLONCLASSIC for bulk orders of premium Sri Lankan spices.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 whitespace-nowrap bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            Inquire Now <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
