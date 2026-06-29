import SEO from "@/components/SEO";
import { CONTACT_EMAIL } from "@/lib/site";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-12 md:py-20 max-w-3xl">
      <SEO title="Privacy Policy" description="CEYLONCLASSIC privacy policy — how we handle your personal information." path="/privacy" />
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
        <p>Last updated: {new Date().getFullYear()}</p>
        <p>
          CEYLONCLASSIC (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains how we collect and use
          information when you visit our website or contact us.
        </p>
        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-2">Information We Collect</h2>
          <p>When you use our contact form, we collect your name, email address, and message content. We may also receive
          information when you contact us via WhatsApp, phone, or email.</p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-2">How We Use Your Information</h2>
          <p>We use your information solely to respond to inquiries, process orders, and communicate about our products.
          We do not sell or share your personal data with third parties for marketing purposes.</p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-2">Data Retention</h2>
          <p>We retain contact information only as long as necessary to fulfil your request and maintain business records.</p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-2">Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data by contacting us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.</p>
        </section>
        <section>
          <h2 className="font-heading text-xl font-semibold text-foreground mb-2">Contact</h2>
          <p>For privacy-related questions, email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.</p>
        </section>
      </div>
    </div>
  );
}
