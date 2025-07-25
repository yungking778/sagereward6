import React, { useState, useEffect } from 'react';
import { 
  Gift, 
  User, 
  CreditCard, 
  Users, 
  Lock, 
  Unlock,
  ExternalLink,
  DollarSign,
  Clock,
  CheckCircle,
  Copy,
  LogOut,
  Coins,
  TrendingUp,
  Trophy,
  FileText,
  Shield,
  Menu,
  ArrowRight,
  Star
} from 'lucide-react';
import { motion } from 'framer-motion';
import { TermsOfServiceModal, PrivacyPolicyModal } from './components';

export const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('offers');
  const [userCoins, setUserCoins] = useState(500); // Welcome bonus (500 coins = $5)
  const [completedOffers, setCompletedOffers] = useState([]);
  const [startedOffers, setStartedOffers] = useState([]);
  const [pendingWithdrawals, setPendingWithdrawals] = useState([]);
  const [referralCode] = useState('HYPER' + Math.random().toString(36).substr(2, 6).toUpperCase());
  const [showWithdrawalPopup, setShowWithdrawalPopup] = useState(false);
  const [showPayPalPopup, setShowPayPalPopup] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [selectedCashoutOption, setSelectedCashoutOption] = useState(null);
  const [paypalEmail, setPaypalEmail] = useState('');
  const [confirmPaypalEmail, setConfirmPaypalEmail] = useState('');
  const [withdrawalEmail, setWithdrawalEmail] = useState('');
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [isFirstWithdrawal, setIsFirstWithdrawal] = useState(true);
  const [referralLink] = useState(`${window.location.origin}/signup?ref=${Math.random().toString(36).substr(2, 8).toUpperCase()}`);
  const [copied, setCopied] = useState(false);

  // Load dashboard state from localStorage on component mount
  useEffect(() => {
    const savedDashboardData = localStorage.getItem('rewardSageDashboard');
    if (savedDashboardData) {
      const dashboardState = JSON.parse(savedDashboardData);
      setActiveTab(dashboardState.activeTab || 'offers');
      setUserCoins(dashboardState.userCoins || 500);
      setCompletedOffers(dashboardState.completedOffers || []);
      setStartedOffers(dashboardState.startedOffers || []);
      setPendingWithdrawals(dashboardState.pendingWithdrawals || []);
      setIsFirstWithdrawal(dashboardState.isFirstWithdrawal !== undefined ? dashboardState.isFirstWithdrawal : true);
    }
  }, []);

  // Save dashboard state to localStorage whenever important state changes
  useEffect(() => {
    const dashboardState = {
      activeTab,
      userCoins,
      completedOffers,
      startedOffers,
      pendingWithdrawals,
      isFirstWithdrawal
    };
    localStorage.setItem('rewardSageDashboard', JSON.stringify(dashboardState));
  }, [activeTab, userCoins, completedOffers, startedOffers, pendingWithdrawals, isFirstWithdrawal]);

  // Conversion rate: 100 points = $1
  const coinsToDollars = (coins) => (coins / 100).toFixed(2);

  const offers = [
    {
      id: 1,
      title: "SHEIN - Win 2300 Today!",
      description: "Gift for 2025! Time's ticking! Just click here to claim it",
      reward: 2300,
      time: "2 min",
      difficulty: "Easy",
      locked: false,
      url: "https://onelink.shein.com/15/4vs159n3j213",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=100&h=100&fit=crop&crop=center",
      tasksRemaining: 5,
      bonus: 5
    },
    {
      id: 2,
      title: "SoFi - Financial Dashboard",
      description: "Earn $10 in rewards points when you activate free credit score monitoring",
      reward: 1000,
      time: "3 min",
      difficulty: "Easy",
      locked: false,
      url: "https://www.sofi.com/invite/relay?gcp=18ac7d25-d1b3-47c7-92b0-f7dd26beb7d7&isAliasGcp=false",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=100&h=100&fit=crop&crop=center",
      tasksRemaining: 8,
      bonus: 2
    },
    {
      id: 3,
      title: "Hopper - Hotel Booking",
      description: "Sign up for Hopper and get hotel booking discounts",
      reward: 1500,
      time: "2 min",
      difficulty: "Easy",
      locked: false,
      url: "https://sharing.hopper.com/invite/tanyas9bfa",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&h=100&fit=crop&crop=center",
      tasksRemaining: 9,
      bonus: 3
    },
    {
      id: 4,
      title: "BIGCASH - Simple Offers",
      description: "Complete simple offers and cash out $3 requirement",
      reward: 800,
      time: "5 min",
      difficulty: "Easy",
      locked: false,
      url: "https://bigcashweb.com/refer/wb98uycp",
      image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=100&h=100&fit=crop&crop=center",
      tasksRemaining: 12,
      bonus: 2
    },
    {
      id: 5,
      title: "Supreme King - Start Bonus",
      description: "Join Supreme King and grab your limited start bonus",
      reward: 1200,
      time: "3 min",
      difficulty: "Medium",
      locked: false,
      url: "https://pro.sng.link/Dailg/5kql?psid=edbb8e43-4319-4e08-9b55-7f17ed1f3240&_smtype=3",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop&crop=center",
      tasksRemaining: 6,
      bonus: 4
    },
    {
      id: 6,
      title: "Temu - Free Gifts",
      description: "Take your free gifts from top-notch activity TEMU Free Gifts",
      reward: 1000,
      time: "2 min",
      difficulty: "Easy",
      locked: false,
      url: "https://temu.com/a/4e6Lz7pufGYQoYhq",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center",
      tasksRemaining: 10,
      bonus: 3
    }
  ];

  const handleStartOffer = (offerId) => {
    const offer = offers.find(o => o.id === offerId);
    if (offer && !offer.locked && offer.url !== '#') {
      // Add to started offers if not already started
      if (!startedOffers.find(s => s.id === offerId)) {
        const startedOffer = {
          ...offer,
          startedAt: new Date().toISOString(),
          status: 'started'
        };
        setStartedOffers([...startedOffers, startedOffer]);
        
        // Auto-credit after 2 minutes (120,000 milliseconds)
        setTimeout(() => {
          setStartedOffers(prevStarted => 
            prevStarted.map(s => 
              s.id === offerId ? { ...s, status: 'completed' } : s
            )
          );
          setUserCoins(prevCoins => prevCoins + offer.reward);
          setCompletedOffers(prevCompleted => [...prevCompleted, offerId]);
        }, 120000); // 2 minutes
      }
      
      // Open the URL in new tab
      window.open(offer.url, '_blank');
    }
  };

  const handleWithdrawal = () => {
    if (withdrawalEmail && withdrawalAmount) {
      const amount = parseFloat(withdrawalAmount);
      const requiredCoins = amount * 100; // Convert dollars to coins
      
      // Check if first withdrawal and enforce $20 minimum
      if (isFirstWithdrawal && amount < 20) {
        alert('First withdrawal must be at least $20. Complete more offers to reach the minimum.');
        return;
      }
      
      if (requiredCoins <= userCoins && amount >= (isFirstWithdrawal ? 20 : 1)) {
        // Deduct coins from balance
        setUserCoins(userCoins - requiredCoins);
        
        // Add to pending withdrawals
        const withdrawal = {
          id: Date.now(),
          email: withdrawalEmail,
          amount: amount,
          coins: requiredCoins,
          date: new Date().toISOString(),
          status: 'pending'
        };
        setPendingWithdrawals([...pendingWithdrawals, withdrawal]);
        
        // Mark that user has made their first withdrawal
        setIsFirstWithdrawal(false);
        
        setShowWithdrawalPopup(true);
        setWithdrawalEmail('');
        setWithdrawalAmount('');
      } else {
        alert(`Insufficient coins or invalid amount. Minimum withdrawal is $${isFirstWithdrawal ? 20 : 1}.`);
      }
    } else {
      alert('Please fill in both email and amount.');
    }
  };

  const handlePayPalSubmit = () => {
    if (paypalEmail && confirmPaypalEmail && paypalEmail === confirmPaypalEmail) {
      const withdrawal = {
        id: Date.now(),
        email: paypalEmail,
        amount: selectedCashoutOption.amount,
        coins: selectedCashoutOption.coins,
        date: new Date().toISOString(),
        status: 'pending'
      };
      setUserCoins(userCoins - selectedCashoutOption.coins);
      setPendingWithdrawals([...pendingWithdrawals, withdrawal]);
      
      // Mark that user has made their first withdrawal
      setIsFirstWithdrawal(false);
      
      setShowPayPalPopup(false);
      setShowWithdrawalPopup(true);
      setPaypalEmail('');
      setConfirmPaypalEmail('');
      setSelectedCashoutOption(null);
    } else {
      alert('Please enter matching PayPal email addresses');
    }
  };

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderProfile = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Your Profile</h3>
        <p className="text-blue-100">Manage your account information and preferences</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h4 className="text-xl font-bold text-white mb-4">Account Information</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                value={user?.name || ''}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                value={user?.email || ''}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Member Since</label>
              <input
                type="text"
                value={new Date().toLocaleDateString()}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
                readOnly
              />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h4 className="text-xl font-bold text-white mb-4">Account Stats</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Total Coins Earned</span>
              <span className="text-white font-semibold">{userCoins + completedOffers.length * 500}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Current Balance</span>
              <span className="text-cyan-400 font-semibold">{userCoins} coins</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Offers Completed</span>
              <span className="text-green-400 font-semibold">{completedOffers.length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Referrals</span>
              <span className="text-green-400 font-semibold">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTransactions = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Transaction History</h3>
        <p className="text-green-100">View all your earnings and withdrawals</p>
      </div>
      
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h4 className="text-xl font-bold text-white mb-4">Recent Transactions</h4>
        
        {pendingWithdrawals.length > 0 || completedOffers.length > 0 ? (
          <div className="space-y-4">
            {/* Pending Withdrawals */}
            {pendingWithdrawals.map((withdrawal) => (
              <div key={withdrawal.id} className="bg-gray-700 rounded-lg p-4 border-l-4 border-orange-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-white font-semibold">PayPal Withdrawal</h5>
                    <p className="text-gray-300 text-sm">{withdrawal.email}</p>
                    <p className="text-gray-400 text-xs">{new Date(withdrawal.date).toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-semibold">-${withdrawal.amount}</p>
                    <p className="text-gray-400 text-xs">{withdrawal.coins} coins</p>
                    <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs">Pending</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Completed Offers */}
            {startedOffers.filter(offer => offer.status === 'completed').map((offer) => (
              <div key={offer.id} className="bg-gray-700 rounded-lg p-4 border-l-4 border-green-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="text-white font-semibold">{offer.title}</h5>
                    <p className="text-gray-300 text-sm">Offer Completed</p>
                    <p className="text-gray-400 text-xs">{new Date(offer.startedAt).toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-semibold">+{offer.reward} coins</p>
                    <p className="text-gray-400 text-xs">${coinsToDollars(offer.reward)}</p>
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">Completed</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h5 className="text-white font-semibold mb-2">No Transactions Yet</h5>
            <p className="text-gray-400">Complete some offers to see your transaction history</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderSupport = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Support Center</h3>
        <p className="text-green-100">Get help with your account and earn rewards</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h4 className="text-xl font-bold text-white mb-4">Frequently Asked Questions</h4>
          <div className="space-y-4">
            <div className="border-b border-gray-700 pb-3">
              <h5 className="text-white font-semibold mb-2">How do I earn coins?</h5>
              <p className="text-gray-400 text-sm">Complete offers by clicking "Start" and following the instructions. Mark offers as complete to receive your coins.</p>
            </div>
            <div className="border-b border-gray-700 pb-3">
              <h5 className="text-white font-semibold mb-2">When will I receive my PayPal payment?</h5>
              <p className="text-gray-400 text-sm">PayPal payments are processed within 1-24 hours, but can take up to 48 hours to complete.</p>
            </div>
            <div className="border-b border-gray-700 pb-3">
              <h5 className="text-white font-semibold mb-2">What's the minimum withdrawal amount?</h5>
              <p className="text-gray-400 text-sm">You can withdraw as little as $1 (100 coins) to your PayPal account.</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-2">How do referrals work?</h5>
              <p className="text-gray-400 text-sm">Share your referral code with friends. You'll earn $5 (500 coins) when they sign up and complete their first offer.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h4 className="text-xl font-bold text-white mb-4">Contact Support</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                placeholder="Brief description of your issue"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Describe your issue in detail..."
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-green-500 focus:outline-none resize-none"
              />
            </div>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
              Send Message
            </button>
          </div>
          
          <div className="mt-6 p-4 bg-gray-700 rounded-lg">
            <h5 className="text-white font-semibold mb-2">Quick Links</h5>
            <div className="space-y-2">
              <button
                onClick={() => setShowTerms(true)}
                className="block text-blue-400 hover:text-blue-300 text-sm text-left w-full"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setShowPrivacy(true)}
                className="block text-blue-400 hover:text-blue-300 text-sm text-left w-full"
              >
                Privacy Policy
              </button>
              <a href="#" className="block text-blue-400 hover:text-blue-300 text-sm">Payment Issues</a>
              <a href="#" className="block text-blue-400 hover:text-blue-300 text-sm">Account Security</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Withdrawal Success Popup
  const WithdrawalPopup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700"
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Withdrawal Processing</h3>
          <p className="text-gray-300 mb-6">
            Your withdrawal is processing. You will receive an email confirmation within 1-24 hours, but it can take up to 48 hours to complete.
          </p>
          
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="w-5 h-5 text-white" />
              <h4 className="text-white font-semibold">Get Instant Cashouts!</h4>
            </div>
            <p className="text-blue-100 text-sm">
              Invite 3 users to sign up and complete offers for instant cashout processing on all future withdrawals.
            </p>
          </div>
          <button
            onClick={() => setShowWithdrawalPopup(false)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Got it!
          </button>
        </div>
      </motion.div>
    </div>
  );

  const renderOffers = () => (
    <div className="space-y-8">
      {/* In Progress Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">In Progress</h3>
            <p className="text-white/60 text-sm mt-1">Your active earning opportunities</p>
          </div>
          <button className="text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors duration-200 flex items-center space-x-1">
            <span>See all</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {startedOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 rounded-3xl p-6 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">🍎</span>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <img 
                      src={offer.image} 
                      alt={offer.title}
                      className="w-16 h-16 rounded-2xl object-cover shadow-lg ring-2 ring-white/20"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-lg">{offer.title}</h4>
                    <p className="text-emerald-100 text-sm">{offer.completedTasks || Math.floor(Math.random() * 5) + 1} of {offer.tasksRemaining + (offer.completedTasks || 0)} tasks completed</p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80 text-sm">Progress</span>
                    <span className="text-emerald-200 text-sm font-semibold">{Math.floor(((offer.completedTasks || 1) / (offer.tasksRemaining + (offer.completedTasks || 1))) * 100)}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.floor(((offer.completedTasks || 1) / (offer.tasksRemaining + (offer.completedTasks || 1))) * 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-white">
                    <div className="flex items-center space-x-2">
                      <span className="text-white/60 text-sm line-through">${coinsToDollars(offer.reward * 0.7)}</span>
                      <span className="text-2xl font-bold text-white">${coinsToDollars(offer.reward)}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-emerald-200 text-sm font-medium">Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Available Offers Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Premium Specials</h3>
            <p className="text-white/60 text-sm mt-1">Exclusive high-value opportunities</p>
          </div>
          <button className="text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors duration-200 flex items-center space-x-1">
            <span>See all</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-3xl p-6 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                offer.locked ? 'opacity-60' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {offer.locked && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-20 rounded-3xl">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-8 h-8 text-white/80" />
                    </div>
                    <p className="text-white font-semibold text-lg">Locked</p>
                    <p className="text-white/60 text-sm mt-1">Complete more offers to unlock</p>
                  </div>
                </div>
              )}
              
              {/* Bonus Badge */}
              {offer.bonus && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  <span className="flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>X{offer.bonus}</span>
                  </span>
                </div>
              )}
              
              <div className="absolute top-4 right-4 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">🍎</span>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative">
                    <img 
                      src={offer.image} 
                      alt={offer.title}
                      className="w-16 h-16 rounded-2xl object-cover shadow-lg ring-2 ring-white/20"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <Gift className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-lg">{offer.title}</h4>
                    <p className="text-purple-300 text-sm">Only {offer.tasksRemaining || Math.floor(Math.random() * 20) + 1} tasks remaining</p>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 mb-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80 text-sm">Reward Value</span>
                    <div className="flex items-center space-x-2">
                      <Coins className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 text-sm font-semibold">{offer.reward} coins</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-lg line-through">${coinsToDollars(offer.reward * 0.7)}</span>
                    <span className="text-3xl font-bold text-white">${coinsToDollars(offer.reward)}</span>
                  </div>
                </div>
                
                {!offer.locked && (
                  <button
                    onClick={() => handleStartOffer(offer.id)}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-emerald-500/30 transform hover:scale-105"
                  >
                    <span>Start Earning</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOffersStarted = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Offers Started</h3>
        <p className="text-blue-100">Track your progress on started offers</p>
      </div>
      
      {startedOffers.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No Offers Started Yet</h3>
          <p className="text-gray-400">Start some offers to track your progress here!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {startedOffers.map((offer) => (
            <div key={offer.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex flex-col flex-shrink-0">
                    <img 
                      src={offer.image} 
                      alt={offer.title}
                      className="w-16 h-16 rounded-lg object-cover mb-2"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2">{offer.title}</h4>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                      <span>Started: {new Date(offer.startedAt).toLocaleDateString()}</span>
                      <span>Reward: {offer.reward} coins (${coinsToDollars(offer.reward)})</span>
                    </div>
                    
                    {/* Professional Info Box */}
                    <div className="bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/10 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-xs text-blue-300 font-bold tracking-wide">DETAILS:</span>
                        <span className="text-xs text-white/90 font-medium">{offer.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    offer.status === 'completed' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-black'
                  }`}>
                    {offer.status === 'completed' ? 'Completed' : 'In Progress'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderWithdrawal = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Withdrawal Center</h3>
        <p className="text-cyan-100">View your pending withdrawals and transaction history</p>
      </div>
      
      {/* Pending Withdrawals */}
      {pendingWithdrawals.length > 0 ? (
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h4 className="text-xl font-bold text-white mb-4">Pending Withdrawals</h4>
          <div className="space-y-3">
            {pendingWithdrawals.map((withdrawal) => (
              <div key={withdrawal.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">${withdrawal.amount.toFixed(2)} to {withdrawal.email}</p>
                    <p className="text-sm text-gray-400">
                      {new Date(withdrawal.date).toLocaleDateString()} • {withdrawal.coins} coins deducted
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-cyan-500 text-white rounded-full text-sm font-medium">
                    Processing
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Pending Withdrawals</h3>
            <p className="text-gray-400">Your withdrawal history will appear here once you cash out.</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderReferral = () => (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-6 border border-blue-500/30 text-center"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Users className="w-6 h-6 text-white" />
          </div>
          <p className="text-3xl font-bold text-white mb-2">0</p>
          <p className="text-blue-200 text-sm font-medium">Referrals</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-xl rounded-3xl p-6 border border-emerald-500/30 text-center"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Gift className="w-6 h-6 text-white" />
          </div>
          <p className="text-3xl font-bold text-white mb-2">0</p>
          <p className="text-emerald-200 text-sm font-medium">Offers</p>
        </motion.div>
      </div>

      {/* Withdraw Earnings Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:scale-105"
      >
        Withdraw Earnings
      </motion.button>

      {/* Earnings Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 text-center"
      >
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-8 mb-4">
            <div>
              <p className="text-4xl font-bold text-emerald-400">$25</p>
              <p className="text-white/80 text-lg font-medium">PER SIGN-UP</p>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div>
              <p className="text-4xl font-bold text-blue-400">$2</p>
              <p className="text-white/80 text-lg font-medium">PER CLICK</p>
            </div>
          </div>
          <p className="text-white/70 text-base leading-relaxed max-w-md mx-auto">
            Share your link and get paid for every click and sign-up. Plus, earn 20% commission on their earnings.
          </p>
        </div>

        {/* Referral Link */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex-1 mr-4">
              <p className="text-blue-300 font-medium text-sm break-all">{referralLink}</p>
            </div>
            <button
              onClick={copyReferralLink}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-2 rounded-xl font-medium text-sm transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-emerald-500/30"
            >
              <Copy className="w-4 h-4" />
              <span>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

        {/* Social Share Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 flex items-center justify-center space-x-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
            </svg>
            <span>Share</span>
          </button>
          
          <button className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-black/30 transform hover:scale-105 flex items-center justify-center space-x-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
            </svg>
            <span>Share on TikTok</span>
          </button>
          
          <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-pink-500/30 transform hover:scale-105 flex items-center justify-center space-x-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Share on Instagram</span>
          </button>
          
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30 transform hover:scale-105 flex items-center justify-center space-x-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
            <span>Share on Facebook</span>
          </button>
          
          <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-yellow-500/30 transform hover:scale-105 flex items-center justify-center space-x-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5.829 4.533c-.6 1.344-.363 3.045.52 4.076 1.226 1.433 3.43 1.433 4.656 0 .883-1.031 1.12-2.732.52-4.076-.564-1.266-1.226-2.4-1.996-3.406-.131-.171-.363-.171-.494 0-.77 1.006-1.432 2.14-1.996 3.406-.207.459-.413.918-.61 1.377-.196-.459-.403-.918-.61-1.377zm7.703 0c-.6 1.344-.363 3.045.52 4.076 1.226 1.433 3.43 1.433 4.656 0 .883-1.031 1.12-2.732.52-4.076-.564-1.266-1.226-2.4-1.996-3.406-.131-.171-.363-.171-.494 0-.77 1.006-1.432 2.14-1.996 3.406-.207.459-.413.918-.61 1.377-.196-.459-.403-.918-.61-1.377z"/>
            </svg>
            <span>Share on Snapchat</span>
          </button>
        </div>
      </motion.div>
    </div>
  );

  const renderCashout = () => {
    const cashoutOptions = [
      {
        amount: 1,
        coins: 100,
        bonus: 0,
        status: !isFirstWithdrawal && userCoins >= 100 ? 'available' : 'locked',
        progress: Math.min((userCoins / 100) * 100, 100),
        firstWithdrawalLocked: isFirstWithdrawal
      },
      {
        amount: 5,
        coins: 500,
        bonus: 1,
        status: !isFirstWithdrawal && userCoins >= 500 ? 'available' : userCoins >= 400 ? 'almost' : 'locked',
        progress: Math.min((userCoins / 500) * 100, 100),
        firstWithdrawalLocked: isFirstWithdrawal
      },
      {
        amount: 10,
        coins: 1000,
        bonus: 5,
        status: !isFirstWithdrawal && userCoins >= 1000 ? 'available' : userCoins >= 800 ? 'almost' : 'locked',
        progress: Math.min((userCoins / 1000) * 100, 100),
        firstWithdrawalLocked: isFirstWithdrawal
      },
      {
        amount: 20,
        coins: 2000,
        bonus: 10,
        status: userCoins >= 2000 ? 'available' : userCoins >= 1600 ? 'almost' : 'locked',
        progress: Math.min((userCoins / 2000) * 100, 100),
        firstWithdrawalLocked: false
      },
      {
        amount: 50,
        coins: 5000,
        bonus: 25,
        status: userCoins >= 5000 ? 'available' : userCoins >= 4000 ? 'almost' : 'locked',
        progress: Math.min((userCoins / 5000) * 100, 100),
        bestDeal: true,
        firstWithdrawalLocked: false
      }
    ];

    const handleCashout = (option) => {
      if (option.status === 'available') {
        setSelectedCashoutOption(option);
        setShowPayPalPopup(true);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-8">
            <h1 className="text-3xl font-bold text-white mb-2">Cash Out</h1>
            <p className="text-blue-200">Choose your PayPal reward</p>
            <div className="mt-4 bg-white/10 rounded-full px-6 py-2 inline-block">
              <span className="text-white font-semibold">{userCoins} coins available</span>
            </div>
          </div>

          {/* PayPal Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {cashoutOptions.filter(option => !option.bestDeal).map((option, index) => (
              <motion.div
                key={option.amount}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 border-2 ${
                  option.status === 'available' ? 'border-green-400 cursor-pointer hover:scale-105' : 
                  option.status === 'almost' ? 'border-green-400' : 'border-gray-500'
                } transition-all duration-300`}
                onClick={() => handleCashout(option)}
              >
                {/* PayPal Logo */}
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-white rounded-lg px-4 py-2">
                    <span className="text-blue-600 font-bold text-lg">PayPal</span>
                  </div>
                </div>

                {/* Status */}
                <div className="text-center mb-4">
                  <h3 className="text-white font-bold text-lg mb-2">
                    {option.firstWithdrawalLocked ? 'First withdrawal $20 minimum' :
                     option.status === 'available' ? 'Ready to Cash Out!' : 
                     option.status === 'almost' ? 'Almost there!' : 'Earn to Unlock!'}
                  </h3>
                  <p className="text-white/80">
                    {userCoins} / {option.coins} Coins
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        option.status === 'available' ? 'bg-green-400' : 
                        option.status === 'almost' ? 'bg-green-400' : 'bg-gray-500'
                      }`}
                      style={{ width: `${option.progress}%` }}
                    />
                  </div>
                </div>

                {/* Amount */}
                <div className="flex items-center justify-center space-x-2">
                  <div className="bg-blue-600 rounded-xl px-6 py-3 text-center">
                    <span className="text-white font-bold text-2xl">${option.amount}</span>
                  </div>
                  {option.bonus > 0 && (
                    <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-xl px-4 py-3 text-center">
                      <span className="text-white font-bold">+${option.bonus}</span>
                    </div>
                  )}
                </div>

                {/* Lock Icon */}
                {option.status === 'locked' && (
                  <div className="absolute top-4 right-4 bg-gray-700 rounded-full p-2">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Best Deal Card */}
          {cashoutOptions.find(option => option.bestDeal) && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-full px-6 py-2 flex items-center">
                  <Trophy className="w-5 h-5 text-white mr-2" />
                  <span className="text-white font-bold">Best Deal</span>
                </div>
              </div>

              <div 
                className={`bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 border-4 ${
                  cashoutOptions.find(option => option.bestDeal).status === 'available' ? 
                  'border-green-400 cursor-pointer hover:scale-105' : 'border-gray-500'
                } transition-all duration-300`}
                onClick={() => handleCashout(cashoutOptions.find(option => option.bestDeal))}
              >
                {/* PayPal Logo */}
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-white rounded-lg px-6 py-3">
                    <span className="text-blue-600 font-bold text-2xl">PayPal</span>
                  </div>
                </div>

                {/* Status */}
                <div className="text-center mb-6">
                  <h3 className="text-white font-bold text-2xl mb-3">
                    {cashoutOptions.find(option => option.bestDeal).status === 'available' ? 
                     'Ready to Cash Out!' : 'Earn to Unlock!'}
                  </h3>
                  <p className="text-white/80 text-lg">
                    {userCoins} / {cashoutOptions.find(option => option.bestDeal).coins} Coins
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        cashoutOptions.find(option => option.bestDeal).status === 'available' ? 
                        'bg-green-400' : 'bg-gray-500'
                      }`}
                      style={{ width: `${cashoutOptions.find(option => option.bestDeal).progress}%` }}
                    />
                  </div>
                </div>

                {/* Amount */}
                <div className="flex items-center justify-center space-x-3">
                  <div className="bg-blue-700 rounded-xl px-8 py-4 text-center">
                    <span className="text-white font-bold text-3xl">$50</span>
                  </div>
                  <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-xl px-6 py-4 text-center">
                    <span className="text-white font-bold text-2xl">+$25</span>
                  </div>
                </div>

                {/* Lock Icon */}
                {cashoutOptions.find(option => option.bestDeal).status === 'locked' && (
                  <div className="absolute top-6 right-6 bg-gray-700 rounded-full p-3">
                    <Lock className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen relative"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #16a34a 100%)"
      }}
    >
      {/* Decorative RewardSage background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 opacity-5 transform rotate-12">
          <svg viewBox="0 0 24 24" className="w-32 h-32 text-cyan-400">
            <path fill="currentColor" d="M12 2L8 8h8l-4-6zm0 20l4-6H8l4 6zm-6-8l-4-6v12l4-6zm12 0l4-6v12l-4-6z"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-10 opacity-5 transform -rotate-12">
          <svg viewBox="0 0 24 24" className="w-24 h-24 text-cyan-400">
            <path fill="currentColor" d="M12 2L8 8h8l-4-6zm0 20l4-6H8l4 6zm-6-8l-4-6v12l4-6zm12 0l4-6v12l-4-6z"/>
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/2 opacity-3 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
          <svg viewBox="0 0 24 24" className="w-96 h-96 text-cyan-400">
            <path fill="currentColor" d="M12 2L8 8h8l-4-6zm0 20l4-6H8l4 6zm-6-8l-4-6v12l4-6zm12 0l4-6v12l-4-6z"/>
          </svg>
        </div>
      </div>
      {/* Header */}
      <header className="relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between">
              {/* Left - User Menu */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="text-white font-bold text-sm">Welcome back</p>
                    <p className="text-white/70 text-xs">{user?.name || 'User'}</p>
                  </div>
                  <div className="sm:block">
                    <Menu className="w-4 h-4 text-white/70" />
                  </div>
                </motion.button>

                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-50"
                  >
                    <div className="p-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl flex items-center justify-center shadow-lg">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-bold">{user?.name || 'User'}</p>
                          <p className="text-white/70 text-sm">{user?.email || 'Premium Member'}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            setActiveTab('profile');
                            setShowProfileMenu(false);
                          }}
                          className="w-full px-4 py-3 text-left text-white/80 hover:bg-white/10 hover:text-white transition-colors rounded-xl flex items-center space-x-3"
                        >
                          <User className="w-5 h-5" />
                          <span>Profile Settings</span>
                        </button>
                        
                        <button
                          onClick={() => {
                            setActiveTab('transactions');
                            setShowProfileMenu(false);
                          }}
                          className="w-full px-4 py-3 text-left text-white/80 hover:bg-white/10 hover:text-white transition-colors rounded-xl flex items-center space-x-3"
                        >
                          <CreditCard className="w-5 h-5" />
                          <span>Transactions</span>
                        </button>
                        
                        <button
                          onClick={() => {
                            setActiveTab('support');
                            setShowProfileMenu(false);
                          }}
                          className="w-full px-4 py-3 text-left text-white/80 hover:bg-white/10 hover:text-white transition-colors rounded-xl flex items-center space-x-3"
                        >
                          <Gift className="w-5 h-5" />
                          <span>Support</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Center - RewardSage Logo */}
              <div className="hidden sm:flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                    <path fill="currentColor" d="M12 2L8 8h8l-4-6zm0 20l4-6H8l4 6zm-6-8l-4-6v12l4-6zm12 0l4-6v12l-4-6z"/>
                  </svg>
                </div>
                <div className="text-white">
                  <p className="font-bold text-xl tracking-tight">RewardSage</p>
                  <p className="text-sm opacity-80">Premium Dashboard</p>
                </div>
              </div>

              {/* Right - Coin Balance & Logout */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl px-4 py-3 border border-yellow-500/30 shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center shadow-lg">
                    <Coins className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">{userCoins.toLocaleString()}</p>
                    <p className="text-yellow-200 text-xs">coins</p>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onLogout}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <LogOut className="w-5 h-5 text-white/70 hover:text-white" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-xl rounded-3xl p-6 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 shadow-xl hover:shadow-emerald-500/20"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-white mb-1">${coinsToDollars(userCoins)}</p>
              <p className="text-emerald-200 text-sm font-medium">Total Earnings</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 shadow-xl hover:shadow-blue-500/20"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-white mb-1">{startedOffers.length}</p>
              <p className="text-blue-200 text-sm font-medium">Active Tasks</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 shadow-xl hover:shadow-purple-500/20"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-white mb-1">0</p>
              <p className="text-purple-200 text-sm font-medium">Referrals</p>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
          
          <div className="p-4 sm:p-6">
            {activeTab === 'offers' && renderOffers()}
            {activeTab === 'started' && renderOffersStarted()}
            {activeTab === 'cashout' && renderCashout()}
            {activeTab === 'withdrawal' && renderWithdrawal()}
            {activeTab === 'referral' && renderReferral()}
            {activeTab === 'profile' && renderProfile()}
            {activeTab === 'transactions' && renderTransactions()}
            {activeTab === 'support' && renderSupport()}
          </div>
        </div>
      </main>
      
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-4 z-50">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('cashout')}
              className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 ${
                activeTab === 'cashout' 
                  ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-1 ${
                activeTab === 'cashout' ? 'bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg' : ''
              }`}>
                <CreditCard className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">PayPal</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('transactions')}
              className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 ${
                activeTab === 'transactions' 
                  ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-1 ${
                activeTab === 'transactions' ? 'bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg' : ''
              }`}>
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">Transactions</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('offers')}
              className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 ${
                activeTab === 'offers' 
                  ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-1 shadow-lg ${
                activeTab === 'offers' 
                  ? 'bg-gradient-to-br from-emerald-500 to-teal-500' 
                  : 'bg-gradient-to-br from-emerald-600 to-teal-600'
              }`}>
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-medium">Earn</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('started')}
              className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 ${
                activeTab === 'started' 
                  ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-1 ${
                activeTab === 'started' ? 'bg-gradient-to-br from-orange-500 to-red-500 shadow-lg' : ''
              }`}>
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">Active Tasks</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('referral')}
              className={`flex flex-col items-center py-3 px-4 rounded-2xl transition-all duration-300 ${
                activeTab === 'referral' 
                  ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-1 ${
                activeTab === 'referral' ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg' : ''
              }`}>
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">Referrals</span>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Add padding to main content to account for bottom nav */}
      <div className="h-20"></div>
      
      {/* PayPal Email Confirmation Popup */}
      {showPayPalPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 rounded-2xl p-8 max-w-md w-full border border-gray-700"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">PayPal</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Confirm PayPal Email</h3>
              <p className="text-gray-300">
                Cashing out ${selectedCashoutOption?.amount} 
                {selectedCashoutOption?.bonus > 0 && <span className="text-orange-400"> (+${selectedCashoutOption?.bonus} bonus)</span>}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">PayPal Email</label>
                <input
                  type="email"
                  value={paypalEmail}
                  onChange={(e) => setPaypalEmail(e.target.value)}
                  placeholder="Enter your PayPal email"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Confirm PayPal Email</label>
                <input
                  type="email"
                  value={confirmPaypalEmail}
                  onChange={(e) => setConfirmPaypalEmail(e.target.value)}
                  placeholder="Confirm your PayPal email"
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => {
                    setShowPayPalPopup(false);
                    setPaypalEmail('');
                    setConfirmPaypalEmail('');
                    setSelectedCashoutOption(null);
                  }}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handlePayPalSubmit}
                  disabled={!paypalEmail || !confirmPaypalEmail || paypalEmail !== confirmPaypalEmail}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  Confirm Cashout
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Withdrawal Success Popup */}
      {showWithdrawalPopup && <WithdrawalPopup />}

      {/* Terms of Service and Privacy Policy Modals */}
      <TermsOfServiceModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyPolicyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </div>
  );
};