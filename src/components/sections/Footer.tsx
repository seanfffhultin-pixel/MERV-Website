export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-red-500/15 bg-white/70 px-8 py-6 text-sm text-black dark:border-red-500/25 dark:bg-slate-900/80 dark:text-white">
      <p>MERVÅ — Websites, YouTube, games, and digital worlds</p>
      <div className="flex items-center gap-6">
        <a
          className="transition hover:text-red-700 hover:underline dark:hover:text-red-200"
          href="#"
        >
          Instagram
        </a>
        <a
          className="transition hover:text-red-700 hover:underline dark:hover:text-red-200"
          href="#"
        >
          Behance
        </a>
        <a
          className="transition hover:text-red-700 hover:underline dark:hover:text-red-200"
          href="#"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
