import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-midnight px-6 py-24">
      <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-electric-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-cantaloupe/10 blur-[100px]" />

      <div className="relative text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-electric-400/30 bg-electric-500/10 backdrop-blur">
          <Compass className="h-10 w-10 text-electric-300" />
        </div>
        <h1 className="mt-8 font-display text-7xl font-bold text-white sm:text-8xl">404</h1>
        <h2 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">Page Not Found</h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/60">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved. Let&rsquo;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-primary">
            <Home className="h-4 w-4" /> Back to Home
          </Link>
          <Link to="/products" className="btn-ghost-dark">
            <ArrowLeft className="h-4 w-4" /> Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}
