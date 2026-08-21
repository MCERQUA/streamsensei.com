import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { WhyUs } from "@/components/sections/WhyUs";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { FadeIn } from "@/components/animations/FadeIn";
import { CTA } from "@/components/sections/CTA";
import { STATS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About StreamSensei",
  description:
    "StreamSensei coaches livestreamers and content creators with real diagnosis, not generic playbooks — here's why we built it this way.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        badge="About Us"
        title="Coaching Built For Creators Who "
        titleAccent="Are Done Guessing"
        subtitle="Most channel advice is either recycled 'post consistently' filler or expensive agency retainers built for creators who are already huge. StreamSensei exists for the space in between: real diagnosis, honest coaching, and a plan you can actually execute."
        layout="split-right"
        heroImage="/images/about-studio.jpg"
        heroImageAlt="A focused creator reviewing channel analytics in a dark, warm-lit studio"
      />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <FadeIn>
            <p>
              Every channel audit starts the same way: we watch your content, pull your real
              analytics, and compare it against what&apos;s actually working in your category right
              now — not a generic &quot;best practices&quot; checklist. Most channels we review don&apos;t have a
              strategy problem. They have a diagnosis problem: nobody has told them, specifically,
              what to fix first.
            </p>
          </FadeIn>
          <FadeIn delay={0.05}>
            <p>
              That&apos;s the gap StreamSensei fills. We work with creators across Twitch, YouTube,
              and Kick — gaming, IRL, music, art, and talk formats — on channel audits, growth
              coaching, branding direction, content strategy, monetization planning, and stream
              setup consulting. Every engagement is built on your actual data, and every roadmap
              ranks fixes by impact instead of handing you a 40-item wishlist.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p>
              We won&apos;t promise guaranteed follower counts — nobody honest can. What we do
              promise is a specific, honest read on your channel and a plan built to fit the time
              you actually have, not the fantasy schedule most growth advice assumes.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 border-y border-border bg-card/40">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {STATS.map((stat) => (
              <StaggerItem key={stat.label}>
                <p className="text-3xl md:text-4xl font-heading font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <WhyUs />

      <CTA
        title="Let's Look At Your Channel"
        description="Book a free channel audit call and get an honest read on what's actually holding your growth back."
        primaryCTA="Book a Free Channel Audit"
        primaryHref="/contact"
      />
    </>
  );
}
