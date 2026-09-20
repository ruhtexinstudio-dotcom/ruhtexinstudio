import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { ServicePage } from "@/components/service-page";

export const Route = createFileRoute("/app-development")({
  head: () =>
    pageMeta({
      title: "Mobile App Development Company — iOS & Android | RUHTEXIN Studio",
      description:
        "Mobile app development: iOS, Android and cross-platform applications with UI/UX design, backend and API development, authentication, analytics, deployment and maintenance.",
      path: "/app-development",
    }),
  component: () => (
    <ServicePage
      eyebrow="Technology"
      h1="APPS BUILT TO BE USED, NOT JUST SHIPPED."
      intro="A mobile app earns its place on a home screen only if it is genuinely faster or better than the alternative. We scope carefully, build on solid foundations, and plan for the maintenance that begins the day after launch."
      path="/app-development"
      serviceName="App Development"
      serviceDescription="iOS, Android and cross-platform mobile app development with UI/UX, backend, authentication, analytics and deployment."
      parent={{ label: "Web & App Development", to: "/web-app-development" }}
      ctaLabel="Discuss an App Project"
      highlights={[
        {
          title: "Scope with honesty",
          body: "We will tell you when a responsive web app is the better answer than a native application.",
        },
        {
          title: "Foundations that hold",
          body: "Authentication, data model and API design decided before feature work accelerates.",
        },
        {
          title: "Launch is a milestone",
          body: "Store submission, monitoring, crash reporting and an iteration plan are part of the project.",
        },
      ]}
      blocks={[
        {
          heading: "iOS applications",
          body: "Applications designed for Apple's interface conventions, tested across supported device sizes and OS versions, and prepared for App Store review with the privacy declarations, assets and metadata the process requires.",
        },
        {
          heading: "Android applications",
          body: "Android builds accounting for fragmentation across devices, screen sizes and OS versions, with Play Console configuration, staged rollouts and pre-launch reporting used to catch issues before wide release.",
        },
        {
          heading: "Cross-platform development",
          body: "For most business applications a shared cross-platform codebase delivers both platforms faster and keeps them consistent. We use native modules where performance or platform capability genuinely requires it, and we are explicit about those trade-offs during scoping.",
        },
        {
          heading: "UI/UX design",
          body: "Flows are mapped before pixels: what the user is trying to accomplish, in what context, and with what constraints. Prototypes are reviewed early so structural problems are found before they are expensive.",
          bullets: [
            "User flows and information architecture",
            "Interactive prototypes for key journeys",
            "Design system and component library",
            "Accessibility and readable typography",
            "Offline and error state design",
          ],
        },
        {
          heading: "Backend and API development",
          body: "Data models, business logic, secure APIs, background jobs and integrations, designed for the load the application realistically needs and documented so future teams can extend it.",
        },
        {
          heading: "Authentication and security",
          body: "Secure sign-in, session handling, role-based permissions, encrypted storage of sensitive data and sensible policies for what the app collects. Privacy requirements are addressed during design rather than at submission.",
        },
        {
          heading: "Analytics",
          body: "Event tracking planned around the questions you will actually ask: activation, retention, feature adoption and drop-off. Crash and performance monitoring is configured so problems surface before users report them.",
        },
        {
          heading: "Deployment",
          body: "Build pipelines, environment management, versioning, store listings and release notes. We handle submission and the review cycle, including the revisions that store review sometimes requires.",
        },
        {
          heading: "Maintenance",
          body: "Applications require ongoing work: OS updates, dependency and security patches, device compatibility and store policy changes. We agree a maintenance arrangement up front so the app does not quietly degrade.",
        },
      ]}
      faqs={[
        {
          q: "Do we need a native app or a web app?",
          a: "If you need offline use, push notifications, device hardware or store presence, native or cross-platform makes sense. If not, a fast responsive web application is often cheaper to build and far cheaper to maintain. We will give you a straight recommendation.",
        },
        {
          q: "How much does an app cost?",
          a: "It depends entirely on scope, integrations and platform count. We produce a phased estimate after a discovery process, and can start with a reduced first release to validate demand.",
        },
        {
          q: "Can you take over an existing app?",
          a: "Sometimes. We review the codebase, dependencies and documentation first and tell you honestly whether continuing or rebuilding is the better investment.",
        },
        {
          q: "Do you handle the app store accounts?",
          a: "We can guide the setup and manage submissions, but the developer accounts remain registered to your business.",
        },
      ]}
      related={[
        { label: "Web Development", to: "/web-development" },
        { label: "Web & App Development", to: "/web-app-development" },
        { label: "Digital Marketing", to: "/digital-marketing" },
        { label: "Contact", to: "/contact" },
      ]}
    />
  ),
});
