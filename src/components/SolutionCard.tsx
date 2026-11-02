import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Solution } from '@/data/solutions';

export default function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', damping: 20, stiffness: 280 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-electric-500/15 bg-white shadow-soft transition-shadow duration-500 hover:shadow-soft-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-electric-50">
        <img
          src={solution.image}
          alt={solution.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 right-4">
          <span className="rounded-full bg-cantaloupe-500 px-3 py-1 text-xs font-semibold text-white shadow-orange">
            {solution.shortName}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-navy">{solution.name}</h3>
        <p className="mt-1 text-sm font-medium text-electric-600">{solution.tagline}</p>
        <p className="mt-2.5 text-sm leading-relaxed text-navy/60">{solution.description}</p>

        <ul className="mt-4 space-y-1.5">
          {solution.benefits.slice(0, 3).map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-navy/70">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric-500" />
              {b}
            </li>
          ))}
        </ul>

        <Link
          to={`/solutions?focus=${solution.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-electric-600"
        >
          View Solution
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
