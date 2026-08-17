"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS, PRIMARY_CTA_LABEL } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-border bg-background/90 shadow-[0_8px_24px_-20px_rgba(20,22,26,0.4)]" : "border-transparent bg-background/60"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-(--container-content) items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="rounded-sm focus-visible:outline-2 focus-visible:outline-accent"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {PRIMARY_CTA_LABEL}
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 5.5H17M3 10H17M3 14.5H17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden border-b border-border bg-background transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-5 pb-4 pt-2" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-foreground/90 transition-colors hover:bg-background-raised"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background"
            >
              {PRIMARY_CTA_LABEL}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
