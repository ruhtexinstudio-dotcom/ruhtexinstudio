import { Link } from "@tanstack/react-router";
import { FOOTER_COMPANY, FOOTER_LEGAL, FOOTER_SERVICES, SITE } from "@/lib/site";
import { SocialLinks } from "./social-links";
import { Container } from "./ui-kit";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-surface">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-brand" />
              <span className="text-display text-lg font-semibold">RUHTEXIN Studio</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline}
            </p>
            <p className="mt-6 text-sm font-semibold">{SITE.founder}</p>
            <a
              href={SITE.phoneHref}
              className="text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              {SITE.phone}
            </a>
            <a
              href={SITE.emailHref}
              className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-brand"
            >
              {SITE.email}
            </a>
            <SocialLinks className="mt-5" />
          </div>

          <FooterColumn title="Services" links={FOOTER_SERVICES} />
          <FooterColumn title="Company" links={FOOTER_COMPANY} />
          <FooterColumn title="Legal" links={FOOTER_LEGAL} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {SITE.year} RUHTEXIN Studio. All rights reserved.</p>
          <p>Digital marketing, search, advertising and software development.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) {
  return (
    <div>
      <p className="eyebrow text-muted-foreground">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link to={l.to} className="text-sm transition-colors hover:text-brand">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
