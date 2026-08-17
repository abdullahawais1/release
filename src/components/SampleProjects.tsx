import { Reveal } from "./Reveal";

type SampleProject = {
  number: string;
  title: string;
  tech: string[];
  coverageLabel: string;
  coverage: string[];
};

const PROJECTS: SampleProject[] = [
  {
    number: "01",
    title: "E-commerce QA Automation",
    tech: ["Playwright", "JavaScript", "API Testing", "GitHub Actions"],
    coverageLabel: "Sample coverage",
    coverage: [
      "Authentication",
      "Product search",
      "Product details",
      "Cart",
      "Checkout",
      "API validation",
      "Regression testing",
      "CI/CD",
    ],
  },
  {
    number: "02",
    title: "SaaS Application QA",
    tech: ["Playwright", "API Testing", "CI/CD"],
    coverageLabel: "Sample coverage",
    coverage: [
      "Authentication",
      "User management",
      "Core workflows",
      "API validation",
      "Regression suite",
      "Cross-browser testing",
    ],
  },
  {
    number: "03",
    title: "Performance Testing",
    tech: ["Apache JMeter"],
    coverageLabel: "Testing approach",
    coverage: ["Load testing", "Stress testing", "Response-time analysis", "Performance bottlenecks"],
  },
];

export function SampleProjects() {
  return (
    <section id="work" className="border-t border-border py-14 sm:py-20">
      <div className="mx-auto max-w-(--container-content) px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-eyebrow text-xs font-medium uppercase text-accent">Work</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            A look at how we approach QA automation.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            These are demonstration projects that illustrate our approach and technical depth —
            not real client engagements, names, or results.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-4">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.number}
              delay={i * 100}
              className="card-surface grid grid-cols-1 gap-6 rounded-2xl p-7 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-2">{project.number}</span>
                  <span className="inline-flex items-center rounded-full border border-border-strong px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-muted">
                    Sample Project
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{project.title}</h3>
                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-[13px] text-muted-2">
                  {project.tech.map((t, idx) => (
                    <span key={t} className="flex items-center gap-2">
                      <span className={idx === 0 ? "text-accent" : ""}>{t}</span>
                      {idx < project.tech.length - 1 ? (
                        <span aria-hidden="true" className="text-border-strong">
                          ·
                        </span>
                      ) : null}
                    </span>
                  ))}
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="section-eyebrow text-xs font-medium uppercase text-muted-2">
                  {project.coverageLabel}
                </span>
                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
                  {project.coverage.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="mt-0.5 shrink-0 text-success"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
