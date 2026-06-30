import { motion } from "framer-motion";
import { Leaf, Flag, Package, Handshake, Sprout, Truck } from "lucide-react";

const reasons = [
  { icon: Leaf, title: "Farm Fresh", desc: "Harvested from our own land and trusted partner farms." },
  { icon: Flag, title: "Product of Sri Lanka", desc: "Authentic spices from the island's spice belt." },
  { icon: Package, title: "Hygienically Packed", desc: "Every pack is sealed to preserve aroma and freshness." },
  { icon: Handshake, title: "Supporting Local Farmers", desc: "Fair partnerships with farming families across Sri Lanka." },
  { icon: Sprout, title: "Naturally Grown", desc: "Traditional methods, no shortcuts, no additives." },
  { icon: Truck, title: "Islandwide Delivery", desc: "Delivered across Sri Lanka with care." },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-secondary/50 border-y border-border page-section">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-spice-forest mb-3">Why Choose Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">The CEYLONCLASSIC Difference</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
