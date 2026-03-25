# Client Information Needed for Deployment

## Essential Information (MUST HAVE to deploy)

### 1. Server Access
**Question:** "How do we access the hosting server for dailybasislife.com?"

**Need one of these:**
- [ ] **cPanel Login**
  - URL: _______________ (e.g., dailybasislife.com/cpanel)
  - Username: _______________
  - Password: _______________

- [ ] **FTP/SFTP Credentials**
  - Host: _______________ (e.g., ftp.dailybasislife.com)
  - Username: _______________
  - Password: _______________
  - Port: _______________ (usually 21 for FTP, 22 for SFTP)

- [ ] **SSH Access**
  - Host: _______________
  - Username: _______________
  - Password or SSH Key: _______________
  - Port: _______________ (usually 22)

**Follow-up:** "Where is the web root directory?" (Usually `public_html`, `www`, or `httpdocs`)

---

### 2. Current Hosting Setup
**Question:** "Who hosts dailybasislife.com and what type of hosting is it?"

- [ ] Hosting provider: _______________ (e.g., GoDaddy, Bluehost, SiteGround, WP Engine, custom)
- [ ] Hosting type: 
  - [ ] Shared hosting with cPanel
  - [ ] WordPress hosting
  - [ ] VPS/Dedicated server
  - [ ] Cloud hosting (AWS, Google Cloud, etc.)
  - [ ] Other: _______________

---

### 3. Server Configuration
**Question:** "What web server is running? (Apache or Nginx?)"

- [ ] **Apache** (most common - uses .htaccess)
- [ ] **Nginx** (requires server config changes)
- [ ] **Don't know** (we can check after getting access)

**Important:** If Nginx, we'll need access to edit the server configuration file.

---

## Important Information (SHOULD HAVE)

### 4. SSL/HTTPS Certificate
**Question:** "Does dailybasislife.com already have an SSL certificate (HTTPS)?"

- [ ] **Yes** - Already have SSL (site is https://)
- [ ] **No** - Need to set up SSL

**If Yes:** The tracker will automatically work with HTTPS ✅

**If No:** Need to install SSL certificate (free with Let's Encrypt)

---

### 5. Domain DNS Access
**Question:** "Do you have access to manage DNS settings for dailybasislife.com?"

- [ ] **Yes** - DNS managed at: _______________ (e.g., Cloudflare, domain registrar)
- [ ] **No** - DNS managed by: _______________ (hosting provider, IT team, etc.)

**Why we need it:** In case we need to verify domain ownership or configure anything.

---

### 6. Current Website Technology
**Question:** "What platform is the main dailybasislife.com website built on?"

- [ ] **WordPress**
- [ ] **Shopify** (has subdomain limitations)
- [ ] **Custom HTML/Static site**
- [ ] **React/Next.js/Modern framework**
- [ ] **Other:** _______________

**Why we need it:** To ensure /tracker/ path doesn't conflict with existing setup.

---

## Optional but Helpful

### 7. Backup Access
**Question:** "Do you have a backup system or staging environment?"

- [ ] **Yes** - Backup system: _______________
- [ ] **No** - We'll create manual backup before deployment

---

### 8. Team Access
**Question:** "Who should have access to manage the tracker after deployment?"

- [ ] Just you: _______________
- [ ] Team members: _______________
- [ ] Full team

---

### 9. Analytics & Monitoring
**Question:** "Do you use Google Analytics or other tracking?"

- [ ] **Yes** - Google Analytics ID: _______________ (GA4 format: G-XXXXXXXXXX)
- [ ] **Yes** - Other service: _______________
- [ ] **No** - Don't need tracking

---

### 10. Support & Maintenance
**Question:** "Who will handle technical support for the tracker?"

- [ ] **Internal team** - Contact: _______________
- [ ] **You/Developer**
- [ ] **Hosting support**

---

## Security & Compliance

### 11. Privacy & Legal
**Question:** "Do you have privacy policy and terms of service?"

- [ ] **Yes** - Located at: _______________
- [ ] **No** - Not needed (tracker doesn't collect data from users)

**Note:** The tracker stores data only in user's browser (localStorage), not on server.

---

### 12. Testing Access
**Question:** "Can we test on a staging environment first, or deploy directly to production?"

- [ ] **Staging first** - Staging URL: _______________
- [ ] **Direct to production** (we'll test locally first)

---

## Pre-Deployment Checklist

Before getting credentials, confirm:

- [ ] **Fonts are licensed** ✅ (You confirmed this)
- [ ] **Logo is licensed** ✅ (You confirmed this)
- [ ] **Client approved the design** 
- [ ] **Client tested the functionality** (they should test at localhost first)
- [ ] **"Go to My Account" button goes to correct page** (currently goes to homepage)
- [ ] **Email address is correct** (currently hello@dailybasis.com)

---

## What Happens After You Get This Info

Once you have items 1-3 (Essential), we can:

1. **Access the server** (15 min)
2. **Create `/tracker/` directory** (5 min)
3. **Upload files** (10 min)
4. **Configure server** (10 min)
5. **Test thoroughly** (15 min)
6. **Go live!** (immediate)

**Total deployment time: 45-60 minutes**

---

## Email Template for Client

Here's a template you can send:

---

**Subject:** Access Needed to Deploy DailyBasis Tracker

Hi [Client Name],

The DailyBasis Supplement Tracker is ready to deploy to dailybasislife.com/tracker! 

To get this live, I need the following information:

**1. Server Access (choose one):**
- cPanel login credentials for dailybasislife.com
- OR FTP/SFTP credentials 
- OR SSH access credentials

**2. Hosting Details:**
- Who hosts your website? (GoDaddy, Bluehost, etc.)
- What web server does it use? (Apache or Nginx - if you're not sure, that's okay)

**3. SSL Certificate:**
- Does your site already have HTTPS? (I can check - dailybasislife.com uses HTTPS ✅)

**Optional but helpful:**
- Do you use Google Analytics? If yes, what's your tracking ID?
- Would you like to test on a staging site first, or go straight to production?

Once I have this information, deployment will take approximately 45-60 minutes.

The tracker will be live at: **https://www.dailybasislife.com/tracker**

Let me know if you have any questions!

Thanks,
[Your Name]

---

## Priority Order

If the client can only provide information gradually, request in this order:

**Priority 1 (Cannot deploy without):**
1. Server access credentials
2. Web root directory location

**Priority 2 (Needed for proper function):**
3. Server type (Apache/Nginx)
4. SSL confirmation

**Priority 3 (Nice to have):**
5. Analytics tracking ID
6. Staging environment access

---

## Red Flags to Watch For

⚠️ **If the client says:**
- "We use Shopify" → /tracker/ subdirectory might not work, may need subdomain
- "We don't have access" → Find out who does (developer, hosting provider)
- "We use WordPress" → Should work fine, but verify /tracker/ isn't reserved
- "We're on shared hosting with restrictions" → May have file upload limits

---

## Next Steps After Getting Info

1. **I receive the credentials from you**
2. **I'll access the server** (or guide you through it)
3. **Deploy the files** (following FINAL_DEPLOYMENT_CHECKLIST.md)
4. **Test together** 
5. **Add link from main website**
6. **Announce to team**

---

**Questions? Let me know and I can provide more specific guidance!**
