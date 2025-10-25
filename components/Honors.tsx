
import React, { useState, useRef, useEffect } from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const certificates = [
  { id: 1, image: 'https://i.imgur.com/g0p0Z8p.png', alt: 'گواهینامه فنی' },
  { id: 2, image: 'https://i.imgur.com/3q8Yh0z.png', alt: 'گواهینامه فنی' },
  { id: 3, image: 'https://i.imgur.com/U9f2V5h.png', alt: 'گواهینامه استاندارد' },
  { id: 4, image: 'https://i.imgur.com/x0q2w5J.png', alt: 'گواهینامه استاندارد' },
  { id: 5, image: 'https://i.imgur.com/g0p0Z8p.png', alt: 'گواهینامه فنی' },
  { id: 6, image: 'https://i.imgur.com/3q8Yh0z.png', alt: 'گواهینامه فنی' },
];

const honors = [
  { id: 1, image: 'https://i.imgur.com/1n9sV1r.png', alt: 'تندیس افتخار' },
  { id: 2, image: 'https://i.imgur.com/L1S1FkG.png', alt: 'لوح تقدیر' },
  { id: 3, image: 'https://i.imgur.com/8N6O5tH.png', alt: 'لوح تقدیر در جعبه' },
  { id: 4, image: 'https://i.imgur.com/k2j4p7y.png', alt: 'تقدیرنامه قاب شده' },
  { id: 5, image: 'https://i.imgur.com/1n9sV1r.png', alt: 'تندیس افتخار' },
  { id: 6, image: 'https://i.imgur.com/L1S1FkG.png', alt: 'لوح تقدیر' },
];

interface CarouselProps {
  items: { id: number; image: string; alt: string }[];
  title: string;
}

const Carousel: React.FC<CarouselProps> = ({ items, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateItemsPerPage = () => {
      if (window.innerWidth < 640) setItemsPerPage(2);
      else if (window.innerWidth < 1024) setItemsPerPage(3);
      else setItemsPerPage(4);
    };

    calculateItemsPerPage();
    window.addEventListener('resize', calculateItemsPerPage);
    return () => window.removeEventListener('resize', calculateItemsPerPage);
  }, []);

  const maxIndex = items.length > itemsPerPage ? items.length - itemsPerPage : 0;

  const handleNext = () => {
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
        {title}
      </h2>
      <div className="relative w-full max-w-7xl mx-auto flex items-center px-8 md:px-10">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous"
          disabled={currentIndex === 0}
        >
          <ChevronLeftIcon />
        </button>
        <div className="w-full overflow-hidden" ref={carouselRef}>
          <div
            className="flex -mx-2 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {items.map(item => (
              <div key={item.id} className={`flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2`}>
                <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200 h-80">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-contain rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next"
          disabled={currentIndex === maxIndex}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

const Honors: React.FC = () => {
  return (
    <section dir="rtl" className="bg-white text-gray-900 py-12 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto divide-y divide-gray-200">
        <Carousel items={certificates} title="گواهینامه‌ها" />
        <Carousel items={honors} title="افتخارات" />
      </div>
    </section>
  );
};

export default Honors;
