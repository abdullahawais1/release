import { Reveal } from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your product, users, current testing process, and QA challenges.",
  },
  {
    number: "02",
    title: "Assess",
    description: "Review your application and identify high-value automation and testing opportunities.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop reliable automated tests around critical workflows.",
  },
  {
    number: "04",
    title: "Integrate",
    description: "Connect your testing process with CI/CD and development workflows.",
  },
  {
    number: "05",
    title: "Improve",
    description: "Continuously maintain, expand, and optimize test coverage.",
  },
];

export function Process() {
  return (
    <section id="approach" className="border-t border-border bg-background-raised/40 py-14 sm:py-20">
      <div className="mx-auto max-w-(--container-content) px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-eyebrow text-xs font-medium uppercase text-accent">Approach</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            From testing challenges to release confidence.
          </h2>
        </Reveal>

        <ol className="relative mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <div
            className="pointer-events-none absolute left-0 right-0 top-4 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <li key={step.number} className="relative">
              <Reveal delay={i * 100}>
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border-strong bg-background-raised font-mono text-xs text-accent lg:bg-background">
                  {step.number}
                </div>
                <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 max-w-[22ch] text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
