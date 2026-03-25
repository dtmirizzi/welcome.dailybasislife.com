# Deployment Instructions for dailybasislife.com/tracker

## Quick Overview

Your DailyBasis Tracker app is configured to be deployed at:
**https://www.dailybasislife.com/tracker**

## Pre-Deployment Checklist

- [x] Base URL configured (`/tracker/`)
- [x] Fonts licensed for web use
- [x] Logo licensed for web use
- [x] All external links confirmed
- [x] Error handling implemented
- [ ] Build and test locally
- [ ] Upload to server
- [ ] Test on live URL

---

## Step 1: Build the Production App

Run this command in your project directory:

```bash
npm run build
```

This will create a `dist` folder with all the optimized files.

**Expected output:**
```
✓ built in [time]
dist/index.html                   [size]
dist/assets/index-[hash].js      [size]
dist/assets/index-[hash].css     [size]
```

---

## Step 2: Verify the Build Locally

Test the production build before uploading:

```bash
npm run preview
```

Then open: `http://localhost:4173/tracker/`

**Test checklist:**
- [ ] App loads correctly
- [ ] Logo displays
- [ ] Fonts load
- [ ] Navigation works (Today, Calendar, Settings)
- [ ] Can save cycle date
- [ ] Calendar displays correctly
- [ ] External links work

If everything works, proceed to deployment!

---

## Step 3: Prepare Your Server

### Option A: If you have cPanel

1. **Access File Manager**
   - Log into cPanel
   - Open File Manager
   - Navigate to `public_html`

2. **Create tracker directory**
   - Create a new folder called `tracker`
   - Navigate into it

3. **Upload files**
   - Select all files from your `dist` folder
   - Upload to `public_html/tracker/`

### Option B: If you have FTP/SFTP access

1. **Connect via FTP client** (FileZilla, Cyberduck, etc.)
   ```
   Host: ftp.dailybasislife.com (or your server IP)
   Username: [your username]
   Password: [your password]
   Port: 21 (FTP) or 22 (SFTP)
   ```

2. **Navigate to web root**
   - Usually `public_html` or `www` or `httpdocs`

3. **Create tracker folder**
   - Create directory: `tracker`

4. **Upload dist contents**
   - Upload ALL files from `dist/` folder to `tracker/`
   - Make sure to upload the `assets` subfolder too

### Option C: If you have SSH access

```bash
# On your local machine, from project root:
npm run build

# Transfer to server:
scp -r dist/* username@your-server.com:/path/to/public_html/tracker/

# Or use rsync for better control:
rsync -avz --delete dist/ username@your-server.com:/path/to/public_html/tracker/
```

---

## Step 4: Configure Server for SPA Routing

Your React app uses client-side routing. The server needs to redirect all paths to `index.html`.

### For Apache (most common)

Create or edit `.htaccess` file in the `tracker` folder:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /tracker/
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite everything else to index.html
  RewriteRule ^ index.html [L]
</IfModule>

# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Set cache headers for static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/font-woff "access plus 1 year"
  ExpiresByType application/font-woff2 "access plus 1 year"
