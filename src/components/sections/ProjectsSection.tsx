const projects = [
  {
    name: "seanfh.com",
    type: "Website",
    description: "Personal site and project hub.",
    link: "https://seanfh.com",
    status: "Open",
  },
  {
    name: "Sean FH Travels",
    type: "YouTube",
    description: "Travel edits, stories, and experiments.",
    link: "https://youtube.com/@seanfhtravels",
    status: "Open",
  },
  {
    name: "EnRoute",
    type: "Game",
    description: "Playable journey and in-progress release.",
    link: null,
    status: "In Development",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="grid gap-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-600 dark:text-red-300">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-black dark:text-white">
            Selected work across web, video, and games.
          </h2>
          <p className="mt-3 max-w-2xl text-black dark:text-white">
            Each link is a snapshot of a bigger universe. Add or swap projects
            as you publish new work.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => {
          const Component = project.link ? "a" : "div";
          const isInDevelopment = project.status === "In Development";
          const textColor = isInDevelopment
            ? "text-amber-600 dark:text-amber-400"
            : "text-red-600 dark:text-red-300";
          const borderColor = isInDevelopment
            ? "border-amber-500/15 dark:border-amber-500/25"
            : "border-red-500/15 dark:border-red-500/25";
          const hoverShadow = isInDevelopment
            ? "hover:shadow-[0_18px_36px_rgba(180,83,9,0.15)] dark:hover:shadow-[0_18px_36px_rgba(251,191,36,0.2)]"
            : "hover:shadow-[0_18px_36px_rgba(120,5,15,0.15)] dark:hover:shadow-[0_18px_36px_rgba(248,113,113,0.2)]";

          return (
            <Component
              key={project.name}
              {...(project.link && {
                href: project.link,
                target: "_blank",
                rel: "noreferrer",
              })}
              className={`glass glass-outline rounded-3xl ${borderColor} bg-white/80 p-6 transition hover:-translate-y-1 ${hoverShadow} dark:bg-slate-950/70 ${!project.link ? "" : ""}`}
            >
              <div className={`flex items-center justify-between text-xs uppercase tracking-[0.2em] ${textColor}`}>
                <span>{project.type}</span>
                <span>{project.status}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-black dark:text-white">
                {project.name}
              </h3>
              <p className="mt-3 text-sm text-black dark:text-white">
                {project.description}
              </p>
            </Component>
          );
        })}
      </div>
    </section>
  );
}
