import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Product } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', damping: 20, stiffness: 280 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-electric-500/15 bg-white shadow-soft transition-shadow duration-500 hover:shadow-soft-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-electric-50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-electric-700 backdrop-blur">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-cantaloupe-600">{product.model}</p>
        <h3 className="mt-1.5 font-display text-lg font-semibold text-navy">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{product.shortDesc}</p>

        <div className="mt-4 flex items-center justify-between border-t border-electric-500/10 pt-4">
          <div className="flex flex-wrap gap-1.5">
            {product.highlights.slice(0, 2).map((h) => (
              <span key={h} className="rounded-md bg-electric-50 px-2 py-1 text-[11px] font-medium text-electric-700">
                {h}
              </span>
            ))}
          </div>
          <Link
            to={`/products/${product.slug}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-all duration-300 group-hover:bg-electric-500 group-hover:shadow-glow"
            aria-label={`View ${product.name}`}
          >
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
