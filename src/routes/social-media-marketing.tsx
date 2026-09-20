import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/social-media-marketing")({
  head: () =>
    pageMeta({
      title: "Social Media Marketing Agency | RUHTEXIN Studio",
      description:
        "Social media marketing and management: strategy, content planning, creative direction, Instagram, Facebook, LinkedIn, community engagement, analytics and growth.",
      path: "/social-media-marketing",
    }),
  component: () => (
    <ServicePage
      eyebrow="Growth"
      h1="SOCIAL MEDIA WITH A REASON TO EXIST."
      intro="Posting consistently is not a strategy. We build social programs with a defined audience, a clear point of view and a content system that supports both brand recognition and pipeline."
      path="/social-media-marketing"
      serviceName="Social Media Marketing"
      serviceDescription="Social media strategy, content planning, creative direction, community management and analytics."
      parent={{ label: "Content & Social Media", to: "/content-social-media" }}
      ctaLabel="Plan Your Social Program"
      highlights={[
        {
          title: "Fewer, better platforms",
          body: "We concentrate effort where your audience actually is rather than spreading thin across every network.",
        },
        {
          title: "Repeatable content system",
          body: "Defined content pillars and formats so production is consistent and does not depend on inspiration.",
        },
        {
          title: "Measured against outcomes",
          body: "Reach and engagement matter only as leading indicators of consideration and enquiries.",
        },
      ]}
      blocks={[
        {
          heading: "Strategy",
          body: "We define who the account is speaking to, what it stands for, which platforms deserve investment, and what success looks like in the next two quarters. That includes competitive review, audience research and a clear editorial position that is distinct enough to be remembered.",
        },
        {
          heading: "Content planning",
          body: "A monthly calendar built from defined content pillars — education, proof, product, perspective and culture — with a realistic production plan and approval workflow. Planning happens far enough ahead that quality is not sacrificed to deadlines.",
          bullets: [
            "Content pillars and format mix",
            "Monthly calendar and publishing cadence",
            "Campaign and launch moments",
            "Approval and asset management workflow",
          ],
        },
        {
          heading: "Creative direction",
          body: "Consistent visual language, typography, motion and tone so posts are recognizable before the logo is seen. Templates are built for speed, with room for original work where it matters most.",
        },
        {
          heading: "Instagram",
          body: "Reels for reach, carousels for depth, stories for relationship. We build a format mix suited to the offer, with hooks written for sound-off viewing and captions that carry their own value.",
        },
        {
          heading: "Facebook",
          body: "Used for community, local visibility, events and longer explanatory content, with an eye on how organic presence supports paid performance and social proof for prospective customers.",
        },
        {
          heading: "LinkedIn",
          body: "For B2B and founder-led brands, LinkedIn is often the highest-value network. We help develop a company and personal publishing rhythm grounded in real expertise, insight and client-facing perspective.",
        },
        {
          heading: "Community engagement",
          body: "Timely, human responses to comments and messages, with escalation rules for support and sales enquiries. Engagement is treated as part of the service experience, not a moderation chore.",
        },
        {
          heading: "Analytics and growth",
          body: "Monthly reporting on audience growth, content performance by format and pillar, profile actions and enquiries generated. Insights feed directly into next month's calendar so the program compounds.",
        },
      ]}
      faqs={[
        {
          q: "Do you handle posting and community management?",
          a: "Yes. We can manage the full cycle — planning, production, scheduling, publishing and responding — or support your in-house team with strategy and creative.",
        },
        {
          q: "How many posts per month?",
          a: "Volume is set by platform and objective. We prioritise a sustainable cadence of strong content over high-volume filler.",
        },
        {
          q: "Do you guarantee follower growth?",
          a: "No. Follower counts can be inflated artificially and rarely correlate with revenue. We commit to consistent quality and report on the metrics that indicate real business interest.",
        },
        {
          q: "Can social work alongside paid campaigns?",
          a: "Yes, and it should. Organic content is the best source of ideas and creative for Meta Ads, and paid amplification extends the reach of content that already performs.",
        },
      ]}
      related={[
        { label: "Content Marketing", to: "/content-marketing" },
        { label: "Meta Ads", to: "/meta-ads" },
        { label: "Digital Marketing", to: "/digital-marketing" },
        { label: "Content & Social Media", to: "/content-social-media" },
      ]}
    />
  ),
});
