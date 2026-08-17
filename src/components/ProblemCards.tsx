import { Reveal } from "./Reveal";

type ProblemCard = {
  problem: string;
  solution: string;
  span: string;
};

const PROBLEMS: ProblemCard[] = [
  {
    problem: "Regression takes too long.",
    solution: "Turn repetitive manual workflows into reliable automated regression suites.",
    span: "lg:col-span-7",
  },
  {
    problem: "Automation is flaky.",
    solution: "Identify unstable tests, improve framework reliability, and reduce false failures.",
    span: "lg:col-span-5",
  },
  {
    problem: "Your team needs QA automation expertise.",
    solution: "Get specialized QA engineering support without hiring a full-time automation team.",
    span: "lg:col-span-4",
  },
  {
    problem: "Releases are getting faster.",
    solution: "Integrate automated tests into CI/CD and catch regressions earlier.",
    span: "lg:col-span-4",
  },
  {
    problem: "Performance is uncertain.",
    solution: "Use structured performance testing to understand application behavior under load.",
    span: "lg:col-span-4",
  },
];

export function ProblemCards() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-(--container-content) px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="section-eyebrow text-xs font-medium uppercase text-accent">
            The challenge
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Your product is growing. Your testing process should too.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {PROBLEMS.map((item, i) => (
            <div key={item.problem} className={item.span}>
              <Reveal delay={i * 80} className="h-full">
                <div className="group card-surface relative h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 sm:p-7">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-muted transition-colors group-hover:border-accent/50 group-hover:text-accent">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path
                        d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{item.problem}</h3>
                  <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-muted">
                    {item.solution}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
