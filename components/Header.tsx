
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: t.nav.goals, href: '#doelstelling' },
    { name: t.nav.policy, href: '#beleid' },
    { name: t.nav.anbi, href: '#anbi' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
              <i className="fas fa-microchip text-white text-xl"></i>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800 uppercase">{t.common.name}</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-1 border-l pl-6 ml-2 border-slate-200">
              <button 
                onClick={() => changeLanguage('nl')}
                className={`text-xs font-bold px-2 py-1 rounded ${language === 'nl' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-blue-600'}`}
              >
                NL
              </button>
              <button 
                onClick={() => changeLanguage('en')}
                className={`text-xs font-bold px-2 py-1 rounded ${language === 'en' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-blue-600'}`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
             <button 
              onClick={toggleMenu}
              className="text-slate-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
             >
               <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <nav className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 px-3 pt-4 border-t border-slate-100">
              <button 
                onClick={() => { changeLanguage('nl'); setIsMenuOpen(false); }}
                className={`text-sm font-bold px-3 py-1.5 rounded ${language === 'nl' ? 'bg-blue-600 text-white' : 'text-slate-500 bg-slate-100'}`}
              >
                Nederlands
              </button>
              <button 
                onClick={() => { changeLanguage('en'); setIsMenuOpen(false); }}
                className={`text-sm font-bold px-3 py-1.5 rounded ${language === 'en' ? 'bg-blue-600 text-white' : 'text-slate-500 bg-slate-100'}`}
              >
                English
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
