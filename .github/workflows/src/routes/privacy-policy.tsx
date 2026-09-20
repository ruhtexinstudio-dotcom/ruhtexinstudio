import { createFileRoute } from "@tanstack/react-router";
import { pageMeta, SITE } from "@/lib/site";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageMeta({
      title: "Privacy Policy | RUHTEXIN Studio",
      description:
        "How RUHTEXIN Studio collects, uses, stores and protects personal information submitted through this website and during client engagements.",
      path: "/privacy-policy",
    }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy explains what information ${SITE.name} collects, why we collect it, and the choices you have.`}
      updated="Last updated: January 2026"
      sections={[
        {
          heading: "Information we collect",
          body: "We collect information you provide directly through our enquiry form — typically your name, email address, phone number, company name and the details of your project. We also collect limited technical information automatically, such as pages visited, approximate location derived from IP address, browser type and referring source.",
        },
        {
          heading: "How we use information",
          body: "Enquiry information is used to respond to your message, assess whether we can help, and prepare a proposal. Technical information is used to understand how the site is used and to improve it. We do not sell personal information.",
        },
        {
          heading: "Legal basis",
          body: "We process enquiry data on the basis of your request to be contacted, and analytics data on the basis of our legitimate interest in operating and improving the website. Where consent is required for non-essential cookies, we rely on that consent.",
        },
        {
          heading: "Third-party services",
          body: "We may use analytics and advertising platforms, hosting providers and email services that process data on our behalf. These providers act under their own privacy terms and are used to operate the website and our marketing, not to profile you for resale.",
        },
        {
          heading: "Client data",
          body: "During an engagement we may be given access to your analytics, advertising, search and hosting accounts. We use that access strictly to perform the agreed work, restrict it to the people who need it, and remove it on request or at the end of the engagement.",
        },
        {
          heading: "Data retention",
          body: "Enquiry data is retained for as long as needed to respond and, where relevant, for our business records. Client project data is retained for the duration of the engagement and a reasonable period afterwards unless you ask us to delete it sooner.",
        },
        {
          heading: "Security",
          body: "We apply reasonable technical and organisational measures to protect information, including restricted access and secure credential handling. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
        },
        {
          heading: "Your rights",
          body: "You may request access to the personal information we hold about you, ask for corrections, request deletion, or object to certain processing. Contact us and we will respond within a reasonable period.",
        },
        {
          heading: "Children",
          body: "This website is intended for business use and is not directed at children. We do not knowingly collect information from children.",
        },
        {
          heading: "Changes to this policy",
          body: "We may update this policy as our services or legal obligations change. The revision date at the top of this page indicates when it was last modified.",
        },
        {
          heading: "Contact",
          body: `For any privacy question or request, call ${SITE.phone} or use the contact form on this website.`,
        },
      ]}
    />
  ),
});
