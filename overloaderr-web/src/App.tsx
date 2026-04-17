import React from 'react';
import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { FeatureDeepDive } from './components/FeatureDeepDive';
import { PaywallSection } from './components/PaywallSection';
import { MailingList } from './components/MailingList';
import { Footer } from './components/Footer';

function App() {
  return (
    <main>
      <HeroSection />
      <PhilosophySection />
      <FeatureDeepDive />
      <PaywallSection />
      <MailingList />
      <Footer />
    </main>
  );
}

export default App;
