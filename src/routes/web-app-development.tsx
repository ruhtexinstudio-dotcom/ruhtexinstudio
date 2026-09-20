import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/web-app-development")({
  head: () =>
    pageMeta({
      title: "Web & App Development Company in India | RUHTEXIN",
      description:
        "Web and app development for business websites, e-commerce, SaaS products, portals and mobile apps, from UX and engineering through launch and support.",
      path: "/web-app-development",
    }),
  component: () => (
    <ServicePage
      eyebrow="Digital Products & Platforms"
      h1="WEB AND APP DEVELOPMENT BUILT AROUND REAL USERS."
      intro="We design and develop business websites, e-commerce experiences, web applications and mobile products that are clear to use, fast in practice and maintainable after launch. Strategy, UX, engineering, integrations and growth considerations stay connected from the first workshop."
      path="/web-app-development"
      serviceName="Web & App Development"
      serviceDescription="UX design and engineering for business websites, e-commerce, web applications, SaaS products, portals and mobile apps."
      ctaLabel="Build With RUHTEXIN"
      ctaTitle="Build with a team that also has to make the traffic convert."
      highlights={[
        {
          title: "Discovery before development",
          body: "We define users, workflows, requirements and success criteria before choosing features or technology.",
        },
        {
          title: "Quality designed in",
          body: "Performance, accessibility, security, analytics and search fundamentals are considered throughout delivery.",
        },
        {
          title: "Ownership without lock-in",
          body: "You receive the completed code, agreed documentation and access to the accounts used to operate your product.",
        },
      ]}
      blocks={[
        {
          heading: "Business websites and landing pages",
          body: "We build corporate, service and campaign websites around the information customers need to make a decision. Clear architecture, reusable page patterns, editable content, analytics and technical SEO are part of the build rather than additions made after launch.",
        },
        {
          heading: "E-commerce",
          body: "E-commerce development connects product discovery, category navigation, merchandising, search, payments and fulfilment. We pay close attention to mobile purchasing, product data, structured markup, image performance and checkout friction because each affects both acquisition and conversion.",
        },
        {
          heading: "Product discovery and UX design",
          body: "Projects begin by defining users, business rules, content and the critical journeys the product must support. We translate those requirements into user flows, wireframes and interactive prototypes so important decisions are tested before engineering effort is committed.",
        },
        {
          heading: "Web applications",
          body: "We develop customer portals, dashboards, booking systems, SaaS products and internal tools with appropriate authentication, permissions, data models and operational workflows. An initial release focuses on the smallest complete product that can be used and evaluated, not a disposable prototype.",
        },
        {
          heading: "Mobile applications",
          body: "Mobile projects cover product definition, iOS and Android experience design, application development, backend services, analytics, testing and store-release support. Native or cross-platform delivery is selected from product needs, device capabilities and long-term maintenance costs.",
        },
        {
          heading: "UI/UX design",
          body: "Interfaces are designed as coherent systems rather than isolated screens. We establish reusable components, predictable states, accessible contrast and keyboard behaviour, responsive layouts, content rules and interaction patterns that engineering teams can implement consistently.",
          bullets: [
            "User flows and wireframes",
            "Design system and components",
            "Accessibility standards",
            "Responsive design across desktop, tablet and mobile",
          ],
        },
        {
          heading: "Engineering quality and testing",
          body: "Code review, automated checks where appropriate, device testing, accessibility review, error handling and performance budgets reduce avoidable launch risk. For existing products, we can audit Core Web Vitals, technical SEO, usability and conversion paths before recommending whether to improve or rebuild.",
        },
        {
          heading: "Integrations, launch and support",
          body: "We connect payments, CRM, analytics, marketing automation and third-party APIs with validation and failure states considered. Launch includes production configuration, monitoring and handover; ongoing support can cover maintenance, security updates, performance and planned product improvements.",
        },
      ]}
      faqs={[
        {
          q: "Can you build an MVP for a new product?",
          a: "Yes. We define the core user journey and the smallest complete feature set needed to test the product responsibly. The goal is to learn quickly without creating an unstable foundation that must immediately be discarded.",
        },
        {
          q: "Can you improve our current site instead of rebuilding?",
          a: "Often, yes. We first review the current code, platform, performance, content model and business goals. If targeted improvements can deliver the required outcome safely, we recommend them rather than defaulting to a rebuild.",
        },
        {
          q: "How do projects run?",
          a: "Work moves through discovery, requirements, UX and interface design, development in reviewable stages, quality assurance, launch and post-launch monitoring. Scope, responsibilities and approval points are agreed before delivery begins.",
        },
        {
          q: "Who owns the code?",
          a: "The client owns the completed custom code and agreed deliverables once contractual obligations are met. Hosting, domain and third-party accounts should also remain under client ownership, with licensing terms documented for any external software used.",
        },
      ]}
      related={[
        { label: "Web Development", to: "/web-development" },
        { label: "App Development", to: "/app-development" },
        { label: "SEO", to: "/seo" },
        { label: "Case Studies", to: "/case-studies" },
      ]}
    />
  ),
});
