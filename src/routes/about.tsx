import { createFileRoute } from "@tanstack/react-router";
import { pageMeta, breadcrumbSchema, SITE } from "@/lib/site";
import {
  Section,
  Container,
  Eyebrow,
  PageHero,
  StatementGrid,
  CTASection,
  JsonLd,
  Action,
  Reveal,
} from "@/components/ui-kit";

const PRINCIPLES = [
  {
    index: "01",
    title: "Clarity over noise",
    body: "Plain language, defined scope and reporting that says what happened rather than decorating it.",
  },
  {
    index: "02",
    title: "Evidence over opinion",
    body: "Decisions come from data where data exists, and from stated reasoning where it does not.",
  },
  {
    index: "03",
    title: "Craft over volume",
    body: "Fewer engagements, done properly. Quality of execution is the only durable differentiator.",
  },
  {
    index: "04",
    title: "Systems over one-off tactics",
    body: "We build repeatable processes clients can keep using, not campaigns that collapse when we leave.",
  },
  {
    index: "05",
    title: "Long-term thinking",
    body: "Nothing that risks a client's reputation, index status or ad account for a short-term number.",
  },
  {
    index: "06",
    title: "Honesty about results",
    body: "No invented case studies, no borrowed metrics and no promises about outcomes we cannot control.",
  },
];

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About RUHTEXIN Studio — Digital Growth & Technology Company",
      description:
        "RUHTEXIN Studio is a digital growth and technology company founded by Rahul Rasamalla, combining marketing, search, advertising and engineering under one team.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "About", item: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About"
        title="A STUDIO BUILT AROUND CRAFT, CLARITY AND RESULTS."
        intro="RUHTEXIN Studio is a digital growth and technology company. We help brands become visible, credible and profitable online — combining marketing intelligence with real engineering."
        breadcrumbs={[{ label: "About" }]}
      >
        <Action to="/contact">Work With Us</Action>
        <Action to="/case-studies" variant="outline">
          See Our Work
        </Action>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="text-display mt-6 text-3xl font-semibold sm:text-4xl">
              One team for growth and technology.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Most companies have to choose between an agency that understands marketing and a
              studio that can actually build. That split is where budgets get lost: campaigns point
              at pages nobody optimized, and beautifully engineered products launch with no plan for
              discovery.
            </p>
            <p>
              RUHTEXIN Studio exists to remove that gap. Search, advertising, content and
              engineering sit in the same team, working from the same brief, measured against the
              same business outcomes.
            </p>
            <p>
              We work with founders, growing businesses and established brands who want a partner
              that thinks about the whole system — not a vendor executing a fragment of it.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Founder</Eyebrow>
            <h2 className="text-display mt-6 text-3xl font-semibold sm:text-4xl">
              Founded and led by {SITE.founder}.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              RUHTEXIN Studio was founded by {SITE.founder}, who leads strategy and delivery across
              every engagement. The studio was started on a simple observation: clients rarely need
              more activity — they need better judgement about which activity matters.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              That means a senior perspective on every account, direct communication instead of
              layered account management, and a willingness to say when something is not working.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Action href={SITE.phoneHref} variant="outline">
                Call {SITE.phone}
              </Action>
              <Action to="/contact">Start a Conversation</Action>
            </div>
          </div>
          <Reveal>
            <div className="surface-card h-full p-9">
              <Eyebrow>Philosophy</Eyebrow>
              <p className="text-display mt-6 text-2xl leading-snug font-semibold sm:text-3xl">
                “Visibility is earned by being genuinely useful, then made measurable by good
                engineering.”
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Growth is not a trick. It is the compound result of a clear offer, a fast and
                credible experience, content that answers real questions, and disciplined
                measurement applied over time.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Eyebrow>What we believe</Eyebrow>
        <h2 className="text-display mt-6 mb-12 text-3xl font-semibold sm:text-5xl">
          Six principles that shape how we work.
        </h2>
        <StatementGrid items={PRINCIPLES} />
      </Section>

      <Section tone="surface">
        <Container className="px-0">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>How we work</Eyebrow>
              <h2 className="text-display mt-6 text-3xl font-semibold sm:text-4xl">
                Senior thinking, documented process, direct contact.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Every engagement begins with understanding the business model, not the marketing
                channel. Margin, sales cycle, competition and internal capacity determine what a
                sensible plan looks like far more than any channel preference.
              </p>
              <p>
                From there we work in defined cycles with clear deliverables, a shared change log
                and reporting that separates what we know from what we are inferring.
              </p>
              <p>
                Clients own their accounts, data, code and content. If the relationship ends, the
                asset stays with the business.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Let's talk about where your growth is actually stuck."
        body="A short conversation is usually enough to identify whether the constraint is visibility, conversion, or the product experience itself."
      />
    </>
  );
}
