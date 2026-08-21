export const BUSINESS = {
  name: "StreamSensei",
  tagline: "Master Your Stream. Build a Real Audience.",
  description:
    "StreamSensei is a coaching and consulting service for livestreamers and content creators — channel audits, growth strategy, branding, monetization, and stream-setup coaching for Twitch, YouTube, and Kick creators who want to grow on purpose instead of by luck.",
  email: "hello@streamsensei.com",
  location: "Remote — coaching creators worldwide",
  url: "https://streamsensei.com",
};

export const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = [
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Coaching",
    items: [
      { label: "Channel Audit & Growth Roadmap", href: "/services/channel-audit-growth-roadmap" },
      { label: "1-on-1 Stream Coaching", href: "/services/one-on-one-stream-coaching" },
      { label: "Branding & Overlay Consulting", href: "/services/branding-overlay-consulting" },
      { label: "Content Strategy", href: "/services/content-strategy" },
      { label: "Monetization Strategy", href: "/services/monetization-strategy" },
      { label: "Stream Setup & Tech Consulting", href: "/services/stream-setup-tech-consulting" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  summary: string;
  heroSubtitle: string;
  whatsIncluded: string[];
  whoItsFor: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  keyword: string;
}

export const SERVICES: Service[] = [
  {
    slug: "channel-audit-growth-roadmap",
    name: "Channel Audit & Growth Roadmap",
    shortName: "Channel Audit",
    icon: "SearchCheck",
    keyword: "twitch channel audit",
    summary:
      "A full teardown of your channel — content, branding, retention, and analytics — with a written roadmap of the exact changes to make next.",
    heroSubtitle:
      "Most channels don't have a strategy problem, they have a diagnosis problem. We watch your VODs, pull your analytics, and hand you a prioritized list of what's actually holding your growth back.",
    whatsIncluded: [
      "Full review of 3-5 recent VODs or uploads for pacing, hooks, and retention drop-off points",
      "Analytics deep-dive: watch time, click-through rate, follower conversion, discovery mix",
      "Channel page, panels, thumbnails, and title review against your category's top performers",
      "A written roadmap ranking the highest-leverage fixes first — not a 40-item wishlist",
      "45-minute walkthrough call to review findings and answer questions",
    ],
    whoItsFor: [
      "Creators stuck at the same viewer/subscriber count for 3+ months",
      "Streamers who suspect something is off but can't pin down what",
      "Anyone about to invest time in a rebrand or format change and wants it validated first",
    ],
    process: [
      { title: "Send your channel", body: "Submit your channel link and the 3-5 VODs or videos you want reviewed." },
      { title: "We watch and analyze", body: "Frame-by-frame content review plus a full analytics pull across your platform's creator dashboard." },
      { title: "Get your roadmap", body: "A written report ranking fixes by impact, delivered before your walkthrough call." },
      { title: "Walkthrough call", body: "45 minutes to go through findings live and map next steps." },
    ],
    faqs: [
      { q: "How long does an audit take?", a: "Most audits are delivered within 5-7 business days of receiving your channel links and VODs." },
      { q: "Do you need streamer/creator access to my account?", a: "No — we only need public links to your channel and the specific videos or VODs you want reviewed." },
      { q: "What platforms do you audit?", a: "Twitch, YouTube, and Kick. If you stream across multiple platforms, we'll factor that into the roadmap." },
    ],
  },
  {
    slug: "one-on-one-stream-coaching",
    name: "1-on-1 Stream Coaching",
    shortName: "1-on-1 Coaching",
    icon: "Users",
    keyword: "twitch coaching services",
    summary:
      "Recurring coaching calls that keep you accountable to a growth plan instead of guessing week to week.",
    heroSubtitle:
      "A roadmap is only useful if someone holds you to it. 1-on-1 coaching is where we turn strategy into a weekly or biweekly cadence — reviewing what worked, fixing what didn't, and adjusting as your channel grows.",
    whatsIncluded: [
      "Recurring 1-on-1 video calls (weekly or biweekly, your choice)",
      "Between-call async feedback on thumbnails, titles, and clips via message",
      "A living growth plan that gets updated as your numbers change",
      "Direct access to ask questions before you post, not just after",
    ],
    whoItsFor: [
      "Creators who've done an audit and want ongoing accountability to execute it",
      "Part-time streamers trying to grow efficiently around a day job",
      "Anyone who works better with a coach checking in than a document sitting in a drawer",
    ],
    process: [
      { title: "Kickoff call", body: "We set your growth plan, target metrics, and cadence." },
      { title: "Recurring sessions", body: "Regular calls to review content, retention data, and next steps." },
      { title: "Async support", body: "Send thumbnails, titles, or clips between calls for quick feedback." },
      { title: "Quarterly reset", body: "Every quarter we re-evaluate the plan against your actual growth data." },
    ],
    faqs: [
      { q: "What's the minimum commitment?", a: "Coaching runs in monthly blocks with no long-term lock-in — cancel or pause between billing cycles." },
      { q: "Is this only for gaming streamers?", a: "No — we coach creators across gaming, IRL, music, art, and talk formats on Twitch, YouTube, and Kick." },
      { q: "Do I need a channel audit first?", a: "It's not required, but most clients start with an audit so the coaching plan is built on a real diagnosis instead of a guess." },
    ],
  },
  {
    slug: "branding-overlay-consulting",
    name: "Branding & Overlay Consulting",
    shortName: "Branding & Overlays",
    icon: "Palette",
    keyword: "twitch branding consultant",
    summary:
      "Strategic direction for your visual identity — overlays, panels, thumbnails, and channel art that actually match how you want to be perceived.",
    heroSubtitle:
      "Good branding isn't about having the flashiest overlay — it's about consistency that makes your channel instantly recognizable in a scroll. We give you the strategy and creative direction; you (or your designer) execute it.",
    whatsIncluded: [
      "Brand positioning: what your channel should feel like to a new viewer in 3 seconds",
      "Color palette, type, and visual motif recommendations tied to your niche and personality",
      "Overlay and panel layout direction (what goes where, and why)",
      "Thumbnail and title system framework so every upload feels consistent",
      "A written creative brief you can hand to a designer or use yourself",
    ],
    whoItsFor: [
      "Creators whose visuals feel mismatched or outdated compared to their content quality",
      "Streamers rebranding after a niche change or channel relaunch",
      "Anyone about to pay a designer and wants clear direction first so revisions don't spiral",
    ],
    process: [
      { title: "Brand discovery", body: "We talk through your niche, personality, and who you want to attract." },
      { title: "Competitive scan", body: "We review top channels in your category for visual patterns and gaps." },
      { title: "Creative direction", body: "You get a written brief covering palette, type, motif, and layout." },
      { title: "Designer handoff (optional)", body: "We can review your designer's drafts against the brief before you approve." },
    ],
    faqs: [
      { q: "Do you design the overlays yourselves?", a: "We provide strategy and creative direction, not production files — the brief is built to hand straight to a designer or use in Canva/Photoshop yourself." },
      { q: "Can you review an overlay a designer already made?", a: "Yes — that's a common add-on to this service." },
      { q: "What if I don't have a designer?", a: "We can point you toward the right kind of freelancer once your brief is done." },
    ],
  },
  {
    slug: "content-strategy",
    name: "Content Strategy & Planning",
    shortName: "Content Strategy",
    icon: "Layers",
    keyword: "content creator coaching",
    summary:
      "A content pillar and posting-cadence plan that turns 'what do I stream today' into a repeatable system.",
    heroSubtitle:
      "Inconsistent content is the single biggest killer of channel growth. We build you a content pillar system, a realistic posting cadence, and a clip-repurposing plan so every stream produces more than one piece of content.",
    whatsIncluded: [
      "3-5 content pillars defined around your niche and strengths",
      "A realistic weekly/monthly content calendar template",
      "A clip and short-form repurposing workflow for every VOD",
      "Series and format ideas mapped to what's currently working in your category",
    ],
    whoItsFor: [
      "Creators who feel like they're posting randomly with no throughline",
      "Streamers who want to grow on TikTok/Shorts/Reels but don't know what to clip",
      "Anyone planning a schedule change and wants it structured, not improvised",
    ],
    process: [
      { title: "Niche mapping", body: "We identify your core pillars and the audience each one attracts." },
      { title: "Calendar build", body: "A realistic cadence based on your actual available time, not an ideal fantasy schedule." },
      { title: "Repurposing plan", body: "A system for turning every stream into 3-10 pieces of short-form content." },
      { title: "Review checkpoint", body: "A 30-day check-in to adjust the plan against what's actually landing." },
    ],
    faqs: [
      { q: "Do you write my scripts or captions?", a: "No — we build the strategy and system; you (or an editor) handle execution." },
      { q: "Is this useful if I only stream one game?", a: "Yes — content pillars work within a single game just as well as across a variety format." },
      { q: "How is this different from the Channel Audit?", a: "The audit diagnoses what's wrong today. This service builds the forward-looking content system." },
    ],
  },
  {
    slug: "monetization-strategy",
    name: "Monetization Strategy",
    shortName: "Monetization",
    icon: "TrendingUp",
    keyword: "streamer monetization consultant",
    summary:
      "A realistic plan for diversifying income beyond subs — sponsorships, affiliates, memberships, and digital products.",
    heroSubtitle:
      "Subs and bits are a start, not a strategy. We map out which monetization channels actually fit your audience size and niche right now, and which ones you're not ready for yet.",
    whatsIncluded: [
      "Audit of current revenue streams and where the biggest gaps are",
      "A prioritized list of monetization channels that fit your current audience size",
      "Sponsorship readiness review: media kit, rate-card guidance, outreach approach",
      "Guidance on memberships, digital products, and affiliate programs worth pursuing",
    ],
    whoItsFor: [
      "Creators earning inconsistent income who want a clearer, more diversified plan",
      "Streamers approaching partner/affiliate status and planning their next revenue move",
      "Anyone who's been pitched sponsorship or agency deals and wants an outside read before signing",
    ],
    process: [
      { title: "Revenue audit", body: "We map every current and potential income stream against your audience data." },
      { title: "Priority plan", body: "A ranked list of what to pursue now versus later, based on real fit." },
      { title: "Sponsorship readiness", body: "We review or help build your media kit and outreach approach." },
      { title: "Quarterly check-in", body: "Revisit the plan as your audience and options grow." },
    ],
    faqs: [
      { q: "Will you negotiate sponsorship deals for me?", a: "We advise and prepare you for negotiations; we don't act as your agent or negotiate contracts on your behalf." },
      { q: "Is this only for larger channels?", a: "No — early-stage creators get the most value from getting monetization sequencing right from the start." },
      { q: "Do you guarantee income results?", a: "No coach can guarantee revenue. This service is strategy and preparation, not a promise of outcomes." },
    ],
  },
  {
    slug: "stream-setup-tech-consulting",
    name: "Stream Setup & Tech Consulting",
    shortName: "Setup & Tech",
    icon: "Settings2",
    keyword: "obs setup consultant",
    summary:
      "OBS scene review, audio/video quality fixes, and gear recommendations so technical issues stop capping your growth.",
    heroSubtitle:
      "Bad audio and laggy scenes quietly cap channels that would otherwise grow. We review your OBS setup, encoding settings, and gear, then give you a prioritized fix list before you spend money on the wrong upgrade.",
    whatsIncluded: [
      "OBS scene collection and source review",
      "Audio and video quality diagnosis (bitrate, encoder, mic chain, lighting)",
      "Gear recommendations scaled to your actual budget, not the most expensive option",
      "A prioritized fix list so you upgrade the thing that matters most first",
    ],
    whoItsFor: [
      "Streamers whose content is good but viewers bounce on audio/video quality",
      "Anyone about to buy new gear and wants to know what actually matters first",
      "Creators moving from phone/laptop streaming to a full capture card setup",
    ],
    process: [
      { title: "Setup review", body: "Share your OBS scene collection and a recent VOD for a technical pass." },
      { title: "Diagnosis", body: "We identify the specific bottlenecks — encoding, audio chain, lighting, or scene design." },
      { title: "Fix list", body: "A prioritized, budget-aware list of exactly what to change and in what order." },
      { title: "Follow-up check", body: "A short call once changes are made to confirm quality improved." },
    ],
    faqs: [
      { q: "Do you build my OBS scenes for me?", a: "We provide the diagnosis and settings guidance; overlay production is covered separately under Branding & Overlay Consulting." },
      { q: "What if I stream on a low budget?", a: "Most of the highest-impact fixes are settings changes, not purchases — we prioritize free fixes first." },
      { q: "Do you support console streaming setups?", a: "Yes, alongside PC/OBS setups." },
    ],
  },
];

export const STATS = [
  { value: "180+", label: "Creator channels coached" },
  { value: "62%", label: "Avg. 90-day watch-time growth" },
  { value: "3", label: "Platforms covered — Twitch, YouTube, Kick" },
];

export const TESTIMONIALS = [
  {
    quote:
      "The channel audit found the exact drop-off point in my VODs I couldn't see myself. Fixed my intro pacing and average view duration jumped within two weeks.",
    name: "Variety streamer",
    handle: "Twitch, 3-year affiliate",
  },
  {
    quote:
      "I'd been guessing at a content schedule for a year. The pillar system gave me a plan I could actually stick to, and my Shorts started pulling in new subscribers.",
    name: "Gaming creator",
    handle: "YouTube, 40K subscribers",
  },
  {
    quote:
      "The stream setup review paid for itself — turns out my audio chain was the real problem, not my content. Cheapest fix that made the biggest difference.",
    name: "IRL streamer",
    handle: "Kick creator",
  },
];

export const PRICING_TIERS = [
  {
    name: "Audit",
    price: "From $249",
    period: "one-time",
    description: "A single deep-dive diagnosis with a written roadmap.",
    features: [
      "Full channel & content audit",
      "Written growth roadmap",
      "45-minute walkthrough call",
    ],
    cta: "Book an Audit",
    highlighted: false,
  },
  {
    name: "Growth Coaching",
    price: "From $399",
    period: "per month",
    description: "Ongoing 1-on-1 coaching to execute and adjust your plan.",
    features: [
      "Everything in Audit",
      "Biweekly 1-on-1 coaching calls",
      "Async feedback between calls",
      "Quarterly plan reset",
    ],
    cta: "Start Coaching",
    highlighted: true,
  },
  {
    name: "Full Mastery",
    price: "Custom",
    period: "quote",
    description: "Audit, coaching, branding, and monetization strategy combined.",
    features: [
      "Everything in Growth Coaching",
      "Branding & overlay consulting",
      "Monetization strategy sessions",
      "Priority async support",
    ],
    cta: "Get a Custom Quote",
    highlighted: false,
  },
];

export const HOW_IT_WORKS = [
  { step: "1", title: "Book a Free Channel Audit Call", body: "A short call to understand your channel, your goals, and whether coaching is the right fit." },
  { step: "2", title: "Get Your Growth Roadmap", body: "A written, prioritized plan covering content, branding, and technical fixes — ranked by impact." },
  { step: "3", title: "Work the Plan Together", body: "Recurring coaching sessions turn the roadmap into weekly action, with feedback along the way." },
  { step: "4", title: "Grow On Your Own", body: "The goal is a channel — and a creator — who doesn't need a coach forever. We build systems that outlast the engagement." },
];

export const FAQS = [
  { q: "Do you guarantee follower or subscriber growth?", a: "No legitimate coach can guarantee platform growth — algorithms and audiences are outside anyone's full control. What we guarantee is a specific, honest diagnosis and a plan built on your actual data, not generic advice." },
  { q: "What platforms do you work with?", a: "Twitch, YouTube, and Kick. Most of our frameworks apply to any livestreaming or video platform." },
  { q: "I'm just starting out — is this too early for me?", a: "Early-stage creators often get the most value, since small fixes compound over a longer runway. The Channel Audit is a good starting point at any size." },
  { q: "How is coaching delivered?", a: "Everything is remote — video calls plus async feedback by message. You don't need to be in any specific location to work with us." },
  { q: "How do I get started?", a: "Book a free channel audit call using the form on this site, and we'll follow up within one business day to schedule." },
];

export const BLOG_POSTS_META = [
  {
    slug: "why-your-twitch-channel-isnt-growing",
    title: "Why Your Twitch Channel Isn't Growing (It's Probably Not What You Think)",
    description:
      "The most common reasons channel growth stalls have nothing to do with 'the algorithm' — here's what actually shows up in channel audits.",
    date: "2026-07-14",
    keyword: "why isn't my twitch channel growing",
  },
  {
    slug: "how-to-build-a-content-calendar-as-a-streamer",
    title: "How to Build a Content Calendar as a Streamer (Without Burning Out)",
    description:
      "A realistic framework for planning streams and repurposing clips, built around the schedule you actually have — not the one you wish you had.",
    date: "2026-07-28",
    keyword: "content calendar for streamers",
  },
  {
    slug: "streamer-monetization-beyond-subs-and-bits",
    title: "Streamer Monetization Beyond Subs and Bits: A Realistic Roadmap",
    description:
      "Subs and bits are a starting point, not a strategy. Here's how to sequence sponsorships, memberships, and digital products as your channel grows.",
    date: "2026-08-11",
    keyword: "streamer monetization strategy",
  },
];
