import { useState } from 'react';
import { Building2, Sun, Filter } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { projects, projectCategories } from '@/data/projects';
import { images } from '@/data/images';

export default function Projects() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <img src={images.farmField} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/85 to-midnight" />
        </div>
        <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-electric-500/20 blur-[120px]" />
        <div className="container-px relative">
          <Reveal className="max-w-3xl">
            <span className="eyebrow text-electric-300"><Building2 className="h-4 w-4" /> Case Studies</span>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Solar Projects in Action
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Real-world residential, commercial, utility, and hybrid installations powered by Solar Depot technology. Filter by category to explore each project type.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="bg-offwhite py-16 lg:py-20">
        <div className="container-px">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-navy/60">
              <Filter className="h-4 w-4" /> Filter by category
            </div>
            <div className="flex flex-wrap gap-2.5">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    active === cat
                      ? 'bg-electric-500 text-white shadow-glow'
                      : 'border border-electric-500/20 bg-white text-navy/70 hover:border-electric-400 hover:text-electric-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-8 text-sm text-navy/60">
            Showing <span className="font-semibold text-navy">{filtered.length}</span> project{filtered.length === 1 ? '' : 's'}
            {active !== 'All' && <> in <span className="font-semibold text-electric-600">{active}</span></>}
          </p>

          {filtered.length > 0 ? (
            <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <StaggerItem key={p.id}>
                  <ProjectCard project={p} />
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-dashed border-electric-500/30 bg-white p-16 text-center">
              <Sun className="h-12 w-12 text-electric-300" />
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">No projects in this category</h3>
              <p className="mt-2 text-sm text-navy/60">Try a different filter.</p>
              <button onClick={() => setActive('All')} className="btn-secondary mt-6">Show all projects</button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
