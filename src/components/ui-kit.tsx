import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>{children}</div>
  );
}

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "ink";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-28",
        tone === "surface" && "bg-surface",
        tone === "ink" && "ink-panel",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: "default" | "ink";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-3",
        tone === "ink" ? "text-ink-muted" : "text-muted-foreground",
        className,
      )}
    >
      <span
        className={cn("inline-block h-px w-8", tone === "ink" ? "bg-ink-border" : "bg-hairline")}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    // @ts-expect-error polymorphic tag
    <Tag ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

type ActionProps = {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "inkPrimary" | "inkOutline";
  className?: string;
  hash?: string;
};

const actionBase =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const actionVariants: Record<string, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-brand hover:text-brand-foreground",
  outline: "border border-hairline bg-card text-foreground hover:border-brand hover:text-brand",
  ghost: "text-foreground hover:text-brand",
  inkPrimary: "bg-brand text-brand-foreground hover:brightness-110",
  inkOutline: "border border-ink-border text-ink-foreground hover:border-brand hover:text-brand",
};

export function Action({ to, href, children, variant = "primary", className, hash }: ActionProps) {
  const classes = cn(actionBase, actionVariants[variant], className);
  const inner = (
    <>
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );
  if (to) {
    return (
      <Link to={to} {...(hash ? { hash } : {})} className={classes}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {inner}
    </a>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="eyebrow text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to="/" className="hover:text-brand">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.to ? (
              <Link to={item.to} className="hover:text-brand">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumbs?: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-hairline pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-warm)" }}
        aria-hidden="true"
      />
      <Container>
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <div className="mt-8 max-w-4xl animate-rise">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-display mt-6 text-4xl font-semibold sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {intro}
          </p>
          {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </Container>
    </header>
  );
}

export function StatementGrid({
  items,
}: {
  items: { title: string; body: string; index?: string }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 90}>
          <div className="surface-card surface-card-hover h-full p-8">
            {item.index ? <span className="eyebrow text-brand">{item.index}</span> : null}
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
          <span
            aria-hidden="true"
            className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
          />
          <span className="text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function FAQBlock({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {faqs.map((faq) => (
        <details key={faq.q} className="group py-6">
          <summary className="flex cursor-pointer items-start justify-between gap-6 text-lg font-semibold marker:content-none">
            {faq.q}
            <span
              aria-hidden="true"
              className="mt-1 text-brand transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

export function RelatedLinks({ links }: { links: { label: string; to: string }[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((l) => (
        <Link
          key={l.to + l.label}
          to={l.to}
          className="rounded-full border border-hairline bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-brand hover:text-brand"
        >
          {l.label}
        </Link>
      ))}
    </div>
  );
}

export function CTASection({
  title = "Let's build something that matters.",
  body = "Tell us about the business, the market and the growth target. We'll come back with a considered approach — not a generic package.",
  primaryLabel = "Start a Project",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
}) {
  return (
    <Section tone="ink">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <Eyebrow tone="ink">Next step</Eyebrow>
          <h2 className="text-display mt-6 text-3xl font-semibold sm:text-5xl">{title}</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Action to="/contact" variant="inkPrimary">
            {primaryLabel}
          </Action>
          <Action to="/case-studies" variant="inkOutline">
            See Our Work
          </Action>
        </div>
      </div>
    </Section>
  );
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
