/**
 * Case study + testimonial content.
 *
 * These entries are ILLUSTRATIVE project scenarios written to demonstrate how
 * RUHTEXIN Studio approaches work. They are not real client engagements and
 * contain no metrics, client names or logos.
 *
 * To publish a real case study: replace an entry's fields below and set
 * `illustrative: false`. Optional fields (`metrics`, `testimonial`, `logo`)
 * are hidden automatically when empty, so no placeholder ever renders.
 */

export type CaseStudyMetric = { label: string; value: string };

export type CaseStudyTestimonial = {
  quote: string;
  clientName: string;
  clientRole: string;
  clientCompany?: string;
  /** Path or URL to a client logo. Hidden when omitted. */
  clientLogo?: string;
  /** Set false once the quote is verified and attributable. */
  sample?: boolean;
};

export type CaseStudy = {
  id: string;
  /** Client or project name. Empty for illustrative scenarios. */
  clientName?: string;
  industry: string;
  category: string;
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
  services: string[];
  /** Verified metrics only. Hidden entirely when empty. */
  metrics?: CaseStudyMetric[];
  testimonial?: CaseStudyTestimonial;
  clientLogo?: string;
  href: string;
  ctaLabel?: string;
  /** True = demonstration scenario, not an actual client result. */
  illustrative: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "01",
    industry: "Healthcare",
    category: "SEO + Content Strategy",
    title: "Growing Organic Visibility for a Healthcare Brand",
    challenge:
      "The brand had a strong healthcare offering but limited organic visibility. Its website content was not structured around clear search intent, and important service pages were competing for similar keywords.",
    approach:
      "RUHTEXIN's approach focused on technical SEO, search-intent mapping, content architecture, on-page optimization and development of authoritative service and educational content.",
    outcome:
      "A clearer search architecture designed to improve discoverability, strengthen topical authority and create a stronger foundation for long-term organic growth.",
    services: ["SEO", "Content Strategy", "Technical SEO"],
    metrics: [],
    href: "/seo",
    ctaLabel: "View Approach",
    illustrative: true,
  },
  {
    id: "02",
    industry: "Professional services",
    category: "Google Ads + Conversion Strategy",
    title: "Turning Paid Search Into a More Focused Lead Engine",
    challenge:
      "A growing service business was generating paid traffic but lacked a clear connection between search intent, advertising messages and landing-page experience.",
    approach:
      "The strategy combined keyword research, campaign structure, audience segmentation, ad messaging, conversion tracking and landing-page optimization.",
    outcome:
      "A more structured paid acquisition system designed to improve traffic quality, conversion visibility and campaign decision-making.",
    services: ["Google Ads", "PPC", "Conversion Optimization"],
    metrics: [],
    href: "/google-ads",
    ctaLabel: "View Approach",
    illustrative: true,
  },
  {
    id: "03",
    industry: "B2B services",
    category: "Web Development + Digital Growth",
    title: "Building a Digital Experience Designed to Convert",
    challenge:
      "The business had an outdated digital presence that did not clearly communicate its services or provide visitors with a simple path toward enquiry.",
    approach:
      "The project focused on UX structure, responsive web development, conversion-focused page architecture, performance optimization and SEO-ready implementation.",
    outcome:
      "A modern digital experience designed to communicate the brand more clearly, improve usability and create a stronger foundation for future marketing campaigns.",
    services: ["Web Development", "UI/UX", "SEO"],
    metrics: [],
    href: "/web-development",
    ctaLabel: "View Approach",
    illustrative: true,
  },
];

export const TRUST_PILLARS = [
  {
    label: "Strategy",
    headline: "Clarity before execution.",
    body: "Every project starts by understanding the business, audience, competition and opportunity before deciding which channels deserve investment.",
    footer: "RUHTEXIN Approach",
  },
  {
    label: "Execution",
    headline: "Built around the right channels.",
    body: "SEO, content, paid advertising, social media and technology work better when they are connected by one clear growth strategy.",
    footer: "RUHTEXIN Approach",
  },
  {
    label: "Optimization",
    headline: "Progress should be measurable.",
    body: "Campaigns, content and digital experiences should continuously improve through data, testing and informed decision-making.",
    footer: "RUHTEXIN Approach",
  },
];

/** Client voices shown on the homepage. */
export const CLIENT_VOICES: CaseStudyTestimonial[] = [
  {
    quote:
      "RUHTEXIN brought structure to our digital strategy and helped us understand where to focus instead of trying to do everything at once.",
    clientName: "Nithin",
    clientRole: "Business Owner",
  },
  {
    quote:
      "The biggest difference was the clarity of the approach. We could finally see how our website, content and marketing efforts connected.",
    clientName: "Varsha",
    clientRole: "Founder",
  },
  {
    quote:
      "The process was focused, practical and built around the actual business objective rather than simply delivering marketing activity.",
    clientName: "Neha Mishra",
    clientRole: "Business Director",
  },
];
