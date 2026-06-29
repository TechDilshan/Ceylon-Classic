import SEO from "@/components/SEO";
import { CONTACT_EMAIL } from "@/lib/site";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 md:py-20 max-w-3xl">
      <SEO title="Terms of Sale" description="CEYLONCLASSIC terms of sale — ordering, payment, delivery, and returns." path="/terms" />
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">Terms of Sale</h1>
      <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
        <p>Last updated: {new Date().getFullYear()}</p>
        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-2">Ordering</h2>
          <p>Orders are placed by contacting us via WhatsApp, our contact form, phone, or email. We will confirm
          availability, total price, and payment details before dispatch.</p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-2">Payment</h2>
          <p>Payment methods and terms will be communicated upon order confirmation. Orders are dispatched after payment
          is received unless otherwise agreed.</p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-2">Delivery</h2>
          <p>We offer islandwide delivery across Sri Lanka. Delivery times and costs will be confirmed at the time of order.
          Typical dispatch is within 1–2 business days of payment confirmation.</p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-2">Returns & Refunds</h2>
          <p>If you receive a damaged or incorrect product, contact us within 48 hours of delivery with photos. We will
          work with you to resolve the issue with a replacement or refund as appropriate.</p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-2">Wholesale</h2>
          <p>Wholesale and bulk orders are subject to separate pricing and terms. Contact us for a custom quote.</p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-2">Contact</h2>
          <p>Questions about these terms? Email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.</p>
        </section>
      </div>
    </div>
  );
}
