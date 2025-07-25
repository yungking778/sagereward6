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
  UserPlus,
  FileText,
  Shield,
  Coins
} from 'lucide-react';
import { motion } from 'framer-motion';

// Terms of Service Modal Component
export const TermsOfServiceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900 rounded-2xl p-8 max-w-4xl w-full h-[90vh] border border-gray-700 relative overflow-hidden"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(90vh-140px)] pr-4">
          <div className="text-gray-300 leading-relaxed space-y-6">
            <div className="text-sm text-cyan-400 font-semibold">Last Updated: January 15, 2025</div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">1. Introduction</h3>
              <p>Welcome to Rewardsage ("the Site"), a mock website designed for entertainment and promotional purposes only. By accessing or using this Site, you agree to these Terms and Conditions ("Terms"). If you do not agree, please do not use the Site.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">2. Purpose of the Site</h3>
              <p>Rewardsage is a mock platform created to simulate the experience of real-money platforms for entertainment purposes. It does not offer real money, rewards, or services. Any points, rewards, or incentives mentioned are fictional and cannot be redeemed.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">3. Referral Links</h3>
              <p>This Site contains referral links to third-party platforms. If you click these links and take actions on the third-party site (e.g., signing up or making a purchase), we may earn rewards or commissions. These links are provided for promotional purposes only, and we are not affiliated with or endorsed by the third-party platforms.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">4. User Responsibilities</h3>
              <p>You agree to use the Site for lawful purposes only. You may not:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Use automated tools (e.g., bots) to interact with the Site or referral links.</li>
                <li>Attempt to manipulate the referral system (e.g., creating multiple accounts).</li>
                <li>Engage in any activity that could harm the Site or its users.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">5. Intellectual Property</h3>
              <p>All content on this Site, including text, graphics, and logos, is the property of Rewardsage or used with permission. You may not copy, distribute, or use any content without prior written consent.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">6. Disclaimer of Liability</h3>
              <p>Rewardsage is provided "as is" for entertainment purposes only. We make no warranties or representations about the accuracy or functionality of the Site. We are not liable for any damages, losses, or disputes arising from your use of the Site or any third-party platforms linked through referral links.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">7. Third-Party Platforms</h3>
              <p>We are not responsible for the actions, services, or policies of third-party platforms linked from this Site. Your use of these platforms is at your own risk and subject to their terms and conditions.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">8. Changes to These Terms</h3>
              <p>We may update these Terms from time to time. Your continued use of the Site constitutes acceptance of the updated Terms.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">9. Governing Law</h3>
              <p>These Terms are governed by the laws of United States of America. Any disputes will be resolved in the courts of United States of America.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">10. Contact Us</h3>
              <p>If you have questions about these Terms, please contact us at <strong>rewardsage@support.com</strong>.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// Privacy Policy Modal Component
export const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900 rounded-2xl p-8 max-w-4xl w-full h-[90vh] border border-gray-700 relative overflow-hidden"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(90vh-140px)] pr-4">
          <div className="text-gray-300 leading-relaxed space-y-6">
            <div className="text-sm text-cyan-400 font-semibold">Last Updated: January 15, 2025</div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">1. Introduction</h3>
              <p>At Rewardsage, we respect your privacy. This Privacy Policy explains how we handle information on this mock website, which is designed for entertainment and promotional purposes only.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">2. Information We Do Not Collect</h3>
              <p>Rewardsage does not collect, store, or process any personal information from users. We do not use forms, cookies, or analytics tools that track your activity or gather data.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">3. Third-Party Links</h3>
              <p>This Site contains referral links to third-party platforms. If you click these links, you will be directed to external sites with their own privacy policies. We are not responsible for their data practices, and we encourage you to review their policies.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">4. Changes to This Policy</h3>
              <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of the Site constitutes acceptance of the updated policy.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">5. Contact Us</h3>
              <p>If you have questions about this Privacy Policy, please contact us at <strong>rewardsage@support.com</strong>.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
