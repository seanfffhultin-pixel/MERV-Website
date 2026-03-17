const youtubeHighlights = [
  {
    title: "Airline Reviews",
    description: "Cabin, service, and route breakdowns from the field.",
    link: "https://youtube.com/@seanfhtravels",
  },
  {
    title: "Airline Industry Documentaries",
    description: "Stories on routes, fleets, and how the industry works.",
    link: "https://youtube.com/@seanfhtravels",
  },
];

export function YouTubeSection() {
  return (
    <section
      id="youtube"
      className="grid gap-8 rounded-3xl border border-red-500/15 bg-white/70 p-10 md:grid-cols-[1.1fr_0.9fr] dark:border-red-500/30 dark:bg-slate-900/70"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 dark:text-red-300">
          Sean FH Travels
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-black dark:text-white">
          Travel edits, stories, and experiments.
        </h2>
        <p className="mt-4 text-black dark:text-white">
          Focused coverage of airline reviews and airline industry
          documentaries.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 hover:shadow-[0_12px_28px_rgba(120,5,15,0.2)] dark:hover:shadow-[0_12px_28px_rgba(248,113,113,0.25)]"
            href="https://youtube.com/@seanfhtravels"
            target="_blank"
            rel="noreferrer"
          >
            Visit the channel
          </a>
          <a
            className="rounded-full border border-red-500/30 px-6 py-3 text-sm font-semibold text-red-700 transition hover:border-red-500 hover:text-red-800 hover:bg-red-50 hover:shadow-[0_10px_24px_rgba(120,5,15,0.12)] dark:border-red-400/40 dark:text-red-200 dark:hover:border-red-300 dark:hover:text-red-100 dark:hover:bg-red-500/10 dark:hover:shadow-[0_10px_24px_rgba(248,113,113,0.2)]"
            href="https://youtube.com/@seanfhtravels/videos"
            target="_blank"
            rel="noreferrer"
          >
            Latest upload
          </a>
        </div>
      </div>
      <div className="grid gap-4">
        {youtubeHighlights.map((item) => (
          <a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="glass glass-outline rounded-2xl border border-red-500/15 bg-white/80 p-5 transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(120,5,15,0.12)] dark:border-red-500/25 dark:bg-slate-950/70 dark:hover:shadow-[0_16px_32px_rgba(248,113,113,0.18)]"
          >
            <p className="text-lg font-semibold text-black dark:text-white">{item.title}</p>
            <p className="mt-2 text-sm text-black dark:text-white">{item.description}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-red-600 dark:text-red-300">
              Watch
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
