import { useRef, useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const lightVideoRef = useRef<HTMLVideoElement>(null);
  const darkVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (project.videoLight && lightVideoRef.current) {
      lightVideoRef.current.play().catch((e) => {
        if (e.name !== 'AbortError') console.error(e);
      });
    }
    if (project.videoDark && darkVideoRef.current) {
      darkVideoRef.current.play().catch((e) => {
        if (e.name !== 'AbortError') console.error(e);
      });
    }
  };

  const handleMouseLeave = () => {
    if (lightVideoRef.current) lightVideoRef.current.pause();
    if (darkVideoRef.current) darkVideoRef.current.pause();
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isPlaying) {
      handleMouseLeave();
    } else {
      handleMouseEnter();
    }
  };

  const hasVideo = project.videoLight && project.videoDark;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group flex flex-col relative h-full"
    >
      <div className="w-full aspect-video relative z-10 -mb-2 cursor-pointer" onClick={togglePlay}>
        {hasVideo ? (
          <>
            <video
              ref={lightVideoRef}
              src={project.videoLight}
              loop
              muted
              playsInline
              preload="auto"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 opacity-100 dark:opacity-0"
            />

            <video
              ref={darkVideoRef}
              src={project.videoDark}
              loop
              muted
              playsInline
              preload="auto"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 opacity-0 dark:opacity-100"
            />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-navy/30 dark:text-slate-600 font-mono text-sm px-4 text-center">
              Нет видео
            </span>
          </div>
        )}

        {hasVideo && (
          <div className="hidden md:flex absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity items-center justify-center pointer-events-none z-20">
            <span className="text-xs font-semibold tracking-wider uppercase bg-white/80 dark:bg-ansys-dark/80 px-3 py-1.5 rounded-md backdrop-blur-sm shadow-sm text-teal">
              Наведите для анимации
            </span>
          </div>
        )}

        {hasVideo && !isPlaying && (
          <div className="flex md:hidden absolute inset-0 items-center justify-center pointer-events-none z-20 bg-navy/5 dark:bg-black/20 transition-all duration-300">
            <div className="bg-white/90 dark:bg-ansys-dark/90 p-3 rounded-full backdrop-blur-sm shadow-md text-teal">
              <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-0 bg-slate-50 dark:bg-ansys-card rounded-xl shadow-sm group-hover:shadow-lg group-hover:shadow-teal/40 dark:group-hover:shadow-teal/30 transition-all duration-300 border border-navy/5 dark:border-slate-700/50">
        <h3 className="text-xl font-bold mb-3 leading-tight dark:text-white transition-colors">
          {project.title}
        </h3>
        <p className="mb-6 text-navy/70 dark:text-slate-400 text-sm md:text-base leading-relaxed flex-grow transition-colors">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-navy/5 dark:border-slate-700/30">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/60 dark:bg-ansys-dark text-teal px-3 py-1.5 rounded-md text-xs font-semibold border border-transparent dark:border-slate-700/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
