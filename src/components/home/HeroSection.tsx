import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Leaf, Package, Award, HandHeart } from "lucide-react";
import heroImage from "@/assets/img1.jpg";
import logoImage from "@/assets/logo.jpg";
import { SITE_NAME, SITE_TAGLINE, SITE_HERO_TAGLINE } from "@/lib/site";

const HERO_GOLD = "#c4a35a";

function HeroSeal() {
  return (
    <div className="mb-6 sm:mb-8 lg:mb-10 flex justify-center lg:justify-start">
      <div className="relative w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] rounded-full border border-white/30 overflow-hidden shrink-0">
        <img src={logoImage} alt="Ceylon Classic Logo" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function Ornament() {
  return (
    <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 my-4 sm:my-6 opacity-70" aria-hidden="true">
      <span className="h-px w-8 sm:w-12 bg-hero-gold/50" />
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-hero-gold shrink-0">
        <path
          d="M9 1C9 1 11 5 9 9C7 5 9 1 9 1ZM9 17C9 17 7 13 9 9C11 13 9 17 9 17ZM1 9C1 9 5 7 9 9C5 11 1 9 1 9ZM17 9C17 9 13 11 9 9C13 7 17 9 17 9Z"
          stroke="currentColor"
          strokeWidth="0.75"
        />
      </svg>
      <span className="h-px w-8 sm:w-12 bg-hero-gold/50" />
    </div>
  );
}

const trustBadges = [
  { icon: Leaf, label: "100% Natural" },
  { icon: Award, label: "Premium Quality" },
  { icon: HandHeart, label: "Sourced Responsibly" },
  { icon: Package, label: "Hygienically Packed" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[100dvh] lg:min-h-[calc(100dvh-4rem)] overflow-hidden -mt-16 pt-16 bg-hero-dark"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img src={heroImage} alt="" className="hero-bg-image" />
        <div className="hero-overlay-mobile" />
        <div className="hero-overlay-desktop" />
        <div className="absolute inset-0 bg-gradient-to-bl from-amber-900/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 page-container flex flex-col justify-end lg:justify-center min-h-[100dvh] lg:min-h-[calc(100dvh-4rem)] py-10 sm:py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left pb-4 sm:pb-0"
        >
          <HeroSeal />

          <h1 className="font-heading text-[2.25rem] leading-none sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white tracking-[0.04em] sm:tracking-[0.08em] mb-4 sm:mb-5 break-words">
            {SITE_NAME}
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-1">
            <span className="hidden sm:block h-px w-8 md:w-10 bg-hero-gold/60 shrink-0" />
            <p
              className="font-heading text-xs sm:text-sm md:text-base tracking-[0.15em] sm:tracking-[0.22em] uppercase text-balance"
              style={{ color: HERO_GOLD }}
            >
              {SITE_TAGLINE}
            </p>
            <span className="hidden sm:block h-px w-8 md:w-10 bg-hero-gold/60 shrink-0" />
          </div>

          <p className="font-heading text-base sm:text-lg md:text-xl text-white/85 italic mb-1 sm:mb-2 px-2 sm:px-0">
            {SITE_HERO_TAGLINE}
          </p>

          <Ornament />

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-16 max-w-sm sm:max-w-none mx-auto lg:mx-0">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-sm font-heading text-xs sm:text-sm font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase transition-opacity hover:opacity-90"
              style={{ backgroundColor: HERO_GOLD, color: "#14100c" }}
            >
              <ShoppingBag className="w-4 h-4 shrink-0" strokeWidth={2} />
              Shop Now
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-sm border border-white/50 text-white font-heading text-xs sm:text-sm font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase hover:bg-white/10 transition-colors"
            >
              <Leaf className="w-4 h-4 shrink-0" strokeWidth={1.75} />
              Explore Products
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-md sm:max-w-lg lg:max-w-none mx-auto lg:mx-0">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center lg:items-start gap-1.5 sm:gap-2">
                <div
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center shrink-0"
                  style={{ borderColor: `${HERO_GOLD}55`, color: HERO_GOLD }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                </div>
                <span
                  className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.08em] sm:tracking-[0.12em] uppercase text-center lg:text-left leading-tight"
                  style={{ color: `${HERO_GOLD}cc` }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <p
            className="mt-5 sm:mt-6 text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase text-center lg:text-left"
            style={{ color: `${HERO_GOLD}99` }}
          >
            Product of Sri Lanka
          </p>
        </motion.div>
      </div>
    </section>
  );
}
