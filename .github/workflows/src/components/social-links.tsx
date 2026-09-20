import { SOCIALS } from "@/lib/site";
import { cn } from "@/lib/utils";

function SocialIcon({ label }: { label: string }) {
  const cls = "h-[18px] w-[18px]";
  switch (label) {
    case "Instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cls} aria-hidden="true">
          <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.25" />
          <circle cx="12" cy="12" r="4.25" />
          <circle cx="17.4" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
          <path d="M14.05 22v-8.5h2.85l.43-3.31h-3.28V8.08c0-.96.27-1.61 1.64-1.61h1.75V3.51a23.5 23.5 0 0 0-2.55-.13c-2.52 0-4.25 1.54-4.25 4.37v2.44H7.78v3.31h2.86V22h3.41Z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.04H3.54V8.98H7.1v11.47Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
  }
}

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {SOCIALS.map((s) => {
        const external = s.href.startsWith("http");
        return (
          <a
            key={s.label}
            href={s.href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={`RUHTEXIN Studio on ${s.label}`}
            title={s.label}
            className={cn(
              "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-social-icon shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:brightness-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              s.label === "Facebook" && "bg-social-facebook",
              s.label === "Instagram" && "bg-social-instagram",
              s.label === "LinkedIn" && "bg-social-linkedin",
              s.label === "Email" && "bg-social-email",
            )}
          >
            <SocialIcon label={s.label} />
          </a>
        );
      })}
    </div>
  );
}
