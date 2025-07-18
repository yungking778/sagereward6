# RewardSage - Netlify Deployment

## Quick Deploy to Netlify

### Option 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - RewardSage"
   git branch -M main
   git remote add origin https://github.com/yourusername/rewardsage.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Build settings will be automatically detected from `netlify.toml`

### Option 2: Direct Deploy

1. **Build the project:**
   ```bash
   cd frontend
   yarn build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `build` folder directly

### Build Settings (Auto-configured)

- **Build command:** `yarn build`
- **Publish directory:** `build`
- **Node version:** 18

### Environment Variables

No environment variables needed for this frontend-only deployment.

### Custom Domain

After deployment, you can:
1. Go to Site settings > Domain management
2. Add your custom domain (e.g., rewardsage.com)
3. Netlify will provide SSL certificates automatically

### Features Included

- ✅ Responsive design
- ✅ React Router with SPA routing
- ✅ Modern UI with Tailwind CSS
- ✅ Framer Motion animations
- ✅ Mobile-friendly interface
- ✅ SEO-friendly structure