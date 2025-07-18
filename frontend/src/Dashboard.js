import React, { useState } from 'react';
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
  Trophy
} from 'lucide-react';
import { motion } from 'framer-motion';

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
  const [selectedCashoutOption, setSelectedCashoutOption] = useState(null);
  const [paypalEmail, setPaypalEmail] = useState('');
  const [confirmPaypalEmail, setConfirmPaypalEmail] = useState('');
  const [withdrawalEmail, setWithdrawalEmail] = useState('');
  const [withdrawalAmount, setWithdrawalAmount] = useState('');

  // Conversion rate: 100 points = $1
  const coinsToDollars = (coins) => (coins / 100).toFixed(2);

  const offers = [
    {
      id: 1,
      title: "Hopper - Hotel Booking",
      description: "Sign up for Hopper and get 10% off hotels",
      reward: 1500, // 1500 coins = $15
      currency: "coins",
      type: "signup",
      difficulty: "Easy",
      time: "2 min",
      locked: false,
      url: "https://social.hopper.com/en/social/friend-invitation?referral_code=brysonh1mjs&referrer_name=Bryson&reward_items=HOTEL%3A10%25+off+%3AHotels&reward_total=10%25+off+hotels",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Temu - Shopping App",
      description: "Sign up for Temu and start shopping with great deals",
      reward: 1000, // 1000 coins = $10
      currency: "coins",
      type: "signup",
      difficulty: "Easy",
      time: "3 min",
      locked: false,
      url: "https://temu.to/m/ujo1d8ihpv3",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Shopify - Start Your Store",
      description: "Create a Shopify store and complete the tutorial",
      reward: 2500, // 2500 coins = $25
      currency: "coins",
      type: "signup",
      difficulty: "Medium",
      time: "10 min",
      locked: true,
      url: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Coinbase - Crypto Signup",
      description: "Sign up for Coinbase and verify your account",
      reward: 3000, // 3000 coins = $30
      currency: "coins",
      type: "signup",
      difficulty: "Medium",
      time: "15 min",
      locked: true,
      url: "#",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Uber Eats - Food Delivery",
      description: "Order food through Uber Eats (minimum $15)",
      reward: 2000, // 2000 coins = $20
      currency: "coins",
      type: "purchase",
      difficulty: "Easy",
      time: "5 min",
      locked: true,
      url: "#",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Netflix - Stream Movies",
      description: "Sign up for Netflix free trial",
      reward: 1200, // 1200 coins = $12
      currency: "coins",
      type: "trial",
      difficulty: "Easy",
      time: "3 min",
      locked: true,
      url: "#",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 7,
      title: "Spotify - Music Streaming",
      description: "Sign up for Spotify Premium trial",
      reward: 1000, // 1000 coins = $10
      currency: "coins",
      type: "trial",
      difficulty: "Easy",
      time: "2 min",
      locked: true,
      url: "#",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=center"
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
      }
      
      // Open the URL in new tab
      window.open(offer.url, '_blank');
    }
  };

  const handleCompleteOffer = (offerId) => {
    const offer = offers.find(o => o.id === offerId);
    if (offer && startedOffers.find(s => s.id === offerId)) {
      // Only credit if they actually started the offer
      if (!completedOffers.includes(offerId)) {
        setCompletedOffers([...completedOffers, offerId]);
        setUserCoins(userCoins + offer.reward);
        
        // Update started offer status
        setStartedOffers(startedOffers.map(s => 
          s.id === offerId ? { ...s, status: 'completed' } : s
        ));
      }
    }
  };

  const handleWithdrawal = () => {
    if (withdrawalEmail && withdrawalAmount) {
      const amount = parseFloat(withdrawalAmount);
      const requiredCoins = amount * 100; // Convert dollars to coins
      
      if (requiredCoins <= userCoins && amount >= 1) {
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
        
        setShowWithdrawalPopup(true);
        setWithdrawalEmail('');
        setWithdrawalAmount('');
      } else {
        alert('Insufficient coins or invalid amount. Minimum withdrawal is $1.');
      }
    } else {
      alert('Please fill in both email and amount.');
    }
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    alert('Referral code copied to clipboard!');
  };

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
          <button
            onClick={() => setShowWithdrawalPopup(false)}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Got it!
          </button>
        </div>
      </motion.div>
    </div>
  );

  const renderOffers = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Available Offers</h3>
        <p className="text-orange-100">Complete offers to earn coins and cash rewards</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-gray-800 rounded-xl p-6 border ${
              offer.locked ? 'border-gray-700' : 'border-orange-500'
            } relative overflow-hidden`}
          >
            {offer.locked && (
              <div className="absolute inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-10">
                <div className="text-center">
                  <Lock className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-400 font-semibold">Locked</p>
                  <p className="text-xs text-gray-500 mt-1">Complete more offers to unlock</p>
                </div>
              </div>
            )}
            
            <div className="flex items-start space-x-4">
              <img 
                src={offer.image} 
                alt={offer.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-bold text-white mb-1">{offer.title}</h4>
                <p className="text-sm text-gray-400 mb-3">{offer.description}</p>
                
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {offer.time}
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {offer.difficulty}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-orange-400">
                    {offer.reward} coins (${coinsToDollars(offer.reward)})
                  </div>
                  {!offer.locked && (
                    <button
                      onClick={() => handleStartOffer(offer.id)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center"
                    >
                      Start
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
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
                <div className="flex items-start space-x-4">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1">{offer.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{offer.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>Started: {new Date(offer.startedAt).toLocaleDateString()}</span>
                      <span>Reward: {offer.reward} coins (${coinsToDollars(offer.reward)})</span>
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
                  {offer.status === 'started' && (
                    <button
                      onClick={() => handleCompleteOffer(offer.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Mark Complete
                    </button>
                  )}
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
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Withdrawal Center</h3>
        <p className="text-green-100">Cash out your earnings to PayPal or gift cards</p>
      </div>
      
      {/* Pending Withdrawals */}
      {pendingWithdrawals.length > 0 && (
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
                  <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-medium">
                    Pending
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl p-6">
          <h4 className="text-xl font-bold text-white mb-4">PayPal Withdrawal</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">PayPal Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={withdrawalEmail}
                onChange={(e) => setWithdrawalEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Amount ($)</label>
              <input
                type="number"
                placeholder="Minimum $1"
                min="1"
                max={parseFloat(coinsToDollars(userCoins))}
                value={withdrawalAmount}
                onChange={(e) => setWithdrawalAmount(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none"
              />
              <p className="text-xs text-gray-400 mt-1">
                Available: ${coinsToDollars(userCoins)} ({userCoins} coins)
              </p>
            </div>
            <button 
              onClick={handleWithdrawal}
              disabled={userCoins < 100} // Minimum 100 coins = $1
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Withdraw to PayPal
            </button>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6">
          <h4 className="text-xl font-bold text-white mb-4">Gift Cards</h4>
          <div className="space-y-3">
            {[
              { name: "Amazon", min: 5, image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=50&h=50&fit=crop&crop=center" },
              { name: "Apple", min: 10, image: "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?w=50&h=50&fit=crop&crop=center" },
              { name: "Google Play", min: 5, image: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=50&h=50&fit=crop&crop=center" },
              { name: "Steam", min: 10, image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=50&h=50&fit=crop&crop=center" }
            ].map((card, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img src={card.image} alt={card.name} className="w-10 h-10 rounded" />
                  <div>
                    <p className="text-white font-medium">{card.name}</p>
                    <p className="text-xs text-gray-400">Min: ${card.min} ({card.min * 100} coins)</p>
                  </div>
                </div>
                <button 
                  disabled={userCoins < card.min * 100}
                  className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 text-white px-3 py-1 rounded text-sm font-medium transition-colors"
                >
                  Redeem
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderReferral = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Referral Program</h3>
        <p className="text-purple-100">Invite friends and earn $5 (500 coins) once they sign up and complete an offer</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl p-6">
          <h4 className="text-xl font-bold text-white mb-4">Your Referral Code</h4>
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-orange-400">{referralCode}</span>
              <button
                onClick={copyReferralCode}
                className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-colors"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Friend signs up with your code</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Friend completes their first offer</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>You get $5 (500 coins) bonus!</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6">
          <h4 className="text-xl font-bold text-white mb-4">Referral Stats</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Total Referrals</span>
              <span className="text-2xl font-bold text-white">0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Pending</span>
              <span className="text-2xl font-bold text-yellow-400">0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Earnings</span>
              <span className="text-2xl font-bold text-green-400">$0</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-700 rounded-lg">
            <p className="text-sm text-gray-300 text-center">
              Share your referral code with friends to start earning!
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCashout = () => {
    const cashoutOptions = [
      {
        amount: 1,
        coins: 100,
        bonus: 0,
        status: userCoins >= 100 ? 'available' : 'locked',
        progress: Math.min((userCoins / 100) * 100, 100)
      },
      {
        amount: 5,
        coins: 500,
        bonus: 1,
        status: userCoins >= 500 ? 'available' : userCoins >= 400 ? 'almost' : 'locked',
        progress: Math.min((userCoins / 500) * 100, 100)
      },
      {
        amount: 10,
        coins: 1000,
        bonus: 5,
        status: userCoins >= 1000 ? 'available' : userCoins >= 800 ? 'almost' : 'locked',
        progress: Math.min((userCoins / 1000) * 100, 100)
      },
      {
        amount: 20,
        coins: 2000,
        bonus: 10,
        status: userCoins >= 2000 ? 'available' : userCoins >= 1600 ? 'almost' : 'locked',
        progress: Math.min((userCoins / 2000) * 100, 100)
      },
      {
        amount: 50,
        coins: 5000,
        bonus: 25,
        status: userCoins >= 5000 ? 'available' : userCoins >= 4000 ? 'almost' : 'locked',
        progress: Math.min((userCoins / 5000) * 100, 100),
        bestDeal: true
      }
    ];

    const handleCashout = (option) => {
      if (option.status === 'available') {
        const withdrawal = {
          id: Date.now(),
          email: 'paypal@example.com',
          amount: option.amount,
          coins: option.coins,
          date: new Date().toISOString(),
          status: 'pending'
        };
        setUserCoins(userCoins - option.coins);
        setPendingWithdrawals([...pendingWithdrawals, withdrawal]);
        setShowWithdrawalPopup(true);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-8">
            <h1 className="text-3xl font-bold text-white mb-2">Cash Out</h1>
            <p className="text-purple-200">Choose your PayPal reward</p>
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
                  option.status === 'almost' ? 'border-yellow-400' : 'border-gray-500'
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
                    {option.status === 'available' ? 'Ready to Cash Out!' : 
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
                        option.status === 'almost' ? 'bg-yellow-400' : 'bg-gray-500'
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
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl px-4 py-3 text-center">
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
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full px-6 py-2 flex items-center">
                  <Trophy className="w-5 h-5 text-white mr-2" />
                  <span className="text-white font-bold">Best Deal</span>
                </div>
              </div>

              <div 
                className={`bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 border-4 ${
                  cashoutOptions.find(option => option.bestDeal).status === 'available' ? 
                  'border-yellow-400 cursor-pointer hover:scale-105' : 'border-gray-500'
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
                        'bg-yellow-400' : 'bg-gray-500'
                      }`}
                      style={{ width: `${cashoutOptions.find(option => option.bestDeal).progress}%` }}
                    />
                  </div>
                </div>

                {/* Amount */}
                <div className="flex items-center justify-center space-x-3">
                  <div className="bg-purple-700 rounded-xl px-8 py-4 text-center">
                    <span className="text-white font-bold text-3xl">$50</span>
                  </div>
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl px-6 py-4 text-center">
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-900 bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">HyperReward</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-gray-800 rounded-lg px-4 py-2">
                <Coins className="w-5 h-5 text-orange-400" />
                <span className="text-white font-semibold">{userCoins}</span>
                <span className="text-gray-400 text-sm">coins</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-300">
                <User className="w-5 h-5" />
                <span>Welcome, {user?.name || 'User'}</span>
              </div>
              
              <button
                onClick={onLogout}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">${coinsToDollars(userCoins)}</p>
                <p className="text-gray-400">Total Earnings</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{startedOffers.length}</p>
                <p className="text-gray-400">Started Offers</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">0</p>
                <p className="text-gray-400">Referrals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-gray-800 rounded-xl border border-gray-700">
          <div className="border-b border-gray-700">
            <nav className="flex space-x-0">
              {[
                { id: 'offers', label: 'Offers', icon: Gift },
                { id: 'started', label: 'Started', icon: Clock },
                { id: 'cashout', label: 'Cashout', icon: CreditCard },
                { id: 'withdrawal', label: 'Withdrawal', icon: DollarSign },
                { id: 'referral', label: 'Referral', icon: Users }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium rounded-t-xl transition-colors ${
                    activeTab === tab.id
                      ? 'text-orange-400 bg-gray-900 border-b-2 border-orange-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-6">
            {activeTab === 'offers' && renderOffers()}
            {activeTab === 'started' && renderOffersStarted()}
            {activeTab === 'cashout' && renderCashout()}
            {activeTab === 'withdrawal' && renderWithdrawal()}
            {activeTab === 'referral' && renderReferral()}
          </div>
        </div>
      </main>
      
      {/* Withdrawal Success Popup */}
      {showWithdrawalPopup && <WithdrawalPopup />}
    </div>
  );
};