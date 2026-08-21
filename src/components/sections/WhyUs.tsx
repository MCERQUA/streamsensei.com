"use client";
import { Target, ShieldCheck, LineChart, MessageSquare } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const REASONS = [
  {
    icon: Target,
    title: "Diagnosis before advice",
    body: "We watch your content and pull your real analytics before we recommend anything. No generic playbooks.",
  },
  {
    icon: LineChart,
    title: "Roadmaps ranked by impact",
    body: "Every plan is prioritized — the highest-leverage fix first, not a 40-item wishlist you'll never finish.",
  },
  {
    icon: MessageSquare,
    title: "Coaching, not just a report",
    body: "Recurring calls and async feedback keep you accountable to the plan instead of letting it collect dust.",
  },
  {
    icon: ShieldCheck,
    title: "Honest about what growth takes",
    body: "No guaranteed-follower promises. We tell you what's realistic, what's in your control, and what isn't.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            The StreamSensei Approach
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Mastery Is A Practice, Not A Purchase
          </h2>
          <p className="mt-4 text-lg text-background/70">
            A dojo doesn&apos;t hand out belts — it builds the habits that earn them. Our coaching works the same way.
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {REASONS.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">{reason.title}</h3>
                  <p className="mt-2 text-sm text-background/70 leading-relaxed">{reason.body}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
