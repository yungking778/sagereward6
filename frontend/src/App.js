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

  // Load user data from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem('rewardSageUser');
    const savedLoginState = localStorage.getItem('rewardSageLoggedIn');
    
    if (savedUser && savedLoginState === 'true') {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignUp = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    
    // Save to localStorage
    localStorage.setItem('rewardSageUser', JSON.stringify(userData));
    localStorage.setItem('rewardSageLoggedIn', 'true');
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    
    // Clear localStorage
    localStorage.removeItem('rewardSageUser');
    localStorage.removeItem('rewardSageLoggedIn');
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
            path="/signup" 
            element={
              isLoggedIn ? 
                <Navigate to="/dashboard" replace /> : 
                <SignupPage onSignUp={handleSignUp} />
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