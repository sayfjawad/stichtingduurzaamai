
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GoalSection } from './components/GoalSection';
import { AnbiSection } from './components/AnbiSection';
import { PolicySection } from './components/PolicySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <GoalSection />
          <PolicySection />
          <AnbiSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
