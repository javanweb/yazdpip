import React from 'react';
import ArrowRightIcon from './icons/ArrowRightIcon';

const About: React.FC = () => {
  return (
    <section dir="rtl" className="bg-white text-gray-900 py-24 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16 items-center">
        {/* Text Section */}
        <div className="md:col-span-3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            گروه تولیدی صنایع یزدپولیکا
          </h2>
          <p className="text-gray-700 leading-loose text-justify">
            گروه تولیدی صنایع یزدپولیکا از سال ۱۳۵۹ فعالیت تولیدی خود در قالب سهامی خاص تحت عنوان شرکت «یزد پولیکا» آغاز نمود و امروز نتیجه بیش از ۴ دهه تلاش بر مدار دانش و کیفیت، این شرکت را به یکی از معتبرترین برندهای ملی تبدیل کرده است. در سال ۱۳۵۹ و شروع فعالیت پس از مدتی کارخانه خود را با ظرفیت تولید ۱۸۰۰ تن محصول در سال، در دو شیفت کاری و در زمینی به مساحت ۵ هزار متر مربع در حسن‌آباد مشیر در استان یزد به بهره‌برداری رساند. یزد پولیکا در همان قدم‌های ابتدایی با منش مدیریتی تحول‌خواه و تزریق آن به متخصصان این گروه تولیدی، «برترین کیفیت در محصولات» را سرلوحه کار خود قرارداد و به تدریج توانست علاوه بر بازار داخلی و نیازهای داخلی، بازار صادرات محصولات را در کشورهای همسایه ایران و کشورهای حاشیه خلیج فارس را بدست آورد. این قدم بلند از سوی متخصصان گروه تولیدی یزد پولیکا زمینه‌ساز آن شد تا در سال ۱۳۷۸، طرح توسعه یزد پولیکا در شهرک صنعتی خضرآباد در استان یزد و در زمینی به مساحت ۲۵ هزار متر مربع به بهره برداری برسد.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-[#0044A3] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#003a8c] transition-colors">
              درباره ما
              <div className="transform -rotate-180">
                <ArrowRightIcon />
              </div>
            </button>
            <button className="flex items-center gap-2 border border-gray-900/50 text-gray-900 px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-900/10 transition-colors">
              محصولات
            </button>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="md:col-span-2 flex flex-col items-center justify-center text-center">
          <span className="text-8xl lg:text-9xl font-bold text-black leading-none">
            ۴۵
          </span>
          <p className="mt-4 text-lg text-gray-700 max-w-[200px]">
            سال سابقه درخشان در خدمت ایران و ایرانی
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;