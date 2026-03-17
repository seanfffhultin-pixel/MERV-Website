"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "merva-theme";

function getPreferredTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const preferred = getPreferredTheme();
    setTheme(preferred);
    applyTheme(preferred);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== "light" && stored !== "dark") {
        const next = media.matches ? "dark" : "light";
        setTheme(next);
        applyTheme(next);
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";
  const isDark = theme === "dark";
  const baseColor = isDark ? "#fca5a5" : "#b91c1c";
  const activeColor = isDark ? "#f87171" : "#991b1b";
  const labelColor = pressed ? activeColor : baseColor;

  const handleToggle = () => {
    setTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-pressed={theme === "dark"}
      aria-label={`Switch to ${nextTheme} mode`}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      className="theme-toggle group relative flex h-10 w-20 items-center justify-center rounded-full border border-red-500/30 bg-white/80 shadow-[0_8px_22px_rgba(120,5,15,0.12)] transition hover:border-red-500 hover:bg-red-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400/60 dark:border-red-400/40 dark:bg-slate-900/70 dark:shadow-[0_10px_26px_rgba(248,113,113,0.2)]"
      style={{ color: labelColor, WebkitTextFillColor: labelColor }}
    >
      <span
        className={`absolute inset-0 rounded-full transition ${
          theme === "dark"
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        }`}
      />
      <span
        className="relative select-none text-[10px] font-semibold uppercase tracking-[0.18em]"
        style={{ color: labelColor, WebkitTextFillColor: labelColor }}
      >
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
