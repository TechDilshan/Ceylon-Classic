import { cn } from "@/lib/utils";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Use contain for product packaging photos (PNG), cover for lifestyle shots */
  variant?: "contain" | "cover";
}

export default function ProductImage({ src, alt, className, variant = "contain" }: ProductImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn(
        "w-full h-full transition-transform duration-500",
        variant === "contain" ? "object-contain p-3 sm:p-4" : "object-cover",
        className
      )}
    />
  );
}
