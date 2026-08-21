import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { FAQS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "How Coaching Works",
  description:
    "From free channel audit to growth roadmap to ongoing coaching — here's exactly how StreamSensei's creator coaching process works.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Hero
        badge="Our Process"
        title="A Coaching Process Built On "
        titleAccent="Real Diagnosis"
        subtitle="No generic playbooks. Every engagement starts with your actual content and analytics, then builds a plan ranked by what will move the needle fastest."
        primaryCTA="Book a Free Channel Audit"
        primaryHref="/contact"
      />
      <HowItWorks />
      <WhyUs />
      <FAQ
        eyebrow="Questions"
        title="Process FAQ"
        subtitle="What to expect before you book."
        faqs={FAQS.map((f) => ({ question: f.q, answer: f.a }))}
      />
      <CTA
        title="See What A Real Audit Finds"
        description="Book a free channel audit call — no pressure, just an honest read on where your channel stands."
        primaryCTA="Book a Free Channel Audit"
        primaryHref="/contact"
      />
    </>
  );
}
