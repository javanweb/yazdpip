
import React from 'react';

const partners = [
  { name: 'Partner 1', logo: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg' },
  { name: 'Partner 2', logo: 'https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg' },
  { name: 'Partner 3', logo: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg' },
  { name: 'Partner 4', logo: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg' },
  { name: 'Partner 5', logo: 'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg' },
  { name: 'Partner 6', logo: 'https://tailwindui.com/img/logos/158x48/laravel-logo-gray-400.svg' },
];

const Partners: React.FC = () => {
  return (
    <section dir="rtl" className="bg-[#F5F9FF] py-24 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          اعتماد شما، افتخار ماست
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          ما مفتخریم که با برترین شرکت‌ها و سازمان‌ها در صنایع مختلف همکاری می‌کنیم.
        </p>
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-12 items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center">
              <img
                className="max-h-12 filter grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                src={partner.logo}
                alt={partner.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
