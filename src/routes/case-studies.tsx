import { createFileRoute } from "@tanstack/react-router";
import { pageMeta, breadcrumbSchema } from "@/lib/site";
import {
  Section,
  Eyebrow,
  PageHero,
  StatementGrid,
  CTASection,
  JsonLd,
  Reveal,
  Action,
} from "@/components/ui-kit";

const APPROACH = [
  {
    index: "01",
    title: "Verified numbers only",
    body: "Every figure we publish will come from a client's own analytics, Search Console or ad account, with their permission.",
  },
  {
    index: "02",
    title: "Full context",
    body: "Starting position, timeframe, budget and what else changed — because a percentage with no baseline means nothing.",
  },
  {
    index: "03",
    title: "What did not work",
    body: "Tests that failed are part of the story. Case studies that only show wins are marketing, not evidence.",
  },
];

const FORMAT = [
  "The business and the market it competes in",
  "The specific constraint we were asked to solve",
  "The approach taken and why alternatives were rejected",
  "What was implemented, in detail",
  "Measured outcomes over a stated period",
  "What we would do differently next time",
];

export const Route = createFileRoute("/case-studies")({
  head: () =>
    pageMeta({
      title: "Case Studies — Verified Client Work | RUHTEXIN Studio",
      description:
        "RUHTEXIN Studio publishes case studies only with verified client data and full context. Detailed engagement write-ups are being prepared for release.",
      path: "/case-studies",
    }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Case Studies", item: "/case-studies" },
        ])}
      />
      <PageHero
        eyebrow="Work"
        title="RESULTS WE CAN PROVE. NOTHING WE CAN'T."
        intro="We are preparing detailed case studies with verified client data and full permission. Until each one is confirmed, this page stays honest about what it can show."
        breadcrumbs={[{ label: "Case Studies" }]}
      >
        <Action to="/contact">Discuss Your Project</Action>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Why this page looks like this</Eyebrow>
            <h2 className="text-display mt-6 text-3xl font-semibold sm:text-4xl">
              Invented results are the industry norm. We're not doing that.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Most agency case study pages launch on day one, complete with confident percentages
              nobody can verify. It is the easiest thing in the world to write and the least useful
              thing a prospective client can read.
            </p>
            <p>
              We would rather show you nothing than show you something fabricated. Each engagement
              write-up is published only once the client approves the numbers and we can present the
              full context behind them.
            </p>
            <p>
              In the meantime, we are happy to walk through our work directly on a call, including
              access to live dashboards where clients permit it.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <Eyebrow>Our standard</Eyebrow>
        <h2 className="text-display mt-6 mb-12 text-3xl font-semibold sm:text-5xl">
          How we will publish results.
        </h2>
        <StatementGrid items={APPROACH} />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Format</Eyebrow>
            <h2 className="text-display mt-6 text-3xl font-semibold sm:text-4xl">
              What each case study will contain.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A structure designed so you can judge whether the result is transferable to your own
              situation, rather than simply be impressed by it.
            </p>
          </div>
          <Reveal>
            <ol className="surface-card divide-y divide-hairline p-2">
              {FORMAT.map((f, i) => (
                <li key={f} className="flex gap-5 px-6 py-5">
                  <span className="font-mono text-xs text-brand">0{i + 1}</span>
                  <span className="text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Want to see the work before it's published?"
        body="Get in touch and we'll walk you through relevant engagements on a call, with client-approved detail."
        primaryLabel="Request a Walkthrough"
      />
    </>
  );
}