</IfModule>
```

### For Nginx

Add to your nginx config:

```nginx
location /tracker {
    alias /path/to/public_html/tracker;
    try_files $uri $uri/ /tracker/index.html;
    
    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|otf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Then reload nginx: `sudo nginx -s reload`

---

## Step 5: File Structure After Upload

Your `tracker` folder should look like this:

```
public_html/
└── tracker/
    ├── .htaccess (create this)
    ├── index.html
    ├── vite.svg
    └── assets/
        ├── index-[hash].js
        ├── index-[hash].css
        └── [other asset files]
```

**Important:** Make sure the `assets` folder and all its contents are uploaded!

---

## Step 6: Test on Live URL

1. **Clear your browser cache** (Ctrl+Shift+R or Cmd+Shift+R)

2. **Visit:** https://www.dailybasislife.com/tracker

3. **Test all features:**
   - [ ] App loads (no white screen)
   - [ ] Logo displays correctly
   - [ ] Fonts load correctly (not showing system fonts)
   - [ ] No console errors (F12 > Console tab)
   - [ ] Navigate to /tracker/calendar - URL should stay
   - [ ] Navigate to /tracker/settings - URL should stay
   - [ ] Refresh page while on calendar or settings - should not 404
   - [ ] Enter cycle date and save
   - [ ] Data persists after refresh
   - [ ] "Go to My Account" button opens dailybasislife.com
   - [ ] Email link opens email client

4. **Test on mobile:**
   - Open on your phone
   - Test all features
   - Check layout is responsive

---

## Step 7: Link from Main Website

Add a link to the tracker on your main DailyBasis website.

**Suggested locations:**
1. **In main navigation** (most visible)
2. **After purchase** - "Track your supplements"
3. **In account area** - "Supplement Tracker"
4. **Footer** - "Cycle Tracker"

**Example HTML:**
```html
<a href="/tracker/" class="btn">Track Your Supplements</a>
```

Or with full URL:
```html
<a href="https://www.dailybasislife.com/tracker/" class="btn" target="_blank">
  Supplement Tracker
</a>
```

**Recommended placement on dailybasislife.com:**
Based on your website structure, I recommend adding it:
- In the main navigation (next to "FAQ")
- As a CTA button near "Buy Now" sections
- In the "How do I take DailyBasis?" FAQ section

---

## Troubleshooting

### Issue: White screen / App doesn't load

**Cause:** Base URL mismatch or files in wrong location

**Fix:**
1. Check browser console for errors (F12)
2. Verify all files are in `/tracker/` folder
3. Check `.htaccess` is present and correct
4. Verify `base: '/tracker/'` is in `vite.config.js`

### Issue: 404 when refreshing calendar/settings pages

**Cause:** Server not redirecting to index.html

**Fix:**
1. Verify `.htaccess` file exists in tracker folder
2. Check mod_rewrite is enabled on server
3. Contact hosting support if needed

### Issue: Fonts not loading

**Cause:** Font path issues or CORS

**Fix:**
1. Check browser console for font errors
2. Verify fonts are in `assets` folder
3. Check file permissions (should be 644)

### Issue: Logo not displaying

**Cause:** Image path issue

**Fix:**
1. Verify logo file is in `assets` folder
2. Check browser console for 404 errors
3. Image should be imported in code, not direct path

### Issue: Styles look wrong

**Cause:** CSS not loading

**Fix:**
1. Hard refresh (Ctrl+Shift+R)
2. Check browser console for CSS errors
3. Verify CSS file is in `assets` folder

---

## Performance Optimization (Optional)

### Enable Gzip Compression

If not already enabled, add to `.htaccess`:

```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```

### Set Cache Headers

Already included in `.htaccess` above. This makes the app load faster for returning users.

---

## Security Considerations

1. **HTTPS:** Ensure your site has SSL certificate (should already be active)
2. **CORS:** Not needed - app runs entirely in browser
3. **Data Privacy:** All data stored locally, never sent to server

---

## Monitoring After Launch

### First 24 Hours

1. **Check for errors:**
   - Set up Google Search Console
   - Monitor server error logs
   - Check browser console on different devices

2. **User feedback:**
   - Monitor support email (hello@dailybasis.com)
   - Ask team to test
   - Get feedback from a few trusted customers

### Ongoing

1. **Analytics (optional):**
   - Add Google Analytics to track usage
   - Monitor which features are used most

2. **Updates:**
   - Keep dependencies updated quarterly
   - Monitor for browser compatibility issues

---

## Quick Reference Commands

```bash
# Build for production
npm run build

# Test production build locally
npm run preview

# Build and test in one go
npm run build && npm run preview
```

---

## Need Help?

If you encounter issues:

1. Check browser console (F12) for error messages
2. Verify file structure matches Step 5
3. Test in incognito/private mode
4. Try different browser
5. Contact your hosting support for server configuration

---

## Success Checklist

- [ ] Built successfully with `npm run build`
- [ ] Tested locally with `npm run preview`
- [ ] Uploaded all files from `dist/` to `tracker/`
- [ ] Created `.htaccess` file
- [ ] Tested at www.dailybasislife.com/tracker
- [ ] All features work on live site
- [ ] Tested on mobile
- [ ] No console errors
- [ ] Added link from main website
- [ ] Announced to team/customers

---

## Estimated Time

- Build & test locally: 10 minutes
- Upload to server: 10-15 minutes
- Configure & test: 15-20 minutes
- **Total: ~40 minutes**

---

You're ready to deploy! 🚀

Start with Step 1 and work your way through. Test thoroughly at each step.
