import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/web-development")({
  head: () =>
    pageMeta({
      title: "Web Development Company — Websites, E-commerce & Web Apps | RUHTEXIN Studio",
      description:
        "Web development for business websites, landing pages, e-commerce and web applications, with CMS and API integration, performance optimization and SEO-ready build standards.",
      path: "/web-development",
    }),
  component: () => (
    <ServicePage
      eyebrow="Technology"
      h1="WEBSITES ENGINEERED FOR GROWTH."
      intro="A website is infrastructure, not a brochure. We build fast, accessible, search-ready sites and web applications that marketing teams can operate and that hold up as the business grows."
      path="/web-development"
      serviceName="Web Development"
      serviceDescription="Corporate websites, landing pages, e-commerce, web applications, CMS and API integration and performance optimization."
      parent={{ label: "Web & App Development", to: "/web-app-development" }}
      ctaLabel="Scope a Build"
      highlights={[
        {
          title: "Performance as a requirement",
          body: "Core Web Vitals, image strategy and payload budgets are agreed before design begins, not patched later.",
        },
        {
          title: "SEO-ready by default",
          body: "Semantic markup, server rendering, clean URLs, metadata control and structured data are part of the build.",
        },
        {
          title: "Owned by your team",
          body: "Clear content models and documentation so your team can publish without a developer in the loop.",
        },
      ]}
      blocks={[
        {
          heading: "Corporate and business websites",
          body: "Multi-page sites with a clear information architecture, credible design and a content model your team can maintain. We plan the URL structure, navigation and template system around how buyers actually evaluate you, not around an org chart.",
        },
        {
          heading: "Landing pages",
          body: "Focused, fast pages built for a single campaign objective, with message match to the ad, minimal friction and reliable conversion tracking. Templates can be systematized so new campaigns launch in days rather than weeks.",
        },
        {
          heading: "E-commerce",
          body: "Storefronts with sensible category architecture, fast product pages, product schema, clean faceted navigation and a checkout path free of avoidable friction. Merchandising, search visibility and performance are designed together.",
        },
        {
          heading: "Web applications",
          body: "Dashboards, portals, booking systems and internal tools — product-grade interfaces with authentication, roles, sensible state management and a backend designed for the actual data model rather than a generic template.",
          bullets: [
            "Authentication and role-based access",
            "Database design and data integrity",
            "Admin and reporting interfaces",
            "Third-party service integration",
          ],
        },
        {
          heading: "CMS integration",
          body: "Content models built around reusable components, so editors compose pages safely without breaking layout or SEO. Preview, drafts, media handling and permissions are configured for real editorial workflows.",
        },
        {
          heading: "API integration",
          body: "Connections to CRM, payments, analytics, marketing automation, ERP or logistics systems, with error handling, retries and logging so integrations fail visibly rather than silently.",
        },
        {
          heading: "Performance optimization",
          body: "Modern image formats and responsive sizing, lazy loading, font optimization, minimal JavaScript, careful third-party script governance and caching strategy. We measure with field data, not just lab scores.",
        },
        {
          heading: "SEO-ready development",
          body: "Server-rendered content, semantic HTML, one H1 per page, logical heading hierarchy, per-page metadata control, canonical tags, XML sitemap, robots directives, breadcrumbs, descriptive URLs, image alt text and schema.org markup — built in from the first commit.",
        },
        {
          heading: "Support and iteration",
          body: "After launch we can continue with monitoring, security updates, incremental improvements and conversion experiments, so the site keeps improving instead of decaying between redesigns.",
        },
      ]}
      faqs={[
        {
          q: "What technologies do you build with?",
          a: "We choose the stack to fit the project — typically modern React-based frameworks with server rendering for marketing sites and applications, and established commerce or CMS platforms where they are the better fit.",
        },
        {
          q: "Can you redesign an existing site without losing rankings?",
          a: "Yes. Migrations include URL mapping, redirect planning, content parity checks and post-launch monitoring in Search Console to catch issues quickly.",
        },
        {
          q: "How long does a website take?",
          a: "A focused marketing site is usually a matter of weeks; commerce and application work depends on scope. We give a phased timeline after discovery rather than a number before understanding the requirements.",
        },
        {
          q: "Do you handle hosting and maintenance?",
          a: "We can advise on and set up hosting, and offer ongoing maintenance. Accounts and infrastructure are always owned by you.",
        },
      ]}
      related={[
        { label: "App Development", to: "/app-development" },
        { label: "SEO", to: "/seo" },
        { label: "Google Ads", to: "/google-ads" },
        { label: "Web & App Development", to: "/web-app-development" },
      ]}
    />
  ),
});
