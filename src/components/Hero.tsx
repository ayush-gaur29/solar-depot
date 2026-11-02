import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Battery, Building2, Home as HomeIcon, Plug } from 'lucide-react';
import { images } from '@/data/images';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-midnight">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={images.heroInstall}
          alt="Solar panel installation"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/70 to-midnight/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/85 via-midnight/40 to-transparent" />
      </div>

      {/* Ambient grid + glows */}
      <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-electric-500/25 blur-[130px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cantaloupe/20 blur-[120px]" />

      <div className="container-px relative z-10 flex min-h-[100svh] flex-col justify-center pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >


          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Powering Tomorrow Through{' '}
            <span className="text-gradient-orange-blue">Intelligent Solar Innovation</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Advanced photovoltaic technology and intelligent energy solutions designed to create a more sustainable and energy-efficient future.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/solutions" className="btn-primary">
              Explore Our Solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/products" className="btn-ghost-dark">
              Discover Our Products
            </Link>
          </div>

          {/* mini stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {[
              { icon: HomeIcon, label: 'Residential' },
              { icon: Building2, label: 'Commercial' },
              { icon: Battery, label: 'Storage' },
              { icon: Plug, label: 'Grid-Tie' },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 backdrop-blur">
                <s.icon className="h-4 w-4 text-electric-300" />
                <span className="text-xs font-medium text-white/80">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur">
          <ChevronDown className="h-5 w-5 text-white/80" />
        </div>
      </motion.div>
    </section>
  );
}
