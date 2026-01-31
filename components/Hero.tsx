
import React from 'react';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-20 pb-24 overflow-hidden border-b border-slate-100 min-h-[600px] flex items-center">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/hero-bg-amsterdam-clean.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            {t.hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="#doelstelling" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {t.hero.ctaGoals}
              <i className="fas fa-arrow-right ml-2 text-sm opacity-80"></i>
            </a>
            <a 
              href="#anbi" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-bold hover:bg-slate-50 transition-all shadow-sm"
            >
              {t.hero.ctaAnbi}
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 border border-slate-100 shadow-sm">
              <i className="fas fa-check-circle text-blue-600"></i> {t.hero.badgeNonProfit}
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 border border-slate-100 shadow-sm">
              <i className="fas fa-check-circle text-blue-600"></i> {t.hero.badgeMission}
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 border border-slate-100 shadow-sm">
              <i className="fas fa-check-circle text-blue-600"></i> {t.hero.badgeTransparent}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
