import { Reveal } from "./Reveal";
import { LabVideo } from "./LabVideo";

type LabProject = {
  number: string;
  title: string;
  badge: string;
  description: string;
  tech: string[];
  coverage: string[];
};

const LAB_PROJECTS: LabProject[] = [
  {
    number: "01",
    title: "E-commerce Web Automation",
    badge: "Independent Automation Demo — Daraz",
    description:
      "Independent automation covering authentication, product discovery, and cart workflows on a real-world e-commerce platform.",
    tech: ["Playwright", "JavaScript", "API Testing"],
    coverage: [
      "Authentication",
      "Product search",
      "Product filtering",
      "Product details",
      "Cart workflows",
      "Regression scenarios",
      "Cross-browser testing",
    ],
  },
  {
    number: "02",
    title: "Media Platform Automation",
    badge: "Independent Automation Demo — IMDb",
    description:
      "Independent automation covering search, discovery, and content validation on a large media platform.",
    tech: ["Playwright", "JavaScript"],
    coverage: [
      "Search",
      "Movie/TV discovery",
      "Filtering",
      "Navigation",
      "Content validation",
      "Regression scenarios",
    ],
  },
  {
    number: "03",
    title: "SaaS Application Automation",
    badge: "Independent Automation Demo",
    description:
      "Independent automation demonstrating authentication, CRUD workflows, and CI/CD execution on a representative SaaS application.",
    tech: ["Playwright", "JavaScript", "API Testing", "CI/CD"],
    coverage: [
      "Authentication",
      "User workflows",
      "CRUD operations",
      "API validation",
      "Regression testing",
      "CI/CD execution",
    ],
  },
];

export function AutomationLab() {
  return (
    <section id="lab" className="border-t border-border py-14 sm:py-20">
      <div className="mx-auto max-w-(--container-content) px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-eyebrow text-xs font-medium uppercase text-accent">
            Automation Lab
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Real-world QA automation demonstrations.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Practical automation experiments built to demonstrate how TestForge approaches
            modern web testing, regression coverage, and quality engineering — independent
            demonstrations, not client engagements.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {LAB_PROJECTS.map((project, i) => (
            <Reveal key={project.number} delay={i * 100} className="h-full">
              <div className="card-surface flex h-full flex-col overflow-hidden rounded-2xl">
                <div className="p-3">
                  <LabVideo title={project.title} />
                </div>

                <div className="flex flex-1 flex-col p-5 pt-2 sm:p-6 sm:pt-2">
                  <span className="inline-flex w-fit items-center rounded-full border border-border-strong px-2.5 py-1 text-[11px] font-medium leading-snug text-muted">
                    {project.badge}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5 font-mono text-[12px] text-muted-2">
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

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.coverage.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border px-2.5 py-1 text-[11.5px] leading-none text-foreground/75"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-muted-2">
          TestForge is not affiliated with, sponsored by, or endorsed by the referenced
          websites. These demonstrations are independently created for QA automation purposes.
        </p>
      </div>
    </section>
  );
}
