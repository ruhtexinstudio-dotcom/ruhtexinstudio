import { createFileRoute } from "@tanstack/react-router";
import { pageMeta, breadcrumbSchema } from "@/lib/site";
import {
  Section,
  Eyebrow,
  PageHero,
  CTASection,
  JsonLd,
  Reveal,
  RelatedLinks,
} from "@/components/ui-kit";

const TOPICS = [
  {
    tag: "Search",
    title: "How AI answers change the value of a ranking",
    body: "What being cited by an assistant means for traffic, and which parts of a traditional SEO program still drive that citation.",
  },
  {
    tag: "Advertising",
    title: "Reading paid media data without fooling yourself",
    body: "Attribution limits, statistical significance at low volume, and how to tell a real improvement from noise.",
  },
  {
    tag: "Content",
    title: "Structuring content so machines can quote it",
    body: "Passage-level clarity, entity consistency and schema — the practical layer beneath most AI visibility advice.",
  },
  {
    tag: "Technology",
    title: "Why site speed is a marketing decision",
    body: "How performance budgets set during design protect conversion rate and paid media efficiency later.",
  },
  {
    tag: "Strategy",
    title: "Choosing between demand capture and demand creation",
    body: "A simple framework based on category maturity, margin and sales cycle length.",
  },
  {
    tag: "Craft",
    title: "What a good analytics setup actually looks like",
    body: "Event naming, conversion definitions and the small decisions that determine whether reporting is trustworthy.",
  },
];

export const Route = createFileRoute("/insights")({
  head: () =>
    pageMeta({
      title: "Insights — Search, Advertising & Technology Thinking | RUHTEXIN Studio",
      description:
        "Practical writing from RUHTEXIN Studio on SEO, AI search, paid advertising, content strategy and web technology. Articles are in preparation.",
      path: "/insights",
    }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Insights", item: "/insights" },
        ])}
      />
      <PageHero
        eyebrow="Insights"
        title="THINKING WE'D WANT TO READ OURSELVES."
        intro="Practical writing on search, advertising, content and technology — published when we have something genuinely useful to say, not on a content calendar."
        breadcrumbs={[{ label: "Insights" }]}
      />

      <Section>
        <Eyebrow>In preparation</Eyebrow>
        <h2 className="text-display mt-6 max-w-3xl text-3xl font-semibold sm:text-4xl">
          The topics our first articles will cover.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          These are outlines, not published pieces. We would rather list what is coming than fill
          the page with generic posts.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((t, i) => (
            <Reveal key={t.title} delay={i * 80}>
              <article className="surface-card surface-card-hover flex h-full flex-col p-8">
                <span className="eyebrow text-brand">{t.tag}</span>
                <h3 className="mt-4 text-lg leading-snug font-semibold">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                <span className="mt-auto pt-6 text-xs text-muted-foreground">Coming soon</span>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Editorial standard</Eyebrow>
            <h2 className="text-display mt-6 text-3xl font-semibold sm:text-4xl">
              Written by practitioners, not generated in bulk.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Every article will come from work we have actually done. Where we cite data, we will
              say where it came from. Where something is our opinion, we will label it as such.
            </p>
            <p>
              Existing pieces will be updated as platforms change rather than left to age quietly —
              the same standard we apply to client content.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <RelatedLinks
            links={[
              { label: "SEO & AI Search", to: "/seo-ai-search" },
              { label: "Paid Advertising", to: "/paid-advertising" },
              { label: "Content & Social Media", to: "/content-social-media" },
              { label: "Web & App Development", to: "/web-app-development" },
            ]}
          />
        </div>
      </Section>

      <CTASection
        title="Have a question we should write about?"
        body="If it comes up often enough, it belongs here. Send it over and we'll answer it properly."
        primaryLabel="Ask a Question"
      />
    </>
  );
}
