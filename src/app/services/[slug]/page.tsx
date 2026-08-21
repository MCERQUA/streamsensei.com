import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight, SearchCheck, Users, Palette, Layers, TrendingUp, Settings2, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { SERVICES, BUSINESS } from "@/lib/site-data";

const ICONS: Record<string, LucideIcon> = { SearchCheck, Users, Palette, Layers, TrendingUp, Settings2 };

const SERVICE_IMAGES: Record<string, string> = {
  "channel-audit-growth-roadmap": "/images/service-channel-audit.jpg",
  "one-on-one-stream-coaching": "/images/service-coaching-call.jpg",
  "branding-overlay-consulting": "/images/service-branding.jpg",
  "content-strategy": "/images/service-content-strategy.jpg",
  "monetization-strategy": "/images/service-monetization.jpg",
  "stream-setup-tech-consulting": "/images/service-stream-setup.jpg",
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = ICONS[service.icon] ?? SearchCheck;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: { "@type": "ProfessionalService", name: BUSINESS.name },
    description: service.summary,
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <section className="relative bg-background py-20 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold leading-tight">
              {service.name}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              {service.heroSubtitle}
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all cursor-pointer"
              >
                Book a Free Channel Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1} className="rounded-2xl overflow-hidden border border-border aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SERVICE_IMAGES[service.slug]}
              alt={service.name}
              className="w-full h-full object-cover"
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <h2 className="text-2xl font-heading font-bold mb-6">What&apos;s Included</h2>
            <ul className="space-y-4">
              {service.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn direction="right">
            <h2 className="text-2xl font-heading font-bold mb-6">Who It&apos;s For</h2>
            <ul className="space-y-4">
              {service.whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/30">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold">How This Service Works</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.05}>
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <h3 className="font-heading font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        eyebrow="FAQ"
        title={`${service.shortName} Questions`}
        subtitle="Common questions about this service."
        faqs={service.faqs.map((f) => ({ question: f.q, answer: f.a }))}
      />

      <CTA
        title="Ready to Get Started?"
        description={`Book a free channel audit call to see if ${service.shortName} is the right next step for your channel.`}
        primaryCTA="Book a Free Channel Audit"
        primaryHref="/contact"
        secondaryText="See all services"
        secondaryHref="/services"
      />
    </>
  );
}
