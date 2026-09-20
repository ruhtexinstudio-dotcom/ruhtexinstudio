import { createFileRoute, Link } from "@tanstack/react-router";
import { pageMeta, SITE } from "@/lib/site";
import { CASE_STUDIES, TRUST_PILLARS, CLIENT_VOICES } from "@/lib/case-studies";
import {
  Action,
  Container,
  CTASection,
  Eyebrow,
  JsonLd,
  Reveal,
  Section,
  StatementGrid,
} from "@/components/ui-kit";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "RUHTEXIN Studio — Digital Growth. Intelligent Technology.",
      description:
        "RUHTEXIN Studio combines digital marketing, SEO, AI search optimization, paid advertising and software development to help ambitious businesses grow.",
      path: "/",
    }),
  component: Home,
});

const SERVICE_GROUPS = [
  {
    tag: "GROW",
    items: [
      {
        label: "Social Media Marketing",
        to: "/social-media-marketing",
        body: "Platform strategy, content systems and community growth that compound over time.",
      },
      {
        label: "Content Marketing",
        to: "/content-marketing",
        body: "Editorial, SEO and video content built around what your audience actually searches for.",
      },
      {
        label: "Digital Strategy",
        to: "/digital-marketing",
        body: "A single growth roadmap across channels, budget, messaging and measurement.",
      },
    ],
  },
  {
    tag: "DISCOVER",
    items: [
      {
        label: "SEO",
        to: "/seo",
        body: "Technical foundations, on-page depth and authority building for durable organic visibility.",
      },
      {
        label: "AI SEO",
        to: "/ai-seo",
        body: "Structure, entities and evidence so AI systems can understand and cite your brand.",
      },
      {
        label: "GEO & AEO",
        to: "/ai-seo",
        body: "Generative and answer engine optimization for conversational discovery.",
      },
    ],
  },
  {
    tag: "CONVERT",
    items: [
      {
        label: "Google Ads",
        to: "/google-ads",
        body: "Search, Performance Max, Display and remarketing built around real conversion signals.",
      },
      {
        label: "Meta Ads",
        to: "/meta-ads",
        body: "Facebook and Instagram campaigns with disciplined creative testing.",
      },
      {
        label: "PPC Management",
        to: "/ppc-management",
        body: "Continuous optimization of structure, bids, audiences and landing experiences.",
      },
    ],
  },
  {
    tag: "BUILD",
    items: [
      {
        label: "Web Development",
        to: "/web-development",
        body: "Fast, accessible, SEO-ready websites, commerce and landing experiences.",
      },
      {
        label: "Web Applications",
        to: "/web-development",
        body: "Product-grade interfaces, dashboards and internal tools.",
      },
      {
        label: "Mobile Apps",
        to: "/app-development",
        body: "iOS, Android and cross-platform applications with reliable backends.",
      },
    ],
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Discover",
    body: "Understand the business, audience, market and the real constraints on growth before recommending anything.",
  },
  {
    n: "02",
    title: "Strategize",
    body: "Build the growth and technology roadmap: channels, priorities, messaging, measurement and sequencing.",
  },
  {
    n: "03",
    title: "Execute",
    body: "Launch campaigns, content, SEO programs and digital products with a clear owner for every deliverable.",
  },
  {
    n: "04",
    title: "Optimize",
    body: "Measure honestly, learn from the data and improve the parts of the system that move outcomes.",
  },
];

const FUNNEL = ["Reach", "Click", "Lead", "Customer", "Repeat Customer"];
const SEARCH_STAGES = ["SEO", "AEO", "GEO", "AI Search"];

