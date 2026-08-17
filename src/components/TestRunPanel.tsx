"use client";

import { useEffect, useState } from "react";

type Status = "pass" | "running" | "queued";

type TestLine = {
  file: string;
  name: string;
};

const TEST_LINES: TestLine[] = [
  { file: "auth.spec.ts", name: "signs in with valid credentials" },
  { file: "checkout.spec.ts", name: "completes end-to-end purchase flow" },
  { file: "api/orders.spec.ts", name: "validates response schema" },
  { file: "regression.spec.ts", name: "cart persists across sessions" },
  { file: "cross-browser.spec.ts", name: "renders correctly on WebKit" },
];

function StatusIcon({ status }: { status: Status }) {
  if (status === "pass") {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
        <path
          d="M2.5 7.2L5.4 10L11.5 3.7"
          stroke="var(--success)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (status === "running") {
    return (
      <span
        className="block h-3 w-3 shrink-0 animate-spin rounded-full border-[1.6px] border-accent/30 border-t-accent motion-reduce:animate-none"
        aria-hidden="true"
      />
    );
  }
  return (
    <span className="block h-1.5 w-1.5 shrink-0 rounded-full bg-(--panel-muted-2)" aria-hidden="true" />
  );
}

export function TestRunPanel() {
  const [runningIndex, setRunningIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const id = window.setInterval(() => {
      setRunningIndex((i) => (i + 1 < TEST_LINES.length ? i + 1 : i));
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  const passedCount = runningIndex;

  return (
    <div
      className="panel-dark w-full max-w-md overflow-hidden rounded-2xl border border-(--panel-border) bg-(--panel-bg) text-(--panel-fg) shadow-[var(--shadow-elevated)]"
      role="img"
      aria-label="Illustration of an automated Playwright test run, showing test files executing and passing"
    >
      <div className="flex items-center gap-1.5 border-b border-(--panel-border) px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="ml-3 font-mono text-[11px] text-(--panel-muted-2)">
          playwright test --project=chromium
        </span>
      </div>

      <div className="space-y-2.5 px-4 py-5 font-mono text-[12.5px] leading-relaxed">
        {TEST_LINES.map((line, i) => {
          const status: Status = i < runningIndex ? "pass" : i === runningIndex ? "running" : "queued";
          return (
            <div
              key={line.file}
              className={`flex items-center gap-2.5 transition-opacity duration-300 ${
                status === "queued" ? "opacity-40" : "opacity-100"
              }`}
            >
              <StatusIcon status={status} />
              <span className="text-(--panel-muted-2)">{line.file}</span>
              <span className="truncate text-(--panel-fg)/80">› {line.name}</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between border-t border-(--panel-border) px-4 py-3 font-mono text-[11px] text-(--panel-muted-2)">
        <span>
          {passedCount}/{TEST_LINES.length} passed
        </span>
        <span className="inline-flex items-center gap-1.5 text-(--panel-muted)">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          CI/CD pipeline
        </span>
      </div>
    </div>
  );
}
