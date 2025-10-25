import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';

const defaultProductImage = 'https://images.unsplash.com/photo-1618520288288-223401a7ba93?q=80&w=2532&auto=format&fit=crop';

const productCategories = [
  { name: 'برقی و مخابرات' },
  { name: 'درین (کولر گازی)' },
  { name: 'جارو مرکزی' },
  { name: 'فاضلاب خانگی' },
  { name: 'استخری' },
  { name: 'فاضلاب شهری' },
  { name: 'آبرسانی' },
  { name: 'سایر محصولات' },
];

const Products: React.FC = () => {
  return (
    <section dir="rtl" className="bg-[#FAFCFF] text-gray-900 py-24 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            محصولات ما
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            راهکارهای جامع و نوآورانه برای پروژه‌های صنعتی، شهری و خانگی شما با بالاترین استاندارد کیفیت.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category, index) => (
            <a 
              key={index}
              href="#"
              className="group relative block bg-gray-900 rounded-xl overflow-hidden aspect-[4/5] shadow-lg
                         transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
            >
              <img 
                src={defaultProductImage} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:-translate-y-6">
                  {category.name}
                </h3>
                <div className="flex items-center gap-2 font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>مشاهده محصولات</span>
                  <div className="transform -rotate-180">
                    <ArrowRightIcon />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;