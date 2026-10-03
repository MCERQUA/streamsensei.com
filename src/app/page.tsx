import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { FAQS } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <Hero
        badge="Coaching for Twitch, YouTube & Kick creators"
        title="Master Your Stream."
        titleAccent=" Build A Real Audience."
        subtitle="StreamSensei coaches livestreamers and content creators who are done guessing — channel audits, growth strategy, branding, and monetization built from your actual data, not generic advice."
        primaryCTA="Book a Free Channel Audit"
        primaryHref="/contact"
        secondaryCTA="See Coaching Plans"
        secondaryHref="/services"
        layout="split-right"
        heroImage="/images/hero-broadcast-dojo.jpg"
        heroImageAlt="A streaming setup blending broadcast tech with a calm, dojo-inspired studio aesthetic"
      />
      <TrustBar />
      <ServicesGrid />
      <HowItWorks />
      <WhyUs />
      <PricingTiers />
      <FAQ
        eyebrow="Questions"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before booking a channel audit."
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <CTA
        title="Ready To Stop Guessing?"
        description="Book a free channel audit call. We'll tell you honestly whether coaching is the right fit — no pressure, no generic pitch."
        primaryCTA="Book a Free Channel Audit"
        primaryHref="/contact"
        secondaryText="Browse coaching services"
        secondaryHref="/services"
      />
    </>
  );
}
