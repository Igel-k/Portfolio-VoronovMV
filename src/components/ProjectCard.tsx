import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-navy/10 dark:border-slate-700/50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg dark:shadow-none dark:hover:shadow-teal/20 transition-all duration-300 group flex flex-col bg-white dark:bg-ansys-card">
      <div className="bg-slate-100 dark:bg-ansys-dark aspect-video flex items-center justify-center relative overflow-hidden">
        <span className="text-navy/30 font-mono text-sm">mp4 video placeholder</span>
        <div className="absolute inset-0 bg-navy/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white font-bold bg-teal/90 backdrop-blur-sm px-6 py-2 rounded-full shadow-md text-sm tracking-wide">
            Play Animation
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 leading-tight dark:text-white transition-colors">
          {project.title}
        </h3>
        <p className="mb-6 text-navy/70 dark:text-slate-400 text-sm md:text-base leading-relaxed flex-grow transition-colors">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-navy/5 dark:border-slate-700/50">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-100 dark:bg-ansys-dark text-teal px-3 py-1.5 rounded-md text-xs font-semibold border border-transparent dark:border-slate-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
