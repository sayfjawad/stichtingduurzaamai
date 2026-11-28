import React from 'react';
import { useLanguage } from '../LanguageContext';

const PHOTO = '/images/masterclass-ai-governance/zaal.jpg';

// inline iconen, gelijk aan de roll-upbanner
const ICONS = {
  shield: <><path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></>,
  cap: <><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11.5V16c3.5 3 8.5 3 12 0v-4.5M22 9v6" /></>,
  share: <><circle cx="18" cy="5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="19" r="2.5" /><path d="M8.2 10.8l7.6-4.5M8.2 13.2l7.6 4.5" /></>,
};

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const p = t.hero.pillars;
  const pillars = [
    { icon: ICONS.shield, title: p.ethicTitle, desc: p.ethicDesc },
    { icon: ICONS.cap, title: p.literacyTitle, desc: p.literacyDesc },
    { icon: ICONS.share, title: p.shareTitle, desc: p.shareDesc },
  ];

  return (
    <>
      <section className="grid lg:grid-cols-2 bg-slate-900 text-white">
        <div className="flex items-center px-6 sm:px-10 lg:px-14 py-16 lg:py-20 lg:justify-end">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.08]">
              {t.hero.titleStart} <span className="text-emerald-500">{t.hero.titleAccent}</span> {t.hero.titleEnd}
            </h1>
            <div className="w-20 h-1.5 rounded-full bg-emerald-500 mt-8"></div>
            <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mt-7">{t.hero.description}</p>
            <div className="flex flex-wrap gap-3 mt-9">
              <a href="#contact" className="px-7 py-3.5 rounded-full bg-emerald-700 font-bold hover:bg-emerald-600 transition-colors">
                {t.hero.ctaJoin}
              </a>
              <a href="#publicaties" className="px-7 py-3.5 rounded-full border border-white/70 font-bold hover:bg-white/10 transition-colors">
                {t.hero.ctaPublications}
              </a>
            </div>
          </div>
        </div>
        <img src={PHOTO} alt={t.hero.imageAlt} className="w-full h-72 sm:h-96 lg:h-full lg:min-h-[540px] object-cover" />
      </section>

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {pillars.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="flex-none w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{item.icon}</svg>
              </span>
              <div>
                <h2 className="text-lg font-extrabold text-slate-900 mt-1">{item.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
