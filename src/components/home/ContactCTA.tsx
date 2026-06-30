import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/site";

export default function ContactCTA() {
  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'd like to inquire about CEYLONCLASSIC spices.")}`
    : "/contact";

  return (
    <section className="page-section">
      <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Order?</h2>
        <p className="text-muted-foreground mb-2">Get in touch via WhatsApp or our contact form.</p>
        <p className="text-sm text-muted-foreground mb-8">We reply within 24–48 hours.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a
            href={whatsappHref}
            target={WHATSAPP_NUMBER ? "_blank" : undefined}
            rel={WHATSAPP_NUMBER ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp Us
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            <Mail className="w-5 h-5" /> Contact Form
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Or email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary font-medium hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
      </motion.div>
      </div>
    </section>
  );
}
