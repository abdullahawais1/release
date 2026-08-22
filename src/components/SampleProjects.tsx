import { Reveal } from "./Reveal";

type SampleProject = {
  number: string;
  title: string;
  description: string;
  tech: string[];
};

const PROJECTS: SampleProject[] = [
  {
    number: "01",
    title: "E-commerce QA Automation",
    description:
      "Illustrative automation approach for authentication, search, cart, checkout, and regression across a typical e-commerce workflow.",
    tech: ["Playwright", "JavaScript", "API Testing", "GitHub Actions"],
  },
  {
    number: "02",
    title: "SaaS Application QA",
    description:
      "Illustrative approach to authentication, core user workflows, API validation, and cross-browser regression for a SaaS product.",
    tech: ["Playwright", "API Testing", "CI/CD"],
  },
  {
    number: "03",
    title: "Performance Testing",
    description:
      "Illustrative load and stress-testing approach for understanding application behavior under real traffic.",
    tech: ["Apache JMeter"],
  },
];

export function SampleProjects() {
  return (
    <section id="work" className="border-t border-border py-14 sm:py-20">
      <div className="mx-auto max-w-(--container-content) px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-eyebrow text-xs font-medium uppercase text-accent">
            Sample Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            The kinds of QA work we take on.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Conceptual examples illustrating the type of automation and testing we deliver —
            not real client engagements, names, or results. For actual independent automation
            you&apos;ll be able to watch, see the Automation Lab below.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.number} delay={i * 90} className="h-full">
              <div className="card-surface flex h-full flex-col rounded-2xl p-6">
                <span className="font-mono text-xs text-muted-2">{project.number}</span>
                <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-2 gap-y-2 font-mono text-[12.5px] text-muted-2">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
