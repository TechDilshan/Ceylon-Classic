import { motion } from "framer-motion";
import plantation from "@/assets/sri-lanka-plantation.jpg";
import heroImage from "@/assets/img3.jpg";
import SEO from "@/components/SEO";
import { Leaf, Handshake, Sprout, ShieldCheck } from "lucide-react";

const values = [
  { icon: Leaf, title: "Quality First", desc: "Every spice is hand-selected for freshness, aroma, and flavour." },
  { icon: Handshake, title: "Ethical Sourcing", desc: "We work directly with Sri Lankan farming families, ensuring fair prices." },
  { icon: Sprout, title: "Naturally Grown", desc: "Traditional cultivation methods passed down through generations." },
  { icon: ShieldCheck, title: "Product of Sri Lanka", desc: "Proudly sourced, crafted, and packed in the island of spices." },
];

export default function AboutPage() {
  return (
    <div>
      <SEO
        title="About Us"
        description="CEYLONCLASSIC began with our own cinnamon trees and pepper harvests. Learn about our farm, our journey, and our commitment to authentic Sri Lankan spices."
        path="/about"
      />

      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src={plantation} alt="Sri Lankan spice plantation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">About Us</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16 md:py-20 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            <span className="font-heading text-2xl font-semibold text-foreground">CEYLONCLASSIC</span> began with our own
            cinnamon trees and pepper harvests. What started as a small family business has grown into a trusted brand
            committed to delivering authentic Sri Lankan spices.
          </p>
          <p>
            Sri Lanka — once known as Ceylon — is the birthplace of true cinnamon and home to some of the most flavourful
            spices on earth. For generations, families across the island&apos;s central highlands have cultivated cardamom,
            pepper, cloves, and turmeric using traditional methods passed down through centuries.
          </p>
          <p>
            We work directly with small-batch producers in Sri Lanka&apos;s spice belt. Every spice in our collection is
            hand-selected, sun-dried, and packed with care. We combine carefully harvested produce from our own land with
            responsibly sourced spices from local farmers.
          </p>
          <p>
            From our farms to your kitchen, we bring you spices that are fresh, natural, and honest — no additives, no
            shortcuts. Just the real flavours of Ceylon.
          </p>
        </motion.div>
      </section>

      <section className="bg-secondary/50 border-y border-border py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-spice-forest mb-3">Our Farm</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">From Tree to Table</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            <img
              src={heroImage}
              alt="Ceylon Classic spices"
              className="w-full rounded-lg shadow-[var(--shadow-elevated)] aspect-[4/3] object-cover"
            />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our cinnamon trees and pepper vines are the heart of CEYLONCLASSIC. We oversee every stage — from
                harvesting and sun-drying to cleaning and hygienic packing.
              </p>
              <p>
                Real photos of our farm, harvest, and packing process will be added here as we grow our online presence.
                What won&apos;t change is our commitment to quality at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16 md:py-20">
        <h2 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">Our Values</h2>
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
