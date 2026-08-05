import React, { useEffect, useState } from 'react';
import { useLanguage } from '../LanguageContext';

interface StatsResponse {
  registrations: {
    total: number;
    capacity: number;
    seatsRemaining: number;
  };
  traffic: {
    hoofdwebsite: { pageviews: number };
    training: { pageviews: number };
  };
}

const STATS_URL = 'https://training.stichtingduurzaamai.nl/api/stats';

export const StatisticsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [stats, setStats] = useState<StatsResponse | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(STATS_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load stats');
        return res.json();
      })
      .then(setStats)
      .catch(() => setError(true));
  }, []);

  const formatNumber = (n: number) => n.toLocaleString(language === 'nl' ? 'nl-NL' : 'en-US');

  return (
    <section id="statistieken" className="py-10 bg-white scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">{t.statistics.title}</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm">
            {t.statistics.description}
          </p>
        </div>

        {error ? (
          <p className="text-center text-sm text-slate-500">{t.statistics.error}</p>
        ) : !stats ? (
          <p className="text-center text-sm text-slate-500">{t.statistics.loading}</p>
        ) : (
          <>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-6 text-center">
                <p className="text-3xl font-extrabold text-blue-600">{formatNumber(stats.traffic.hoofdwebsite.pageviews)}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-2">{t.statistics.hoofdwebsiteViews}</p>
              </div>
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-6 text-center">
                <p className="text-3xl font-extrabold text-blue-600">{formatNumber(stats.traffic.training.pageviews)}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-2">{t.statistics.trainingViews}</p>
              </div>
              <div className="bg-slate-50 rounded-xl border border-slate-100 p-6 text-center">
                <p className="text-3xl font-extrabold text-blue-600">
                  {stats.registrations.total} / {stats.registrations.capacity}
                </p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-2">{t.statistics.trainingRegistrations}</p>
                <p className="text-xs text-slate-400 mt-1">
                  {stats.registrations.seatsRemaining === 0
                    ? t.statistics.seatsFull
                    : `${stats.registrations.seatsRemaining} ${t.statistics.seatsRemaining}`}
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://training.stichtingduurzaamai.nl/#statistieken"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                {t.statistics.cta}
                <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
