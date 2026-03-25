# Production Deployment Guide

## Pre-Deployment Checklist

### 1. Code Quality
- [x] Error boundary implemented
- [x] Input validation added
- [x] LocalStorage error handling improved
- [x] Date validation with user confirmations
- [ ] Run linter: `npm run lint` (if configured)
- [ ] Check for console.log statements (optional cleanup)
- [ ] Review all TODO comments

### 2. Testing
- [ ] Run validation test script in console (`validation-test.js`)
- [ ] Test all edge cases from `EDGE_CASES_TEST.md`
- [ ] Test on mobile device
- [ ] Test in incognito/private mode
- [ ] Test with cleared localStorage
- [ ] Test date input edge cases:
  - Far past date (1 year ago)
  - Future date
  - February 29 on leap year
  - Year boundary (Dec 31 → Jan 1)

### 3. Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Safari iOS (iPhone/iPad)
- [ ] Chrome Android

### 4. Build for Production

```bash
# Build the app
npm run build

# Test the production build locally
npm run preview
```

### 5. Optimize Assets

#### Logo
- [ ] Verify logo displays correctly
- [ ] Consider optimizing logo file size if >100KB
- [ ] Ensure logo has correct alt text

#### Fonts
- [ ] Verify all font files are loading
- [ ] Check fallback fonts work if custom fonts fail
- [ ] Consider font subsetting for smaller file size

### 6. Meta Tags & SEO

Add/verify in `index.html`:

```html
<!-- Basic Meta Tags -->
<meta name="description" content="Track your DailyBasis supplement schedule based on your menstrual cycle. Know which supplement to take each day.">
<meta name="keywords" content="DailyBasis, supplement tracker, menstrual cycle, cycle tracking">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://tracker.dailybasislife.com/">
<meta property="og:title" content="DailyBasis Tracker">
<meta property="og:description" content="Track your DailyBasis supplement schedule based on your menstrual cycle.">
<meta property="og:image" content="/og-image.jpg">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://tracker.dailybasislife.com/">
<meta property="twitter:title" content="DailyBasis Tracker">
<meta property="twitter:description" content="Track your DailyBasis supplement schedule based on your menstrual cycle.">
<meta property="twitter:image" content="/og-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

### 7. Environment Configuration

If you need different configs for production:

Create `.env.production`:
```
VITE_API_URL=https://api.dailybasislife.com
VITE_ENV=production
```

### 8. Deployment Options

#### Option A: Netlify (Recommended - Easy)

1. **Connect GitHub repo:**
   - Go to netlify.com
   - Click "New site from Git"
   - Connect your repository

2. **Build settings:**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Custom domain:**
   - Add custom domain: `tracker.dailybasislife.com`
   - Netlify will handle SSL automatically

4. **Deploy!**

#### Option B: Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Custom domain in Vercel dashboard**

#### Option C: GitHub Pages

1. **Update `vite.config.js`:**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/dailyBasisTracker/', // Your repo name
   })
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   # Use gh-pages package or manual deployment
   ```

#### Option D: Traditional Hosting (cPanel, etc.)

1. **Build:**
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder contents to public_html**

3. **Configure `.htaccess` for SPA routing:**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### 9. Post-Deployment Verification

After deployment, verify:

- [ ] Home page loads correctly
- [ ] All routes work (/, /calendar, /settings)
- [ ] Logo displays
- [ ] Fonts load correctly
- [ ] Can save and load cycle data
- [ ] Calendar displays current month correctly
- [ ] External links work (DailyBasis website)
- [ ] Mobile responsive
- [ ] HTTPS is enabled
- [ ] No console errors

### 10. Performance Check

Use Lighthouse (in Chrome DevTools):
- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] SEO score > 90

Fix any major issues found.

### 11. Analytics (Optional)

Add Google Analytics or similar:

```html
<!-- In index.html, before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 12. Error Monitoring (Optional but Recommended)

Consider adding:
- Sentry for error tracking
- LogRocket for session replay

### 13. Link from DailyBasis Website

Once deployed, add link to DailyBasis website:
```html
<a href="https://tracker.dailybasislife.com">Track Your Supplements</a>
```

---

## Quick Deploy Commands

### Build
```bash
npm run build
```

### Preview locally
```bash
npm run preview
```

### Deploy to Netlify (with CLI)
```bash
netlify deploy --prod
```

### Deploy to Vercel
```bash
vercel --prod
```

---

## Rollback Plan

If issues arise after deployment:

1. **Immediate:** If using Netlify/Vercel, rollback to previous deployment in dashboard
2. **Fix:** Address issues locally, re-test
3. **Re-deploy:** Deploy fixed version

---

## Support & Maintenance

### User Support
- Monitor for user feedback
- Have email support ready (hello@dailybasis.com)

### Regular Maintenance
- Update dependencies quarterly
- Test with new browser versions
- Monitor for security vulnerabilities

---

## Known Limitations to Communicate

When launching, be clear about:
1. **Manual Updates Required:** Users must update cycle start date each month
2. **Local Storage Only:** Data not synced across devices
3. **28-Day Cycle:** App assumes standard 28-day cycle
4. **No Notifications:** No reminders to take supplements

---

## Success Metrics to Track

- Number of users setting cycle dates
- Daily active users
- Retention rate (users returning)
- Error rates
- Page load times
- Browser compatibility issues

---

## Final Pre-Launch Checklist

- [ ] All tests passed
- [ ] Build successful
- [ ] Deployed to staging/preview URL
- [ ] Tested on staging URL
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Link added to main DailyBasis website
- [ ] Team notified of launch
- [ ] Support channels ready

---

## Launch! 🚀

Once everything above is complete, you're ready to launch!

Monitor closely for the first 24-48 hours for any unexpected issues.
