"use client";
import Link from "next/link";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { PRICING_TIERS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function PricingTiers() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Coaching Plans
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Pick Your Starting Point
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every plan starts with a real conversation — pricing scales with how hands-on you want us to be.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <FadeIn key={tier.name}>
              <div
                className={cn(
                  "h-full p-8 rounded-2xl border flex flex-col",
                  tier.highlighted
                    ? "bg-primary/10 border-primary shadow-lg shadow-primary/10 md:-translate-y-3"
                    : "bg-card border-border"
                )}
              >
                {tier.highlighted && (
                  <span className="self-start mb-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading font-bold text-2xl">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-3xl font-heading font-bold">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">/{tier.period}</span>
                </div>
                <ul className="mt-6 space-y-3 flex-grow">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer",
                    tier.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border hover:bg-secondary"
                  )}
                >
                  {tier.cta}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Pricing shown is a starting range for planning purposes — every engagement gets a firm quote after your free audit call.
        </p>
      </div>
    </section>
  );
}
