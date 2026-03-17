"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (wasOpenRef.current && !open) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    wasOpenRef.current = open;
  }, [open]);

  return (
    <nav className="sticky top-6 z-30">
      <div className="flex items-center gap-4 rounded-full px-5 py-3 glass glass-outline backdrop-blur-md shadow-[0_18px_40px_rgba(120,5,15,0.12)] transition hover:shadow-[0_24px_56px_rgba(120,5,15,0.18)] dark:shadow-[0_18px_40px_rgba(0,0,0,0.55)] dark:hover:shadow-[0_24px_56px_rgba(0,0,0,0.65)]">
        <div className="flex items-center gap-4 shrink-0">
          <Image
            src="/MERVA-logo-(transparent).png"
            alt="MERVÅ logo"
            width={180}
            height={60}
            className="h-8 w-auto transition hover:scale-[1.02] sm:h-10"
            priority
          />
        </div>

        <div className="hidden items-center gap-2 text-sm text-black md:flex md:flex-1 md:justify-center dark:text-white">
          <a
            className="rounded-full px-4 py-2 transition hover:bg-red-50 hover:text-red-700 dark:hover:bg-white/10 dark:hover:text-red-200"
            href="https://seanfh.com"
            target="_blank"
            rel="noreferrer"
          >
            seanfh.com
          </a>
          <a
            className="rounded-full px-4 py-2 transition hover:bg-red-50 hover:text-red-700 dark:hover:bg-white/10 dark:hover:text-red-200"
            href="https://youtube.com/@seanfhtravels"
            target="_blank"
            rel="noreferrer"
          >
            Sean FH Travels
          </a>
        </div>

        <div className="flex items-center gap-3 md:min-w-[120px] md:justify-end">
          <ThemeToggle />
          <button
            className="md:hidden"
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-red-500/30 bg-white/80 transition hover:border-red-500 hover:bg-red-50 dark:border-red-400/40 dark:bg-slate-900/70 dark:hover:border-red-300 dark:hover:bg-white/10 ${
                open ? "shadow-[0_10px_24px_rgba(120,5,15,0.15)]" : ""
              }`}
            >
              <span className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-red-700 transition-transform duration-300 dark:bg-red-200 ${
                    open ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-red-700 transition-opacity duration-200 dark:bg-red-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-red-700 transition-transform duration-300 dark:bg-red-200 ${
                    open ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height,opacity,transform,padding] duration-300 ease-out will-change-[max-height,opacity,transform] ${
          open
            ? "max-h-40 opacity-100 scale-100 pt-3"
            : "max-h-0 opacity-0 scale-[0.98] pt-0"
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-red-500/20 bg-white/90 text-sm text-black shadow-[0_12px_28px_rgba(120,5,15,0.12)] dark:border-red-500/30 dark:bg-slate-900/80 dark:text-white">
          <div className="grid gap-2 px-4 py-3">
            <a
              className="rounded-full px-4 py-2 transition hover:bg-red-50 hover:text-red-700 dark:hover:bg-white/10 dark:hover:text-red-200"
              href="https://seanfh.com"
              target="_blank"
              rel="noreferrer"
            >
              seanfh.com
            </a>
            <a
              className="rounded-full px-4 py-2 transition hover:bg-red-50 hover:text-red-700 dark:hover:bg-white/10 dark:hover:text-red-200"
              href="https://youtube.com/@seanfhtravels"
              target="_blank"
              rel="noreferrer"
            >
              Sean FH Travels
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
