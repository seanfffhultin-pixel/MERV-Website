const features = [
  {
    title: "Web Studios",
    text: "Glass-forward sites, campaigns, and interactive brand spaces.",
  },
  {
    title: "YouTube Worlds",
    text: "Series, short-form drops, and cinematic storytelling loops.",
  },
  {
    title: "Game Labs",
    text: "Playable experiences, prototypes, and live experiments.",
  },
];

export function FeatureGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {features.map((item) => (
        <div
          key={item.title}
          className="glass glass-outline rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(120,5,15,0.12)]"
        >
          <h3 className="text-lg font-semibold text-black">{item.title}</h3>
          <p className="mt-3 text-sm text-black/70">{item.text}</p>
        </div>
      ))}
    </section>
  );
}
