import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const items = [
  {
    title: 'Ops Command Center',
    desc: 'Admin dashboard with automation hooks and KPI tracking.',
    tags: ['Admin', 'Automation', 'Dashboards'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Brand System Kit',
    desc: 'A modular design system and social content templates.',
    tags: ['Design', 'Branding', 'Figma'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Prompt Library',
    desc: 'Production-grade system and task prompts with eval notes.',
    tags: ['AI', 'Prompts', 'LLM'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Launch Microsites',
    desc: 'Fast, modern marketing pages optimized for conversion.',
    tags: ['Web', 'React', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Creative Toolkit',
    desc: 'Reusable assets and motion-ready graphics for campaigns.',
    tags: ['Design', 'Assets', 'Motion'],
    live: '#',
    repo: '#',
  },
  {
    title: 'RAG Playbooks',
    desc: 'Blueprints for retrieval-augmented workflows and testing.',
    tags: ['AI', 'RAG', 'Ops'],
    live: '#',
    repo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected Work</h2>
          <p className="mt-3 text-white/70">A snapshot of projects across admin ops, graphic design, and AI.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10 transition hover:border-white/20 hover:bg-white/10">
              <div className="mb-4 h-40 w-full rounded-xl bg-gradient-to-br from-white/10 to-white/5" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-white/80">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80 ring-1 ring-white/15">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.live} className="inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
