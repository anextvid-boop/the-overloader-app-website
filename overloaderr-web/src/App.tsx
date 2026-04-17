import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { FeatureDeepDive } from './components/FeatureDeepDive';
import { MailingList } from './components/MailingList';
import { Footer } from './components/Footer';

import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <PhilosophySection />
        <div id="features">
          <FeatureDeepDive />
        </div>
        <div id="vanguard">
          <MailingList />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
