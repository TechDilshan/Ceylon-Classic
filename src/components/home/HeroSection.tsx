import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Leaf, Package, Award, HandHeart } from "lucide-react";
import heroImage from "@/assets/img1.jpg";
import logoImage from "@/assets/logo.jpg";
import { SITE_NAME, SITE_TAGLINE, SITE_HERO_TAGLINE } from "@/lib/site";

const HERO_DARK = "#14100c";
const HERO_GOLD = "#c4a35a";

function HeroSeal() {
  return (
    <div className="mb-8 lg:mb-10 flex justify-center lg:justify-start">
      <div className="relative w-[88px] h-[88px] rounded-full border border-white/30 overflow-hidden">
        <img
          src={logoImage}
          alt="Ceylon Classic Logo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

function Ornament() {
  return (
    <div className="flex items-center justify-center lg:justify-start gap-3 my-6 opacity-70" aria-hidden="true">
      <span className="h-px w-12 bg-hero-gold/50" />
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-hero-gold">
        <path
          d="M9 1C9 1 11 5 9 9C7 5 9 1 9 1ZM9 17C9 17 7 13 9 9C11 13 9 17 9 17ZM1 9C1 9 5 7 9 9C5 11 1 9 1 9ZM17 9C17 9 13 11 9 9C13 7 17 9 17 9Z"
          stroke="currentColor"
          strokeWidth="0.75"
        />
      </svg>
      <span className="h-px w-12 bg-hero-gold/50" />
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
      className="relative min-h-[calc(100vh-0px)] lg:min-h-[calc(100vh-4rem)] overflow-hidden -mt-16 pt-16"
      style={{ backgroundColor: HERO_DARK }}
    >
      {/* Spice image — right, fades into dark on the left */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-y-0 right-0 w-full lg:w-[72%] h-full object-cover object-center lg:object-[65%_center]"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 22%, rgba(0,0,0,0.85) 48%, black 62%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 22%, rgba(0,0,0,0.85) 48%, black 62%)",
          }}
        />
        {/* Dark vignette — left side solid, soft melt into image */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${HERO_DARK} 0%, ${HERO_DARK} 28%, rgba(20,16,12,0.92) 38%, rgba(20,16,12,0.55) 50%, rgba(20,16,12,0.15) 62%, transparent 78%)`,
          }}
        />
        {/* Subtle warm light from top-right */}
        <div className="absolute inset-0 bg-gradient-to-bl from-amber-900/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 xl:px-16 flex flex-col justify-center min-h-[calc(100vh-0px)] lg:min-h-[calc(100vh-4rem)] py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
        >
          <HeroSeal />

          <h1 className="font-heading text-5xl sm:text-6xl xl:text-7xl font-bold text-white tracking-[0.08em] leading-none mb-5">
            {SITE_NAME}
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-4 mb-1">
            <span className="hidden sm:block h-px w-10 bg-hero-gold/60" />
            <p
              className="font-heading text-sm sm:text-base tracking-[0.22em] uppercase"
              style={{ color: HERO_GOLD }}
            >
              {SITE_TAGLINE}
            </p>
            <span className="hidden sm:block h-px w-10 bg-hero-gold/60" />
          </div>

          <p className="font-heading text-lg sm:text-xl text-white/85 italic mb-2">
            {SITE_HERO_TAGLINE}
          </p>

          <Ornament />

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 lg:mb-16">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-sm font-heading text-sm font-bold tracking-[0.15em] uppercase transition-opacity hover:opacity-90"
              style={{ backgroundColor: HERO_GOLD, color: HERO_DARK }}
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={2} />
              Shop Now
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 rounded-sm border border-white/50 text-white font-heading text-sm font-bold tracking-[0.15em] uppercase hover:bg-white/10 transition-colors"
            >
              <Leaf className="w-4 h-4" strokeWidth={1.75} />
              Explore Products
            </Link>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center lg:items-start gap-2">
                <div
                  className="w-11 h-11 rounded-full border flex items-center justify-center"
                  style={{ borderColor: `${HERO_GOLD}55`, color: HERO_GOLD }}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span
                  className="text-[10px] sm:text-xs font-bold tracking-[0.12em] uppercase text-center lg:text-left leading-tight"
                  style={{ color: `${HERO_GOLD}cc` }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <p
            className="mt-6 text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase text-center lg:text-left"
            style={{ color: `${HERO_GOLD}99` }}
          >
            Product of Sri Lanka
          </p>
        </motion.div>
      </div>
    </section>
  );
}
