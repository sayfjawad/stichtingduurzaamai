
import React from 'react';
import { useLanguage } from '../LanguageContext';
import ambassadorsData from '../ambassadors.json';

export const AmbassadorsSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="ambassadeurs" className="py-10 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">{t.ambassadors.title}</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            {t.ambassadors.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ambassadorsData.map((ambassador: any, index: number) => (
            <div key={index} className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={ambassador.image} 
                  alt={ambassador.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{ambassador.name}</h3>
                <p className="text-blue-600 text-xs font-medium mb-3">{ambassador.roles[language]}</p>
                <a 
                  href={ambassador.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <i className="fab fa-linkedin text-lg"></i>
                  <span className="text-xs font-medium">LinkedIn Profile</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
