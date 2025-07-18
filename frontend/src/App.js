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

function LandingPage({ onSignUp }) {
  return (
    <div>
      <Header onSignUp={onSignUp} />
      <HeroSection onSignUp={onSignUp} />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <FinalCTA onSignUp={onSignUp} />
      <Footer />
    </div>
  );
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