
import React from 'react';
import InstagramIcon from './icons/InstagramIcon';
import LinkedinIcon from './icons/LinkedinIcon';

const Footer: React.FC = () => {
  return (
    <footer dir="rtl" className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto py-16 px-6 sm:px-12 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
             <div className="flex items-center gap-3 mb-4">
              <div className="text-right">
                <span className="font-bold text-xl tracking-wider">یزد پولیکا</span>
                <p className="text-sm opacity-80 tracking-widest">گروه تولیدی صنایع</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              پیشرو در صنعت لوله‌های کامپوزیت با بیش از چهار دهه تجربه درخشان.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">لینک‌های سریع</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">درباره ما</a></li>
              <li><a href="#" className="hover:text-white transition-colors">محصولات</a></li>
              <li><a href="#" className="hover:text-white transition-colors">پروژه‌ها</a></li>
              <li><a href="#" className="hover:text-white transition-colors">تماس با ما</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">تماس با ما</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>یزد، شهرک صنعتی خضرآباد</li>
              <li>info@yazdpollica.com</li>
              <li>۰۳۵-۱۲۳۴۵۶۷۸</li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">ما را دنبال کنید</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-500 transition-colors">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} گروه تولیدی صنایع یزدپولیکا. تمام حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
