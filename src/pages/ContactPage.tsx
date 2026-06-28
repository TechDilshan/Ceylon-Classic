import { motion } from "framer-motion";
import { Mail, Instagram, Facebook } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 md:py-20">
      <div className="max-w-2xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Get in Touch</h1>
          <p className="text-muted-foreground">Have a question or want to place a custom order? We'd love to hear from you.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4 mb-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
            <textarea
              rows={5}
              placeholder="How can we help you?"
              className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-8 py-2.5 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </motion.form>

        <div className="border-t border-border pt-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-sm text-muted-foreground">
            <Mail className="w-4 h-4 text-primary" />
            <span>info@ceylonclassic.fi</span>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
