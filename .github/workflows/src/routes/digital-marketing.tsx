import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/digital-marketing")({
  head: () =>
    pageMeta({
      title: "Digital Marketing Agency — Strategy & Brand Growth | RUHTEXIN Studio",
      description:
        "Digital marketing from RUHTEXIN Studio: digital strategy, brand growth, social media marketing, content marketing and integrated campaigns measured against business outcomes.",
      path: "/digital-marketing",
    }),
  component: () => (
    <ServicePage
      eyebrow="Practice"
      h1="DIGITAL MARKETING WITH A STRATEGY BEHIND IT."
      intro="Channels are easy to buy and hard to coordinate. We build one growth plan across search, social, content and advertising — sequenced by what will move the business first."
      path="/digital-marketing"
      serviceName="Digital Marketing"
      serviceDescription="Digital strategy, brand growth, social media marketing, content marketing and integrated campaign management."
      highlights={[
        {
          title: "One plan, not five vendors",
          body: "Search, content, social and paid managed as a single system with shared goals and shared data.",
        },
        {
          title: "Positioning first",
          body: "Before tactics, we get clear on who you serve, what you offer and why anyone should choose you.",
        },
        {
          title: "Measured against revenue",
          body: "Reporting connects channel activity to enquiries and customers, not just traffic charts.",
        },
      ]}
      blocks={[
        {
          heading: "Digital strategy",
          body: "We assess the market, the competitive set, current performance and internal capacity, then define the growth thesis: which audiences, which channels, which offers, in which order. The output is a roadmap with priorities, budget logic, owners and a measurement plan — not a slide deck of best practices.",
          bullets: [
            "Market and competitor analysis",
            "Audience and offer definition",
            "Channel prioritisation and budget model",
            "Messaging framework",
            "Measurement and reporting plan",
          ],
        },
        {
          heading: "Brand growth",
          body: "Sustainable growth needs more than performance marketing. We work on the parts that make acquisition cheaper over time: a distinct position, consistent messaging, recognisable design and a reason to be remembered when someone is finally ready to buy.",
        },
        {
          heading: "Search and organic",
          body: "SEO and AI search optimization build a base of visibility that does not reset when budget pauses. This work is planned alongside paid so you are not paying repeatedly for demand you could earn.",
        },
        {
          heading: "Social media marketing",
          body: "Platform strategy, content systems and community management that build familiarity and trust ahead of the buying moment, and feed the creative pipeline for paid social.",
        },
        {
          heading: "Content marketing",
          body: "Editorial, SEO and video content mapped to real questions along the buying journey, structured so it earns visibility in both traditional search and AI answers.",
        },
        {
          heading: "Paid advertising",
          body: "Google Ads and Meta Ads used deliberately — to capture existing demand, create new demand, and recover interest that did not convert the first time.",
        },
        {
          heading: "Analytics and reporting",
          body: "We set up clean measurement, agree which numbers matter, and report monthly on performance, learnings and next actions. Where attribution is uncertain, we say so rather than presenting false precision.",
        },
        {
          heading: "Working with your team",
          body: "Engagements are structured so your internal team gains capability: documented processes, shared dashboards and clear handover points if you eventually bring functions in house.",
        },
      ]}
      faqs={[
        {
          q: "Can we start with one channel?",
          a: "Yes. Many engagements start with a single practice — SEO or paid media — and expand once the foundations and measurement are in place.",
        },
        {
          q: "How do you decide where to spend budget?",
          a: "From evidence: existing demand volume, competitive cost, your conversion rates and margins, and the time each channel needs to produce results. The split is revisited as data accumulates.",
        },
        {
          q: "What reporting will we receive?",
          a: "A monthly report covering activity, performance against agreed metrics, what we learned and what changes next, plus dashboard access for live numbers.",
        },
        {
          q: "Do you require long contracts?",
          a: "We recommend enough time for the work to produce measurable signals — usually three months minimum — but we do not lock clients into long agreements to keep them.",
        },
      ]}
      related={[
        { label: "SEO & AI Search", to: "/seo-ai-search" },
        { label: "Paid Advertising", to: "/paid-advertising" },
        { label: "Content & Social Media", to: "/content-social-media" },
        { label: "Web & App Development", to: "/web-app-development" },
      ]}
    />
  ),
});
