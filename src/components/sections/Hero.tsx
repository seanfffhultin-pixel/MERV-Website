import Image from "next/image";

const pulseItems = [
  {
    title: "",
    value: "Websites",
    note: "Design + build",
  },
  {
    title: "",
    value: "YouTube",
    note: "Video drops",
  },
  {
    title: "Coming Soon...",
    value: "Games",
    note: "Playable experiments",
  },
];

const metrics = [
  { value: "Web", label: "Interactive sites" },
  { value: "YT", label: "Video edits" },
  { value: "Games", label: "Playable ideas" },
];

export function Hero() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative">
        <div className="absolute -left-6 -top-10 h-32 w-32 rounded-full bg-cyan-300/30 blur-3xl" />

        <div className="mb-4">
          <Image
            src="/MERVA-logo-(transparent).png"
            alt="MERVÅ logo"
            width={700}
            height={220}
            className="h-28 w-auto sm:h-32 lg:h-36"
            priority
          />
        </div>
        <h1 className="text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl">
          Powers bold websites, YouTube universes, and game worlds.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-black/70">
          A hand-drawn, string-inspired hub for everything I make. Explore the
          portfolio, watch the drops, and play what is next.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 hover:shadow-[0_12px_28px_rgba(120,5,15,0.2)]">
            Explore the work
          </button>
          <button className="rounded-full border border-red-500/30 px-6 py-3 text-sm font-semibold text-red-700 transition hover:border-red-500 hover:text-red-800 hover:bg-red-50 hover:shadow-[0_10px_24px_rgba(120,5,15,0.12)]">
            Watch the latest
          </button>
        </div>
        <div className="mt-10 flex items-center gap-8 text-sm text-black/60">
          {metrics.map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-semibold text-black">{item.value}</p>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="glow" />
        <div className="glass glass-outline rounded-3xl p-6">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-black/50">
            <span>Now Playing</span>
          </div>
          <div className="mt-6 grid gap-4">
            {pulseItems.map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-red-500/15 bg-white/70 p-4 transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(120,5,15,0.12)]"
              >
                <p className="text-sm text-black/60">{item.title}</p>
                <p className="mt-2 text-2xl font-semibold text-black">
                  {item.value}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-red-500/70">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
