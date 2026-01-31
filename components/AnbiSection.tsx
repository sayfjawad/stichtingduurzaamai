
import React from 'react';
import { useLanguage } from '../LanguageContext';

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
                <dt className="text-slate-400 font-medium">{t.anbi.institution.seat}</dt>
                <dd className="text-slate-900">{t.anbi.institution.seatValue}</dd>
              </div>
            </dl>
          </div>

          {/* Bestuur */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4 border-b pb-2">{t.anbi.board.title}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span className="text-slate-900 font-medium">Sayf Jawad</span>
                <span className="text-slate-500">{t.anbi.board.chairman}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-900 font-medium">Manhal Al-Rubaiy</span>
                <span className="text-slate-500">{t.anbi.board.secretary}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-900 font-medium">Menno van Wieringen</span>
                <span className="text-slate-500">{t.anbi.board.treasurer}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-900 font-medium">Ashraf Arab</span>
                <span className="text-slate-500">{t.anbi.board.member}</span>
              </li>
            </ul>
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
