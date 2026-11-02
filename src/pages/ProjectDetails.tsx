import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight, MapPin, Calendar, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import ProjectCard from '@/components/ProjectCard';
import CTASection from '@/components/CTASection';
import { getProjectBySlug, projects } from '@/data/projects';

export default function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  const more = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3);
  const related = more.length > 0 ? more : projects.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <section className="relative overflow-hidden bg-midnight pt-28 pb-12">
        <div className="absolute inset-0 grid-bg-dark opacity-25" />
        <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-electric-500/15 blur-[110px]" />
        <div className="container-px relative">
          <nav className="flex items-center gap-1.5 text-sm text-white/50">
            <Link to="/" className="hover:text-electric-300">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/projects" className="hover:text-electric-300">Projects</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">{project.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-white">
        <div className="container-px py-10">
          <Link to="/projects" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-electric-600 hover:text-electric-700">
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
          <div className="relative overflow-hidden rounded-3xl shadow-soft-lg">
            <img src={project.image} alt={project.title} className="aspect-[16/9] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-3 text-white">
              <span className="rounded-full bg-electric-500 px-3 py-1 text-xs font-semibold shadow-glow">{project.category}</span>
              <span className="flex items-center gap-1.5 text-sm"><MapPin className="h-4 w-4" /> {project.location}</span>
              <span className="flex items-center gap-1.5 text-sm"><Calendar className="h-4 w-4" /> {project.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detail */}
      <section className="bg-white pb-16 lg:pb-20">
        <div className="container-px">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            <Reveal className="lg:col-span-2">
              <h1 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">{project.title}</h1>
              <p className="mt-5 text-lg leading-relaxed text-navy/65">{project.description}</p>

              <div className="mt-8">
                <h2 className="flex items-center gap-2 font-display text-xl font-semibold text-navy">
                  <Building2 className="h-5 w-5 text-electric-500" /> Project Overview
                </h2>
                <p className="mt-3 text-base leading-relaxed text-navy/60">
                  This {project.category.toLowerCase()} installation demonstrates Solar Depot&rsquo;s integrated approach &mdash; combining the right inverters, storage, and monitoring to deliver reliable clean energy tailored to the site&rsquo;s requirements.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {[
                    'Engineered for the site\u2019s energy profile and demand pattern',
                    'Deployed with Solar Depot inverters and monitoring',
                    'Designed for long-term reliability and yield',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-navy/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric-500" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-electric-500/15 bg-electric-50 p-6">
                <h3 className="font-display text-lg font-semibold text-navy">Project Details</h3>
                <dl className="mt-4 divide-y divide-electric-500/15">
                  {project.details.map((d) => (
                    <div key={d.label} className="flex items-center justify-between py-3">
                      <dt className="text-sm text-navy/55">{d.label}</dt>
                      <dd className="text-sm font-semibold text-navy">{d.value}</dd>
                    </div>
                  ))}
                  <div className="flex items-center justify-between py-3">
                    <dt className="text-sm text-navy/55">Location</dt>
                    <dd className="text-sm font-semibold text-navy">{project.location}</dd>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <dt className="text-sm text-navy/55">Year</dt>
                    <dd className="text-sm font-semibold text-navy">{project.year}</dd>
                  </div>
                </dl>
                <Link to="/contact" className="btn-secondary mt-6 w-full">
                  Discuss a similar project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* More projects */}
      <section className="bg-offwhite py-16 lg:py-20">
        <div className="container-px">
          <h2 className="font-display text-2xl font-bold text-navy">More Projects</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
