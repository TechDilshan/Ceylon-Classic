import { motion } from "framer-motion";
import plantation from "@/assets/sri-lanka-plantation.jpg";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img src={plantation} alt="Sri Lankan spice plantation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Our Story</h1>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-16 md:py-20 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg">
            <span className="font-heading text-2xl font-semibold text-foreground">Ceylon Classic</span> was born from a simple belief: that the world's finest spices should be shared honestly, with care and respect for the land they come from.
          </p>
          <p>
            Sri Lanka — once known as Ceylon — is the birthplace of true cinnamon and home to some of the most flavourful spices on earth. For generations, families across the island's central highlands have cultivated cardamom, pepper, cloves, and turmeric using traditional methods passed down through centuries.
          </p>
          <p>
            We work directly with small-batch producers in Sri Lanka's spice belt. Every spice in our collection is hand-selected, sun-dried, and packed with care. Our signature Spice Wooden Box is crafted by local artisans using sustainably sourced timber, designed to showcase each spice in its purest form.
          </p>
          <p>
            From Sri Lanka to Finland, we bring you spices that are fresh, natural, and honest — no additives, no shortcuts. Just the real flavours of Ceylon.
          </p>

          <div className="border-t border-border pt-8 mt-8">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">Our Values</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Quality First", desc: "Every spice is hand-selected for freshness, aroma, and flavour." },
                { title: "Ethical Sourcing", desc: "We work directly with Sri Lankan farming families, ensuring fair prices." },
                { title: "Small Batch", desc: "We pack in small quantities to guarantee freshness in every order." },
                { title: "Product of Sri Lanka", desc: "Proudly sourced, crafted, and packed in the island of spices." },
              ].map((v) => (
                <div key={v.title}>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{v.title}</h3>
                  <p className="text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
