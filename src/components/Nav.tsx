"use client";

import { useState } from "react";
import { nav, profile } from "@/lib/profile";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-ink bg-ink font-serif text-sm text-paper">
            NP
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-medium tracking-tight">
              {profile.name}
            </span>
            <span className="block text-xs text-muted">{profile.role}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="border border-ink bg-ink px-3 py-2 text-paper transition-colors hover:bg-copper hover:border-copper"
          >
            Email
          </a>
        </nav>

        <button
          type="button"
          className="border border-line px-3 py-2 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-line px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-3 text-base">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
                {profile.email}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
