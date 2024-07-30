import './App.css'
import FeatureSection from './components/FeatureSection';
import FooterSection from './components/FooterSection';
import HeroHeaderSection from './components/HeroHeaderSection';
import SocialProofSection from './components/SocialProofSection';


function App() {
  return (
    <div className="App">
      <HeroHeaderSection/>
      <SocialProofSection/>
      <FeatureSection/>
      <FooterSection/>
    </div>
  );
}

export default App
