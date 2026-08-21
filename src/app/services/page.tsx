import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Coaching Services for Streamers & Creators",
  description:
    "Channel audits, 1-on-1 coaching, branding consulting, content strategy, monetization strategy, and stream setup consulting for Twitch, YouTube, and Kick creators.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        badge="Coaching Services"
        title="Coaching Built Around "
        titleAccent="Your Channel's Real Data"
        subtitle="Six services, one goal: help you grow with a plan instead of a guess. Every engagement starts with the Channel Audit — everything else builds from there."
        primaryCTA="Book a Free Channel Audit"
        primaryHref="/contact"
        secondaryCTA="How It Works"
        secondaryHref="/how-it-works"
      />
      <ServicesGrid />
      <HowItWorks />
      <CTA
        title="Not Sure Which Service Fits?"
        description="Book a free channel audit call and we'll recommend the right starting point for where your channel is today."
        primaryCTA="Book a Free Channel Audit"
        primaryHref="/contact"
      />
    </>
  );
}
