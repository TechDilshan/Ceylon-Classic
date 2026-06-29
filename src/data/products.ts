import spicePackets from "@/assets/pepper.png";
import heroSpiceBox from "@/assets/pepper.png";
import spiceBoxAngle from "@/assets/spice-box-angle.jpg";
import cinnamonImage from "@/assets/cinnamon.png";

export interface ProductVariant {
  weight: string;
  price: number;
}

export interface ProductReview {
  author: string;
  rating: number;
  text: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  image: string;
  images: string[];
  shortDescription: string;
  description: string;
  benefits: string[];
  ingredients: string;
  usage: string;
  storage: string;
  nutrition?: string;
  shipping: string;
  variants: ProductVariant[];
  reviews: ProductReview[];
  relatedProductIds: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "pepper-powder",
    slug: "pepper-powder",
    name: "Pepper Powder",
    image: spicePackets,
    images: [spicePackets, spiceBoxAngle],
    shortDescription: "Finely ground Sri Lankan black pepper with bold, aromatic heat.",
    description:
      "Our pepper powder is made from sun-dried black peppercorns grown on our own land and partner farms in Sri Lanka's spice belt. Stone-ground in small batches to preserve essential oils and full-bodied flavour.",
    benefits: [
      "100% pure Sri Lankan black pepper",
      "Sun-dried and freshly ground",
      "Rich in piperine for bold aroma",
      "Hygienically packed and sealed",
    ],
    ingredients: "100% Sri Lankan black pepper (Piper nigrum).",
    usage: "Ideal for curries, marinades, soups, grilled meats, and everyday seasoning. Add during cooking or finish with a fresh grind on top.",
    storage: "Store in a cool, dry place away from direct sunlight. Keep the pouch tightly sealed after opening.",
    nutrition: "Naturally low in calories. Contains piperine, manganese, and dietary fibre.",
    shipping: "Islandwide delivery across Sri Lanka. Orders dispatched within 1–2 business days.",
    variants: [
      { weight: "20g", price: 250 },
      { weight: "40g", price: 450 },
      { weight: "50g", price: 550 },
    ],
    reviews: [
      { author: "Nimali K.", rating: 5, text: "Very aromatic. You can tell it's freshly ground." },
      { author: "Rohan P.", rating: 5, text: "Excellent packaging. The heat and flavour are perfect." },
    ],
    relatedProductIds: ["whole-black-pepper", "ceylon-cinnamon"],
    featured: true,
  },
  {
    id: "whole-black-pepper",
    slug: "whole-black-pepper",
    name: "Whole Black Pepper",
    image: spicePackets,
    images: [spicePackets, heroSpiceBox],
    shortDescription: "Premium whole peppercorns — bold, aromatic, and sun-dried.",
    description:
      "Hand-harvested black peppercorns from our pepper vines and trusted local farmers. Each batch is carefully cleaned, sun-dried, and sorted to ensure uniform size and maximum flavour.",
    benefits: [
      "Whole peppercorns retain freshness longer",
      "Grown in Sri Lanka's hill country",
      "Perfect for grinding at home",
      "Responsibly sourced from our farms and partners",
    ],
    ingredients: "100% whole Sri Lankan black peppercorns.",
    usage: "Grind fresh over salads, steaks, pasta, and curries. Whole peppercorns can also be used in broths, pickles, and spice blends.",
    storage: "Keep in an airtight container in a cool, dry cupboard. Avoid moisture.",
    nutrition: "Rich in piperine, iron, and antioxidants.",
    shipping: "Islandwide delivery across Sri Lanka. Orders dispatched within 1–2 business days.",
    variants: [
      { weight: "20g", price: 280 },
      { weight: "40g", price: 500 },
      { weight: "50g", price: 600 },
    ],
    reviews: [
      { author: "Anjali M.", rating: 5, text: "Fast delivery and wonderful quality peppercorns." },
      { author: "David L.", rating: 5, text: "The aroma when you open the pack is incredible." },
    ],
    relatedProductIds: ["pepper-powder", "ceylon-cinnamon"],
    featured: true,
  },
  {
    id: "ceylon-cinnamon",
    slug: "ceylon-cinnamon",
    name: "Ceylon Cinnamon",
    image: cinnamonImage,
    images: [cinnamonImage],
    shortDescription: "True Ceylon cinnamon — delicate, sweet, and hand-rolled.",
    description:
      "Authentic Ceylon cinnamon (Cinnamomum verum) from our own cinnamon trees. Unlike cassia, true Ceylon cinnamon offers a delicate, citrusy sweetness prized by chefs and home cooks worldwide.",
    benefits: [
      "True Ceylon cinnamon — not cassia",
      "From our own cinnamon trees",
      "Hand-rolled quills",
      "Naturally sweet and aromatic",
    ],
    ingredients: "100% Ceylon cinnamon quills (Cinnamomum verum).",
    usage: "Perfect for baking, cinnamon tea, rice dishes, curries, and desserts. Break quills into pieces or grind into powder.",
    storage: "Store in a sealed container away from heat and humidity to preserve aroma.",
    nutrition: "Contains cinnamaldehyde, manganese, and trace minerals.",
    shipping: "Islandwide delivery across Sri Lanka. Orders dispatched within 1–2 business days.",
    variants: [
      { weight: "50g", price: 350 },
      { weight: "100g", price: 650 },
    ],
    reviews: [
      { author: "Priya S.", rating: 5, text: "The best cinnamon I've ever used. So fragrant!" },
      { author: "James T.", rating: 5, text: "You can taste the difference from regular supermarket cinnamon." },
    ],
    relatedProductIds: ["pepper-powder", "whole-black-pepper"],
    featured: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const featuredProducts = products.filter((p) => p.featured);
