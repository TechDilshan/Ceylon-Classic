import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, Instagram, Facebook, CheckCircle, Loader2 } from "lucide-react";
import SEO from "@/components/SEO";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  WEB3FORMS_ACCESS_KEY,
  WHATSAPP_NUMBER,
  SOCIAL_LINKS,
  MAP_EMBED_URL,
} from "@/lib/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-muted-foreground hover:text-primary transition-colors">
      {children}
    </a>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.5a8.16 8.16 0 0 0 4.77 1.52V6.56a4.85 4.85 0 0 1-1-.13z" />
    </svg>
  );
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'd like to inquire about CEYLONCLASSIC spices.")}`
    : "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      setErrorMessage(`Form is not configured yet. Please email us directly at ${CONTACT_EMAIL}.`);
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
          subject: `Inquiry from ${name}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage(`Could not send your message. Please email us at ${CONTACT_EMAIL}.`);
    }
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 md:py-20">
      <SEO
        title="Contact"
        description="Contact CEYLONCLASSIC for orders, wholesale inquiries, and questions. WhatsApp, phone, email — we reply within 24–48 hours."
        path="/contact"
      />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Get in Touch</h1>
        <p className="text-muted-foreground mb-2">Orders, wholesale inquiries, or questions — we&apos;re here to help.</p>
        <p className="text-sm text-muted-foreground">We reply within 24–48 hours.</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-10 max-w-5xl mx-auto mb-12">
        <div className="space-y-4">
          <h2 className="font-heading text-lg font-semibold text-foreground">Contact Details</h2>
          <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4 text-primary flex-shrink-0" />
            {CONTACT_EMAIL}
          </a>
          {CONTACT_PHONE && (
            <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              {CONTACT_PHONE}
            </a>
          )}
          {whatsappHref && (
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
              WhatsApp
            </a>
          )}
          <div className="flex items-center gap-3 pt-2">
            <SocialIcon href={SOCIAL_LINKS.facebook} label="Facebook"><Facebook className="w-5 h-5" /></SocialIcon>
            <SocialIcon href={SOCIAL_LINKS.instagram} label="Instagram"><Instagram className="w-5 h-5" /></SocialIcon>
            <SocialIcon href={SOCIAL_LINKS.tiktok} label="TikTok"><TikTokIcon /></SocialIcon>
          </div>
        </div>

        <div className="lg:col-span-2">
          {status === "success" ? (
            <div className="text-center bg-card border border-border rounded-lg p-10">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">Message Sent!</h2>
              <p className="text-muted-foreground mb-6">Thank you for reaching out. We&apos;ll get back to you within 24–48 hours.</p>
              <button onClick={() => setStatus("idle")} className="text-sm font-medium text-primary hover:underline">
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-1.5">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <input id="contact-name" type="text" required value={name} onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input id="contact-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea id="contact-message" required rows={5} value={message} onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us which products you'd like to order..."
                  className="w-full px-3 py-2.5 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              </div>
              {status === "error" && errorMessage && <p className="text-sm text-destructive">{errorMessage}</p>}
              <button type="submit" disabled={status === "submitting"}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-2.5 rounded-md font-medium hover:opacity-90 disabled:opacity-60">
                {status === "submitting" && <Loader2 className="w-4 h-4 animate-spin" />}
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>

      {MAP_EMBED_URL ? (
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" /> Our Location
          </h2>
          <div className="rounded-lg overflow-hidden border border-border aspect-video">
            <iframe src={MAP_EMBED_URL} title="CEYLONCLASSIC location" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto text-center text-sm text-muted-foreground border border-dashed border-border rounded-lg p-8">
          <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
          Map location coming soon. Add <code className="text-xs bg-muted px-1 rounded">VITE_MAP_EMBED_URL</code> to your .env file.
        </div>
      )}
    </div>
  );
}
