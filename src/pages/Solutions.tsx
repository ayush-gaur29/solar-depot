import { useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Sun,
  Battery,
  Plug,
  Home as HomeIcon,
  Building2,
  Layers,
  type LucideIcon,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import CTASection from '@/components/CTASection';
import { solutions } from '@/data/solutions';

const solutionIcons: Record<string, LucideIcon> = {
  'energy-storage': Battery,
  'pv-grid-tie': Plug,
  'micro-inverter-plants': Layers,
  'residential-solar': HomeIcon,
  'commercial-solar': Building2,
};

export default function Solutions() {
  const [params] = useSearchParams();
  const focus = params.get('focus');
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (focus && refs.current[focus]) {
      const t = setTimeout(() => {
        refs.current[focus]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
      return () => clearTimeout(t);
    }
  }, [focus]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-midnight pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/9893731/pexels-photo-9893731.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/85 to-midnight" />
        </div>
        <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-electric-500/20 blur-[120px]" />
        <div className="container-px relative">
          <Reveal className="max-w-3xl">
            <span className="eyebrow text-electric-300"><Sun className="h-4 w-4" /> Our Solutions</span>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              End-to-End Solar Energy Solutions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              From energy storage to grid-tie plants, microinverters, residential, and commercial systems &mdash; integrated solar solutions engineered for every application.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Solution sections */}
      <div>
        {solutions.map((s, i) => {
          const Icon = solutionIcons[s.slug] ?? Sun;
          const isDark = s.theme === 'dark';
          const isIce = s.theme === 'ice';
          const bg = isDark ? 'bg-midnight' : isIce ? 'bg-electric-50' : 'bg-white';
          const textDark = isDark;
          const reverse = i % 2 === 1;

          return (
            <section
              key={s.slug}
              ref={(el) => { refs.current[s.slug] = el; }}
              className={`relative overflow-hidden ${bg} py-20 lg:py-28`}
            >
              {isDark && <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-25" />}
              {isDark && <div className="pointer-events-none absolute right-1/4 top-0 h-72 w-72 rounded-full bg-electric-500/15 blur-[120px]" />}

              <div className="container-px relative">
                <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? 'lg:grid-flow-dense' : ''}`}>
                  <Reveal className={reverse ? 'lg:col-start-2' : ''}>
                    <span className={`eyebrow inline-flex items-center gap-2 ${textDark ? 'text-electric-300' : 'text-electric-600'}`}>
                      <Icon className="h-4 w-4" /> {s.shortName}
                    </span>
                    <h2 className={`mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl ${textDark ? 'text-white' : 'text-navy'}`}>
                      {s.name}
                    </h2>
                    <p className={`mt-3 text-base font-medium ${textDark ? 'text-electric-300' : 'text-electric-600'}`}>{s.tagline}</p>
                    <p className={`mt-5 text-lg leading-relaxed ${textDark ? 'text-white/70' : 'text-navy/65'}`}>{s.description}</p>

                    <h3 className={`mt-7 text-sm font-semibold uppercase tracking-wider ${textDark ? 'text-white/50' : 'text-navy/50'}`}>Key Benefits</h3>
                    <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                      {s.benefits.map((b) => (
                        <li key={b} className={`flex items-start gap-2 text-sm ${textDark ? 'text-white/75' : 'text-navy/70'}`}>
                          <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${textDark ? 'text-electric-400' : 'text-electric-500'}`} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7">
                      <h3 className={`text-sm font-semibold uppercase tracking-wider ${textDark ? 'text-white/50' : 'text-navy/50'}`}>Featured Products</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.products.map((p) => (
                          <span key={p} className={`rounded-full px-3 py-1.5 text-xs font-medium ${textDark ? 'bg-white/10 text-electric-200' : 'bg-electric-50 text-electric-700'}`}>
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link to="/contact" className={`mt-8 inline-flex items-center gap-2 text-sm font-semibold ${textDark ? 'text-white hover:text-electric-300' : 'text-electric-600 hover:text-electric-700'}`}>
                      Talk to our team <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Reveal>

                  <Reveal delay={0.15} className={reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative">
                      <div className={`absolute -inset-3 rounded-3xl blur-2xl ${textDark ? 'bg-electric-500/15' : 'bg-electric-400/15'}`} />
                      <div className="relative overflow-hidden rounded-3xl shadow-soft-lg">
                        <img src={s.image} alt={s.name} className="aspect-[4/3] w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTASection />
    </>
  );
}
