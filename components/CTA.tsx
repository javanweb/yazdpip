
import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';

const CTA: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2670&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"></div>
      <div className="relative max-w-7xl mx-auto py-24 px-6 sm:px-12 md:px-20 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          آماده شروع پروژه جدید خود هستید؟
        </h2>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          با کارشناسان ما تماس بگیرید و مشاوره تخصصی دریافت کنید. ما به شما کمک می‌کنیم تا بهترین راهکار را برای نیازهای خود پیدا کنید.
        </p>
        <div className="mt-10">
          <button className="flex items-center gap-2 bg-[#0044A3] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#003a8c] transition-colors mx-auto">
            <div className="transform rotate-180">
              <ArrowRightIcon />
            </div>
            ثبت درخواست و مشاوره
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