function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE.name,
          url: "/",
          potentialAction: {
            "@type": "SearchAction",
            target: "/insights?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />

      {/* HERO */}
      <header className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-28">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ background: "var(--gradient-warm)" }}
          aria-hidden="true"
        />
        <HeroField />
        <Container>
          <div className="max-w-5xl animate-rise">
            <Eyebrow>{SITE.tagline}</Eyebrow>
            <h1 className="text-display mt-8 text-[3rem] leading-[0.92] font-semibold sm:text-[5.5rem] lg:text-[7rem]">
              BUILD DIGITAL
              <br />
              <span className="text-brand">MOMENTUM.</span>
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              RUHTEXIN Studio combines intelligent marketing, search strategy, advertising and
              technology to help ambitious businesses grow.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Action to="/contact">Start a Project</Action>
              <Action to="/digital-marketing" variant="outline">
                Explore Our Services
              </Action>
            </div>
          </div>
        </Container>
      </header>

      {/* TRUST / POSITIONING */}
      <Section className="border-y border-hairline">
        <Eyebrow>Marketing × Technology × Growth</Eyebrow>
        <div className="mt-10">
          <StatementGrid
            items={[
              {
                index: "Visibility",
                title: "Get discovered",
                body: "Be found across Google, social platforms and AI-powered search — where your customers now begin.",
              },
              {
                index: "Demand",
                title: "Turn attention into demand",
                body: "Convert attention into qualified traffic, leads and customers with measurable campaigns.",
              },
              {
                index: "Technology",
                title: "Build the experience",
                body: "Digital products and websites engineered to support long-term growth, not just a launch.",
              },
            ]}
          />
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" tone="surface">
        <div className="max-w-3xl">
          <Eyebrow>Services</Eyebrow>
          <h2 className="text-display mt-6 text-4xl font-semibold sm:text-6xl">
            Everything You Need to Grow Online.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Four connected practices. Engaged individually or as one integrated growth program.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {SERVICE_GROUPS.map((group) => (
            <div key={group.tag}>
              <div className="flex items-center gap-4">
                <span className="eyebrow text-brand">{group.tag}</span>
                <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {group.items.map((item, i) => (
                  <Reveal key={item.label + item.to} delay={i * 70}>
                    <Link
                      to={item.to}
                      className="surface-card surface-card-hover group relative block h-full overflow-hidden p-8"
                    >
                      <h3 className="text-lg font-semibold transition-colors group-hover:text-brand">
                        {item.label}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                      <span
                        aria-hidden="true"
                        className="mt-8 inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-sm transition-all duration-300 group-hover:translate-x-1 group-hover:border-brand group-hover:text-brand"
                      >
                        →
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SEO & AI SEARCH */}
      <Section tone="ink">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow tone="ink">SEO & AI Search</Eyebrow>
            <h2 className="text-display mt-6 text-4xl font-semibold sm:text-6xl">
              SEARCH IS CHANGING.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-ink-muted">
              Traditional search is evolving into AI-powered discovery. RUHTEXIN Studio helps brands
              build visibility across Google Search, Google AI experiences, AI assistants, answer
              engines, generative search and local search.
            </p>
            <div className="mt-9">
              <Action to="/seo-ai-search" variant="inkPrimary">
                Explore SEO & AI Search
              </Action>
            </div>
          </div>

          <div className="rounded-3xl border border-ink-border p-8 sm:p-10">
            <p className="eyebrow text-ink-muted">Visibility path</p>
            <ol className="mt-8 space-y-4">
              {SEARCH_STAGES.map((stage, i) => (
                <Reveal key={stage} delay={i * 120}>
                  <li className="group flex items-center gap-5">
                    <span className="w-12 shrink-0 font-mono text-xs text-ink-muted">
                      0{i + 1}
                    </span>
                    <span className="relative flex-1 overflow-hidden rounded-full border border-ink-border px-6 py-4 text-lg font-semibold transition-colors duration-500 hover:border-brand hover:text-brand">
                      {stage}
                      <span
                        aria-hidden="true"
                        className="animate-sweep absolute inset-y-0 -left-1/3 w-1/3 bg-brand/20 blur-md"
                        style={{ animationDelay: `${i * 0.8}s` }}
                      />
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>
            <p className="mt-8 text-sm leading-relaxed text-ink-muted">
              From ranking on result pages to being understood, quoted and recommended by AI systems.
            </p>
          </div>
        </div>
      </Section>

      {/* PAID ADVERTISING */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Paid Advertising</Eyebrow>
          <h2 className="text-display mt-6 text-4xl font-semibold sm:text-6xl">
            TURN ATTENTION INTO DEMAND.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Google Ads, Meta Ads, PPC strategy, remarketing and conversion optimization — planned as
            one system rather than isolated campaigns.
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-5">
          {FUNNEL.map((step, i) => (
            <Reveal key={step} delay={i * 90}>
              <div className="surface-card surface-card-hover h-full p-6">
                <span className="font-mono text-xs text-brand">0{i + 1}</span>
                <p className="mt-4 text-base font-semibold">{step}</p>
                <div className="mt-5 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-brand"
                    style={{ width: `${100 - i * 16}%` }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Action to="/paid-advertising" variant="outline">
            Paid Advertising
          </Action>
          <Action to="/google-ads" variant="ghost">
            Google Ads
          </Action>
          <Action to="/meta-ads" variant="ghost">
            Meta Ads
          </Action>
        </div>
      </Section>

      {/* TECHNOLOGY */}
      <Section tone="surface">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Technology</Eyebrow>
            <h2 className="text-display mt-6 text-3xl font-semibold sm:text-5xl">
              MARKETING GETS ATTENTION. TECHNOLOGY BUILDS THE EXPERIENCE.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              We design and build the websites and applications that campaigns send people to —
              engineered for speed, clarity, search visibility and conversion.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {["Websites", "Web Apps", "Mobile Apps", "E-commerce", "Landing Pages"].map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-hairline bg-card px-4 py-2 text-sm"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Action to="/web-app-development">Build With RUHTEXIN</Action>
            </div>
          </div>
          <Reveal>
            <BrowserMock />
          </Reveal>
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <Eyebrow>Process</Eyebrow>
        <h2 className="text-display mt-6 text-4xl font-semibold sm:text-6xl">
          A method, not a guess.
        </h2>
        <div className="mt-14 border-t border-hairline">
          {PROCESS.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <div className="group grid gap-4 border-b border-hairline py-10 transition-colors hover:bg-surface md:grid-cols-[120px_240px_1fr] md:items-baseline">
                <span className="font-mono text-sm text-brand">{step.n}</span>
                <h3 className="text-2xl font-semibold tracking-tight uppercase">{step.title}</h3>
                <p className="max-w-2xl leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CASE STUDIES */}
      <Section tone="surface">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <Eyebrow>Case Studies</Eyebrow>
            <h2 className="text-display mt-6 text-4xl font-semibold sm:text-6xl">
              WORK THAT MOVES BUSINESSES FORWARD.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              How we structure engagements across search, advertising and technology — the thinking
              behind the work rather than a highlight reel of numbers.
            </p>
            <p className="eyebrow mt-6 inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-4 py-1.5 text-[11px] text-muted-foreground">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
              Illustrative project examples
            </p>
          </div>
          <Action to="/case-studies" variant="outline">
            All Case Studies
          </Action>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal key={cs.id} delay={i * 90}>
              <article className="group surface-card flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[var(--shadow-lift,0_18px_40px_-24px_rgba(0,0,0,0.35))] sm:p-9">
                <div className="flex items-center justify-between gap-4">
                  <span className="eyebrow text-brand">{cs.category}</span>
                  <span className="font-mono text-xs text-muted-foreground">{cs.id}</span>
                </div>
                <h3 className="mt-5 text-xl leading-snug font-semibold tracking-tight">
                  {cs.title}
                </h3>
                <dl className="mt-8 space-y-6 text-sm">
                  <div>
                    <dt className="eyebrow text-muted-foreground">Challenge</dt>
                    <dd className="mt-2 leading-relaxed text-muted-foreground">{cs.challenge}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-muted-foreground">Approach</dt>
                    <dd className="mt-2 leading-relaxed text-muted-foreground">{cs.approach}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-muted-foreground">Outcome</dt>
                    <dd className="mt-2 leading-relaxed text-muted-foreground">{cs.outcome}</dd>
                  </div>
                </dl>

                {cs.metrics && cs.metrics.length > 0 ? (
                  <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-hairline pt-6">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <dt className="eyebrow text-muted-foreground">{m.label}</dt>
                        <dd className="text-display mt-1 text-2xl font-semibold">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                <div className="mt-auto pt-8">
                  <ul className="flex flex-wrap gap-2">
                    {cs.services.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-hairline px-3 py-1 text-xs text-muted-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={cs.href}
                    className="mt-7 inline-flex items-center gap-2 border-t border-hairline pt-6 text-sm font-semibold transition-colors hover:text-brand"
                  >
                    {cs.ctaLabel ?? "View Approach"}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TRUST & PERSPECTIVE */}
      <Section>
        <Eyebrow>Trust</Eyebrow>
        <h2 className="text-display mt-6 text-4xl font-semibold sm:text-6xl">
          TRUST IS BUILT THROUGH RESULTS.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A strong digital partnership starts with clarity, strategy and measurable progress.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TRUST_PILLARS.map((p, i) => (
            <Reveal key={p.label} delay={i * 90}>
              <div className="surface-card flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 sm:p-9">
                <span className="eyebrow text-brand">{p.label}</span>
                <h3 className="text-display mt-6 text-2xl leading-snug font-semibold">
                  {p.headline}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{p.body}</p>
                <p className="eyebrow mt-auto border-t border-hairline pt-6 text-muted-foreground">
                  {p.footer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-hairline pt-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>Client Voices</Eyebrow>
              <p className="mt-5 text-base text-muted-foreground">
                What working with RUHTEXIN Studio feels like — in our clients' own words.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {CLIENT_VOICES.map((v, i) => (
              <Reveal key={v.quote} delay={i * 90}>
                <figure className="surface-card flex h-full flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/50">
                  <span aria-hidden="true" className="text-display text-4xl leading-none text-brand">“</span>
                  <blockquote className="mt-4 text-base leading-relaxed">{v.quote}”</blockquote>
                  <figcaption className="mt-auto border-t border-hairline pt-6 text-sm">
                    <span className="block font-semibold">{v.clientName}</span>
                    <span className="block text-muted-foreground">
                      {[v.clientRole, v.clientCompany].filter(Boolean).join(", ")}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>


      <CTASection />
    </>
  );
}

function HeroField() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full opacity-[0.5]" preserveAspectRatio="none">
        <defs>
          <pattern id="rx-grid" width="72" height="72" patternUnits="userSpaceOnUse">
            <path d="M72 0H0V72" fill="none" stroke="var(--hairline)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#rx-grid)" />
      </svg>
      <div className="animate-drift absolute top-24 right-[8%] h-64 w-64 rounded-full bg-brand-soft blur-3xl" />
      <div
        className="animate-drift absolute right-[26%] bottom-10 h-40 w-40 rounded-full bg-brand-soft blur-3xl"
        style={{ animationDelay: "2.5s" }}
      />
      <svg
        className="absolute right-[6%] bottom-[12%] hidden h-40 w-72 lg:block"
        viewBox="0 0 288 160"
        fill="none"
      >
        <polyline
          points="0,140 48,120 96,128 144,84 192,92 240,40 288,20"
          stroke="var(--brand)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="600"
          strokeDashoffset="600"
          style={{ animation: "rx-dash 2.6s ease-out 0.4s forwards" }}
        />
      </svg>
    </div>
  );
}

function BrowserMock() {
  return (
    <div className="surface-card overflow-hidden p-0">
      <div className="flex items-center gap-2 border-b border-hairline px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
        <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
        <span className="h-2.5 w-2.5 rounded-full bg-hairline" />
        <span className="ml-3 flex-1 rounded-full bg-muted px-4 py-1.5 font-mono text-[10px] text-muted-foreground">
          yourbusiness.com
        </span>
      </div>
      <div className="grid gap-4 p-6 sm:grid-cols-[1.4fr_1fr]">
        <div className="space-y-3">
          <div className="h-8 w-3/4 rounded-md bg-muted" />
          <div className="h-3 w-full rounded bg-muted" />
          <div className="h-3 w-5/6 rounded bg-muted" />
          <div className="mt-4 h-9 w-32 rounded-full bg-brand" />
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-16 rounded-lg border border-hairline bg-surface" />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-hairline bg-surface p-4">
          <p className="eyebrow text-muted-foreground">Performance</p>
          <div className="mt-4 space-y-3">
            {["LCP", "CLS", "INP"].map((m, i) => (
              <div key={m}>
                <p className="font-mono text-[10px] text-muted-foreground">{m}</p>
                <div className="mt-1 h-1.5 w-full rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-brand transition-all duration-1000"
                    style={{ width: `${88 - i * 6}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
