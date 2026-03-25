# Final Deployment Checklist for dailybasislife.com/tracker

## ✅ Pre-Deployment Complete

- [x] App configured for `/tracker/` path
- [x] Production build successful
- [x] Fonts properly included
- [x] Logo properly included
- [x] All assets optimized
- [x] Error handling implemented
- [x] Input validation added

## 📦 What to Upload

Upload the **entire contents** of the `dist` folder to your server at `public_html/tracker/`

### Files to Upload:
```
dist/
├── .htaccess (copy from project root)
├── index.html
├── logo.png
├── fonts/
│   ├── Erode-Bold.otf
│   ├── Erode-Light.otf
│   ├── Erode-Medium.otf
│   ├── Erode-Regular.otf
│   └── Erode-Semibold.otf
└── assets/
    ├── index-[hash].css
    └── index-[hash].js
```

**IMPORTANT:** Also copy the `.htaccess` file from your project root!

## 🚀 Deployment Steps (15-30 minutes)

### Step 1: Access Your Server
- [ ] Log into your hosting control panel (cPanel, Plesk, etc.)
- [ ] Or connect via FTP/SFTP

### Step 2: Create Directory Structure
- [ ] Navigate to `public_html` (or your web root)
- [ ] Create folder: `tracker`

### Step 3: Upload Files
- [ ] Upload ALL files from `dist/` folder
- [ ] Upload the `.htaccess` file from project root
- [ ] Verify `fonts` folder uploaded
- [ ] Verify `assets` folder uploaded
- [ ] Verify `logo.png` uploaded

### Step 4: Verify File Permissions
- [ ] Files: 644
- [ ] Folders: 755

### Step 5: Test the Deployment
Visit: https://www.dailybasislife.com/tracker

- [ ] App loads (no white screen)
- [ ] Logo displays
- [ ] Fonts load correctly (check if text looks good)
- [ ] No console errors (Press F12, check Console tab)

### Step 6: Test All Features
- [ ] Click "Today" - works
- [ ] Click "Calendar" - works  
- [ ] Click "Settings" - works
- [ ] Enter a cycle date (e.g., 10 days ago)
- [ ] Click "Save Cycle Date"
- [ ] Verify "Today" view shows correct day/phase
- [ ] Verify Calendar shows colored days
- [ ] Refresh page - data persists
- [ ] Test "Go to My Account" button - opens dailybasislife.com
- [ ] Test email link - opens email client

### Step 7: Test on Mobile
- [ ] Open on phone: dailybasislife.com/tracker
- [ ] Test all features
- [ ] Check layout is responsive
- [ ] Can tap all buttons easily

### Step 8: Test Edge Cases
- [ ] Navigate to dailybasislife.com/tracker/calendar
- [ ] Refresh page - should NOT 404
- [ ] Navigate to dailybasislife.com/tracker/settings
- [ ] Refresh page - should NOT 404
- [ ] Test in incognito/private mode

### Step 9: Link from Main Website

Add a link on your main website. Suggested placements:

**Option 1: Main Navigation**
```html
<a href="/tracker/" class="nav-link">Tracker</a>
```

**Option 2: After "Buy Now" or in FAQ**
```html
<a href="/tracker/" class="btn btn-primary">Track Your Supplements</a>
```

**Option 3: In "How do I take DailyBasis?" FAQ**
Add text: "Use our [Supplement Tracker](/tracker/) to easily track your cycle."

### Step 10: Announce Launch
- [ ] Email team
- [ ] Update any internal documentation
- [ ] Consider announcement to customers (optional)

## 📧 FTP Upload Example (if using FileZilla)

1. **Connect:**
   - Host: ftp.dailybasislife.com
   - Username: [your FTP username]
   - Password: [your FTP password]
   - Port: 21

2. **Navigate:**
   - Local: Browse to your `dist` folder
   - Remote: Browse to `/public_html/tracker/`

3. **Upload:**
   - Select all files in `dist`
   - Right-click > Upload
   - Also upload `.htaccess` from project root

## 🐛 Troubleshooting

### Issue: White screen
**Fix:** Check browser console for errors. Verify all files uploaded.

### Issue: 404 on refresh
**Fix:** Check `.htaccess` file is present and correct.

### Issue: Fonts not loading
**Fix:** Verify `fonts` folder uploaded. Check file permissions (644).

### Issue: Logo not showing
**Fix:** Verify `logo.png` is in tracker root. Clear browser cache.

### Issue: Broken layout
**Fix:** Hard refresh (Ctrl+Shift+R). Verify CSS file in assets folder.

## ✅ Post-Deployment Checklist

- [ ] Tested on live URL
- [ ] Tested on mobile
- [ ] No console errors
- [ ] All features work
- [ ] Link added to main website
- [ ] Team notified

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Contact your hosting provider for server help
3. Check browser console (F12) for specific errors

## 🎉 Success!

Once all items are checked off, your tracker is live and ready to use!

**Live URL:** https://www.dailybasislife.com/tracker

---

**Build Info:**
- Built: March 23, 2026
- Build time: ~450ms
- Bundle size: ~65KB (gzipped)
- Configuration: Production-ready with base path `/tracker/`
