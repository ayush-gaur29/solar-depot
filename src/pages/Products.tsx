import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, Sun, Package } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal';
import { products, productCategories } from '@/data/products';

type SortKey = 'featured' | 'name' | 'category';

export default function Products() {
  const [params, setParams] = useSearchParams();
  const activeCategory = params.get('category') ?? 'all';
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortKey>('featured');

  const setCategory = (slug: string) => {
    if (slug === 'all') {
      params.delete('category');
      setParams(params, { replace: true });
    } else {
      params.set('category', slug);
      setParams(params, { replace: true });
    }
  };

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== 'all') list = list.filter((p) => p.categorySlug === activeCategory);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.model.toLowerCase().includes(q) ||
          p.shortDesc.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'category') list = [...list].sort((a, b) => a.category.localeCompare(b.category));
    return list;
  }, [activeCategory, query, sort]);

  const activeCatLabel = productCategories.find((c) => c.slug === activeCategory)?.name;

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-midnight pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/35454190/pexels-photo-35454190.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/85 to-midnight" />
        </div>
        <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-electric-500/20 blur-[120px]" />
        <div className="container-px relative">
          <Reveal className="max-w-3xl">
            <span className="eyebrow text-electric-300"><Package className="h-4 w-4" /> Product Catalogue</span>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Solar Products &amp; Inverters
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Browse our complete range of string inverters, hybrid inverters, microinverters, solar air conditioners, and monitoring accessories.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Toolbar */}
      <section className="sticky top-[68px] z-30 border-b border-electric-500/10 bg-white/85 backdrop-blur-md">
        <div className="container-px py-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative max-w-md flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/40" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, models, categories..."
                className="w-full rounded-full border border-electric-500/20 bg-white py-2.5 pl-10 pr-9 text-sm text-navy placeholder:text-navy/40 focus:border-electric-500 focus:outline-none focus:ring-2 focus:ring-electric-500/20"
              />
              {query && (
                <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/40 hover:text-navy" aria-label="Clear search">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="h-4 w-4 text-navy/50" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="rounded-full border border-electric-500/20 bg-white px-4 py-2.5 text-sm text-navy focus:border-electric-500 focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="name">Sort: Name (A\u2013Z)</option>
                <option value="category">Sort: Category</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Category chips + grid */}
      <section className="bg-offwhite py-12 lg:py-16">
        <div className="container-px">
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => setCategory('all')}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === 'all'
                  ? 'bg-electric-500 text-white shadow-glow'
                  : 'border border-electric-500/20 bg-white text-navy/70 hover:border-electric-400 hover:text-electric-600'
              }`}
            >
              All Products
            </button>
            {productCategories.map((c) => (
              <button
                key={c.slug}
                onClick={() => setCategory(c.slug)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === c.slug
                    ? 'bg-electric-500 text-white shadow-glow'
                    : 'border border-electric-500/20 bg-white text-navy/70 hover:border-electric-400 hover:text-electric-600'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm text-navy/60">
              Showing <span className="font-semibold text-navy">{filtered.length}</span> product{filtered.length === 1 ? '' : 's'}
              {activeCatLabel && <> in <span className="font-semibold text-electric-600">{activeCatLabel}</span></>}
            </p>
            {(activeCategory !== 'all' || query) && (
              <button
                onClick={() => { setCategory('all'); setQuery(''); }}
                className="flex items-center gap-1.5 text-sm font-medium text-cantaloupe-600 hover:text-cantaloupe-700"
              >
                <X className="h-4 w-4" /> Clear filters
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <StaggerItem key={p.id}>
                  <ProductCard product={p} />
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-dashed border-electric-500/30 bg-white p-16 text-center">
              <Sun className="h-12 w-12 text-electric-300" />
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">No products found</h3>
              <p className="mt-2 text-sm text-navy/60">Try adjusting your search or clearing the filters.</p>
              <button onClick={() => { setCategory('all'); setQuery(''); }} className="btn-secondary mt-6">
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
