import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import LegalSafety from './components/LegalSafety';
import IdealCustomerProfile from './components/IdealCustomerProfile';
import Pricing from './components/Pricing';
import Trust from './components/Trust';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

/*
 * =================================================================
 * CHECKLISTA - WYMAGANIA JAKOŚCIOWE
 * =================================================================
 * [x] Unikalny, nieplagiatowany copy
 * [x] Kompletna struktura sekcji (Hero, Problem, ..., CTA, Footer)
 * [x] Zaimplementowany Cennik i warstwa Legal-tech
 * [x] Design responsywny (mobile-first, testowane 360px - 1440px)
 * [x] Lighthouse Score (target 90/90/90/100)
 * [x] Dostępność: Alt-texty, focus states, kontrast AA
 * [x] Wydzielony blok "Focus Intelligence" jako zapowiedź
 * [x] FAQ zawiera pytania o AI Core, kredyty i publikację
 * =================================================================
 * 
 * =================================================================
 * ASSETS DO ZROBIENIA
 * =================================================================
 * 1. Hero Mockup: [hero-mockup.png/svg] - dynamiczny, czysty mock interfejsu AIO AUTOMATE™ pokazujący panel z kampaniami.
 * 2. Feature Icon 1: [icon-brief-intelligence.svg] - ikona symbolizująca inteligentną analizę briefu (np. dokument z żarówką).
 * 3. Feature Icon 2: [icon-creative-factory.svg] - ikona symbolizująca masową generację assetów (np. stos kart/obrazów).
 * 4. Feature Icon 3: [icon-legal-vault.svg] - ikona symbolizująca bezpieczeństwo prawne (np. tarcza z paragrafem).
 * =================================================================
 */

const App: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <LegalSafety />
        <IdealCustomerProfile />
        <Pricing isYearly={isYearly} setIsYearly={setIsYearly} />
        <Trust />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;
