import type { ReactNode } from "react";
import {
  Action,
  CTASection,
  CheckList,
  Container,
  Eyebrow,
  FAQBlock,
  JsonLd,
  PageHero,
  RelatedLinks,
  Reveal,
  Section,
} from "./ui-kit";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/site";

export type ServiceBlock = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type ServicePageProps = {
  eyebrow: string;
  h1: string;
  intro: string;
  path: string;
  serviceName: string;
  serviceDescription: string;
  parent?: { label: string; to: string };
  highlights: { title: string; body: string }[];
  blocks: ServiceBlock[];
  faqs: { q: string; a: string }[];
  related: { label: string; to: string }[];
  ctaLabel?: string;
  ctaTitle?: string;
  aside?: ReactNode;
};

export function ServicePage(props: ServicePageProps) {
  const crumbs = [
    ...(props.parent ? [{ label: props.parent.label, to: props.parent.to }] : []),
    { label: props.serviceName },
  ];

  return (
    <>
      <JsonLd data={serviceSchema(props.serviceName, props.serviceDescription, props.path)} />
      <JsonLd data={faqSchema(props.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: "/" },
          ...(props.parent ? [{ name: props.parent.label, item: props.parent.to }] : []),
          { name: props.serviceName, item: props.path },
        ])}
      />

      <PageHero eyebrow={props.eyebrow} title={props.h1} intro={props.intro} breadcrumbs={crumbs}>
        <Action to="/contact">{props.ctaLabel ?? "Start a Project"}</Action>
        <Action to="/case-studies" variant="outline">
          View Case Studies
        </Action>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {props.highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 80}>
              <div className="surface-card surface-card-hover h-full p-8">
                <span className="eyebrow text-brand">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 text-lg font-semibold">{h.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {props.aside}

      <section className="border-y border-hairline bg-surface py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,220px)_1fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <Eyebrow>On this page</Eyebrow>
              <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                {props.blocks.map((b) => (
                  <li key={b.heading}>
                    <a href={`#${slug(b.heading)}`} className="transition-colors hover:text-brand">
                      {b.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-14">
              {props.blocks.map((b) => (
                <Reveal key={b.heading} as="article">
                  <article id={slug(b.heading)} className="scroll-mt-28">
                    <h2 className="text-2xl font-semibold sm:text-3xl">{b.heading}</h2>
                    <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{b.body}</p>
                    {b.bullets ? (
                      <div className="mt-6">
                        <CheckList items={b.bullets} />
                      </div>
                    ) : null}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Eyebrow>Questions</Eyebrow>
        <h2 className="text-display mt-6 mb-10 text-3xl font-semibold sm:text-4xl">
          Frequently asked
        </h2>
        <FAQBlock faqs={props.faqs} />
        <div className="mt-12">
          <Eyebrow>Continue exploring</Eyebrow>
          <div className="mt-5">
            <RelatedLinks links={props.related} />
          </div>
        </div>
      </Section>

      <CTASection
        {...(props.ctaTitle ? { title: props.ctaTitle } : {})}
        primaryLabel={props.ctaLabel ?? "Start a Project"}
      />
    </>
  );
}

function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
