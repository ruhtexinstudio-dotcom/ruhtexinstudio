import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/content-social-media")({
  head: () =>
    pageMeta({
      title: "Content & Social Media Agency in India | RUHTEXIN",
      description:
        "Content strategy, SEO copywriting, social media management and short-form video designed to build discoverability, trust and qualified demand.",
      path: "/content-social-media",
    }),
  component: () => (
    <ServicePage
      eyebrow="Content Strategy & Social"
      h1="CONTENT PEOPLE FIND, TRUST AND ACT ON."
      intro="Good content does more than fill a calendar. It answers customer questions, earns search visibility, gives sales teams useful proof and creates ideas worth sharing. We connect strategy, writing, design, video and distribution so every asset has a clear job."
      path="/content-social-media"
      serviceName="Content & Social Media"
      serviceDescription="Content strategy, SEO copywriting, social media management, short-form video and campaign creative for sustained discovery and demand."
      ctaLabel="Build a Content System"
      highlights={[
        {
          title: "Built from audience insight",
          body: "Topics come from search demand, customer questions, sales objections and channel performance — not guesswork.",
        },
        {
          title: "Designed for each channel",
          body: "One core idea can become a search article, landing-page proof, video script and social series without feeling copied.",
        },
        {
          title: "Measured beyond output",
          body: "We review visibility, meaningful engagement, enquiries and assisted conversions instead of reporting post volume alone.",
        },
      ]}
      blocks={[
        {
          heading: "Creative strategy",
          body: "We define the audiences, buying questions, brand point of view and business priorities that content must serve. The strategy sets themes, channel roles, formats, tone, evidence requirements, publishing cadence and a practical workflow for review and approval.",
        },
        {
          heading: "Social media content",
          body: "We create platform-native posts for Instagram, Facebook and LinkedIn rather than distributing the same asset everywhere. Reels and short video can build reach; carousels explain; founder or expert posts build authority; stories and community content keep the brand responsive.",
        },
        {
          heading: "SEO content",
          body: "Service pages, landing pages, articles and resource hubs are planned around the questions people ask before choosing a provider. Copy is structured for readers first, with clear headings, direct answers, internal links, supporting evidence and metadata that help search and AI systems interpret it accurately.",
        },
        {
          heading: "Website content",
          body: "Homepage, service, product and landing-page copy should make the offer, audience, difference and next step immediately clear. We combine customer language with conversion structure so the page informs serious buyers instead of relying on slogans.",
        },
        {
          heading: "Blog content",
          body: "We turn internal expertise into useful articles, comparisons, guides and opinion pieces through interviews and research. Existing content is audited and refreshed alongside new publishing, because improving a proven page can be more valuable than adding another thin article.",
        },
        {
          heading: "Short-form video content",
          body: "Short-form videos are planned around one useful idea, a strong opening and a clear next step. We support scripting, shot planning, direction and editing, with captions, cover frames and platform-safe crops included in the production process.",
          bullets: [
            "Hook and script development",
            "Shoot planning and direction",
            "Editing, captions and thumbnails",
            "Format testing across platforms",
          ],
        },
        {
          heading: "Ad creative strategy",
          body: "Paid campaigns need more than resized organic posts. We develop concepts around customer motivations, objections, proof and offers, then create deliberate variations in hook, format and message so media teams can learn what drives qualified response.",
        },
        {
          heading: "Social media management",
          body: "Management can include calendar ownership, asset coordination, scheduling, publishing, comment and message triage, and monthly analysis. Clear escalation rules ensure support issues and sales enquiries reach the right person rather than getting lost in a social inbox.",
        },
      ]}
      faqs={[
        {
          q: "Do you produce video in-house?",
          a: "We can handle concept development, scripting, shot planning, direction and editing. Production scope depends on location and complexity, and any external production requirements are agreed before work begins.",
        },
        {
          q: "Can you work with our brand guidelines?",
          a: "Yes. We translate existing brand rules into repeatable social, editorial and video formats. Where guidance is incomplete, we can define a practical content system without replacing the wider brand identity.",
        },
        {
          q: "How do you decide what to create?",
          a: "We combine search demand, customer questions, sales conversations, product priorities, competitor gaps and previous channel performance. Each proposed piece should have an audience, purpose, distribution plan and useful next step.",
        },
        {
          q: "How do you measure content and social media performance?",
          a: "Metrics depend on the job of the content. We may track organic visibility, engaged visits, saves, qualified comments, profile actions, enquiries and assisted conversions. Reach matters, but it is not treated as proof of business impact by itself.",
        },
      ]}
      related={[
        { label: "Content Marketing", to: "/content-marketing" },
        { label: "Social Media Marketing", to: "/social-media-marketing" },
        { label: "Meta Ads", to: "/meta-ads" },
        { label: "SEO", to: "/seo" },
      ]}
    />
  ),
});
