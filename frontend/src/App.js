import React from 'react';
import './App.css';
import { 
  Header, 
  HeroSection, 
  HowItWorks, 
  WhyChoose, 
  Testimonials, 
  FinalCTA, 
  Footer 
} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;