import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Mail,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import ProductCard from '@/components/ProductCard';
import CTASection from '@/components/CTASection';
import { getProductBySlug, getRelatedProducts } from '@/data/products';

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return <Navigate to="/products" replace />;

  const related = getRelatedProducts(product, 3);

  return (
    <>
      {/* Breadcrumb header */}
      <section className="relative overflow-hidden bg-midnight pt-28 pb-12">
        <div className="absolute inset-0 grid-bg-dark opacity-25" />
        <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-electric-500/15 blur-[110px]" />
        <div className="container-px relative">
          <nav className="flex items-center gap-1.5 text-sm text-white/50">
            <Link to="/" className="hover:text-electric-300">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/products" className="hover:text-electric-300">Products</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to={`/products?category=${product.categorySlug}`} className="hover:text-electric-300">{product.category}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white/80">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Main detail */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container-px">
          <Link to="/products" className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-electric-600 hover:text-electric-700">
            <ArrowLeft className="h-4 w-4" /> Back to products
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Gallery */}
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-electric-500/15 bg-electric-50 shadow-soft">
                <img src={product.gallery[activeImg]} alt={product.name} className="aspect-square w-full object-cover" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {product.gallery.map((g, i) => (
                  <button
                    key={g + i}
                    onClick={() => setActiveImg(i)}
                    className={`overflow-hidden rounded-xl border-2 transition-all ${
                      activeImg === i ? 'border-electric-500 shadow-glow' : 'border-electric-500/15 hover:border-electric-400'
                    }`}
                  >
                    <img src={g} alt={`${product.name} ${i + 1}`} className="aspect-square w-full object-cover" />
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Info */}
            <Reveal delay={0.1}>
              <span className="rounded-full bg-cantaloupe-500 px-3 py-1 text-xs font-semibold text-white shadow-orange">{product.model}</span>
              <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">{product.name}</h1>
              <p className="mt-2 text-sm font-medium text-electric-600">{product.category}</p>
              <p className="mt-5 text-base leading-relaxed text-navy/65">{product.description}</p>

              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-navy/50">Key Highlights</h3>
                <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-navy/75">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric-500" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="mailto:Contact@solardepot-us.com" className="btn-ghost-light">
                  <Mail className="h-4 w-4" /> Email Us
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Technical specs - dark */}
      <section className="relative overflow-hidden bg-midnight py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0 grid-bg-dark opacity-25" />
        <div className="pointer-events-none absolute left-1/3 top-0 h-64 w-64 rounded-full bg-electric-500/12 blur-[120px]" />
        <div className="container-px relative">
          <Reveal>
            <span className="eyebrow text-electric-300"><Cpu className="h-4 w-4" /> Technical Specifications</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white">{product.name} &mdash; Full Specs</h2>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {product.specGroups.map((group, gi) => (
              <Reveal key={group.label} delay={gi * 0.08}>
                <div className="glass-card-dark rounded-2xl p-6">
                  <h3 className="font-display text-lg font-semibold text-electric-300">{group.label}</h3>
                  <dl className="mt-4 divide-y divide-white/10">
                    {group.specs.map((s) => (
                      <div key={s.label} className="flex items-center justify-between py-3">
                        <dt className="text-sm text-white/55">{s.label}</dt>
                        <dd className="text-sm font-semibold text-white">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-offwhite py-16 lg:py-20">
          <div className="container-px">
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-electric-500" />
              <h2 className="font-display text-2xl font-bold text-navy">Related Products</h2>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
