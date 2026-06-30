import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_EMAIL, SITE_NAME, SOCIAL_LINKS } from "@/lib/site";
import { products } from "@/data/products";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <header
        className={`sticky top-0 z-50 transition-colors ${
          isHome
            ? "bg-hero-dark/50 backdrop-blur-sm border-b border-white/10 text-white"
            : "bg-background/95 backdrop-blur-md border-b border-border"
        }`}
      >
        <div className="page-container flex items-center justify-between h-14 sm:h-16">
          <Link
            to="/"
            className={`font-heading text-lg sm:text-xl md:text-2xl font-bold tracking-[0.12em] sm:tracking-widest truncate max-w-[55vw] sm:max-w-none ${isHome ? "text-white" : "text-foreground"}`}
          >
            {SITE_NAME}
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  isHome
                    ? isActive(link.to)
                      ? "text-hero-gold"
                      : "text-white/80 hover:text-white"
                    : isActive(link.to)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className={`md:hidden p-2 rounded-lg ${isHome ? "hover:bg-white/10" : "hover:bg-secondary"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`md:hidden overflow-hidden border-t ${
                isHome ? "border-white/10 bg-hero-dark/95" : "border-border bg-background"
              }`}
            >
              <nav className="flex flex-col p-4 gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium py-2 transition-colors ${
                      isHome
                        ? isActive(link.to)
                          ? "text-hero-gold"
                          : "text-white/80"
                        : isActive(link.to)
                          ? "text-primary"
                          : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 fab-offset">{children}</main>

      <footer className="bg-primary text-primary-foreground">
        <div className="page-container py-10 sm:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div className="col-span-2 sm:col-span-2 lg:col-span-1">
              <h3 className="font-heading text-xl font-bold tracking-widest mb-3">{SITE_NAME}</h3>
              <p className="text-sm opacity-80 leading-relaxed">
                Premium Sri Lankan spices — from our farms to your kitchen.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg font-semibold mb-3">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-heading text-lg font-semibold mb-3">Products</h4>
              <div className="flex flex-col gap-2">
                {products.map((p) => (
                  <Link key={p.id} to={`/shop/${p.slug}`} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-heading text-lg font-semibold mb-3">Contact</h4>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm opacity-80 hover:opacity-100 transition-opacity block mb-3 break-all">
                {CONTACT_EMAIL}
              </a>
              <div className="flex flex-col gap-2 text-sm opacity-80">
                {SOCIAL_LINKS.facebook && <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:opacity-100">Facebook</a>}
                {SOCIAL_LINKS.instagram && <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:opacity-100">Instagram</a>}
                {SOCIAL_LINKS.tiktok && <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:opacity-100">TikTok</a>}
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-60">
            <span>© {new Date().getFullYear()} {SITE_NAME}. Product of Sri Lanka.</span>
            <div className="flex gap-4">
              <Link to="/privacy" className="hover:opacity-100">Privacy Policy</Link>
              <Link to="/terms" className="hover:opacity-100">Terms of Sale</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
