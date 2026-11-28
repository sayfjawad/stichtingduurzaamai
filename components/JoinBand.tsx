import React from 'react';
import { useLanguage } from '../LanguageContext';

export const JoinBand: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-emerald-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <ul className="flex flex-wrap gap-3">
          {t.join.badges.map((badge) => (
            <li key={badge} className="px-4 py-1.5 rounded-full border border-white/80 text-sm font-semibold">{badge}</li>
          ))}
        </ul>
        <p className="text-xl font-medium mt-7">{t.join.question}</p>
        <p className="text-2xl sm:text-4xl font-extrabold tracking-tight break-words">stichtingduurzaamai.nl</p>
        <a href="mailto:info@stichtingduurzaamai.nl" className="inline-block mt-3 text-sm font-semibold hover:underline">
          info@stichtingduurzaamai.nl
        </a>
      </div>
    </section>
  );
};
