import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/google-ads")({
  head: () =>
    pageMeta({
      title: "Google Ads Management Agency | RUHTEXIN Studio",
      description:
        "Google Ads management: search campaigns, Performance Max, display, remarketing, keyword strategy, landing pages and conversion tracking built for measurable demand.",
      path: "/google-ads",
    }),
  component: () => (
    <ServicePage
      eyebrow="Paid Advertising"
      h1="GOOGLE ADS BUILT AROUND REAL DEMAND."
      intro="Google Ads works when the account structure, keyword strategy, creative and landing experience all point at the same commercial outcome. We build campaigns that capture existing intent and measure what actually happens after the click."
      path="/google-ads"
      serviceName="Google Ads"
      serviceDescription="Google Ads management including search, Performance Max, display, remarketing and conversion tracking."
      parent={{ label: "Paid Advertising", to: "/paid-advertising" }}
      ctaLabel="Launch a Campaign"
      ctaTitle="Launch a campaign that pays attention to the numbers."
      highlights={[
        {
          title: "Intent before spend",
          body: "We identify which searches represent genuine buying intent before allocating a rupee of budget.",
        },
        {
          title: "Tracking that survives audit",
          body: "Conversion tracking is verified end to end so optimization decisions rest on trustworthy data.",
        },
        {
          title: "Landing experience included",
          body: "Ads are only half the job. We work on the destination page as part of the campaign, not after it.",
        },
      ]}
      blocks={[
        {
          heading: "Search Ads",
          body: "Text ads against high-intent queries remain the backbone of most accounts. We build tightly themed ad groups, write ads that match query intent, apply the right match types, and maintain aggressive negative keyword hygiene so budget is not consumed by irrelevant traffic.",
        },
        {
          heading: "Performance campaigns",
          body: "Performance Max and other automated campaign types can be effective, but only with strong inputs: clean conversion data, well-defined audience signals, quality assets and sensible exclusions. We treat automation as something to be steered, with brand and non-converting traffic controlled deliberately.",
        },
        {
          heading: "Display",
          body: "Display is used for controlled reach and audience building rather than cheap impressions. Placements, topics and audiences are curated, exclusions are maintained, and performance is judged on assisted outcomes rather than clicks alone.",
        },
        {
          heading: "Remarketing",
          body: "Different audiences deserve different messages. We segment by behaviour — page viewed, cart abandoned, form started, past customer — and set frequency and duration so remarketing supports the buying decision instead of harassing the visitor.",
        },
        {
          heading: "Keyword strategy",
          body: "Keyword research maps the full journey: problem-aware research terms, solution comparison terms, branded terms, competitor terms and transactional terms. Each cluster gets its own campaign role, budget logic and success metric.",
          bullets: [
            "Search term mining and negative keyword lists",
            "Match type strategy and query control",
            "Competitor and branded term policy",
            "Geographic and schedule targeting",
          ],
        },
        {
          heading: "Landing pages",
          body: "Message match matters more than clever copy. We align the landing page headline, proof and form with the promise of the ad, remove friction from the conversion path, and build dedicated pages where the offer justifies it.",
        },
        {
          heading: "Conversion tracking",
          body: "We implement and validate conversion tracking, including offline or phone-based conversions where the sale does not complete on the site, and define which conversions are counted as primary so bidding optimizes toward revenue rather than noise.",
        },
        {
          heading: "Campaign optimization",
          body: "Ongoing work is a disciplined loop: review search terms, test ads and assets, adjust bidding strategy and budgets, refine audiences, and prune what does not contribute. Changes are logged so their effect can be assessed.",
        },
      ]}
      faqs={[
        {
          q: "What budget do we need to start?",
          a: "It depends on your market's cost per click and how many conversions are needed for reliable optimization. We model a realistic starting budget from live keyword data before you commit.",
        },
        {
          q: "Do you take over an existing account?",
          a: "Yes. We audit the existing structure, tracking and history first, then decide with you what to restructure and what to preserve — account history has value and is not discarded casually.",
        },
        {
          q: "Will you promise a specific ROAS?",
          a: "No. We will model expected outcomes from your actual conversion rates and margins, and report performance honestly against those expectations.",
        },
        {
          q: "Who owns the ad account?",
          a: "You do. We work inside your account so all data, history and assets remain yours if the engagement ends.",
        },
      ]}
      related={[
        { label: "Meta Ads", to: "/meta-ads" },
        { label: "PPC Management", to: "/ppc-management" },
        { label: "SEO", to: "/seo" },
        { label: "Web Development", to: "/web-development" },
      ]}
    />
  ),
});
