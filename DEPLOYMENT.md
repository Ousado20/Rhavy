# Rhavy - Premium AI Platform - Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the official Next.js hosting platform and provides the best performance.

#### Steps:

1. **Push to GitHub** (if not already done)
```bash
git add .
git commit -m "Initial Rhavy deployment"
git push origin main
```

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub account
   - Click "New Project"
   - Import your GitHub repository "Rhavy"

3. **Configure**
   - Framework: Next.js (auto-detected)
   - Build command: `npm run build`
   - Output directory: `.next`
   - Install command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site is live! 🎉

5. **Custom Domain** (Optional)
   - Go to Project Settings > Domains
   - Add your domain (e.g., rhavy.com)
   - Follow DNS instructions

#### Auto-deployment:
- Every push to `main` = automatic deployment
- Preview deployments for pull requests

---

### Option 2: Netlify

Alternative deployment with good performance.

1. Visit [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub account
4. Select "Rhavy" repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

---

### Option 3: Docker (Advanced)

For self-hosted or cloud deployment.

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next ./
COPY public ./public

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t rhavy .
docker run -p 3000:3000 rhavy
```

---

### Option 4: Self-Hosted

#### Linux (Ubuntu/Debian):

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and setup
git clone https://github.com/Ousado20/Rhavy.git
cd Rhavy
npm install
npm run build

# Start with PM2 (recommended)
npm i -g pm2
pm2 start "npm start" --name "rhavy"
pm2 startup
pm2 save

# Setup Nginx reverse proxy (optional)
# Point port 80/443 to localhost:3000
```

---

## 📊 Performance Optimization

### Pre-deployment Checklist

- [ ] Build completes without errors: `npm run build`
- [ ] No TypeScript errors: `npm run type-check`
- [ ] ESLint passes: `npm run lint`
- [ ] Sitemap generated: `public/sitemap.xml`
- [ ] Robots.txt configured: `public/robots.txt`
- [ ] Metadata complete: `app/layout.tsx`

### Post-deployment Verification

- [ ] Site loads in browser
- [ ] Mobile responsive (test on phone)
- [ ] All animations smooth (60fps)
- [ ] Links work correctly
- [ ] Images optimize (check DevTools)
- [ ] SEO tags present (inspect HTML)

---

## 🔧 Environment Variables

Create `.env.local` for environment-specific config:

```env
# API endpoints
NEXT_PUBLIC_API_URL=https://api.rhavy.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXXXXX

# Monitoring (optional)
SENTRY_DSN=https://...

# Email service (optional)
SENDGRID_API_KEY=SG.xxx
```

---

## 📈 Monitoring & Analytics

### Google Analytics

1. Create property at [analytics.google.com](https://analytics.google.com)
2. Get measurement ID (G-XXXXX)
3. Add to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXX
```
4. Implement analytics in components

### Sentry (Error Tracking)

1. Create account at [sentry.io](https://sentry.io)
2. Create Next.js project
3. Add DSN to `.env.local`

### Lighthouse Reports (Vercel)

- Automatic performance reports
- View at: your-site.vercel.app/insight

---

## 🔒 Security Headers

Already configured in `next.config.ts`:

- Content Security Policy
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

---

## 🚄 Performance Tips

1. **Vercel Analytics** - Enable in project settings
2. **Image Optimization** - Already configured
3. **Code Splitting** - Automatic with Next.js
4. **Caching** - Configure in `next.config.ts`
5. **CDN** - Vercel provides global CDN

---

## 🆘 Troubleshooting

### Build fails locally

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images not optimizing

- Check `next.config.ts` image settings
- Ensure source images are present
- Use proper image formats (JPG, PNG, WebP)

### Slow performance

- Check Lighthouse report
- Verify bundle size: `npm run build`
- Profile with DevTools

### Deployment fails

- Check error logs in platform
- Ensure all env vars are set
- Verify Node.js version (18+)

---

## 📞 Support

For deployment issues:

1. Check platform-specific docs
2. Review error logs
3. Try local build first
4. Contact platform support

---

**Your Rhavy site is ready for the world! 🌍✨**
