import React from 'react';
import { useLanguage } from '../LanguageContext';
import publicationsData from '../publications.json';

type PublicationType = 'training' | 'blog' | 'vlog' | 'announcement';

interface Publication {
  id: string;
  type: PublicationType;
  date: string;
  icon: string;
  title: { nl: string; en: string };
  description: { nl: string; en: string };
  link: string;
  external?: boolean;
}

export const PublicationsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const publications = publicationsData as Publication[];

  return (
    <section id="publicaties" className="py-10 bg-slate-50 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">{t.publications.title}</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            {t.publications.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((pub) => (
            <div key={pub.id} className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wide">
                    <i className={`fas ${pub.icon}`}></i>
                    {t.publications.typeLabels[pub.type]}
                  </span>
                  <time className="text-xs text-slate-400 font-medium">
                    {new Date(pub.date).toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </time>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{pub.title[language]}</h3>
                <p className="text-sm text-slate-600 mb-4 flex-grow">{pub.description[language]}</p>
                <a
                  href={pub.link}
                  target={pub.external ? '_blank' : undefined}
                  rel={pub.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {t.publications.ctaDefault}
                  <i className="fas fa-arrow-right text-xs"></i>
                </a>
              </div>
            </div>
          ))}

          <div className="rounded-xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center p-6">
            <i className="fas fa-video text-2xl text-slate-300 mb-3"></i>
            <h3 className="text-sm font-bold text-slate-700 mb-1">{t.publications.comingSoonTitle}</h3>
            <p className="text-xs text-slate-500">{t.publications.comingSoonText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
