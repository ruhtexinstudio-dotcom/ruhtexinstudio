import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/site";
import { ServicePage } from "@/components/service-page";
import { Container, Eyebrow, Reveal } from "@/components/ui-kit";

const STAGES = [
  {
    tag: "SEO",
    title: "Rank in results",
    body: "Technical SEO, useful pages and credible authority that help your business compete for relevant organic searches.",
  },
  {
    tag: "AEO",
    title: "Own the answer",
    body: "Clear, self-contained answers that search engines and answer systems can extract without losing context.",
  },
  {
    tag: "GEO",
    title: "Become a source",
    body: "Distinct expertise, consistent entities and supported claims that make your website a credible source to cite.",
  },
  {
    tag: "AI SEARCH",
    title: "Be recommended",
    body: "Visibility across Google AI experiences, ChatGPT, Gemini and Perplexity when buyers research a problem or provider.",
  },
];

export const Route = createFileRoute("/seo-ai-search")({
  head: () =>
    pageMeta({
      title: "SEO & AI Search Agency in India | RUHTEXIN Studio",
      description:
        "Technical SEO, content strategy, local SEO, AEO and GEO services that help brands earn rankings, citations and qualified organic visibility.",
      path: "/seo-ai-search",
    }),
  component: () => (
    <ServicePage
      eyebrow="Search & Generative Discovery"
      h1="EARN VISIBILITY IN SEARCH AND AI ANSWERS."
      intro="Customers now discover businesses through ranked results, maps, AI Overviews and conversational tools. We combine technical SEO, search-led content and entity clarity so your brand can be found, understood and cited across that entire journey."
      path="/seo-ai-search"
      serviceName="SEO & AI Search"
      serviceDescription="Technical SEO, content strategy, AEO and generative engine optimization for organic rankings and AI-search citations."
      ctaLabel="Request a Search Audit"
      highlights={[
        {
          title: "Google Search",
          body: "Build qualified organic visibility for the questions, services and locations that matter to your buyers.",
        },
        {
          title: "AI search citations",
          body: "Make your expertise easier for Google AI Overviews, ChatGPT, Gemini and Perplexity to understand and reference.",
        },
        {
          title: "Local discovery",
          body: "Strengthen business profiles, location relevance and local landing pages for service-area and nearby searches.",
        },
      ]}
      aside={
        <section className="border-y border-hairline py-20 sm:py-28">
          <Container>
            <Eyebrow>The visibility path</Eyebrow>
            <h2 className="text-display mt-6 text-3xl font-semibold sm:text-5xl">
              SEO → AEO → GEO → AI SEARCH
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {STAGES.map((s, i) => (
                <Reveal key={s.tag} delay={i * 90}>
                  <div className="surface-card surface-card-hover h-full p-7">
                    <span className="eyebrow text-brand">{s.tag}</span>
                    <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    <div className="mt-6 h-1 w-full rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-brand transition-all duration-700"
                        style={{ width: `${(i + 1) * 25}%` }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              These disciplines reinforce one another. Search engines and AI systems both need
              accessible pages, unambiguous facts, useful answers and evidence that your business
              is a credible source.
            </p>
          </Container>
        </section>
      }
      blocks={[
        {
          heading: "SEO strategy built around search intent",
          body: "We map how prospects move from early research to comparing providers and taking action. That reveals which pages need to exist, which queries belong together and where the site is competing with itself. The result is a prioritized search roadmap tied to relevant demand rather than a list of disconnected keywords.",
        },
        {
          heading: "Where customers now discover brands",
          body: "A modern search program must cover more than ten blue links. We improve the same underlying assets — technically accessible pages, clear service information, structured data and demonstrable expertise — across the discovery surfaces your customers use.",
          bullets: [
            "Google Search",
            "Google AI Overviews and AI Mode",
            "ChatGPT search",
            "Gemini and Perplexity",
            "Answer engines and conversational search",
            "Local search and maps",
          ],
        },
        {
          heading: "Technical SEO and indexation",
          body: "We audit crawling, rendering, Core Web Vitals, internal linking, canonicals, redirects, sitemaps and structured data. Recommendations are prioritized by business impact and implementation effort, so critical indexation problems are resolved before lower-value refinements.",
        },
        {
          heading: "Search-led content and on-page SEO",
          body: "We create and improve service pages, category pages, location pages and editorial resources around genuine user intent. Each page gets a distinct purpose, useful depth, descriptive headings, natural internal links and concise answers that can stand alone in a search or AI result.",
        },
        {
          heading: "AEO and generative engine optimization",
          body: "Answer engine optimization and generative engine optimization do not replace SEO. They extend it. We strengthen entity consistency, authorship, first-hand expertise, source attribution and schema so machines can identify who you are, what you offer and why your information deserves to be referenced.",
        },
        {
          heading: "Local and national targeting",
          body: "For local businesses, we improve Google Business Profile information, location signals, reviews strategy and genuinely useful service-area pages. For national campaigns, we build category and topic depth without duplicating thin city pages or forcing place names into unrelated copy.",
        },
        {
          heading: "Measurement and continuous improvement",
          body: "Reporting combines Search Console performance, rankings, qualified organic enquiries, AI referral traffic and repeatable citation checks across selected prompts. We separate dependable metrics from directional observations, then use the findings to update pages, close content gaps and improve conversion paths.",
        },
      ]}
      faqs={[
        {
          q: "What is the difference between SEO, AEO and GEO?",
          a: "SEO improves visibility in traditional search results. AEO structures information so answer engines can return it directly. GEO strengthens the facts, entities, expertise and source signals used by generative systems. A strong program coordinates all three rather than treating them as separate shortcuts.",
        },
        {
          q: "Can you guarantee rankings or AI citations?",
          a: "No credible agency can control a search engine or guarantee that an AI system will cite a particular source. We improve the technical, editorial and authority signals that influence visibility, then measure progress transparently.",
        },
        {
          q: "What does an audit include?",
          a: "It covers crawling and indexation, site architecture, on-page quality, content gaps, internal links, structured data, local signals where relevant, entity consistency and a sample of AI-answer visibility. You receive prioritized actions rather than an undifferentiated issue list.",
        },
        {
          q: "How do you measure AI search visibility?",
          a: "We track repeatable prompts, brand mentions, cited sources and referral traffic from supported AI platforms. These indicators are directional because AI answers vary by model, location and session, so we report them alongside dependable search and conversion data.",
        },
      ]}
      related={[
        { label: "SEO", to: "/seo" },
        { label: "AI SEO / GEO / AEO", to: "/ai-seo" },
        { label: "Content Marketing", to: "/content-marketing" },
        { label: "Web Development", to: "/web-development" },
      ]}
    />
  ),
});
