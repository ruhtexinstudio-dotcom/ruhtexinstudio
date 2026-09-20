import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/ppc-management")({
  head: () =>
    pageMeta({
      title: "PPC Management Services | RUHTEXIN Studio",
      description:
        "Ongoing PPC management across Google and Meta: account structure, bidding strategy, budget allocation, landing page optimization and transparent monthly reporting.",
      path: "/ppc-management",
    }),
  component: () => (
    <ServicePage
      eyebrow="Paid Advertising"
      h1="PPC MANAGEMENT WITHOUT THE GUESSWORK."
      intro="Paid media rewards operators, not launchers. PPC management is the ongoing discipline of structure, measurement and iteration that turns a functioning account into an efficient one."
      path="/ppc-management"
      serviceName="PPC Management"
      serviceDescription="Ongoing pay-per-click account management, optimization and reporting across search and social platforms."
      parent={{ label: "Paid Advertising", to: "/paid-advertising" }}
      ctaLabel="Request a PPC Audit"
      highlights={[
        {
          title: "Structure that scales",
          body: "Accounts organized so budget, reporting and optimization map cleanly to business lines.",
        },
        {
          title: "One efficiency loop",
          body: "A repeatable weekly and monthly cadence rather than reactive changes when results dip.",
        },
        {
          title: "Full-funnel view",
          body: "Judged on qualified leads and revenue contribution, not clicks and impressions.",
        },
      ]}
      blocks={[
        {
          heading: "Account audit and restructure",
          body: "Every engagement starts with an audit: tracking integrity, campaign structure, wasted spend, search term quality, audience overlap, landing experience and historical performance. We then agree what to rebuild and what to keep, protecting valuable account history.",
        },
        {
          heading: "Budget allocation",
          body: "Budget is allocated by role — capturing existing demand, creating new demand, and recovering lost demand — and reallocated as evidence accumulates. Spend follows performance rather than a fixed monthly split.",
        },
        {
          heading: "Bidding and automation strategy",
          body: "Automated bidding is powerful when it is fed correct conversion data and given sensible constraints. We choose bid strategies based on conversion volume and data quality, then adjust targets gradually rather than swinging them week to week.",
        },
        {
          heading: "Landing page optimization",
          body: "Improving the destination often produces larger gains than improving the ad. We review load speed, message match, form friction, trust signals and mobile experience, and test changes where traffic volume supports a conclusion.",
          bullets: [
            "Message match with ad promise",
            "Form length and field friction",
            "Mobile page speed and layout",
            "Trust and proof placement",
            "Call and enquiry tracking",
          ],
        },
        {
          heading: "Conversion tracking and attribution",
          body: "We validate that every meaningful action is tracked once, correctly, and that primary conversions represent business value. Where sales close offline, we help connect CRM outcomes back to campaigns so optimization reflects revenue.",
        },
        {
          heading: "Reporting and communication",
          body: "Monthly reporting covers spend, efficiency, conversion quality, what was tested, what was learned and what changes next. You keep full account access at all times, and no metric is presented without context.",
        },
        {
          heading: "Cross-channel coordination",
          body: "Search, social, remarketing and organic are planned together so channels support each other. That includes using search query data to inform SEO content and using organic performance to decide where paid budget is unnecessary.",
        },
      ]}
      faqs={[
        {
          q: "How is PPC management priced?",
          a: "Typically a monthly management fee based on account complexity and workload rather than a pure percentage of spend, so our incentive is not simply to increase your budget.",
        },
        {
          q: "What is the minimum engagement?",
          a: "We recommend at least three months. Meaningful optimization requires enough conversion data to draw conclusions rather than react to noise.",
        },
        {
          q: "Which platforms do you manage?",
          a: "Primarily Google Ads and Meta Ads. Additional platforms are considered when they clearly fit the audience and the business case.",
        },
        {
          q: "Do we get access to the accounts?",
          a: "Always. Accounts are created under your ownership and you retain full administrative access.",
        },
      ]}
      related={[
        { label: "Google Ads", to: "/google-ads" },
        { label: "Meta Ads", to: "/meta-ads" },
        { label: "Paid Advertising", to: "/paid-advertising" },
        { label: "Web Development", to: "/web-development" },
      ]}
    />
  ),
});
