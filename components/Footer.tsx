
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo variant="dark" showTagline iconClassName="w-10 h-10" />
          <div className="flex gap-6 text-sm">
            <a href="#doelstelling" className="hover:text-white transition-colors">{t.footer.mission}</a>
            <a href="#beleid" className="hover:text-white transition-colors">{t.footer.policy}</a>
            <a href="#anbi" className="hover:text-white transition-colors">{t.footer.transparency}</a>
          </div>
          <p className="text-xs text-slate-500">
            &copy; 2026 {t.common.name}. {t.footer.rights}
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-[10px] leading-relaxed">
          {t.footer.kvkText} <br />
          {t.footer.missionText} <br />
          {t.footer.sponsorText}{' '}
          <a
            href="https://www.multicode.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white underline underline-offset-2 transition-colors"
          >
            Multicode
          </a>
          .
        </div>
      </div>
    </footer>
  );
};
