import heroSpiceBox from "@/assets/hero-spice-box.jpg";
import spicePackets from "@/assets/spice-packets.jpg";
import spiceBoxAngle from "@/assets/spice-box-angle.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images: string[];
  shortDescription: string;
  description: string;
  rating: number;
  reviewCount: number;
  category: "box" | "packet" | "jar";
  isGiftReady?: boolean;
}

export const products: Product[] = [
  {
    id: "spice-wooden-box",
    name: "Ceylon Classic Spice Wooden Box",
    price: 39.90,
    image: heroSpiceBox,
    images: [heroSpiceBox, spiceBoxAngle],
    shortDescription: "A handcrafted wooden tray filled with 6 premium Sri Lankan spices.",
    description: "Our signature spice box features a beautifully crafted wooden tray with individual compartments for Ceylon Cinnamon, Cardamom, Cloves, Black Pepper, Star Anise, and Turmeric. Each spice is hand-selected and packed in Sri Lanka to ensure freshness and authenticity. The wooden tray is made from sustainably sourced timber and doubles as a serving piece for your kitchen.",
    rating: 4.8,
    reviewCount: 24,
    category: "box",
    isGiftReady: true,
  },
  {
    id: "ceylon-cinnamon-packet",
    name: "Ceylon Cinnamon Sticks",
    price: 8.90,
    image: spicePackets,
    images: [spicePackets],
    shortDescription: "True Ceylon cinnamon, hand-rolled and aromatic.",
    description: "Premium-grade Ceylon Cinnamon (Cinnamomum verum) sticks, carefully hand-rolled in Sri Lanka. Known as 'true cinnamon,' these delicate, citrusy sticks are perfect for baking, teas, and curries. 50g per packet.",
    rating: 4.9,
    reviewCount: 18,
    category: "packet",
  },
  {
    id: "black-pepper-packet",
    name: "Sri Lankan Black Pepper",
    price: 7.50,
    image: spicePackets,
    images: [spicePackets],
    shortDescription: "Bold, aromatic whole black peppercorns.",
    description: "Whole black peppercorns grown in the hills of Sri Lanka, sun-dried for intense flavor. Perfect for grinding fresh over any dish. 100g per packet.",
    rating: 4.7,
    reviewCount: 12,
    category: "packet",
  },
  {
    id: "turmeric-powder-jar",
    name: "Organic Turmeric Powder",
    price: 9.50,
    image: spicePackets,
    images: [spicePackets],
    shortDescription: "Vibrant, high-curcumin turmeric in a glass jar.",
    description: "Premium organic turmeric powder with naturally high curcumin content. Sourced from family farms in Sri Lanka's spice belt. Perfect for golden lattes, curries, and wellness recipes. 100g glass jar.",
    rating: 4.8,
    reviewCount: 15,
    category: "jar",
  },
  {
    id: "cardamom-pods-packet",
    name: "Green Cardamom Pods",
    price: 12.90,
    image: spicePackets,
    images: [spicePackets],
    shortDescription: "Intensely aromatic, hand-picked cardamom pods.",
    description: "Hand-picked green cardamom pods from Sri Lanka's central highlands. Each pod is bursting with aromatic seeds, perfect for chai, rice dishes, and desserts. 50g per packet.",
    rating: 4.6,
    reviewCount: 9,
    category: "packet",
  },
];
