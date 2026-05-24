import { useState } from 'react';
import { portfolioSections } from '../data';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mb-16 bg-slate-50 p-5 md:p-6 rounded-xl border border-navy/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-sm font-bold uppercase tracking-wider text-navy/50 md:cursor-default md:mb-4 focus:outline-none"
        tabIndex={typeof window !== 'undefined' && window.innerWidth >= 768 ? -1 : 0}
      >
        <span>Навигация по разделам</span>
        
        <svg 
          className={`w-5 h-5 transition-transform duration-300 md:hidden ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <ul className={`flex-col gap-3 mt-4 md:mt-0 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        {portfolioSections.map(section => (
          <li key={`nav-${section.id}`}>
            <a 
              href={`#${section.id}`} 
              onClick={() => setIsOpen(false)}
              className="text-navy hover:text-teal font-medium transition-colors block py-2 md:py-0"
            >
              {section.title}
            </a>
          </li>
        ))}
        <li>
          <a 
            href="#reports" 
            onClick={() => setIsOpen(false)}
            className="text-navy hover:text-teal font-medium transition-colors block py-2 md:py-0"
          >
            Научные статьи и технические отчёты
          </a>
        </li>
      </ul>
    </nav>
  );
}