import type { Metadata } from "next";
import { LeadForm } from "@/components/sections/LeadForm";

export const metadata: Metadata = {
  title: "Book a Free Channel Audit",
  description:
    "Book a free channel audit call with StreamSensei. Tell us about your channel and we'll follow up within one business day.",
};

export default function ContactPage() {
  return (
    <LeadForm
      formName="quote"
      title="Book Your Free "
      titleAccent="Channel Audit"
      subtitle="Tell us about your channel and what's not working. We'll follow up within one business day to schedule your free audit call — no pressure, no generic pitch."
      submitLabel="Book My Free Audit"
      showInfoColumn
      platformField
    />
  );
}
