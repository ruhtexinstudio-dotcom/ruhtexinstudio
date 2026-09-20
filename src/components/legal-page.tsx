import { PageHero, Section, Reveal } from "@/components/ui-kit";

export type LegalSection = { heading: string; body: string };

export function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={intro} breadcrumbs={[{ label: title }]} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-muted-foreground">{updated}</p>
            <nav className="mt-6 space-y-2 text-sm">
              {sections.map((s) => (
                <p key={s.heading} className="text-muted-foreground">
                  {s.heading}
                </p>
              ))}
            </nav>
          </aside>
          <div className="max-w-3xl space-y-10">
            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 40}>
                <section>
                  <h2 className="text-xl font-semibold">{s.heading}</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.body}</p>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
