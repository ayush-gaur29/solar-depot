import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Battery,
  Building2,
  Cpu,
  Home as HomeIcon,
  Leaf,
  Plug,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
  Sun,
  type LucideIcon,
} from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import SolutionCard from '@/components/SolutionCard';
import ProjectCard from '@/components/ProjectCard';
import CTASection from '@/components/CTASection';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { company } from '@/data/company';
import { images } from '@/data/images';
import { products, featuredProductSlugs } from '@/data/products';
import { solutions } from '@/data/solutions';
import { projects } from '@/data/projects';

const featuredProducts = featuredProductSlugs
  .map((slug) => products.find((p) => p.slug === slug))
  .filter(Boolean) as typeof products;

const whyChoose: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Cpu, title: 'Advanced Solar Technology', desc: 'Cutting-edge photovoltaic and inverter engineering for maximum energy harvest.' },
  { icon: ShieldCheck, title: 'Reliable Energy Systems', desc: 'Proven components and intelligent monitoring built for decades of service.' },
  { icon: Zap, title: 'Cost-Efficient Solutions', desc: 'Engineered to lower energy costs and accelerate return on investment.' },
  { icon: Sparkles, title: 'Innovative Engineering', desc: 'Continuous R&D drives smarter inverters, storage, and system design.' },
  { icon: HomeIcon, title: 'Residential & Commercial', desc: 'Tailored systems for homes, businesses, and utility-scale deployments.' },
  { icon: Plug, title: 'Integrated Solar Solutions', desc: 'End-to-end generation, storage, and monitoring working as one platform.' },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Company introduction - light editorial */}
      <section className="relative overflow-hidden bg-offwhite py-20 lg:py-28">
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="eyebrow text-electric-600"><Sun className="h-4 w-4" /> About Solar Depot</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
                A Premier Provider of Intelligent Solar Energy Solutions
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy/65">
                {company.description}
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy/60">
                From residential rooftops to utility-scale solar farms, Solar Depot delivers advanced photovoltaic technology, hybrid inverters, energy storage, and intelligent monitoring &mdash; engineered for reliability and a cleaner energy future.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {company.stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-electric-500/15 bg-white p-4 text-center shadow-soft">
                    <p className="font-display text-2xl font-bold text-electric-600">{s.value}</p>
                    <p className="mt-1 text-xs leading-snug text-navy/55">{s.label}</p>
                  </div>
                ))}
              </div>

              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric-600 hover:text-electric-700">
                Learn more about us <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-electric-400/20 to-cantaloupe/15 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl shadow-soft-lg">
                  <img
                    src={images.rooftopArray}
                    alt="Rooftop solar panel installation"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
                </div>
                <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-electric-500/20 bg-white/90 p-4 shadow-soft-lg backdrop-blur">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-electric-50">
                    <Leaf className="h-6 w-6 text-electric-600" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-navy">Clean Energy</p>
                    <p className="text-xs text-navy/55">Sustainable by design</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core solutions - pale blue */}
      <section className="relative overflow-hidden bg-electric-50 py-20 lg:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-electric-200/40 blur-[120px]" />
        <div className="container-px relative">
          <SectionHeading
            eyebrow="Our Solutions"
            icon={Sparkles}
            title="Solar Solutions for Every Application"
            description="From residential rooftops to commercial facilities and utility-scale plants, our integrated solutions combine generation, storage, and monitoring."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <StaggerItem key={s.slug}>
                <SolutionCard solution={s} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Featured products - white */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="container-px">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Featured Products"
              icon={Cpu}
              title="Engineered for Performance"
              description="A curated selection of our inverters, storage, and monitoring technology."
            />
            <Link to="/products" className="btn-ghost-light shrink-0">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p) => (
              <StaggerItem key={p.id}>
                <ProductCard product={p} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why choose - dark */}
      <section className="relative overflow-hidden bg-midnight py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[55%] -translate-x-1/2 rounded-full bg-electric-500/15 blur-[130px]" />
        <div className="container-px relative">
          <SectionHeading
            dark
            eyebrow="Why Solar Depot"
            icon={ShieldCheck}
            title="Engineering Excellence in Every System"
            description="We combine proven hardware with intelligent software to deliver solar energy systems that perform for decades."
          />

          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w) => (
              <StaggerItem key={w.title}>
                <div className="group h-full rounded-2xl border border-electric-500/20 bg-white/5 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-electric-400/50 hover:bg-white/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-500/15 text-electric-300 transition-all duration-500 group-hover:bg-electric-500 group-hover:text-white group-hover:shadow-glow">
                    <w.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{w.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Featured projects - light */}
      <section className="relative overflow-hidden bg-offwhite py-20 lg:py-28">
        <div className="container-px">
          <SectionHeading
            eyebrow="Case Studies"
            icon={Building2}
            title="Solar Projects in Action"
            description="A selection of residential, commercial, and utility installations powered by Solar Depot technology."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((p) => (
              <StaggerItem key={p.id}>
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </Stagger>
          <div className="mt-10 text-center">
            <Link to="/projects" className="btn-secondary">
              View All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* Contact preview */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="container-px">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="eyebrow text-electric-600"><Wrench className="h-4 w-4" /> Get in Touch</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Let&rsquo;s Design Your Solar Solution
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy/65">
                Our team is ready to help you plan, design, and deploy the right solar energy system for your needs. Reach out and we&rsquo;ll be in touch.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-electric-500/15 bg-electric-50 p-5">
                  <p className="text-sm font-semibold text-navy">{company.address}</p>
                  <p className="mt-1 text-sm text-navy/60">Visit our New York office or call ahead to schedule a consultation.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <a href={`tel:${company.phones[0]}`} className="rounded-2xl border border-electric-500/15 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg">
                    <p className="text-xs uppercase tracking-wider text-electric-600">Phone</p>
                    <p className="mt-1 text-sm font-semibold text-navy">{company.phones[0]}</p>
                  </a>
                  <a href={`mailto:${company.email}`} className="rounded-2xl border border-electric-500/15 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-soft-lg">
                    <p className="text-xs uppercase tracking-wider text-electric-600">Email</p>
                    <p className="mt-1 text-sm font-semibold text-navy">{company.email}</p>
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <ContactPreviewForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle2, Send, AlertCircle } from 'lucide-react';

function ContactPreviewForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState<string>('');
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErr('Please fill in all fields.');
      return;
    }
    if (!emailRe.test(form.email)) {
      setErr('Please enter a valid email address.');
      return;
    }
    setErr('');
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-electric-500/15 bg-offwhite p-6 shadow-soft-lg sm:p-8">
      <h3 className="font-display text-xl font-semibold text-navy">Quick Inquiry</h3>
      <p className="mt-1 text-sm text-navy/60">Send us a message and we&rsquo;ll get back to you shortly.</p>
      <form onSubmit={onSubmit} className="mt-5 space-y-4">
        <input
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="w-full rounded-xl border border-electric-500/20 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20"
        />
        <input
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="w-full rounded-xl border border-electric-500/20 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20"
        />
        <textarea
          placeholder="How can we help?"
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="w-full resize-none rounded-xl border border-electric-500/20 bg-white px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20"
        />
        {err && <p className="flex items-center gap-1.5 text-xs text-cantaloupe-600"><AlertCircle className="h-3.5 w-3.5" />{err}</p>}
        <button type="submit" className="btn-primary w-full">
          Send Message <Send className="h-4 w-4" />
        </button>
      </form>
      {sent && (
        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-electric-500/30 bg-electric-50 p-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-electric-600" />
          <p className="text-sm text-navy">Thank you! This is a frontend demonstration &mdash; we&rsquo;ll respond during business hours.</p>
        </div>
      )}
    </div>
  );
}
