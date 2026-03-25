# Pre-Deployment Questions

Before deploying, please answer these questions:

## 1. Domain & Hosting

**Q: What will be the URL for this app?**
- [ ] Subdomain of dailybasislife.com (e.g., tracker.dailybasislife.com)
- [ ] Separate domain
- [ ] Path on main domain (e.g., dailybasislife.com/tracker)

**Current assumption:** tracker.dailybasislife.com

**Q: Which hosting platform do you prefer?**
- [ ] Netlify (recommended - free, easy, auto HTTPS)
- [ ] Vercel (similar to Netlify)
- [ ] Your existing hosting (cPanel, AWS, etc.)
- [ ] Other: _______________

## 2. Branding & Assets

**Q: Logo filename**
- Current: `LogoBurgandy.png`
- ⚠️ There's a typo - should this be `LogoBurgundy.png`?
- [ ] Keep as is
- [ ] Rename file

**Q: Logo display**
- [ ] Logo only (no text)
- [ ] Logo + "DailyBasis" text (currently not implemented)
- [ ] Text only

**Current implementation:** Logo only

**Q: Favicon**
- [ ] Need to create favicon from logo
- [ ] Already have favicon
- [ ] Use logo as favicon

## 3. Fonts

**Q: Erode font files in OTF folder**
- Are these properly licensed for web use?
- [ ] Yes, licensed
- [ ] Need to verify
- [ ] Fall back to Google Fonts if unsure

**Current status:** OTF files referenced but might need web font formats (WOFF/WOFF2) for better compatibility

**Q: Font loading**
- [ ] Keep custom Erode fonts
- [ ] Fall back to Google Fonts (Cormorant Garamond + DM Sans)
- [ ] Mix (Erode for display, Google Fonts for body)

## 4. External Links

**Q: "Go to My Account" button**
- Current URL: https://www.dailybasislife.com
- Should this go to:
  - [ ] Homepage (current)
  - [ ] Specific account/login page
  - [ ] Shop page
  - [ ] Other: _______________

**Q: Email link**
- Current: hello@dailybasis.com
- [ ] Correct
- [ ] Change to: _______________

## 5. Analytics & Tracking

**Q: Do you want to track user behavior?**
- [ ] Yes - need Google Analytics ID
- [ ] Yes - use different service: _______________
- [ ] No tracking needed

**GA ID (if yes):** _______________

## 6. Error Monitoring

**Q: Do you want error reporting?**
- [ ] Yes - set up Sentry (recommended)
- [ ] Yes - different service: _______________
- [ ] No, just console errors

## 7. SEO & Social Sharing

**Q: App description for search engines:**
Current: "Track your DailyBasis supplement schedule based on your menstrual cycle."

- [ ] Keep as is
- [ ] Change to: _______________

**Q: Do you have a social sharing image?**
- [ ] Yes, located at: _______________
- [ ] No, need to create one (1200x630px recommended)
- [ ] Not needed

## 8. Browser Support

**Q: Which browsers must work?**
- [ ] Modern browsers only (Chrome, Safari, Firefox, Edge - last 2 versions)
- [ ] Include IE11 (requires additional polyfills)
- [ ] Specific requirements: _______________

## 9. Mobile App

**Q: Do you want this to be installable as a mobile app (PWA)?**
- [ ] Yes - add PWA manifest
- [ ] No, web only is fine
- [ ] Maybe later

## 10. Data & Privacy

**Q: Privacy policy needed?**
- [ ] Yes - already have one at: _______________
- [ ] Yes - need to create
- [ ] No (since no data collection beyond localStorage)

**Q: Terms of service?**
- [ ] Yes - link: _______________
- [ ] No

## 11. Testing Access

**Q: Before public launch, should we:**
- [ ] Deploy to staging URL first for testing
- [ ] Password-protect initial deployment
- [ ] Go straight to public
- [ ] Share with beta testers first

**Q: Who should test before public launch?**
- [ ] You only
- [ ] Team members
- [ ] Select customers
- [ ] List: _______________

## 12. Launch Timeline

**Q: When do you need this live?**
- [ ] Today (ASAP)
- [ ] Specific date: _______________
- [ ] When ready (no rush)

**Q: Announcement plan:**
- [ ] Email blast
- [ ] Social media
- [ ] Website banner
- [ ] Other: _______________

## 13. Support

**Q: How will users get help?**
- [ ] Email only (hello@dailybasis.com)
- [ ] Add live chat
- [ ] FAQ page needed
- [ ] Help documentation needed

## 14. Updates & Maintenance

**Q: Who will maintain this app?**
- [ ] You
- [ ] Your team
- [ ] Developer handoff needed
- [ ] Other: _______________

**Q: GitHub repository:**
- [ ] Private repo (current)
- [ ] Make public
- [ ] Transfer ownership to: _______________

## 15. Budget & Monitoring

**Q: Hosting budget:**
- Netlify/Vercel free tier: $0/month (plenty for this app)
- [ ] Free tier is fine
- [ ] Willing to pay for pro features

**Q: Domain DNS:**
- [ ] I have access to DNS settings
- [ ] Need help with DNS setup
- [ ] Domain managed by: _______________

---

## Immediate Actions Required

### Before I can deploy:

1. **Answer domain questions** (#1)
2. **Confirm hosting platform** (#1)
3. **Verify font licensing** (#3)
4. **Confirm external link URLs** (#4)

### Nice to have:

5. Analytics setup (#5)
6. Social sharing image (#7)
7. PWA configuration (#9)

---

## My Recommendations

Based on your "need to deploy today" requirement:

1. **Hosting:** Use Netlify - fastest, free, auto-HTTPS
2. **Domain:** Set up tracker.dailybasislife.com
3. **Fonts:** If any licensing concerns, fall back to Google Fonts temporarily
4. **Testing:** Deploy to Netlify preview URL first, test, then set custom domain
5. **Analytics:** Can add later, not critical for launch
6. **PWA:** Can add later, not critical for launch

---

## Questions?

Let me know your answers to the critical questions (especially #1-4) and I can help with deployment immediately!
