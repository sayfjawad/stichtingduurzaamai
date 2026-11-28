import React, { useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import publicationsData from '../publications.json';

const articleModules = import.meta.glob('../articles/*.json', { eager: true, import: 'default' }) as Record<string, any>;

const IMG_BASE = '/images/masterclass-ai-governance/';

export const ArticlePage: React.FC<{ id: string }> = ({ id }) => {
  const { t, language } = useLanguage();
  const article = articleModules[`../articles/${id}.json`];
  const pub = (publicationsData as any[]).find((p) => p.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!article || !pub) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <p className="text-slate-600 mb-4">{t.publications.articleNotFound}</p>
        <a href="#publicaties" className="font-bold text-emerald-600">{t.publications.backToPublications}</a>
      </div>
    );
  }

  const body = article[language];
  const date = new Date(pub.date).toLocaleDateString(language === 'nl' ? 'nl-NL' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <a href="#publicaties" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 mb-6">
        <i className="fas fa-arrow-left text-xs"></i>
        {t.publications.backToPublications}
      </a>
      <div className="flex items-center gap-3 mb-3 text-xs">
        <span className="text-emerald-600 font-bold uppercase tracking-wide">{t.publications.typeLabels[pub.type as keyof typeof t.publications.typeLabels]}</span>
        <time className="text-slate-400 font-medium">{date}</time>
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-3">{body.title}</h1>
      <p className="text-lg text-slate-600 mb-6">{body.subtitle}</p>
      {article.hero && <img src={article.hero} alt={body.title} className="w-full rounded-xl mb-8" />}

      {body.sections.map((s: any, i: number) => (
        <section key={i} className="mb-8">
          {s.heading && <h2 className="text-xl font-bold text-slate-900 mb-3">{s.heading}</h2>}
          {s.blocks.map((b: any, j: number) => {
            if (b.p) return <p key={j} className="text-slate-700 leading-relaxed mb-4">{b.p}</p>;
            if (b.link) return (
              <p key={j} className="mb-4">
                <a href={b.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-emerald-600 hover:text-emerald-700">
                  <i className="fab fa-youtube"></i>
                  {b.link.label}
                </a>
              </p>
            );
            if (b.ul) return (
              <ul key={j} className="list-disc pl-6 mb-4 text-slate-700 space-y-1">
                {b.ul.map((li: string) => <li key={li}>{li}</li>)}
              </ul>
            );
            if (b.images) return (
              <div key={j} className={`grid gap-3 mb-4 ${b.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {b.images.map((n: string) => (
                  <a key={n} href={`${IMG_BASE}${n}.jpg`} target="_blank" rel="noopener noreferrer">
                    <img src={`${IMG_BASE}${n}.jpg`} alt="" loading="lazy" className="w-full rounded-lg object-cover" />
                  </a>
                ))}
              </div>
            );
            return null;
          })}
        </section>
      ))}

      <p className="text-slate-900 font-bold">{article.author}</p>
      <p className="text-slate-500 text-sm">{article.role[language]}</p>
    </article>
  );
};
