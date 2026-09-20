import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { pageMeta, breadcrumbSchema, SITE } from "@/lib/site";
import { Section, Eyebrow, PageHero, FAQBlock, JsonLd, Reveal } from "@/components/ui-kit";
import { SocialLinks } from "@/components/social-links";

const SERVICES = [
  "Digital Marketing",
  "SEO",
  "AI SEO / GEO / AEO",
  "Google Ads",
  "Meta Ads",
  "PPC Management",
  "Social Media Marketing",
  "Content Marketing",
  "Web Development",
  "App Development",
  "Not sure yet",
];

const BUDGETS = ["Under ₹50,000 / month", "₹50,000 – ₹1,50,000 / month", "₹1,50,000+ / month", "One-off project", "Not decided"];

const FAQS = [
  {
    q: "How quickly do you respond?",
    a: "We aim to reply to every enquiry within one working day, usually with a few clarifying questions before proposing anything.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Yes, where the scope is realistic for the budget. We would rather run a focused engagement well than spread a small budget across every channel.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We work remotely with clients in other regions and schedule calls around their time zone.",
  },
  {
    q: "What happens after the first call?",
    a: "If it looks like a fit, we review your current setup and come back with a scoped proposal covering approach, deliverables, timeline and investment.",
  },
];

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta({
      title: "Contact RUHTEXIN Studio — Start a Digital Growth Project",
      description:
        "Talk to RUHTEXIN Studio about SEO, AI search, Google and Meta Ads, content, web and app development. Send an enquiry or call +918985003725.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [links, setLinks] = useState<{ gmail: string; whatsapp: string } | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const company = String(data.get("company") || "");
    const service = String(data.get("service") || "");
    const budget = String(data.get("budget") || "");
    const message = String(data.get("message") || "");

    const subject = `New Project Enquiry — ${service || "General"} — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Company: ${company || "—"}`,
      `Service: ${service || "—"}`,
      `Budget: ${budget || "—"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const waText = `New enquiry from ${name} (${email})\nService: ${service}\nBudget: ${budget}\n\n${message}`;
    const whatsapp = `${SITE.whatsapp}?text=${encodeURIComponent(waText)}`;

    setLinks({ gmail, whatsapp });
    window.open(gmail, "_blank", "noopener,noreferrer");
    window.open(whatsapp, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Contact", item: "/contact" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${SITE.name}`,
          url: "/contact",
        }}
      />
      <PageHero
        eyebrow="Contact"
        title="TELL US WHAT YOU'RE TRYING TO GROW."
        intro="Share a little about the business and the goal. We'll come back with honest thoughts on where the opportunity is — and whether we're the right team for it."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="surface-card p-8 sm:p-10">
              <Eyebrow>Project enquiry</Eyebrow>
              {sent ? (
                <div className="py-14 text-center">
                  <h2 className="text-display text-2xl font-semibold">Thanks — your enquiry is ready to send.</h2>
                  <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                    We've opened Gmail and WhatsApp with your details filled in, addressed to{" "}
                    {SITE.email} and {SITE.phone}. If a window didn't open, tap a button below.
                  </p>
                  {links && (
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                      <a
                        href={links.gmail}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand hover:text-brand-foreground"
                      >
                        Open Gmail <span aria-hidden="true">→</span>
                      </a>
                      <a
                        href={links.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline bg-background px-7 py-3.5 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
                      >
                        Open WhatsApp <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Phone" name="phone" type="tel" />
                    <Field label="Company" name="company" />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <SelectField label="Service required" name="service" options={SERVICES} />
                    <SelectField label="Budget range" name="budget" options={BUDGETS} />
                  </div>
                  <label className="grid gap-2">
                    <span className="eyebrow text-muted-foreground">Project details</span>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="rounded-xl border border-hairline bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
                      placeholder="What are you selling, who to, and what is not working right now?"
                    />
                  </label>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand hover:text-brand-foreground"
                  >
                    Send Enquiry <span aria-hidden="true">→</span>
                  </button>
                  <p className="text-xs text-muted-foreground">
                    We use your details only to respond to this enquiry.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          <div className="space-y-6">
            <div className="surface-card p-8">
              <Eyebrow>Direct</Eyebrow>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-muted-foreground">Phone</dt>
                  <dd className="mt-1 text-lg font-semibold">
                    <a href={SITE.phoneHref} className="hover:text-brand">
                      {SITE.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Email</dt>
                  <dd className="mt-1">
                    <a href={SITE.emailHref} className="font-medium hover:text-brand">
                      {SITE.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">WhatsApp</dt>
                  <dd className="mt-1">
                    <a href={SITE.whatsapp} className="font-medium hover:text-brand">
                      Message us on WhatsApp
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Follow us</dt>
                  <dd className="mt-2">
                    <SocialLinks />
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Founder</dt>
                  <dd className="mt-1 font-medium">{SITE.founder}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Availability</dt>
                  <dd className="mt-1 font-medium">Monday – Saturday, 10:00 – 19:00 IST</dd>
                </div>
              </dl>
            </div>
            <div className="surface-card p-8">
              <Eyebrow>What to include</Eyebrow>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {[
                  "What you sell and who buys it",
                  "Where the growth is currently stuck",
                  "Channels already running, if any",
                  "Timeline and rough budget range",
                ].map((i) => (
                  <li key={i} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <Eyebrow>Questions</Eyebrow>
        <h2 className="text-display mt-6 mb-10 text-3xl font-semibold sm:text-4xl">
          Before you get in touch.
        </h2>
        <FAQBlock faqs={FAQS} />
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-xl border border-hairline bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="grid gap-2">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="rounded-xl border border-hairline bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
