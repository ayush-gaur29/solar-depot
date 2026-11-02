import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-electric-700 via-electric-600 to-electric-500 py-24">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-25" />

      {/* Corner Orange Gradients */}
      {/* Top-Right Corner */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(252,115,77,0.55),_rgba(252,115,77,0.2)_30%,_transparent_65%)]" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-cantaloupe-500/40 blur-[85px]" />

      {/* Bottom-Left Corner */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(252,115,77,0.5),_rgba(252,115,77,0.18)_30%,_transparent_65%)]" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-96 w-96 rounded-full bg-cantaloupe-500/35 blur-[90px]" />

      {/* Top-Left & Bottom-Right Corner Accents */}
      <div className="pointer-events-none absolute -top-28 -left-28 h-80 w-80 rounded-full bg-cantaloupe-400/25 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cantaloupe-500/30 blur-[90px]" />

      {/* Central Ambient Contrast */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[550px] rounded-full bg-electric-400/20 blur-[110px]" />

      <div className="container-px relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow inline-flex items-center gap-2 text-white/90">
            <Zap className="h-4 w-4 text-cantaloupe-300" /> Let&rsquo;s Build
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Build a Smarter Energy Future?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            Discover innovative solar solutions designed around your energy requirements.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-electric-700 shadow-soft-lg transition-all duration-300 hover:shadow-orange hover:bg-cantaloupe-500 hover:text-white active:scale-95"
            >
              Contact Our Team
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20 active:scale-95"
            >
              Browse Products
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
