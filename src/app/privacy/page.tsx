import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How StreamSensei collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 md:px-6 prose prose-invert">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: August 2026</p>
          <p>
            StreamSensei (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains what
            information we collect through {BUSINESS.url} and how we use it.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Information We Collect</h2>
          <p>
            When you submit a form on this site (channel audit request or contact form), we collect
            the name, email address, and message details you provide, along with your channel/platform
            information if submitted. We also automatically capture the referring source of your visit
            (traffic source and landing page) to understand how visitors find this site.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">How We Use Information</h2>
          <p>
            We use submitted information solely to respond to your inquiry, schedule requested calls,
            and provide the coaching services you request. We do not sell your personal information to
            third parties.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Form Processing</h2>
          <p>
            Form submissions on this site are processed by Netlify Forms. Netlify may store submission
            data as part of providing that service. See Netlify&apos;s own privacy policy for details on
            their data handling.
          </p>
          <h2 className="text-xl font-heading font-semibold text-foreground pt-4">Contact</h2>
          <p>
            Questions about this policy can be sent to {BUSINESS.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
