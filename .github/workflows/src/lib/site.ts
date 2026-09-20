export const SITE = {
  name: "RUHTEXIN Studio",
  url: "https://ruhtexinstudio.com",
  tagline: "Digital Growth. Intelligent Technology. Measurable Results.",
  founder: "Rahul Rasamalla",
  phone: "+918985003725",
  phoneHref: "tel:+918985003725",
  whatsapp: "https://wa.me/918985003725",
  email: "ruhtexinstudio@gmail.com",
  emailHref: "https://mail.google.com/mail/?view=cm&fs=1&to=ruhtexinstudio@gmail.com",
  year: 2026,
};

export const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ruhtexin.studio/?utm_source=ig_web_button_share_sheet",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1DgHigkFfB/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ruhtexin-studio/",
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ruhtexinstudio@gmail.com",
  },
];

export type NavLink = { label: string; to: string; description?: string };

export const MEGA_MENU: { group: string; items: NavLink[] }[] = [
  {
    group: "Growth",
    items: [
      { label: "Digital Marketing", to: "/digital-marketing", description: "Full-funnel growth programs" },
      { label: "Social Media Marketing", to: "/social-media-marketing", description: "Strategy, content, community" },
      { label: "Digital Strategy", to: "/digital-marketing", description: "Roadmaps built on evidence" },
    ],
  },
  {
    group: "Search",
    items: [
      { label: "SEO", to: "/seo", description: "Technical, on-page, authority" },
      { label: "AI SEO / GEO / AEO", to: "/ai-seo", description: "Visibility in AI answers" },
      { label: "SEO & AI Search", to: "/seo-ai-search", description: "The full search practice" },
    ],
  },
  {
    group: "Advertising",
    items: [
      { label: "Google Ads", to: "/google-ads", description: "Search, Performance Max, Display" },
      { label: "Meta Ads", to: "/meta-ads", description: "Facebook & Instagram campaigns" },
      { label: "PPC Management", to: "/ppc-management", description: "Ongoing optimization" },
      { label: "Paid Advertising", to: "/paid-advertising", description: "The full paid practice" },
    ],
  },
  {
    group: "Content",
    items: [
      { label: "Content Marketing", to: "/content-marketing", description: "SEO, blog and video content" },
      { label: "Content & Social Media", to: "/content-social-media", description: "Creative and publishing" },
    ],
  },
  {
    group: "Technology",
    items: [
      { label: "Web Development", to: "/web-development", description: "Sites, commerce, web apps" },
      { label: "App Development", to: "/app-development", description: "iOS, Android, cross-platform" },
      { label: "Web & App Development", to: "/web-app-development", description: "The full technology practice" },
    ],
  },
];

export const SOLUTIONS: NavLink[] = [
  { label: "Digital Marketing", to: "/digital-marketing" },
  { label: "SEO & AI Search", to: "/seo-ai-search" },
  { label: "Paid Advertising", to: "/paid-advertising" },
  { label: "Content & Social Media", to: "/content-social-media" },
  { label: "Web & App Development", to: "/web-app-development" },
];

export const FOOTER_SERVICES: NavLink[] = [
  { label: "SEO", to: "/seo" },
  { label: "AI SEO", to: "/ai-seo" },
  { label: "Google Ads", to: "/google-ads" },
  { label: "Meta Ads", to: "/meta-ads" },
  { label: "PPC Management", to: "/ppc-management" },
  { label: "Social Media Marketing", to: "/social-media-marketing" },
  { label: "Content Marketing", to: "/content-marketing" },
  { label: "Web Development", to: "/web-development" },
  { label: "App Development", to: "/app-development" },
];

export const FOOTER_COMPANY: NavLink[] = [
  { label: "About", to: "/about" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export const FOOTER_LEGAL: NavLink[] = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Cookie Policy", to: "/cookie-policy" },
];

export function pageMeta({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
}) {
  const url = `${SITE.url}${path === "/" ? "/" : path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: path,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      telephone: SITE.phone,
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}
