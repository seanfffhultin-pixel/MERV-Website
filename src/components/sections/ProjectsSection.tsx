const projects = [
  {
    name: "seanfh.com",
    type: "Website",
    description: "Personal site and project hub.",
    link: "https://seanfh.com",
  },
  {
    name: "Sean FH Travels",
    type: "YouTube",
    description: "Travel edits, stories, and experiments.",
    link: "https://youtube.com/@seanfhtravels",
  },
  {
    name: "EnRoute",
    type: "Game",
    description: "Playable journey and in-progress release.",
    link: "#",
  },
];

export function ProjectsSection() {
  return (
    <section className="grid gap-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500/80">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-black">
            Selected work across web, video, and games.
          </h2>
          <p className="mt-3 max-w-2xl text-black/70">
            Each link is a snapshot of a bigger universe. Add or swap projects
            as you publish new work.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="glass glass-outline rounded-3xl border border-red-500/15 bg-white/80 p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(120,5,15,0.15)]"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-red-500/70">
              <span>{project.type}</span>
              <span>Open</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-black">
              {project.name}
            </h3>
            <p className="mt-3 text-sm text-black/70">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
