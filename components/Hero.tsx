import React from 'react';
import type { Slide } from '../App';

interface HeroProps {
  slides: Slide[];
  activeSlide: number;
}

export const Hero: React.FC<HeroProps> = ({ slides, activeSlide }) => {
  // We need to display more slides than available for a smooth infinite scroll illusion
  const displaySlides = [...slides, ...slides.slice(0, 2)];

  return (
    <div className="h-full flex flex-col justify-end p-8 sm:p-12 md:p-20 relative">
      <div className="absolute top-1/2 -translate-y-1/2 right-8 sm:right-12 md:right-20">
        <h1 
          key={activeSlide}
          className="text-5xl sm:text-6xl md:text-8xl font-bold text-white max-w-sm sm:max-w-xl md:max-w-3xl leading-tight animate-fade-in-up text-right"
        >
          {slides[activeSlide].title}
        </h1>
      </div>

      <div className="w-full" dir="ltr">
        <div className="flex items-center gap-6">
          <span className="text-lg font-semibold">{slides[activeSlide].number}</span>
          <div className="flex-grow h-0.5 bg-white/20 relative">
             <div
                className="absolute top-0 left-0 h-full bg-white transition-all duration-500 ease-in-out"
                style={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }}
              ></div>
          </div>
        </div>
        
        {/* Responsive Slider Text */}
        <div className="mt-4 h-14 flex items-center justify-center"> {/* Fixed height to prevent layout shift */}
          {/* Mobile view: Simple text */}
          <div className="md:hidden text-center px-4">
            <p className="text-lg font-semibold text-white">
              {slides[activeSlide].text}
            </p>
          </div>

          {/* Desktop view: Carousel */}
          <div className="hidden md:flex w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${(activeSlide - 1) * -100/3}%)` }}
            >
              {displaySlides.map((slide, index) => (
                <div key={index} className="basis-1/3 flex-shrink-0 px-4 flex items-center justify-center gap-4">
                  <p
                    className={`text-lg transition-opacity duration-500 text-center ${
                      index === activeSlide || (index === activeSlide + slides.length) ? 'opacity-100 font-semibold' : 'opacity-50'
                    }`}
                  >
                    {slide.text}
                  </p>
                  <div className="w-px h-6 bg-white/50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;