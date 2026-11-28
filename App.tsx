
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GoalSection } from './components/GoalSection';
import { PublicationsSection } from './components/PublicationsSection';
import { StatisticsSection } from './components/StatisticsSection';
import { AnbiSection } from './components/AnbiSection';
import { PolicySection } from './components/PolicySection';
import { AmbassadorsSection } from './components/AmbassadorsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { JoinBand } from './components/JoinBand';
import { ArticlePage } from './components/ArticlePage';
import { LanguageProvider } from './LanguageContext';

const ARTICLE_PREFIX = '#/publicatie/';

function useArticleRoute(): string | null {
  const read = () => (window.location.hash.startsWith(ARTICLE_PREFIX) ? decodeURIComponent(window.location.hash.slice(ARTICLE_PREFIX.length)) : null);
  const [id, setId] = useState<string | null>(read);
  useEffect(() => {
    const onChange = () => {
      const next = read();
      setId(next);
      if (!next && window.location.hash) {
        // terug naar home: scroll naar het anker nadat de pagina is gerenderd
        const hash = window.location.hash;
        setTimeout(() => document.querySelector(hash)?.scrollIntoView(), 0);
      }
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return id;
}

const App: React.FC = () => {
  const articleId = useArticleRoute();
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        {(import.meta as any).env.VITE_VOORBEELD && (
          <div className="bg-amber-300 text-slate-900 text-center text-sm font-semibold px-4 py-2">
            Voorbeeld van de nieuwe stijl, ter beoordeling door het bestuur. Nog niet definitief.
          </div>
        )}
        <Header />
        <main className="flex-grow">
          {articleId ? <ArticlePage id={articleId} /> : (<>
          <Hero />
          <GoalSection />
          <PublicationsSection />
          <StatisticsSection />
          <PolicySection />
          <AmbassadorsSection />
          <AnbiSection />
          <ContactSection />
          <JoinBand />
          </>)}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
