import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { ServicePage } from "@/components/service-page";
import { Container, Eyebrow, Reveal } from "@/components/ui-kit";

const FUNNEL = [
  { step: "Reach", body: "Put the offer in front of the right audience at a sustainable cost." },
  { step: "Click", body: "Earn the click with message and creative that match real intent." },
  { step: "Lead", body: "Convert the visit with a landing experience free of avoidable friction." },
  { step: "Customer", body: "Support the sale with follow-up, proof and remarketing sequences." },
  { step: "Repeat Customer", body: "Grow lifetime value through retention and audience reuse." },
];

export const Route = createFileRoute("/paid-advertising")({
  head: () =>
    pageMeta({
      title: "Paid Advertising & PPC Agency in India | RUHTEXIN",
      description:
        "Google Ads, Meta Ads and PPC management built around qualified leads, sales, accurate tracking and transparent campaign optimization.",
      path: "/paid-advertising",
    }),
  component: () => (
    <ServicePage
      eyebrow="Performance Marketing"
      h1="PAID ADVERTISING BUILT FOR BUSINESS OUTCOMES."
      intro="Clicks are easy to buy. Profitable demand is harder. We connect channel strategy, targeting, creative, landing pages and conversion tracking so Google Ads and Meta Ads can be judged by qualified leads, sales and customer value — not platform activity alone."
      path="/paid-advertising"
      serviceName="Paid Advertising"
      serviceDescription="Google Ads, Meta Ads and PPC management focused on qualified leads, sales, reliable tracking and sustainable acquisition costs."
      ctaLabel="Plan a Campaign"
      highlights={[
        {
          title: "Capture demand",
          body: "Reach people actively comparing solutions through tightly structured search campaigns and relevant landing pages.",
        },
        {
          title: "Create demand",
          body: "Use audience insight and a disciplined creative-testing program to introduce a strong offer before buyers search.",
        },
        {
          title: "Recover demand",
          body: "Re-engage interested visitors with useful proof and the right message, while controlling frequency and exclusions.",
        },
      ]}
      aside={
        <section className="border-y border-hairline bg-surface py-20 sm:py-28">
          <Container>
            <Eyebrow>The path we optimize</Eyebrow>
            <h2 className="text-display mt-6 text-3xl font-semibold sm:text-5xl">
              Reach → Click → Lead → Customer → Repeat
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-5">
              {FUNNEL.map((f, i) => (
                <Reveal key={f.step} delay={i * 80}>
                  <div className="surface-card surface-card-hover h-full p-6">
                    <span className="font-mono text-xs text-brand">0{i + 1}</span>
                    <h3 className="mt-3 text-base font-semibold">{f.step}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
              We publish performance figures only from verified client data. No illustrative ROAS or
              revenue claims appear on this site.
            </p>
          </Container>
        </section>
      }
      blocks={[
        {
          heading: "Paid media strategy and commercial model",
          body: "We start with your offer, margins, average order or contract value, sales close rate and buying cycle. Those inputs define a workable acquisition target and help us choose between search, shopping, social, video, display and remarketing instead of spreading budget across every available channel.",
        },
        {
          heading: "Google Ads",
          body: "Search, Shopping, Performance Max, YouTube, Display and remarketing campaigns organized around commercial intent. We manage query quality, negative keywords, feeds, assets, audiences and bidding only after the conversion data has been checked.",
        },
        {
          heading: "Meta Ads",
          body: "Facebook and Instagram campaigns built around clear offers and a repeatable creative-testing system. We test angles, formats, hooks and landing-page messages while monitoring audience saturation and creative fatigue.",
        },
        {
          heading: "B2B lead generation and social campaigns",
          body: "For considered purchases, we can combine Google Search with LinkedIn or Meta campaigns that educate prospects before they enquire. Lead quality is reviewed against sales outcomes, not just form submissions, so targeting and bids can move toward opportunities with genuine commercial value.",
        },
        {
          heading: "Conversion-focused campaigns",
          body: "Every campaign is tied to a meaningful action with an agreed value. We validate forms, calls, purchases and analytics events; where the sale happens later, CRM and offline conversion data can help distinguish qualified leads from inexpensive form fills.",
          bullets: [
            "Conversion tracking implementation and validation",
            "Offline and call conversion import",
            "Primary versus secondary conversion definition",
            "Value-based bidding where data supports it",
          ],
        },
        {
          heading: "Landing page optimization",
          body: "Ad performance is constrained by the page people reach. We improve message match, mobile speed, offer clarity, proof, calls to action and form friction. When traffic volume supports it, we test significant changes rather than cosmetic variations.",
        },
        {
          heading: "Campaign optimization",
          body: "Campaigns are reviewed through search terms, creative performance, audience quality, placement, budget pacing and bid targets. Changes follow a documented testing plan, giving platforms enough time to learn while preventing avoidable spend from continuing unchecked.",
        },
        {
          heading: "Reporting and honesty",
          body: "Reporting connects media spend to agreed commercial outcomes and distinguishes platform-reported conversions from verified business results. You retain ownership of advertising accounts and data, and we state clearly when attribution is uncertain or a channel is not earning further investment.",
        },
      ]}
      faqs={[
        {
          q: "Should we start with Google Ads or Meta Ads?",
          a: "Google Ads is often the stronger starting point when buyers already search for your offer. Meta Ads is useful when the audience is identifiable but demand must be created through compelling creative. The right mix depends on intent, economics and the sales journey.",
        },
        {
          q: "What is a realistic starting budget?",
          a: "A viable budget depends on search costs, audience size, expected conversion rate and the number of results needed to make decisions. We model a sensible test range before launch rather than applying one minimum to every business.",
        },
        {
          q: "How do you improve lead quality?",
          a: "We align keywords, audiences, ad promises and form questions with the customers you actually want. Where possible, qualified and closed outcomes are returned from the CRM so optimization is not driven by lead volume alone.",
        },
        {
          q: "Who owns the advertising accounts and data?",
          a: "You do. Campaigns should run in client-owned accounts with appropriate access for our team, so your history, audiences, tracking configuration and learnings remain with your business.",
        },
      ]}
      related={[
        { label: "Google Ads", to: "/google-ads" },
        { label: "Meta Ads", to: "/meta-ads" },
        { label: "PPC Management", to: "/ppc-management" },
        { label: "Web Development", to: "/web-development" },
      ]}
    />
  ),
});
