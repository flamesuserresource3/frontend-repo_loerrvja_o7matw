import React from 'react';
import { Palette, Bot, Shield, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Admin Operations',
    icon: Shield,
    color: 'from-emerald-500/20 to-emerald-500/10',
    points: [
      'Process optimization & SOPs',
      'Team coordination & documentation',
      'Automation and dashboards',
    ],
  },
  {
    title: 'Graphic Design',
    icon: Palette,
    color: 'from-fuchsia-500/20 to-fuchsia-500/10',
    points: [
      'Brand identity & social kits',
      'Web/UI assets & marketing visuals',
      'Motion-ready deliverables',
    ],
  },
  {
    title: 'Prompt Engineering',
    icon: Bot,
    color: 'from-cyan-500/20 to-cyan-500/10',
    points: [
      'LLM workflows & system prompts',
      'Dataset curation & evals',
      'RAG & automation prompts',
    ],
  },
  {
    title: 'No-Code Ops',
    icon: Wrench,
    color: 'from-amber-500/20 to-amber-500/10',
    points: [
      'Zapier/Make automations',
      'Airtable/Notion systems',
      'Lightweight internal tools',
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="relative z-10 bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What I Do</h2>
          <p className="mt-3 text-white/70">A blend of operations, design, and AI to move ideas from concept to launch.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, icon: Icon, points, color }) => (
            <div
              key={title}
              className={`group rounded-2xl border border-white/10 bg-gradient-to-b ${color} p-6 transition hover:border-white/20`}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
