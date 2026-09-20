import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/meta-ads")({
  head: () =>
    pageMeta({
      title: "Meta Ads Agency — Facebook & Instagram Advertising | RUHTEXIN Studio",
      description:
        "Meta Ads management for Facebook and Instagram: audience strategy, creative testing, lead generation, retargeting and conversion campaigns with disciplined optimization.",
      path: "/meta-ads",
    }),
  component: () => (
    <ServicePage
      eyebrow="Paid Advertising"
      h1="META ADS THAT EARN ATTENTION."
      intro="On Facebook and Instagram nobody is searching for you — the creative has to earn the stop. We build Meta programs around a clear offer, a structured creative testing system and conversion tracking that reflects reality."
      path="/meta-ads"
      serviceName="Meta Ads"
      serviceDescription="Facebook and Instagram advertising: audience strategy, creative testing, lead generation and retargeting."
      parent={{ label: "Paid Advertising", to: "/paid-advertising" }}
      ctaLabel="Scale Your Social Advertising"
      ctaTitle="Scale your social advertising with a system, not guesswork."
      highlights={[
        {
          title: "Creative is the targeting",
          body: "With broad delivery, the creative decides who sees the ad. So creative gets the most rigour.",
        },
        {
          title: "Structured testing",
          body: "One variable at a time, enough budget to learn, and a clear rule for when to kill or scale.",
        },
        {
          title: "Signal quality",
          body: "Pixel, Conversions API and event configuration set up properly so optimization has something real to learn from.",
        },
      ]}
      blocks={[
        {
          heading: "Facebook advertising",
          body: "Facebook still reaches an enormous, demographically broad audience and remains strong for lead generation, local services, events and considered purchases. We use it for offers where trust and explanation matter, supported by longer-form creative and social proof.",
        },
        {
          heading: "Instagram advertising",
          body: "Instagram rewards visual clarity and native-feeling content. Reels, stories and feed placements each need their own treatment — the same asset stretched across all placements is the most common reason performance stalls.",
        },
        {
          heading: "Audience strategy",
          body: "We define a clear audience architecture: broad prospecting with strong creative signals, interest and lookalike layers where they genuinely add value, and precise retargeting segments based on real behaviour. Over-segmentation fragments budget and slows learning, so audiences are consolidated deliberately.",
        },
        {
          heading: "Creative testing",
          body: "Concepts are developed from customer language, objections and use cases, then tested in a structured queue: hooks first, then formats, then variations of the winner. Results feed a creative library so the account gets smarter over time instead of restarting each month.",
          bullets: [
            "Hook, angle and format testing framework",
            "Static, carousel, short-form video and UGC-style variations",
            "Message and offer testing",
            "Creative fatigue monitoring and refresh cadence",
          ],
        },
        {
          heading: "Lead generation",
          body: "Instant forms or landing pages, depending on the sales process. We tune lead quality with qualifying questions, follow-up speed recommendations and downstream feedback from the sales team — a cheap lead that never closes is not a result.",
        },
        {
          heading: "Retargeting",
          body: "Sequenced messaging for people who have engaged: address objections, show proof, and present the next logical step. Exclusions and frequency caps prevent the fatigue that makes retargeting counterproductive.",
        },
        {
          heading: "Conversion campaigns",
          body: "For e-commerce and direct-response offers we align catalogue setup, event tracking, attribution windows and bidding so campaigns optimize toward purchases and qualified actions rather than surface engagement.",
        },
        {
          heading: "Campaign optimization",
          body: "Weekly review of spend efficiency, creative performance, frequency and audience overlap, with a consistent decision rule for scaling budgets so learning phases are not reset unnecessarily.",
        },
      ]}
      faqs={[
        {
          q: "How much creative do you need each month?",
          a: "Enough to keep testing meaningful — typically several new concepts and variations per month. The exact volume depends on spend level and audience size, and we agree it up front.",
        },
        {
          q: "Can you produce the creative?",
          a: "Yes. Our content team can develop static, carousel and short-form video assets, or work alongside your in-house creative team.",
        },
        {
          q: "How is Meta attribution handled?",
          a: "We compare platform-reported results with analytics and, where possible, actual sales data, and make decisions on the fuller picture rather than in-platform numbers alone.",
        },
        {
          q: "Should we run Meta and Google together?",
          a: "Often, yes. Google captures existing intent while Meta creates it. We plan both so budgets complement each other rather than competing internally.",
        },
      ]}
      related={[
        { label: "Google Ads", to: "/google-ads" },
        { label: "PPC Management", to: "/ppc-management" },
        { label: "Social Media Marketing", to: "/social-media-marketing" },
        { label: "Content Marketing", to: "/content-marketing" },
      ]}
    />
  ),
});
