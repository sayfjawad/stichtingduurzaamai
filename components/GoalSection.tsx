
import React from 'react';
import { useLanguage } from '../LanguageContext';

export const GoalSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="doelstelling" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.goals.title}</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              {t.goals.description}
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <i className="fas fa-shield-alt text-blue-600 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-slate-900">{t.goals.ethicTitle}</h3>
                  <p className="text-sm text-slate-600">{t.goals.ethicDesc}</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <i className="fas fa-users text-blue-600 mt-1"></i>
                <div>
                  <h3 className="font-semibold text-slate-900">{t.goals.equalityTitle}</h3>
                  <p className="text-sm text-slate-600">{t.goals.equalityDesc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">{t.goals.statutoryTitle}</h3>
            <blockquote className="text-sm text-slate-600 italic leading-relaxed border-l-4 border-blue-600 pl-4 py-2">
              {t.goals.statutoryText}
            </blockquote>
            <p className="mt-4 text-xs text-slate-400">{t.goals.source}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
