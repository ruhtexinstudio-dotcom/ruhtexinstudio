import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/ai-seo")({
  head: () =>
    pageMeta({
      title: "AI SEO, GEO & AEO Services | RUHTEXIN Studio",
      description:
        "Optimize for AI-powered search. RUHTEXIN Studio works on entity clarity, structured content, schema and topical authority so AI assistants and answer engines can understand your brand.",
      path: "/ai-seo",
    }),
  component: () => (
    <ServicePage
      eyebrow="AI SEO · GEO · AEO"
      h1="OPTIMIZE FOR THE AGE OF AI SEARCH."
      intro="People increasingly ask questions instead of typing keywords, and receive synthesized answers instead of ten blue links. AI SEO is the work of making a brand legible, verifiable and quotable to the systems producing those answers."
      path="/ai-seo"
      serviceName="AI SEO"
      serviceDescription="Generative engine optimization, answer engine optimization and AI search visibility programs."
      parent={{ label: "SEO & AI Search", to: "/seo-ai-search" }}
      ctaLabel="Assess AI Search Readiness"
      highlights={[
        {
          title: "Be understood",
          body: "Entity clarity and structured data so machines know exactly who you are and what you do.",
        },
        {
          title: "Be retrievable",
          body: "Content organized into clean, self-contained, answer-shaped passages that can be extracted.",
        },
        {
          title: "Be corroborated",
          body: "Consistent facts across your site and credible third-party sources that reinforce them.",
        },
      ]}
      blocks={[
        {
          heading: "Traditional SEO",
          body: "Classic SEO optimizes for a ranked list of documents. Success is measured in positions, clicks and sessions. It remains essential: AI systems still crawl, index and evaluate the open web, and a site that cannot be crawled or trusted will not be cited either.",
        },
        {
          heading: "AEO — Answer Engine Optimization",
          body: "Answer engines extract a direct response rather than sending a click. AEO structures content so a single passage can stand on its own: a clear question as a heading, a concise factual answer immediately below, then supporting depth. Definitions, comparisons, specifications, pricing logic and step-by-step processes are the formats most often lifted into answers.",
        },
        {
          heading: "GEO — Generative Engine Optimization",
          body: "Generative engines compose answers from multiple sources and cite some of them. GEO focuses on being one of the sources worth composing from: original data, clear expertise, unambiguous attribution, quotable statements, and coverage of a topic deep enough that the model has reason to rely on you rather than a competitor.",
        },
        {
          heading: "AI Search Optimization",
          body: "In practice these overlap. Our program treats them as one system: fix the technical accessibility, define the entity, structure the content, prove the expertise, and keep facts consistent everywhere the brand appears — including places you do not own.",
          bullets: [
            "Structured, passage-level content design",
            "Entity clarity and disambiguation",
            "Topical authority mapping",
            "Technical accessibility for AI crawlers",
            "Factual consistency across owned and third-party sources",
            "Schema.org markup that reflects reality",
            "Authoritative references and citations",
            "Conversational and long-tail search intent coverage",
            "Answer-focused content formats",
          ],
        },
        {
          heading: "Entity clarity",
          body: "An AI system needs to resolve your brand to a single, well-defined entity: what it is, where it operates, what it offers, who runs it, and how it relates to other known entities. We align on-site markup, about and service pages, business profiles and external descriptions so the same picture emerges everywhere.",
        },
        {
          heading: "Topical authority",
          body: "Depth beats breadth. We map the full question space around your category, identify where your coverage is thin or contradictory, and build a publishing plan that turns scattered pages into a coherent body of expertise with strong internal linking.",
        },
        {
          heading: "Technical accessibility",
          body: "If content only exists after heavy client-side rendering, sits behind interaction, or is blocked by robots rules, it may never enter an AI system's index. We audit rendering, response times, feed availability and crawler directives so the content you want cited is actually reachable.",
        },
        {
          heading: "Measurement and honest expectations",
          body: "AI visibility cannot be tracked with the precision of classic rank tracking, and nobody can guarantee that a brand will appear in ChatGPT, Gemini or any AI answer. What we can do is monitor branded and category prompts across assistants, track referral traffic from AI surfaces, watch Search Console for AI-driven impressions, and improve the inputs that measurably influence inclusion.",
        },
      ]}
      faqs={[
        {
          q: "Can you guarantee my brand will appear in ChatGPT answers?",
          a: "No, and any agency that promises this is misleading you. AI systems do not sell placement in organic answers and their behaviour changes frequently. We improve the factors that make inclusion more likely and report on observed visibility over time.",
        },
        {
          q: "Is AI SEO a replacement for SEO?",
          a: "No. It is an extension. AI systems still depend on crawlable, trustworthy web content, so technical SEO, content quality and authority remain the foundation.",
        },
        {
          q: "What is the difference between GEO and AEO?",
          a: "AEO targets direct answer extraction — being the passage that answers a question. GEO targets generative synthesis — being a source the model draws on and cites when composing a longer answer. Most programs need both.",
        },
        {
          q: "How do you measure progress?",
          a: "Through prompt-based visibility monitoring across major assistants, AI referral traffic in analytics, Search Console trends, and the completion of the structural work — schema coverage, entity consistency and answer-formatted content.",
        },
      ]}
      related={[
        { label: "SEO", to: "/seo" },
        { label: "SEO & AI Search", to: "/seo-ai-search" },
        { label: "Content Marketing", to: "/content-marketing" },
        { label: "Web Development", to: "/web-development" },
      ]}
    />
  ),
});
