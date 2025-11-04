import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    // Update this link to your actual resume when available
    window.open('https://drive.google.com', '_blank');
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays to improve contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-transparent to-neutral-950/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col px-6">
        {/* Simple nav */}
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2 text-white/90">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span className="font-semibold tracking-wide">Flames Portfolio</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#services" className="text-sm text-white/80 hover:text-white">Services</a>
            <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
          </nav>
        </div>

        <div className="grid flex-1 place-items-center">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white/90 ring-1 ring-white/15 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Available for freelance & collaborations
            </p>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Admin, Graphic Designer, and Prompt Engineer crafting modern, interactive experiences
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-white/80">
              I blend systems thinking, visual design, and AI prompt engineering to ship products that are
              beautiful, usable, and efficient.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/20"
              >
                <Download className="h-4 w-4" /> Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
