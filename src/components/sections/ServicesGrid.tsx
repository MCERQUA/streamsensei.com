"use client";
import Link from "next/link";
import {
  SearchCheck,
  Users,
  Palette,
  Layers,
  TrendingUp,
  Settings2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { SERVICES } from "@/lib/site-data";

const ICONS: Record<string, LucideIcon> = {
  SearchCheck,
  Users,
  Palette,
  Layers,
  TrendingUp,
  Settings2,
};

export function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Coaching Services
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Six Ways We Help You{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Grow On Purpose
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every engagement starts with a real diagnosis, not a template.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] ?? SearchCheck;
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block h-full p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold">{service.name}</h3>
                  {!compact && (
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {service.summary}
                    </p>
                  )}
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
