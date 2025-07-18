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
  const [referralCode] = useState('HYPER' + Math.random().toString(36).substr(2, 6).toUpperCase());
  const [showWithdrawalPopup, setShowWithdrawalPopup] = useState(false);
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

  const handleCompleteOffer = (offerId) => {
    const offer = offers.find(o => o.id === offerId);
    if (offer && !offer.locked) {
      setCompletedOffers([...completedOffers, offerId]);
      setUserCoins(userCoins + offer.reward);
    }
  };

  const handleWithdrawal = () => {
    if (withdrawalEmail && withdrawalAmount) {
      const amount = parseFloat(withdrawalAmount);
      const requiredCoins = amount * 100; // Convert dollars to coins
      
      if (requiredCoins <= userCoins && amount >= 1) {
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
                      onClick={() => {
                        if (offer.url !== '#') {
                          window.open(offer.url, '_blank');
                          handleCompleteOffer(offer.id);
                        }
                      }}
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

  const renderWithdrawal = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">Withdrawal Center</h3>
        <p className="text-green-100">Cash out your earnings to PayPal or gift cards</p>
      </div>
      
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
        <p className="text-purple-100">Invite friends and earn $5 for each successful referral</p>
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
              <span>You both get $5 bonus!</span>
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
                <p className="text-2xl font-bold text-white">${userCoins}</p>
                <p className="text-gray-400">Total Earnings</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{completedOffers.length}</p>
                <p className="text-gray-400">Completed Offers</p>
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
                { id: 'withdrawal', label: 'Withdrawal', icon: CreditCard },
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
            {activeTab === 'withdrawal' && renderWithdrawal()}
            {activeTab === 'referral' && renderReferral()}
          </div>
        </div>
      </main>
    </div>
  );
};