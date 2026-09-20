import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/seo")({
  head: () =>
    pageMeta({
      title: "SEO Services — Technical, On-Page & Local SEO | RUHTEXIN Studio",
      description:
        "SEO services from RUHTEXIN Studio: technical SEO, on-page optimization, content strategy, authority building, local SEO and e-commerce SEO with clear reporting.",
      path: "/seo",
    }),
  component: () => (
    <ServicePage
      eyebrow="Search & Organic Growth"
      h1="SEO THAT BUILDS LONG-TERM VISIBILITY."
      intro="Search engine optimization is a compounding asset. We build the technical foundation, the content depth and the authority signals that let a website earn qualified organic traffic year after year."
      path="/seo"
      serviceName="SEO"
      serviceDescription="Technical SEO, on-page optimization, content strategy, authority building, local SEO and e-commerce SEO."
      parent={{ label: "SEO & AI Search", to: "/seo-ai-search" }}
      ctaLabel="Request an SEO Review"
      highlights={[
        {
          title: "Foundations first",
          body: "Crawlability, indexation, site architecture and page experience are fixed before anything else is scaled.",
        },
        {
          title: "Intent-led content",
          body: "Pages are mapped to real search intent, not keyword volume alone, so each page has a job to do.",
        },
        {
          title: "Honest measurement",
          body: "Rankings, impressions, clicks, assisted conversions — reported in context, without vanity metrics.",
        },
      ]}
      blocks={[
        {
          heading: "What is SEO?",
          body: "SEO is the practice of making a website easy for search engines to crawl, understand and trust, and genuinely useful for the people who arrive from it. It spans engineering, content, information architecture and off-site reputation. Done well, it reduces dependence on paid channels because visibility persists once the work is in place.",
        },
        {
          heading: "Why SEO matters",
          body: "Organic search is usually the highest-intent, lowest-marginal-cost channel available to a business. A visitor searching for a solution is already in the market. Unlike advertising, the value of a well-optimized page does not disappear the moment budget stops — although it does require maintenance as competitors, algorithms and search interfaces evolve.",
        },
        {
          heading: "Our SEO approach",
          body: "We start with an audit of technical health, content coverage and competitive position, then build a prioritized roadmap. Work is sequenced so that fixes with the widest impact ship first, and every change is documented so its effect can be evaluated later.",
          bullets: [
            "Technical and crawl audit",
            "Keyword and intent mapping",
            "Information architecture and internal linking plan",
            "Content production and optimization calendar",
            "Authority and digital PR planning",
            "Measurement framework in Search Console and analytics",
          ],
        },
        {
          heading: "Technical SEO",
          body: "The engineering layer: server response and rendering, Core Web Vitals, indexation control, canonical logic, structured data, sitemaps, pagination, hreflang where relevant, and JavaScript rendering behaviour. We work directly with development teams — or handle it ourselves when RUHTEXIN also builds the site.",
          bullets: [
            "Crawl budget and index bloat control",
            "Core Web Vitals and rendering performance",
            "Canonicalization and duplicate content handling",
            "Schema.org structured data implementation",
            "XML sitemaps and robots directives",
            "Migration and redirect planning",
          ],
        },
        {
          heading: "On-page SEO",
          body: "Each page needs a single clear purpose, a logical heading hierarchy, descriptive metadata and content that fully answers the query it targets. We optimize titles, descriptions, headings, media, internal links and page structure so both readers and crawlers can follow the argument of the page.",
        },
        {
          heading: "Content strategy",
          body: "Content is where SEO becomes a business asset. We build topic clusters around the problems your customers are trying to solve, pair informational content with commercial pages, and keep existing content refreshed rather than endlessly publishing new pages that dilute authority.",
        },
        {
          heading: "Authority building",
          body: "Off-page work focuses on earning legitimate references: useful assets, expert commentary, partnerships, listings and press that genuinely relates to the business. We do not buy link networks or use tactics that create long-term risk.",
        },
        {
          heading: "Local SEO",
          body: "For businesses serving a city or region, local visibility is driven by a well-maintained Google Business Profile, consistent citations, location-relevant content, review practices and local link relevance. We build location pages only where the business genuinely operates or serves clients.",
        },
        {
          heading: "E-commerce SEO",
          body: "Product and category pages need faceted navigation control, clean URL patterns, product schema, unique category copy, internal linking from editorial content and careful handling of out-of-stock and variant pages. Merchandising and SEO are planned together so category structure reflects demand.",
        },
        {
          heading: "SEO analytics",
          body: "We configure Search Console, analytics and rank tracking so the program can be judged fairly, then report monthly on visibility, traffic quality and conversion contribution — including what did not work and what we are changing as a result.",
        },
      ]}
      faqs={[
        {
          q: "How long does SEO take to show results?",
          a: "It depends on the site's current authority, technical health and competition. Technical fixes can show effects within weeks; content and authority programs typically need three to six months before trends are clear, and continue to compound after that.",
        },
        {
          q: "Can you guarantee a number one ranking?",
          a: "No. No agency can legitimately guarantee rankings, because search engines control the results. We commit to the quality and consistency of the work and to transparent reporting on what it produces.",
        },
        {
          q: "Do you work with our existing developers?",
          a: "Yes. We can deliver prioritized technical specifications to your team, or implement changes directly if RUHTEXIN Studio also handles the development.",
        },
        {
          q: "How does SEO relate to AI search?",
          a: "Strong SEO fundamentals — clear structure, factual accuracy, entity clarity and authority — are also the foundation for being surfaced in AI answers. Our AI SEO practice extends that work rather than replacing it.",
        },
      ]}
      related={[
        { label: "AI SEO / GEO / AEO", to: "/ai-seo" },
        { label: "Content Marketing", to: "/content-marketing" },
        { label: "Web Development", to: "/web-development" },
        { label: "Google Ads", to: "/google-ads" },
      ]}
    />
  ),
});
