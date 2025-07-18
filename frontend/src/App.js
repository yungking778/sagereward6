import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import { Dashboard } from './Dashboard';

function LandingPage({ onSignUp, referralCode }) {
  return (
    <div>
      <Header onSignUp={onSignUp} referralCode={referralCode} />
      <HeroSection onSignUp={onSignUp} referralCode={referralCode} />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <FinalCTA onSignUp={onSignUp} referralCode={referralCode} />
      <Footer />
    </div>
  );
}

function SignupPage({ onSignUp }) {
  const location = useLocation();
  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    // Extract referral code from URL parameters
    const params = new URLSearchParams(location.search);
    const refCode = params.get('ref');
    if (refCode) {
      setReferralCode(refCode);
    }
  }, [location.search]);

  return <LandingPage onSignUp={onSignUp} referralCode={referralCode} />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleSignUp = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              isLoggedIn ? 
                <Navigate to="/dashboard" replace /> : 
                <LandingPage onSignUp={handleSignUp} />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              isLoggedIn ? 
                <Dashboard user={user} onLogout={handleLogout} /> : 
                <Navigate to="/" replace />
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;