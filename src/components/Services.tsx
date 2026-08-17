import { Reveal } from "./Reveal";

type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
};

const SUPPORTING_SERVICES: Service[] = [
  {
    id: "api-testing",
    title: "API Testing",
    description: "Validate APIs and integrations before defects reach production.",
    features: [
      "REST API testing",
      "API automation",
      "Integration testing",
      "Data validation",
      "Negative testing",
    ],
  },
  {
    id: "manual-qa",
    title: "Manual QA",
    description: "Combine automation with focused human testing where it matters most.",
    features: [
      "Functional testing",
      "Exploratory testing",
      "Regression testing",
      "UAT",
      "Test-case design",
    ],
  },
  {
    id: "performance-testing",
    title: "Performance Testing",
    description: "Understand how your application behaves when real users and traffic arrive.",
    features: [
      "Load testing",
      "Stress testing",
      "JMeter",
      "Performance analysis",
      "Bottleneck identification",
    ],
  },
];

const AUTOMATION_FEATURES = [
  "E2E automation",
  "Regression suites",
  "Smoke testing",
  "Sanity testing",
  "Cross-browser testing",
  "CI/CD integration",
];

const AUTOMATION_TECH = ["Playwright", "Cypress", "Selenium", "WebdriverIO"];

export function Services() {
  return (
    <section id="services" className="py-14 sm:py-20">
      <div className="mx-auto max-w-(--container-content) px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-eyebrow text-xs font-medium uppercase text-accent">Services</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Quality engineering, built around your product.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4">
          {/* Featured: QA Automation */}
          <Reveal>
            <div className="card-surface grid grid-cols-1 gap-8 rounded-2xl p-7 sm:p-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                  Primary service
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">QA Automation</h3>
                <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-muted">
                  Build reliable automated coverage for critical workflows and regression
                  scenarios.
                </p>

                <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {AUTOMATION_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/80">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="mt-0.5 shrink-0 text-accent"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 7.2L5.4 10L11.5 3.7"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  {AUTOMATION_TECH.map((tech) => {
                    const isPrimary = tech === "Playwright";
                    return (
                      <span
                        key={tech}
                        className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-[12.5px] ${
                          isPrimary
                            ? "border-accent/45 bg-accent-soft text-foreground"
                            : "border-border bg-background text-foreground/75"
                        }`}
                      >
                        {isPrimary ? (
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                        ) : null}
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div
                className="panel-dark overflow-hidden rounded-xl border border-(--panel-border) bg-(--panel-bg)"
                role="img"
                aria-label="Example Playwright test code checking that checkout completes successfully"
              >
                <div className="flex items-center gap-1.5 border-b border-(--panel-border) px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="ml-3 font-mono text-[11px] text-(--panel-muted-2)">
                    checkout.spec.ts
                  </span>
                </div>
                <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-[1.9]">
                  <code>
                    <span className="text-accent-violet">test</span>
                    <span className="text-(--panel-fg)/60">(</span>
                    <span className="text-success">&apos;completes checkout&apos;</span>
                    <span className="text-(--panel-fg)/60">, </span>
                    <span className="text-accent-violet">async</span>
                    <span className="text-(--panel-fg)/60"> ({"{"} page {"}"}) =&gt; {"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-accent-violet">await</span>
                    <span className="text-(--panel-fg)/85"> page.goto(</span>
                    <span className="text-success">&apos;/cart&apos;</span>
                    <span className="text-(--panel-fg)/85">);</span>
                    {"\n"}
                    {"  "}
                    <span className="text-accent-violet">await</span>
                    <span className="text-(--panel-fg)/85"> page.click(</span>
                    <span className="text-success">&apos;text=Checkout&apos;</span>
                    <span className="text-(--panel-fg)/85">);</span>
                    {"\n"}
                    {"  "}
                    <span className="text-accent-violet">await</span>
                    <span className="text-accent-violet"> expect</span>
                    <span className="text-(--panel-fg)/85">(page.locator(</span>
                    <span className="text-success">&apos;h1&apos;</span>
                    <span className="text-(--panel-fg)/85">))</span>
                    {"\n"}
                    {"    "}
                    <span className="text-(--panel-fg)/85">.toHaveText(</span>
                    <span className="text-success">&apos;Order confirmed&apos;</span>
                    <span className="text-(--panel-fg)/85">);</span>
                    {"\n"}
                    <span className="text-(--panel-fg)/60">{"}"});</span>
                  </code>
                </pre>
              </div>
            </div>
          </Reveal>

          {/* Supporting services */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {SUPPORTING_SERVICES.map((service, i) => (
              <Reveal key={service.id} delay={i * 90} className="h-full">
                <div className="card-surface flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                  <ul className="mt-5 space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground/75">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-2" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
