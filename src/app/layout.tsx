import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BUSINESS, NAV_ITEMS, FOOTER_LINKS } from "@/lib/site-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "StreamSensei — Twitch, YouTube & Kick Growth Coaching",
    template: "%s | StreamSensei",
  },
  description:
    "StreamSensei coaches livestreamers and content creators on channel audits, growth strategy, branding, monetization, and stream setup. Book a free channel audit.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.url,
    siteName: "StreamSensei",
    title: "StreamSensei — Twitch, YouTube & Kick Growth Coaching",
    description:
      "Coaching for livestreamers and content creators: channel audits, growth strategy, branding, and monetization — for Twitch, YouTube, and Kick.",
    images: [
      { url: "/og/default.jpg", width: 1200, height: 630, alt: "StreamSensei — Creator Growth Coaching" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamSensei — Twitch, YouTube & Kick Growth Coaching",
    description: "Coaching for livestreamers and content creators who want to grow on purpose.",
    images: ["/og/default.jpg"],
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "StreamSensei",
  url: BUSINESS.url,
  description: BUSINESS.description,
  email: BUSINESS.email,
  areaServed: "Worldwide",
  serviceType: "Livestream and content creator coaching",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SmoothScroll>
          <Navbar businessName={BUSINESS.name} navItems={NAV_ITEMS} cta={{ label: "Book a Free Audit", href: "/contact" }} />
          <main className="pt-16 md:pt-20">{children}</main>
          <Footer
            businessName={BUSINESS.name}
            description="Coaching for livestreamers and content creators — channel audits, growth strategy, branding, and monetization for Twitch, YouTube, and Kick."
            email={BUSINESS.email}
            address={BUSINESS.location}
            links={FOOTER_LINKS}
          />
        </SmoothScroll>
      </body>
    </html>
  );
}
