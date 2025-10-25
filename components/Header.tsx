import React, { useState } from 'react';
import ChevronDownIcon from './icons/ChevronDownIcon';
import SearchIcon from './icons/SearchIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';

const NavItem: React.FC<{ children: React.ReactNode; hasDropdown?: boolean; className?: string }> = ({ children, hasDropdown, className }) => (
  <a href="#" className={`flex items-center gap-1 text-white hover:text-gray-300 transition-colors ${className}`}>
    {children}
    {hasDropdown && <ChevronDownIcon />}
  </a>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'بخش‌ها', hasDropdown: true },
    { name: 'محصولات', hasDropdown: true },
    { name: 'راهکارها', hasDropdown: true },
    { name: 'فناوری', hasDropdown: false },
    { name: 'پایداری', hasDropdown: true },
    { name: 'ایمنی', hasDropdown: false },
    { name: 'تماس با ما', hasDropdown: false },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="text-white text-right">
                <span className="font-bold text-lg tracking-wider">یزد پولیکا</span>
                <p className="text-xs opacity-80 tracking-widest">گروه تولیدی صنایع</p>
              </div>
            </div>
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <NavItem key={link.name} hasDropdown={link.hasDropdown} className="text-sm">
                  {link.name}
                </NavItem>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-white/20 transition-colors">
              <SearchIcon />
            </button>
            <button className="hidden sm:flex items-center gap-2 bg-[#0044A3] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#003a8c] transition-colors">
              <div className="transform rotate-180">
                <ArrowRightIcon />
              </div>
              ثبت درخواست
            </button>
            <button 
              className="lg:hidden p-2 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-gray-900/80 backdrop-blur-sm transition-opacity duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
        role="dialog"
        aria-modal="true"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-gray-950 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 flex items-center justify-between border-b border-white/10">
            <button
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
            <div className="flex items-center gap-3">
              <div className="text-white text-right">
                <span className="font-bold text-lg tracking-wider">یزد پولیکا</span>
                <p className="text-xs opacity-80 tracking-widest">گروه تولیدی صنایع</p>
              </div>
            </div>
          </div>
          <div className="p-8 flex-grow flex flex-col">
            <nav className="flex flex-col gap-6 text-right">
              {navLinks.map((link) => (
                <NavItem key={link.name} hasDropdown={link.hasDropdown} className="text-xl font-medium">
                  {link.name}
                </NavItem>
              ))}
            </nav>
            <button className="mt-auto flex w-full items-center justify-center gap-2 bg-[#0044A3] text-white px-6 py-4 rounded-full font-bold text-base hover:bg-[#003a8c] transition-colors">
              <div className="transform rotate-180">
                <ArrowRightIcon />
              </div>
              ثبت درخواست
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;