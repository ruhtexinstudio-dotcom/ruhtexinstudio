import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/content-marketing")({
  head: () =>
    pageMeta({
      title: "Content Marketing Services — SEO, Blog & Video Content | RUHTEXIN Studio",
      description:
        "Content marketing built on search intent: content strategy, SEO content, blogs, social content, thought leadership, video and distribution.",
      path: "/content-marketing",
    }),
  component: () => (
    <ServicePage
      eyebrow="Growth"
      h1="CONTENT THAT COMPOUNDS."
      intro="Content marketing is not publishing volume. It is building a body of work that answers the questions your market is already asking — and that keeps returning value long after it goes live."
      path="/content-marketing"
      serviceName="Content Marketing"
      serviceDescription="Content strategy, SEO content, blogs, social content, thought leadership, video content and distribution."
      parent={{ label: "Content & Social Media", to: "/content-social-media" }}
      ctaLabel="Build a Content Engine"
      highlights={[
        {
          title: "Intent-mapped",
          body: "Every piece is tied to a specific question, stage of the journey and business outcome.",
        },
        {
          title: "Written by people",
          body: "Research, interviews and subject-matter input — AI assists the process, it does not replace judgement.",
        },
        {
          title: "Built to be found",
          body: "Structure, internal linking and schema so content earns visibility in search and AI answers.",
        },
      ]}
      blocks={[
        {
          heading: "Content strategy",
          body: "We map the questions your buyers ask across awareness, evaluation and decision, audit what you already have, and produce a prioritized plan: what to create, what to consolidate, what to refresh and what to retire. Each planned piece carries a target intent, a format and a measurable purpose.",
        },
        {
          heading: "SEO content",
          body: "Content designed to rank and to satisfy. That means covering the topic completely, structuring it for scanning and extraction, supporting claims with evidence, and linking it into the wider site so authority flows to the pages that drive revenue.",
          bullets: [
            "Topic cluster and pillar architecture",
            "Search intent and SERP analysis",
            "Heading structure and internal linking",
            "Schema markup and answer-formatted passages",
            "Content refresh and consolidation cycles",
          ],
        },
        {
          heading: "Blogs and editorial",
          body: "Long-form articles, guides, comparisons and explainers that establish competence. We work from real expertise inside your business through structured interviews, so the output says something a competitor could not simply copy.",
        },
        {
          heading: "Social content",
          body: "Editorial work is adapted into platform-native formats rather than posted as links. One substantial piece can support carousels, short video scripts, quote cards and email — multiplying the return on the original research.",
        },
        {
          heading: "Thought leadership",
          body: "Founder and expert-led perspective pieces that take a defensible position. This is often the most effective content for B2B consideration, and it is the material AI systems are most likely to cite as an authoritative viewpoint.",
        },
        {
          heading: "Video content",
          body: "Short-form video for social and search, plus explainer and testimonial formats for landing pages. Scripts are built around a hook, a single idea and a clear next step, with captions and thumbnails treated as part of the asset.",
        },
        {
          heading: "Content distribution",
          body: "Publishing is the midpoint, not the finish. Distribution covers email, social, community, partnerships, internal linking and paid amplification where a piece proves its value organically.",
        },
        {
          heading: "Measurement",
          body: "We track organic visibility, engaged reading, assisted conversions and content-influenced enquiries, and review the plan quarterly to double down on formats and topics that demonstrably work.",
        },
      ]}
      faqs={[
        {
          q: "Do you use AI to write content?",
          a: "We use AI for research support, outlining and drafting assistance where it helps, but every published piece is directed, edited and fact-checked by a person. Unreviewed generated content is a liability for both credibility and search performance.",
        },
        {
          q: "How much content do we need?",
          a: "Fewer, deeper pieces usually outperform high-volume publishing. A typical program starts with a focused cluster and expands based on what earns traction.",
        },
        {
          q: "How long before content produces results?",
          a: "Search-driven content generally needs three to six months to mature. Social and email distribution produce earlier signals about which topics resonate.",
        },
        {
          q: "Can you work with our subject matter experts?",
          a: "Yes, and it produces the strongest results. We run structured interviews and turn expert knowledge into publishable work with minimal time demand on your team.",
        },
      ]}
      related={[
        { label: "SEO", to: "/seo" },
        { label: "AI SEO", to: "/ai-seo" },
        { label: "Social Media Marketing", to: "/social-media-marketing" },
        { label: "Insights", to: "/insights" },
      ]}
    />
  ),
});
