import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the StreamSensei website and coaching services.",
};

export default function TermsPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 md:px-6 prose prose-invert">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Terms of Service</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: August 2026</p>
          <p>
            These terms govern your use of {BUSINESS.url} and any coaching services booked through
            it. By using this site or booking a service, you agree to these terms.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Services</h2>
          <p>
            StreamSensei provides coaching, consulting, and advisory services for livestreamers and
            content creators, including channel audits, 1-on-1 coaching, branding and overlay
            consulting, content strategy, monetization strategy, and stream setup consulting.
            Specific scope and pricing for each engagement are confirmed directly with you before
            work begins.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">No Guaranteed Results</h2>
          <p>
            Coaching and consulting services are advisory in nature. StreamSensei does not guarantee
            any specific outcome, including follower growth, subscriber count, view count, or
            revenue, as these depend on factors outside our control, including platform algorithms
            and audience behavior.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Payment &amp; Cancellation</h2>
          <p>
            Coaching engagements are billed per the terms agreed at booking. Recurring coaching plans
            may be paused or cancelled between billing cycles per the specific agreement made at
            signup.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Contact</h2>
          <p>Questions about these terms can be sent to {BUSINESS.email}.</p>
        </div>
      </div>
    </section>
  );
}
