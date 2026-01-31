
import React from 'react';
import { useLanguage } from '../LanguageContext';
import policyBg from '../public/images/hero-bg.jpg';

export const PolicySection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="beleid" className="relative py-20 overflow-hidden border-y border-slate-100 scroll-mt-20">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${policyBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{t.policy.title}</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-tasks text-blue-600"></i>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{t.policy.activities.title}</h3>
            <ul className="text-sm text-slate-600 space-y-2">
              {t.policy.activities.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-hand-holding-usd text-green-600"></i>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{t.policy.income.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.policy.income.description}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-balance-scale text-purple-600"></i>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{t.policy.spending.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.policy.spending.description}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <i className="fas fa-piggy-bank text-orange-600"></i>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">{t.policy.wealth.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.policy.wealth.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
