import { portfolioSections, documents } from './data';
import ProjectCard from './components/ProjectCard';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen p-4 md:p-8 max-w-6xl mx-auto font-sans">
      <header className="mb-10 border-b-2 border-teal pb-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Инженерное портфолио</h1>
        <p className="text-navy/80 text-lg md:text-xl max-w-2xl">
          Компьютерный инжиниринг, CAE-моделирование и оптимизация конструкций.
        </p>
      </header>

      <Navigation />

      <div className="space-y-20">
        {portfolioSections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-teal inline-block rounded-full"></span>
              {section.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {section.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        ))}

        <section
          id="reports"
          className="scroll-mt-10 bg-slate-50 p-6 md:p-10 rounded-2xl border border-navy/5"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-teal inline-block rounded-full"></span>
            Научные статьи и технические отчёты
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {documents.map((doc) => (
              <a
                key={doc.id}
                href="#"
                className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-white border border-navy/10 rounded-xl hover:border-teal hover:shadow-md transition-all group"
              >
                <div>
                  <h3 className="text-lg font-bold group-hover:text-teal transition-colors mb-1">
                    {doc.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-navy/60">
                    <span className="font-medium px-2 py-0.5 bg-slate-100 rounded">{doc.type}</span>
                    <span>{doc.date}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-teal font-medium text-sm flex items-center gap-2 opacity-80 group-hover:opacity-100">
                  Открыть PDF &rarr;
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-20 pt-8 border-t border-navy/10 text-center text-navy/50 text-sm pb-8">
        &copy; {new Date().getFullYear()} Инженерное портфолио
      </footer>
    </div>
  );
}
