import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MEGA_MENU, SITE, SOLUTIONS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "./ui-kit";

const TOP_LINKS = [
  { label: "Case Studies", to: "/case-studies" },
  { label: "About", to: "/about" },
  { label: "Insights", to: "/insights" },
];

export function SiteHeader() {
  const [open, setOpen] = useState<"services" | "solutions" | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open || mobile
          ? "border-b border-hairline bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
      onMouseLeave={() => setOpen(null)}
    >
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-20">
        <Link to="/" className="flex items-center gap-2.5" aria-label={`${SITE.name} home`}>
          <span
            aria-hidden="true"
            className="inline-block h-2.5 w-2.5 rounded-full bg-brand"
          />
          <span className="text-display text-base font-semibold tracking-tight sm:text-lg">
            RUHTEXIN <span className="text-muted-foreground">Studio</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <button
            type="button"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              open === "services" ? "text-brand" : "hover:text-brand",
            )}
            aria-expanded={open === "services"}
            onMouseEnter={() => setOpen("services")}
            onClick={() => setOpen(open === "services" ? null : "services")}
          >
            Services
          </button>
          <button
            type="button"
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              open === "solutions" ? "text-brand" : "hover:text-brand",
            )}
            aria-expanded={open === "solutions"}
            onMouseEnter={() => setOpen("solutions")}
            onClick={() => setOpen(open === "solutions" ? null : "solutions")}
          >
            Solutions
          </button>
          {TOP_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onMouseEnter={() => setOpen(null)}
              className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-brand"
              activeProps={{ className: "text-brand" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            to="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand hover:text-brand-foreground"
          >
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-hairline px-4 py-2 text-sm font-medium lg:hidden"
          aria-expanded={mobile}
          onClick={() => setMobile((v) => !v)}
        >
          {mobile ? "Close" : "Menu"}
        </button>
      </Container>

      {/* Desktop mega menu */}
      {open ? (
        <div className="hidden border-t border-hairline bg-background/95 backdrop-blur-xl lg:block">
          <Container className="py-10">
            {open === "services" ? (
              <div className="grid gap-8 md:grid-cols-5">
                {MEGA_MENU.map((group) => (
                  <div key={group.group}>
                    <p className="eyebrow text-brand">{group.group}</p>
                    <ul className="mt-4 space-y-3">
                      {group.items.map((item) => (
                        <li key={item.label + item.to}>
                          <Link to={item.to} className="group block">
                            <span className="text-sm font-semibold transition-colors group-hover:text-brand">
                              {item.label}
                            </span>
                            <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                              {item.description}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-5">
                {SOLUTIONS.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="surface-card surface-card-hover p-6 text-sm font-semibold"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </Container>
        </div>
      ) : null}

      {/* Mobile menu */}
      {mobile ? (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-hairline bg-background lg:hidden">
          <Container className="py-8">
            {MEGA_MENU.map((group) => (
              <div key={group.group} className="mb-7">
                <p className="eyebrow text-brand">{group.group}</p>
                <ul className="mt-3 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.label + item.to}>
                      <Link to={item.to} className="text-sm font-medium">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="mb-7">
              <p className="eyebrow text-brand">Company</p>
              <ul className="mt-3 space-y-2.5">
                {TOP_LINKS.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm font-medium">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Start a Project
              </Link>
              <a
                href={SITE.whatsapp}
                className="rounded-full border border-hairline px-5 py-3 text-center text-sm font-semibold"
              >
                WhatsApp {SITE.phone}
              </a>
            </div>
          </Container>
        </div>
      ) : null}
    </div>
  );
}
