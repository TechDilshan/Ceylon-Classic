import SEO from "@/components/SEO";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";
import HeroSection from "@/components/home/HeroSection";
import OurStorySection from "@/components/home/OurStorySection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import OurPromiseSection from "@/components/home/OurPromiseSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import WholesaleCTA from "@/components/home/WholesaleCTA";
import ContactCTA from "@/components/home/ContactCTA";

export default function Index() {
  return (
    <div>
      <SEO
        title={SITE_NAME}
        description={`${SITE_TAGLINE}. From our farms to your kitchen — premium pepper, cinnamon, and spices from Sri Lanka. Islandwide delivery.`}
        path="/"
      />
      <HeroSection />
      <OurStorySection />
      <WhyChooseUsSection />
      <FeaturedProductsSection />
      <OurPromiseSection />
      <ReviewsSection />
      <WholesaleCTA />
      <ContactCTA />
    </div>
  );
}
