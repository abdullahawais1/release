import { Reveal } from "./Reveal";

type TechGroup = {
  category: string;
  items: string[];
};

const TECH_GROUPS: TechGroup[] = [
  { category: "Automation", items: ["Playwright", "Cypress", "Selenium", "WebdriverIO"] },
  { category: "API", items: ["REST APIs", "Postman"] },
  { category: "Performance", items: ["Apache JMeter"] },
  { category: "CI/CD", items: ["GitHub Actions", "Jenkins"] },
];

export function TechnologyStrip() {
  return (
    <section className="panel-dark relative overflow-hidden bg-(--panel-bg) py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 panel-grid" aria-hidden="true" />
      <div className="relative mx-auto max-w-(--container-content) px-5 sm:px-8">
        <Reveal>
          <p className="section-eyebrow text-center text-xs font-medium uppercase text-accent">
            Technology
          </p>
          <h2 className="mt-3 text-center text-2xl font-semibold tracking-tight text-(--panel-fg) sm:text-3xl">
            Modern QA for modern software teams.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-(--panel-muted)">
            We use the right testing approach for your product — not every tool we know.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {TECH_GROUPS.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
              <h3 className="section-eyebrow text-xs font-medium uppercase text-(--panel-muted-2)">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const isPrimary = item === "Playwright";
                  return (
                    <span
                      key={item}
                      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-[12.5px] transition-colors ${
                        isPrimary
                          ? "border-accent/50 bg-accent/15 text-(--panel-fg)"
                          : "border-(--panel-border) bg-(--panel-bg-raised) text-(--panel-fg)/80"
                      }`}
                    >
                      {isPrimary ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      ) : null}
                      {item}
                    </span>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
