import React from 'react';
import { useLanguage } from '../LanguageContext';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'light' | 'dark';
  iconClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showTagline = true,
  variant = 'light',
  iconClassName = 'w-12 h-12',
}) => {
  const { t } = useLanguage();

  // The arch and the grounding node are the only ink-coloured parts; on a dark
  // surface they flip to white so the emerald stays exactly as designed.
  const inkStroke = variant === 'dark' ? '#ffffff' : '#0f172a';
  const wordmark = variant === 'dark' ? 'text-white' : 'text-slate-900';
  const muted = variant === 'dark' ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Leaf + circuit board mark */}
      <svg
        className={`${iconClassName} flex-shrink-0`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left Side Solid Arch */}
        <path
          d="M 30,82 C 16,70 12,48 20,30 C 26,18 38,12 50,12"
          stroke={inkStroke}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Right Side Circuit Arch */}
        <path
          d="M 50,12 C 65,12 78,22 84,36 C 87,43 88,52 85,60"
          stroke="#10b981"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 6"
        />

        {/* Circuit Nodes on the Ring */}
        <circle cx="85" cy="40" r="4" fill="#10b981" />
        <line x1="85" y1="40" x2="93" y2="44" stroke="#10b981" strokeWidth="2" />
        <circle cx="93" cy="44" r="2.5" fill="#10b981" />

        <circle cx="85" cy="58" r="4" fill="#10b981" />
        <line x1="85" y1="58" x2="92" y2="62" stroke="#10b981" strokeWidth="2" />
        <circle cx="92" cy="62" r="2.5" fill="#10b981" />

        <circle cx="75" cy="74" r="4" fill="#10b981" />
        <line x1="75" y1="74" x2="81" y2="81" stroke="#10b981" strokeWidth="2" />
        <circle cx="81" cy="81" r="2.5" fill="#10b981" />

        {/* Stem of leaf connecting to root */}
        <path
          d="M 32,80 C 42,75 48,64 52,50"
          stroke="#10b981"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Main Leaf Body */}
        <path
          d="M 36,68 C 26,45 44,22 68,26 C 75,44 68,68 46,74 Z"
          fill="#10b981"
          fillOpacity="0.15"
          stroke="#10b981"
          strokeWidth="4.5"
          strokeLinejoin="round"
        />

        {/* Leaf Veins styled like tech traces */}
        <path
          d="M 44,55 C 50,54 56,44 58,40"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="58" cy="40" r="2" fill="#10b981" />

        <path
          d="M 48,46 C 54,43 58,34 60,32"
          stroke="#10b981"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="60" cy="32" r="2" fill="#10b981" />

        {/* Base Grounding Node */}
        <circle cx="32" cy="80" r="4.5" fill={inkStroke} />
      </svg>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className={`text-[9px] font-bold tracking-[0.22em] ${muted} uppercase leading-none`}>
          {t.logo.prefix}
        </span>
        <div className="flex items-baseline leading-none mt-1">
          <span className={`text-xl font-extrabold tracking-tight ${wordmark} uppercase`}>
            {t.logo.word}
          </span>
          <span className="text-xl font-extrabold tracking-tight text-emerald-600 uppercase ml-1.5">
            {t.logo.accent}
          </span>
        </div>
        {showTagline && (
          <span className={`text-[8px] md:text-[9px] font-medium ${muted} tracking-wide mt-1 italic block leading-none`}>
            {t.logo.tagline}
          </span>
        )}
      </div>
    </div>
  );
};
