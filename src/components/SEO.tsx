import { Helmet } from "react-helmet-async";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/site";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "product";
}

export default function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: SEOProps) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(image);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={description} />
      <meta property="og:locale" content="en_FI" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="author" content={SITE_NAME} />
    </Helmet>
  );
}
