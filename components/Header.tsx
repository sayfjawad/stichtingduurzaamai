
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: t.nav.goals, href: '#doelstelling' },
    { name: t.nav.publications, href: '#publicaties' },
    { name: t.nav.statistics, href: '#statistieken' },
    { name: t.nav.policy, href: '#beleid' },
    { name: t.nav.ambassadors, href: '#ambassadeurs' },
    { name: t.nav.anbi, href: '#anbi' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="flex items-center transition-opacity hover:opacity-90">
            <Logo variant="dark" showTagline={false} iconClassName="w-10 h-10" />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium whitespace-nowrap text-slate-200 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-1 border-l pl-6 ml-2 border-slate-700">
              <button 
                onClick={() => changeLanguage('nl')}
                className={`text-xs font-bold px-2 py-1 rounded ${language === 'nl' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-emerald-400'}`}
              >
                NL
              </button>
              <button 
                onClick={() => changeLanguage('en')}
                className={`text-xs font-bold px-2 py-1 rounded ${language === 'en' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-emerald-400'}`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile menu toggle */}
          <div className="xl:hidden">
             <button 
              onClick={toggleMenu}
              className="text-slate-200 hover:text-emerald-400"
              aria-label="Toggle menu"
             >
               <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-slate-900 border-b border-slate-800 animate-in slide-in-from-top duration-300">
          <nav className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-slate-800 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-4 px-3 pt-4 border-t border-slate-800">
              <button 
                onClick={() => { changeLanguage('nl'); setIsMenuOpen(false); }}
                className={`text-sm font-bold px-3 py-1.5 rounded ${language === 'nl' ? 'bg-emerald-600 text-white' : 'text-slate-300 bg-slate-800'}`}
              >
                Nederlands
              </button>
              <button 
                onClick={() => { changeLanguage('en'); setIsMenuOpen(false); }}
                className={`text-sm font-bold px-3 py-1.5 rounded ${language === 'en' ? 'bg-emerald-600 text-white' : 'text-slate-300 bg-slate-800'}`}
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
