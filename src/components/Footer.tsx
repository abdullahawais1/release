import { Logo } from "./Logo";
import { NAV_LINKS, PRIMARY_CTA_LABEL } from "@/lib/content";

const SOCIALS = [
  {
    label: "LinkedIn",
    icon: (
      <path
        d="M4.5 6.5H6.8V13.5H4.5V6.5ZM5.65 3.5C6.4 3.5 7 4.1 7 4.85C7 5.6 6.4 6.2 5.65 6.2C4.9 6.2 4.3 5.6 4.3 4.85C4.3 4.1 4.9 3.5 5.65 3.5ZM8.6 6.5H10.8V7.55H10.83C11.13 6.98 11.85 6.38 12.93 6.38C15.27 6.38 15.7 7.92 15.7 9.92V13.5H13.4V10.38C13.4 9.6 13.39 8.6 12.32 8.6C11.24 8.6 11.08 9.44 11.08 10.32V13.5H8.6V6.5Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "GitHub",
    icon: (
      <path
        d="M10 3.2C6.27 3.2 3.25 6.22 3.25 9.95C3.25 12.94 5.19 15.47 7.88 16.36C8.21 16.42 8.34 16.22 8.34 16.05C8.34 15.9 8.33 15.4 8.33 14.87C6.5 15.25 6.1 14.08 6.1 14.08C5.79 13.29 5.35 13.08 5.35 13.08C4.73 12.66 5.39 12.67 5.39 12.67C6.08 12.72 6.44 13.38 6.44 13.38C7.05 14.42 8.03 14.12 8.41 13.95C8.47 13.5 8.65 13.2 8.85 13.03C7.31 12.86 5.69 12.26 5.69 9.68C5.69 8.94 5.96 8.34 6.39 7.87C6.32 7.7 6.08 7.01 6.46 6.09C6.46 6.09 7.03 5.91 8.33 6.79C8.87 6.64 9.44 6.57 10 6.57C10.56 6.57 11.13 6.64 11.67 6.79C12.97 5.91 13.54 6.09 13.54 6.09C13.92 7.01 13.68 7.7 13.61 7.87C14.04 8.34 14.31 8.94 14.31 9.68C14.31 12.27 12.68 12.85 11.14 13.02C11.39 13.24 11.61 13.66 11.61 14.31C11.61 15.24 11.6 15.83 11.6 16.05C11.6 16.22 11.72 16.43 12.06 16.36C14.75 15.46 16.68 12.94 16.68 9.95C16.68 6.22 13.72 3.2 10 3.2Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    ),
  },
  {
    label: "Email",
    icon: (
      <path
        d="M4 5.5H16C16.55 5.5 17 5.95 17 6.5V13.5C17 14.05 16.55 14.5 16 14.5H4C3.45 14.5 3 14.05 3 13.5V6.5C3 5.95 3.45 5.5 4 5.5Z M4 6.5L10 10.5L16 6.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="panel-dark bg-(--panel-bg)">
      <div className="mx-auto max-w-(--container-content) px-5 pt-14 sm:px-8">
        <div className="flex flex-col gap-10 border-b border-(--panel-border) pb-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-sm">
            <Logo tone="inverted" />
            <p className="mt-3 text-sm leading-relaxed text-(--panel-muted)">
              QA Automation &amp; Quality Engineering
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-(--panel-bg) transition-colors hover:bg-accent hover:text-white"
          >
            {PRIMARY_CTA_LABEL}
          </a>
        </div>

        <div className="flex flex-col gap-8 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-(--panel-muted) transition-colors hover:text-(--panel-fg)"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#0"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-(--panel-border) text-(--panel-muted) transition-colors hover:border-(--panel-border-strong) hover:text-(--panel-fg)"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 pb-10 text-xs text-(--panel-muted-2)">
          © {year} TestForge. All rights reserved.
        </p>
      </div>

      <div className="overflow-hidden border-t border-(--panel-border)">
        <p
          aria-hidden="true"
          className="select-none whitespace-nowrap px-4 pb-2 text-center font-semibold leading-none tracking-tight text-(--panel-fg)"
          style={{ fontSize: "clamp(3.25rem, 16vw, 11rem)" }}
        >
          TestForge
        </p>
      </div>
    </footer>
  );
}