// Disclaimer Modal Component
export const DisclaimerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl w-full border border-white/20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #16a34a 100%)"
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">!</span>
            </div>
            <h2 className="text-2xl font-bold text-white">Disclaimer</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-96 pr-4">
          <div className="text-white leading-relaxed space-y-4">
            <p>Rewardsage is a mock website created solely for entertainment and promotional purposes. It is not a real-money platform, and no actual transactions occur on this site. Any points, rewards, or incentives mentioned are fictional and intended for entertainment only.</p>
            
            <p>This site includes referral links to third-party platforms, such as [Third-Party Platform Name]. If you click these links and take actions on the third-party site (e.g., signing up or making a purchase), we may earn rewards or commissions. These referral links are for promotional purposes, and we are not affiliated with or endorsed by the third-party platforms.</p>
            
            <p>We are not responsible for any issues, losses, or disputes arising from your use of the third-party platforms. Your interactions with these platforms are governed by their own terms and policies.</p>
            
            <p>By using Rewardsage, you acknowledge that it is a mock site for entertainment purposes only and that no real transactions or services are provided here.</p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-white text-purple-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            I Understand
          </button>
        </div>
      </motion.div>
    </div>
  );
};
export const CongratulationsModal = ({ isOpen, onClose, userName }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #16a34a 100%)"
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full border border-white/20 relative overflow-hidden"
      >
        {/* Confetti Animation Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0%',
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            />
          ))}
        </div>

        <div className="text-center relative z-10">
          {/* Animated Coin Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.6 }}
            className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 1 
              }}
            >
              <Coins className="w-10 h-10 text-purple-700" />
            </motion.div>
          </motion.div>

          {/* Congratulations Text */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-white mb-4"
          >
            🎉 Congratulations!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-white/90 mb-2"
          >
            Welcome to RewardSage, {userName}!
          </motion.p>

          {/* Bonus Announcement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0, type: "spring" }}
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 mb-6"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatDelay: 0.5 
              }}
              className="flex items-center justify-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <p className="text-2xl font-bold text-yellow-300">500 COINS</p>
                <p className="text-sm opacity-90">Sign-up Bonus Added!</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Success Message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-white/80 text-sm mb-6"
          >
            Your account has been created and your bonus has been credited. Start exploring offers to earn more!
          </motion.p>

          {/* Continue Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
            className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg"
          >
            Start Earning! 🚀
          </motion.button>
        </div>

        {/* Floating Coins Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`coin-${i}`}
              className="absolute w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${10 + (i % 2 * 80)}%`,
              }}
              animate={{
                y: [-10, -30, -10],
                x: [0, Math.sin(i) * 20, 0],
                rotate: [0, 360],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                delay: 1.5 + (i * 0.2),
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <span className="text-xs text-purple-700 font-bold">$</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export const SignUpModal = ({ isOpen, onClose, onSignUp }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password) {
      onSignUp(formData);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #16a34a 100%)"
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md w-full border border-white/20 relative overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                  <path fill="currentColor" d="M12 2L8 8h8l-4-6zm0 20l4-6H8l4 6zm-6-8l-4-6v12l4-6zm12 0l4-6v12l-4-6z"/>
                </svg>
              </div>
              <div className="text-white">
                <p className="font-bold text-xl">RewardSage</p>
                <p className="text-sm opacity-90">Join & Earn</p>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Create Account</h2>
          </div>

          <div className="mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <Gift className="w-5 h-5 text-purple-700" />
                </div>
                <div className="text-white">
                  <p className="font-bold">Welcome Bonus!</p>
                  <p className="text-yellow-300 font-bold">Get 500 coins instantly</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-white/60" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 focus:border-white/40 focus:outline-none placeholder-white/60"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-white/60" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 focus:border-white/40 focus:outline-none placeholder-white/60"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 focus:border-white/40 focus:outline-none placeholder-white/60"
                placeholder="Create a password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-purple-700 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center transform hover:scale-105"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Create Account & Get 500 Coins
            </button>
          </form>

          <p className="text-xs text-white/80 text-center mt-4">
            By signing up, you agree to our{' '}
            <button
              onClick={() => setShowTerms(true)}
              className="text-yellow-300 hover:text-yellow-200 underline transition-colors"
            >
              Terms of Service
            </button>
            {' '}and{' '}
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-yellow-300 hover:text-yellow-200 underline transition-colors"
            >
              Privacy Policy
            </button>
          </p>
        </motion.div>
      </div>
      <TermsOfServiceModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyPolicyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </>
  );
};

// Header Component
export const Header = ({ onSignUp, referralCode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpOpen(true);
  };

  const handleSignUp = (userData) => {
    // Include referral code in sign-up data
    const signUpData = { ...userData, referralCode };
    onSignUp(signUpData);
    setIsSignUpOpen(false);
  };

  return (
    <>
      <header className="w-full fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 px-6 py-3">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
                      <path fill="currentColor" d="M12 2L8 8h8l-4-6zm0 20l4-6H8l4 6zm-6-8l-4-6v12l4-6zm12 0l4-6v12l-4-6z"/>
                    </svg>
                  </div>
                  <div className="text-white">
                    <p className="font-bold text-lg">RewardSage</p>
                    <p className="text-sm opacity-90 hidden sm:block">Play & Earn</p>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-8">
                <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">Discover</a>
                <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">Rewards</a>
                <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">Leaderboard</a>
              </nav>

              {/* Desktop Auth Buttons */}
              <div className="hidden md:flex items-center space-x-4">
                <button className="text-white/90 hover:text-white transition-colors font-medium">Log in</button>
                <button 
                  onClick={handleSignUpClick}
                  className="bg-white text-purple-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all font-bold"
                >
                  Sign up
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white/90 hover:text-white"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-white/20">
                <div className="space-y-2">
                  <a href="#" className="block px-3 py-2 text-white/90 hover:text-white font-medium">Discover</a>
                  <a href="#" className="block px-3 py-2 text-white/90 hover:text-white font-medium">Rewards</a>
                  <a href="#" className="block px-3 py-2 text-white/90 hover:text-white font-medium">Leaderboard</a>
                  <div className="border-t border-white/20 pt-2 mt-2">
                    <button className="block w-full text-left px-3 py-2 text-white/90 hover:text-white font-medium">Log in</button>
                    <button 
                      onClick={handleSignUpClick}
                      className="block w-full bg-white text-purple-700 px-3 py-2 rounded-lg mt-2 hover:bg-gray-100 transition-all font-bold"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <SignUpModal 
        isOpen={isSignUpOpen} 
        onClose={() => setIsSignUpOpen(false)} 
        onSignUp={handleSignUp}
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
      <section 
        className="pt-20 pb-16 relative overflow-hidden min-h-screen"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #16a34a 100%)"
        }}
      >
        {/* PayPal Notification Boxes */}
        <div className="absolute top-24 left-4 right-4 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between space-x-2">
              {/* PayPal Notification 1 */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2 border border-white/30"
              >
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">PP</span>
                </div>
                <div className="text-white">
                  <p className="font-bold text-xs">PayPal</p>
                  <p className="text-xs opacity-90">7 mins</p>
                </div>
                <div className="text-white font-bold text-sm">$25</div>
              </motion.div>

              {/* PayPal Notification 2 */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2 border border-white/30"
              >
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">PP</span>
                </div>
                <div className="text-white">
                  <p className="font-bold text-xs">PayPal</p>
                  <p className="text-xs opacity-90">12 mins</p>
                </div>
                <div className="text-white font-bold text-sm">$15</div>
              </motion.div>

              {/* PayPal Notification 3 */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2 border border-white/30"
              >
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">PP</span>
                </div>
                <div className="text-white">
                  <p className="font-bold text-xs">PayPal</p>
                  <p className="text-xs opacity-90">18 mins</p>
                </div>
                <div className="text-white font-bold text-sm">$8</div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* RewardSage Logo Badge */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 z-10">
          {/* Removed RewardSage badge as requested */}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="text-center">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              MAKE MONEY BY<br />
              <span className="text-yellow-300">PLAYING GAMES</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-xl text-white/90 mb-8 max-w-4xl mx-auto"
            >
              Play, Win, Redeem: Transform Fun into Cash and Awesome Gift Cards with RewardSage
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-8"
            >
              <button 
                onClick={handleSignUpClick}
                className="bg-white text-purple-700 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center mx-auto shadow-lg"
              >
                Continue to Sign Up
              </button>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">500K+</div>
                <div className="text-white/80">Happy Users</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">2500</div>
                <div className="text-white/80">Offers Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">$200</div>
                <div className="text-white/80">Max Per Offer</div>
              </div>
            </motion.div>

            {/* Game Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="flex justify-center space-x-4 flex-wrap gap-4"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20 flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                  <Gift className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <div className="font-bold">Game Rewards</div>
                  <div className="text-sm opacity-80">$25.00</div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20 flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <div className="font-bold">Quick Tasks</div>
                  <div className="text-sm opacity-80">$15.00</div>
                </div>
              </div>

              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/20 flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-white">
                  <div className="font-bold">Referrals</div>
                  <div className="text-sm opacity-80">$50.00</div>
                </div>
              </div>
            </motion.div>
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
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How RewardSage Works
          </h2>
          <p className="text-xl text-white/90">
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
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all group hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-purple-700">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
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
  const [showDisclaimer, setShowDisclaimer] = useState(false);

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
    <>
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose RewardSage?
            </h2>
            <p className="text-xl text-white/90">
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
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all group hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowDisclaimer(true)}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <span className="text-lg font-bold">⚠️</span>
              <span>DISCLAIMER</span>
            </button>
          </motion.div>
        </div>
      </section>

      <DisclaimerModal isOpen={showDisclaimer} onClose={() => setShowDisclaimer(false)} />
    </>
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
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-white/90">
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
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-yellow-300 font-semibold">Earned {testimonial.earned}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                    ))}
                  </div>
                </div>
                <p className="text-white/80 italic">"{testimonial.text}"</p>
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
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)"
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join RewardSage today and get your 500 coin welcome bonus!
            </p>
            
            <div className="flex items-center justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                    <Gift className="w-5 h-5 text-purple-700" />
                  </div>
                  <div className="text-white">
                    <div className="font-bold text-lg">Welcome Bonus</div>
                    <div className="text-yellow-300 font-bold">500 Coins</div>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              onClick={handleSignUpClick}
              className="bg-white text-purple-700 px-12 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center mx-auto shadow-lg"
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
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <footer 
        className="py-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white">
                  <path fill="currentColor" d="M12 2L8 8h8l-4-6zm0 20l4-6H8l4 6zm-6-8l-4-6v12l4-6zm12 0l4-6v12l-4-6z"/>
                </svg>
              </div>
              <div className="text-white">
                <p className="font-bold text-lg">RewardSage</p>
                <p className="text-sm opacity-90">Play & Earn</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setShowPrivacy(true)}
                className="text-white/90 hover:text-white transition-colors font-medium"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setShowTerms(true)}
                className="text-white/90 hover:text-white transition-colors font-medium"
              >
                Terms of Service
              </button>
              <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-white/80">© 2025 RewardSage. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <TermsOfServiceModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
      <PrivacyPolicyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </>
  );
};