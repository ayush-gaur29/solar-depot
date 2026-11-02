import { Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="Solar Depot home">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric-400 to-electric-600 shadow-glow transition-transform duration-500 group-hover:scale-105">
        <Sun className="h-5 w-5 text-white" strokeWidth={2.5} />
        <span className="absolute inset-0 rounded-xl ring-1 ring-white/30" />
      </span>
      <span className={`font-display text-lg font-bold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>
        Solar<span className="text-electric-500">Depot</span>
      </span>
    </Link>
  );
}
