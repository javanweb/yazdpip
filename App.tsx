
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Honors from './components/Honors';
import Projects from './components/Projects';
import CTA from './components/CTA';
import Footer from './components/Footer';

export interface Slide {
  id: number;
  number: string;
  text: string;
  title: string;
  image: string;
}

const slides: Slide[] = [
  { 
    id: 1, 
    number: '۰۱', 
    text: 'راهکارهای نوین لوله‌کشی کامپوزیت', 
    title: 'پیشرو در صنعت لوله‌های کامپوزیت', 
    image: 'https://images.unsplash.com/photo-1599301956424-54135b443103?q=80&w=2574&auto=format&fit=crop' 
  },
  { 
    id: 2, 
    number: '۰۲', 
    text: 'کامپوزیت - ماده‌ای برای آینده', 
    title: 'آینده با مواد کامپوزیتی ساخته می‌شود', 
    image: 'https://images.unsplash.com/photo-1617953141905-d13e3413c18c?q=80&w=2670&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    number: '۰۳', 
    text: 'فناوری‌های نوآورانه برای مدیریت آب', 
    title: 'نوآوری در راهکارهای مدیریت آب', 
    image: 'https://images.unsplash.com/photo-1470259078422-826894b92c48?q=80&w=2670&auto=format&fit=crop' 
  },
  { 
    id: 4, 
    number: '۰۴', 
    text: 'محصولات سبز برای پروژه‌های سبز شما', 
    title: 'محصولات دوست‌دار محیط زیست', 
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop' 
  },
  { 
    id: 5, 
    number: '۰۵', 
    text: 'راهکارهای پایدار برای فردایی بهتر', 
    title: 'راهکارهای پایدار برای فردایی بهتر', 
    image: 'https://images.unsplash.com/photo-1666991754029-688a2a1f251c?q=80&w=2670&auto=format&fit=crop' 
  },
];


const App: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-900 text-white font-sans">
      <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url('${slides[activeSlide].image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col">
          <Header />
          <main className="flex-grow">
            <Hero slides={slides} activeSlide={activeSlide} />
          </main>
        </div>
      </div>
      <About />
      <Products />
      <Honors />
      <Projects />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
