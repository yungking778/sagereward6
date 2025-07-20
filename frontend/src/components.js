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
            <div className="text-sm text-cyan-400 font-semibold">Last Updated: July 20, 2025</div>
            
            <p>Welcome to RewardSage ("the Site," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website, services, and any related applications or tools (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree with these Terms, you may not use the Services.</p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">1. Acceptance of Terms</h3>
              <p>By using the Services, you confirm that you are at least 18 years old (or the age of majority in your jurisdiction) and have the legal capacity to enter into these Terms. If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">2. Description of Services</h3>
              <p>RewardSage is a mock website designed for <strong>entertainment purposes only</strong>. The Services simulate a rewards or gaming platform where users may engage with virtual content, features, or activities (e.g., earning virtual points or rewards). No real money, currency, or monetary value is involved in any aspect of the Services. All rewards, points, or incentives are purely virtual, non-redeemable, and have no real-world value. The Services are not powered by artificial intelligence and are intended for fictional or demonstrative use only.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">3. User Accounts</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Account Creation</strong>: To access certain features, you may need to create an account. You agree to provide accurate, current, and complete information during registration and to keep your account information updated.</li>
                <li><strong>Account Security</strong>: You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify us immediately at support@rewardsage.com if you suspect unauthorized use of your account.</li>
                <li><strong>Account Termination</strong>: We reserve the right to suspend or terminate your account at our discretion, including for violations of these Terms.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">4. User Responsibilities</h3>
              <div className="space-y-3">
                <p><strong>Acceptable Use</strong>: You agree to use the Services only for lawful purposes, for entertainment only, and in accordance with these Terms. You may not:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Use the Services to engage in illegal, harmful, or offensive activities.</li>
                  <li>Attempt to hack, reverse-engineer, or interfere with the Services.</li>
                  <li>Use the Services to violate the rights of others, including intellectual property rights.</li>
                  <li>Overload or disrupt the Services, including through automated means (e.g., bots or scrapers).</li>
                  <li>Attempt to redeem or convert any virtual rewards or points for real money, goods, or services.</li>
                </ul>
                <p><strong>User Content</strong>: You are responsible for any data, text, or other materials ("User Content") you submit to the Services. You represent that you have the right to provide such User Content and that it does not infringe on any third-party rights.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">5. Intellectual Property</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Ownership</strong>: We own all rights, title, and interest in the Services, including the website design, graphics, text, and other content (except as noted below). All rights not expressly granted are reserved.</li>
                <li><strong>User Content</strong>: You retain ownership of your User Content. By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, process, and display your User Content solely to provide the Services. You may not use the Services or any content generated through them for commercial purposes unless explicitly permitted by us.</li>
                <li><strong>Feedback</strong>: If you provide feedback, suggestions, or ideas about the Services, you grant us a perpetual, irrevocable, royalty-free license to use and incorporate such feedback without compensation.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">6. Subscription and Payment</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Free and Paid Plans</strong>: Some features of the Services may be available for free, while others may require a paid subscription (e.g., SuperRewardSage). Details of subscription plans are available at https://rewardsage.com/pricing. All subscriptions are for entertainment purposes only, and no real money or monetary value is involved in the core functionality of the Services.</li>
                <li><strong>Billing</strong>: If you subscribe to a paid plan, you agree to pay all applicable fees. Subscriptions may renew automatically unless canceled before the renewal date. All payments are non-refundable except as required by law.</li>
                <li><strong>Changes to Pricing</strong>: We may modify subscription fees at any time. Changes will apply to your next billing cycle, and we will notify you in advance.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">7. Entertainment Purposes Only</h3>
              <p>The Services, including any virtual rewards, points, or incentives, are provided strictly for entertainment purposes. No real money, currency, or monetary value is involved in any aspect of the Services. Any virtual rewards or points earned through the Services cannot be redeemed, exchanged, or converted into real money, goods, or services. RewardSage is a mock website and does not facilitate any real-world transactions or activities.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">8. Limitations of Liability</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>No Warranties</strong>: The Services are provided "as is" without warranties of any kind, express or implied, including accuracy, reliability, or fitness for a particular purpose.</li>
                <li><strong>Accuracy of Content</strong>: The content on the Services is for entertainment purposes only and may not be accurate or reliable. You are responsible for verifying any information before relying on it.</li>
                <li><strong>Liability Cap</strong>: To the maximum extent permitted by law, our total liability for any claim arising from the Services will not exceed the amount you paid us in the 12 months preceding the claim. We are not liable for indirect, consequential, or punitive damages.</li>
                <li><strong>Indemnification</strong>: You agree to indemnify and hold us harmless from any claims, losses, or damages arising from your use of the Services or violation of these Terms.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">9. Privacy</h3>
              <p>Your use of the Services is subject to our Privacy Policy, available at https://rewardsage.com/privacy. The Privacy Policy explains how we collect, use, and protect your personal information.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">10. Termination</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>By You</strong>: You may stop using the Services at any time. To cancel a paid subscription, follow the instructions at https://rewardsage.com/support.</li>
                <li><strong>By Us</strong>: We may suspend or terminate your access to the Services for any reason, including violation of these Terms, with or without notice.</li>
                <li><strong>Effect of Termination</strong>: Upon termination, your account and access to the Services will cease, and any data associated with your account may be deleted, except as required by law.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">11. Modifications to Terms</h3>
              <p>We may update these Terms at any time. We will notify you of material changes via email or a notice on the Site. Your continued use of the Services after such changes constitutes acceptance of the updated Terms.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">12. Governing Law and Dispute Resolution</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Governing Law</strong>: These Terms are governed by the laws of Delaware, USA, without regard to conflict of law principles.</li>
                <li><strong>Dispute Resolution</strong>: Any disputes arising from these Terms will be resolved through binding arbitration in Wilmington, Delaware, administered by the American Arbitration Association under its rules. You waive any right to participate in a class action lawsuit or class-wide arbitration.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">13. Miscellaneous</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Entire Agreement</strong>: These Terms, along with the Privacy Policy, constitute the entire agreement between you and us regarding the Services.</li>
                <li><strong>Severability</strong>: If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in effect.</li>
                <li><strong>No Waiver</strong>: Our failure to enforce any right or provision does not constitute a waiver of that right or provision.</li>
                <li><strong>Assignment</strong>: You may not assign these Terms without our prior written consent. We may assign these Terms without restriction.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">14. Contact Us</h3>
              <p>If you have questions about these Terms, please contact us at:<br />
              <strong>Email</strong>: support@rewardsage.com<br />
              <strong>Address</strong>: RewardSage, 123 Mock Lane, Tech City, DE 12345, USA</p>
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
            <div className="text-sm text-cyan-400 font-semibold">Last Updated: July 20, 2025</div>
            
            <p>At RewardSage ("the Site," "we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains our practices regarding the collection, use, and storage of information through our website, services, and any related applications or tools (collectively, the "Services"). RewardSage is a mock website designed for entertainment purposes only, and <strong>no real money or monetary value is involved</strong>.</p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">1. No Collection or Storage of User Data</h3>
              <p>RewardSage does not collect, store, or process any personally identifiable information (PII) or other user data, such as names, email addresses, IP addresses, or browsing activity. The Services are designed to function without requiring or retaining any user information.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>No Accounts or Logins</strong>: If the Services do not require user accounts or logins, no personal information is collected during use.</li>
                <li><strong>No Cookies or Tracking</strong>: We do not use cookies, web beacons, or other tracking technologies to monitor your activity on the Site.</li>
                <li><strong>No User Content Storage</strong>: Any content or inputs you provide (e.g., text entered for mock rewards or games) are not stored or retained after your session ends.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">2. Third-Party Services</h3>
              <p>RewardSage does not share user data with third parties because no user data is collected or stored. However, the Site may include links to third-party websites for reference or entertainment purposes. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">3. Data Security</h3>
              <p>Since we do not collect or store any user data, no personal information is at risk of unauthorized access or breach. We use standard security measures, such as HTTPS, to ensure the Site operates securely for your browsing experience.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">4. User Rights</h3>
              <p>As no personal data is collected or stored, there are no user data rights to exercise (e.g., access, modification, or deletion under GDPR, CCPA, or other privacy laws). If you have concerns about your privacy, please contact us for clarification.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">5. Cookies and Tracking Technologies</h3>
              <p>RewardSage does not use cookies, analytics tools, or any tracking technologies. As such, no cookie consent is required, and we are compliant with regulations like the EU Cookie Law and Privacy and Electronic Communications Regulations (PECR).</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">6. Children's Privacy</h3>
              <p>The Services are not intended for users under the age of 13 (or 16 in certain jurisdictions, as required by laws like COPPA or GDPR). Since we do not collect or store any user data, no personal information from children is collected.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">7. International Users</h3>
              <p>RewardSage is a mock website hosted in the United States and governed by U.S. law. As no user data is collected or stored, this Privacy Policy complies with international privacy laws, including GDPR (EU) and CCPA (California), to the extent applicable.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">8. Changes to This Privacy Policy</h3>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated policy on the Site with a new "Last Updated" date. Your continued use of the Services after such changes constitutes acceptance of the updated Privacy Policy.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">9. Contact Us</h3>
              <p>If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:<br />
              <strong>Email</strong>: support@rewardsage.com<br />
              <strong>Address</strong>: RewardSage, 123 Mock Lane, Tech City, DE 12345, USA</p>
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
// Congratulations Modal Component
export const CongratulationsModal = ({ isOpen, onClose, userName }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
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
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
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
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
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