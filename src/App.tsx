import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import BackToTop from '@/components/BackToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import ProductDetails from '@/pages/ProductDetails';
import Solutions from '@/pages/Solutions';
import Projects from '@/pages/Projects';
import ProjectDetails from '@/pages/ProjectDetails';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

const pageTitles: Record<string, string> = {
  '/': 'Solar Depot \u2014 Intelligent Solar Innovation',
  '/about': 'About Us \u2014 Solar Depot',
  '/products': 'Products \u2014 Solar Depot',
  '/solutions': 'Solutions \u2014 Solar Depot',
  '/projects': 'Projects \u2014 Solar Depot',
  '/contact': 'Contact \u2014 Solar Depot',
};

function TitleManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    const base = pageTitles[pathname] ?? 'Solar Depot';
    if (pathname.startsWith('/products/') || pathname.startsWith('/projects/')) {
      document.title = `${base} \u2014 Solar Depot`;
    } else {
      document.title = base;
    }
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TitleManager />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}
