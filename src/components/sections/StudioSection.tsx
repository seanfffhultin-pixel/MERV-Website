const modules = [
  "Web builds + redesigns",
  "YouTube edits + drops",
  "Game prototypes",
  "Motion experiments",
  "Sound + music cues",
  "Playtest loops",
];

export function StudioSection() {
  return (
    <section className="grid gap-8 rounded-3xl border border-red-500/15 bg-white/70 p-10 md:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
          MERVÅ Tools
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-black">
          A maker stack for web, video, and games.
        </h2>
        <p className="mt-4 text-black/70">
          I blend concept, production, and polish to ship work that feels
          cinematic, playful, and sharp.
        </p>
        <button className="mt-6 rounded-full border border-red-500/30 px-6 py-3 text-sm font-semibold text-red-700 transition hover:border-red-500 hover:text-red-800 hover:bg-red-50">
          Send an idea
        </button>
      </div>
      <div className="glass glass-outline rounded-2xl p-6">
        <div className="flex items-center justify-between text-sm text-black/60">
          <span>What I make</span>
          <span>06</span>
        </div>
        <div className="mt-6 space-y-4 text-sm text-black/70">
          {modules.map((item) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-xl border border-red-500/15 bg-white/80 px-4 py-3 transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(255,26,45,0.12)]"
            >
              <span>{item}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-red-500/70">
                Active
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
