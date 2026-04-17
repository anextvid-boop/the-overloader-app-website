import { HeroSection } from './components/HeroSection';
import { PhilosophySection } from './components/PhilosophySection';
import { FeatureDeepDive } from './components/FeatureDeepDive';
import { MailingList } from './components/MailingList';
import { Footer } from './components/Footer';

function App() {
  return (
    <main>
      <HeroSection />
      <PhilosophySection />
      <FeatureDeepDive />
      <MailingList />
      <Footer />
    </main>
  );
}

export default App;
