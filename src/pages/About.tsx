import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Cpu,
  ShieldCheck,
  Leaf,
  Handshake,
  ArrowRight,
  Microscope,
  Lightbulb,
  Users,
  Sun,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import CTASection from '@/components/CTASection';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { company } from '@/data/company';
import { images } from '@/data/images';

const valueIcons: Record<string, typeof Cpu> = {
  Cpu,
  ShieldCheck,
  Leaf,
  Handshake,
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <img src={images.farmWind} alt="Solar farm" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/85 to-midnight" />
        </div>
        <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-electric-500/20 blur-[120px]" />
        <div className="container-px relative">
          <Reveal className="max-w-3xl">
            <span className="eyebrow text-electric-300"><Sun className="h-4 w-4" /> About Solar Depot</span>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering a Cleaner Energy Future
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              {company.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative overflow-hidden bg-offwhite py-20 lg:py-28">
        <div className="container-px">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-3xl border border-electric-500/15 bg-white p-8 shadow-soft lg:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-electric-50 text-electric-600">
                  <Target className="h-7 w-7" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold text-navy">Our Mission</h2>
                <p className="mt-4 text-base leading-relaxed text-navy/65">{company.mission}</p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-electric-500/15 bg-electric-50 p-8 shadow-soft lg:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-cantaloupe-600 shadow-soft">
                  <Eye className="h-7 w-7" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold text-navy">Our Vision</h2>
                <p className="mt-4 text-base leading-relaxed text-navy/65">{company.vision}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Expertise - dark */}
      <section className="relative overflow-hidden bg-midnight py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-30" />
        <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-electric-500/15 blur-[120px]" />
        <div className="container-px relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="eyebrow text-electric-300"><Microscope className="h-4 w-4" /> Our Expertise</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Solar Technology Expertise &amp; R&amp;D
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                Solar Depot invests in continuous research and development to push the boundaries of photovoltaic efficiency, inverter intelligence, and energy storage integration. Our engineering team validates every product through rigorous testing before it reaches the field.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  { icon: Cpu, text: 'In-house inverter and storage engineering' },
                  { icon: Microscope, text: 'Accelerated product testing and validation' },
                  { icon: Lightbulb, text: 'Grid code compliance across regions' },
                  { icon: Users, text: 'Installer training and technical support' },
                ].map((i) => (
                  <li key={i.text} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-electric-500/15 text-electric-300">
                      <i.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm leading-relaxed text-white/75">{i.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <img src={images.engineers} alt="Engineers reviewing plans" className="aspect-[3/4] w-full rounded-2xl object-cover shadow-soft" />
                <img src={images.cadDesign} alt="CAD design work" className="mt-8 aspect-[3/4] w-full rounded-2xl object-cover shadow-soft" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values - light */}
      <section className="relative overflow-hidden bg-electric-50 py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Values"
            icon={ShieldCheck}
            title="What Guides Us"
            description="The principles behind every product, project, and partnership."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {company.values.map((v) => {
              const Icon = valueIcons[v.icon] ?? Cpu;
              return (
                <StaggerItem key={v.title}>
                  <div className="group h-full rounded-2xl border border-electric-500/15 bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-50 text-electric-600 transition-all duration-500 group-hover:bg-electric-500 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-navy">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/60">{v.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative overflow-hidden bg-navy py-16">
        <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-20" />
        <div className="container-px relative">
          <Stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {company.stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center">
                  <p className="font-display text-4xl font-bold text-gradient-blue lg:text-5xl">{s.value}</p>
                  <p className="mt-2 text-sm text-white/60">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why choose */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="eyebrow text-electric-600"><Sun className="h-4 w-4" /> Why Choose Us</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                A Trusted Solar Energy Partner
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy/65">
                We combine premium hardware with engineering know-how and dedicated support to deliver solar systems that perform reliably for the long term.
              </p>
              <Link to="/products" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-electric-600 hover:text-electric-700">
                Explore our products <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-3xl shadow-soft-lg">
                <img src={images.technicianInspect} alt="Solar technician" className="aspect-[4/3] w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
