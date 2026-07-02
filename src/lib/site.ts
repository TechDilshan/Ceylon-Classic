export const SITE_NAME = "CEYLONCLASSIC";
export const SITE_NAME_DISPLAY = "Ceylon Classic";
export const SITE_TAGLINE = "Premium Sri Lankan Spices";
export const SITE_HERO_TAGLINE = "From Our Farms to Your Kitchen";
export const CONTACT_EMAIL = "info@ceylonclassic.com";
export const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE || "";
export const SITE_URL = import.meta.env.VITE_SITE_URL || "https://ceylonclassic.com";
export const DEFAULT_OG_IMAGE = "/og-image.jpg";
export const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";
/** Private inbox for contact form delivery — not shown on the website */
export const FORM_RECIPIENT_EMAIL = import.meta.env.VITE_FORM_RECIPIENT_EMAIL || "ceylon.classic.sl@gmail.com";

export const SOCIAL_LINKS = {
  facebook: import.meta.env.VITE_FACEBOOK_URL || "",
  instagram: import.meta.env.VITE_INSTAGRAM_URL || "",
  tiktok: import.meta.env.VITE_TIKTOK_URL || "",
};

export const MAP_EMBED_URL = import.meta.env.VITE_MAP_EMBED_URL || "";

function normalizeWhatsAppNumber(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("0") && digits.length === 10) {
    return `94${digits.slice(1)}`;
  }
  return digits;
}

export const WHATSAPP_NUMBER = normalizeWhatsAppNumber(import.meta.env.VITE_WHATSAPP_NUMBER || "94784939427");

export function formatPrice(lkr: number) {
  return `Rs. ${lkr.toLocaleString("en-LK")}`;
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}

export function whatsAppOrderLink(productName: string, weight: string) {
  const message = `Hello! I'd like to order:\n\n${productName} — ${weight}`;
  if (!WHATSAPP_NUMBER) return "/contact";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
