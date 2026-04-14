
import React from 'react';
import { useLanguage } from '../LanguageContext';
import boardMembers from '../board.json';

export const AnbiSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="anbi" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.anbi.title}</h2>
        <p className="text-slate-600 mb-12 max-w-2xl">
          {t.anbi.description}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Identiteit */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2">{t.anbi.institution.title}</h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-slate-400 font-medium">{t.anbi.institution.name}</dt>
                <dd className="text-slate-900 font-semibold">{t.common.name}</dd>
              </div>
              <div>
                <dt className="text-slate-400 font-medium">{t.anbi.institution.rsin}</dt>
                <dd className="text-slate-900 font-semibold">868981850</dd>
              </div>
              <div>
                <dt className="text-slate-400 font-medium">{t.anbi.institution.kvk}</dt>
                <dd className="text-slate-900 font-semibold">99418428</dd>
              </div>
              <div>
                <dt className="text-slate-400 font-medium">{t.anbi.institution.bank}</dt>
                <dd className="text-slate-900 font-semibold">NL84 ABNA 0152 4458 97</dd>
              </div>
              <div>
                <dt className="text-slate-400 font-medium">{t.anbi.institution.seat}</dt>
                <dd className="text-slate-900">{t.anbi.institution.seatValue}</dd>
              </div>
            </dl>
          </div>

          {/* Bestuur */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2">{t.anbi.board.title}</h3>
            <div className="grid grid-cols-1 gap-4">
              {boardMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-slate-100">
                    <img 
                      src={member.picture} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-slate-900 truncate">{member.name}</h4>
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-[#0077B5] transition-colors"
                        title={`LinkedIn ${member.name}`}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                    <p className="text-xs text-slate-500">{t.anbi.board[member.roleKey as keyof typeof t.anbi.board]}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <h4 className="font-semibold text-slate-900 mb-2">{t.anbi.board.remunerationTitle}</h4>
              <p className="text-xs text-slate-600 italic">
                {t.anbi.board.remunerationText}
              </p>
            </div>
          </div>

          {/* Financiën & Contact */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2">{t.anbi.accountability.title}</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">{t.anbi.accountability.financialStatusTitle}</h4>
                <p className="text-xs text-slate-600">
                  {t.anbi.accountability.financialStatusText}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900 mb-2">{t.anbi.accountability.actualityTitle}</h4>
                <p className="text-xs text-slate-600">
                  {t.anbi.accountability.actualityText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
