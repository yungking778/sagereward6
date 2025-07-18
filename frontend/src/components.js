import { useState } from 'react';
import { 
  Star, 
  Zap, 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle, 
  Gift,
  ArrowRight,
  Menu,
  X,
  User,
  Mail,
  UserPlus
} from 'lucide-react';
import { motion } from 'framer-motion';

// Sign Up Modal Component
export const SignUpModal = ({ isOpen, onClose, onSignUp }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      onSignUp(formData);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700"
      >
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center relative">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                <path fill="currentColor" d="M12 2L8 8h8l-4-6zm0 20l4-6H8l4 6zm-6-8l-4-6v12l4-6zm12 0l4-6v12l-4-6z"/>
              </svg>
              <div className="absolute inset-0 bg-cyan-400 rounded-full animate-pulse opacity-50"></div>
            </div>
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">HYPEREWARD</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Join HYPEREWARD</h2>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 mb-4">
            <Gift className="w-8 h-8 text-white mr-3" />
            <div className="text-white">
              <p className="font-bold">Welcome Bonus!</p>
              <p className="text-sm">Get 500 coins instantly</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none"
              placeholder="Create a password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Create Account & Get 500 Coins
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-4">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </div>
  );
};

// Header Component
export const Header = ({ onSignUp }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpOpen(true);
  };

  return (
    <>
      <header className="w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">HyperReward</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Discover</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Rewards</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Leaderboard</a>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white transition-colors">Log in</button>
              <button 
                onClick={handleSignUpClick}
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all"
              >
                Sign up
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
                <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Discover</a>
                <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Rewards</a>
                <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Leaderboard</a>
                <div className="border-t border-gray-700 pt-2">
                  <button className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white">Log in</button>
                  <button 
                    onClick={handleSignUpClick}
                    className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-2 rounded-lg mt-2 hover:from-blue-600 hover:to-blue-700 transition-all"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        onSignUp={onSignUp}
      />
    </>
  );
};

// Hero Section Component
export const HeroSection = ({ onSignUp }) => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpOpen(true);
  };

  return (
    <>
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Welcome Bonus Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                <Gift className="w-4 h-4 mr-2" />
                500 Coin Welcome Bonus
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Instant Cash Rewards -{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  Play and Earn
                </span>{' '}
                with HyperReward
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Ready to explore mobile games & apps for instant gift cards + PayPal rewards? Start earning today with quick, fun gaming tasks.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <button 
                  onClick={handleSignUpClick}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all">
                  How it Works
                </button>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-8"
              >
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Free to join</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Instant payouts</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>$1 minimum</span>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Space for where fox was */}
            <div className="hidden lg:block">
              <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Start Earning Today</h3>
                  <p className="text-gray-400">Join thousands of users earning daily rewards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        onSignUp={onSignUp}
      />
    </>
  );
};

// How It Works Component
export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Create your free account and get 500 welcome coins",
      icon: <Users className="w-8 h-8" />
    },
    {
      number: 2,
      title: "Play Games",
      description: "Download and play mobile games for a few minutes",
      icon: <Gift className="w-8 h-8" />
    },
    {
      number: 3,
      title: "Earn Coins",
      description: "Complete simple milestones and collect rewards",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      number: 4,
      title: "Cash Out",
      description: "Withdraw your earnings via PayPal or gift cards",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How HyperReward Works
          </h2>
          <p className="text-xl text-gray-400">
            Start earning in 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Component
export const WhyChoose = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Rewards",
      description: "Earn coins immediately after completing simple mobile game tasks. No waiting period!"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Tasks",
      description: "Most tasks take just 1-5 minutes. Perfect for earning during breaks or commutes."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Real Money",
      description: "Convert your coins to PayPal cash, gift cards, or crypto. Minimum payout from $1."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Invite Friends",
      description: "Earn bonus coins when friends join and complete their first task. More friends = more rewards!"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose HyperReward?
          </h2>
          <p className="text-xl text-gray-400">
            The fastest and most rewarding way to earn from mobile gaming
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-orange-500 transition-all group"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials Component
export const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex M.",
      earned: "$127",
      rating: 5,
      text: "I've earned over $100 in just two weeks! The games are actually fun to play."
    },
    {
      name: "Sarah K.",
      earned: "$89",
      rating: 5,
      text: "Perfect for earning extra cash during my lunch breaks. Super easy to use!"
    },
    {
      name: "Mike R.",
      earned: "$156",
      rating: 5,
      text: "The instant payouts are amazing. I got my first $25 within an hour!"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-400">
            Join thousands of satisfied users earning daily rewards
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-orange-400 font-semibold">Earned {testimonial.earned}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-400 italic">"{testimonial.text}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA Component
export const FinalCTA = ({ onSignUp }) => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-green-500/20"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join HyperReward today and get your 500 coin welcome bonus!
            </p>
            
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mr-3">
                  <Gift className="w-5 h-5 text-green-800" />
                </div>
                <span className="text-white font-semibold text-lg">500</span>
              </div>
            </div>
            
            <button 
              onClick={handleSignUpClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center mx-auto"
            >
              Sign Up Now - It's Free!
              <Gift className="w-5 h-5 ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        onSignUp={onSignUp}
      />
    </>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center relative">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
                <path fill="currentColor" d="M12 2L8 8h8l-4-6zm0 20l4-6H8l4 6zm-6-8l-4-6v12l4-6zm12 0l4-6v12l-4-6z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">HYPEREWARD</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© 2025 HyperReward. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};