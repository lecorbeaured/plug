# QUICK SETUP CHECKLIST

## 🚨 CRITICAL - Replace These IMMEDIATELY

### Google Analytics
Find and replace in ALL .html files:
- `G-XXXXXXXXXX` → Your actual GA4 Measurement ID

**Files to update:**
- index.html
- blog.html
- blog/build-credit-from-zero.html
- legal/privacy-policy.html
- legal/terms-of-service.html
- legal/disclaimer.html
- legal/cookie-policy.html

### Google AdSense
Find and replace in ALL .html files with ads:
- `ca-pub-XXXXXXXXXXXXXXXX` → Your actual AdSense Publisher ID
- `data-ad-slot="1234567890"` → Your actual ad slot IDs

**Files with ads:**
- index.html (2 ad units)
- blog.html (1 ad unit)
- blog/build-credit-from-zero.html (1 ad unit)

### Email Addresses
Replace placeholder emails in legal pages:
- privacy@plugintowealth.com
- legal@plugintowealth.com

**Files:**
- legal/privacy-policy.html
- legal/terms-of-service.html
- legal/disclaimer.html
- legal/cookie-policy.html

### Legal Placeholders
In legal/terms-of-service.html:
- `[YOUR JURISDICTION]` → Your state/country
- `[ARBITRATION ORGANIZATION]` → Specific arbitration service

## 📋 Pre-Launch Checklist

### Technical Setup
- [ ] Install on web hosting
- [ ] Setup custom domain
- [ ] Enable HTTPS/SSL
- [ ] Test all pages load correctly
- [ ] Test forms work
- [ ] Test on mobile
- [ ] Test in Chrome, Firefox, Safari

### Content
- [ ] Write 10-15 quality articles
- [ ] Create About page
- [ ] Create Contact page
- [ ] Proofread everything
- [ ] Add images (optional but recommended)

### Analytics & Monetization
- [ ] Setup Google Analytics 4
- [ ] Verify Analytics is tracking
- [ ] Apply for Google AdSense
- [ ] Wait for AdSense approval
- [ ] Setup newsletter service (Mailchimp/ConvertKit)
- [ ] Test newsletter signup

### Legal Compliance
- [ ] Review all legal pages with attorney
- [ ] Update jurisdiction information
- [ ] Add contact information
- [ ] Add cookie consent banner (if EU traffic)
- [ ] Register business entity
- [ ] Consider E&O insurance

### SEO
- [ ] Submit to Google Search Console
- [ ] Create XML sitemap
- [ ] Optimize meta descriptions
- [ ] Setup social media profiles
- [ ] Create internal linking strategy

## 📧 Newsletter Integration

Choose ONE and implement in js/main.js:

### Option 1: Mailchimp
```javascript
// Get API endpoint from Mailchimp
const MAILCHIMP_ENDPOINT = 'https://YOUR-SERVER.usX.list-manage.com/subscribe/post-json';
const MAILCHIMP_USER = 'YOUR_USER_ID';
const MAILCHIMP_ID = 'YOUR_LIST_ID';
```

### Option 2: ConvertKit
```javascript
const CONVERTKIT_FORM_ID = 'YOUR_FORM_ID';
const CONVERTKIT_API_KEY = 'YOUR_API_KEY';
```

### Option 3: Custom Backend
Create serverless function on Netlify/Vercel/AWS Lambda

## 🔍 Testing Commands

After setup, verify:

1. **Analytics tracking:**
   - Visit site
   - Check GA4 Real-Time report
   - Should see 1 active user

2. **AdSense:**
   - View page source
   - Search for your ca-pub-ID
   - Should appear 2-3 times

3. **Newsletter form:**
   - Try subscribing with test email
   - Check for success/error message
   - Verify email received

4. **Links:**
   - Click every navigation link
   - Click every footer link
   - No 404 errors

5. **Mobile:**
   - Use Chrome DevTools mobile view
   - Test on actual phone
   - Check responsive design

## ⚠️ Common Issues

**Newsletter not working?**
- Check browser console for errors
- Verify API credentials
- Test API endpoint separately

**AdSense not showing?**
- May take 24-48 hours after approval
- Check for errors in browser console
- Verify ad code is correct

**Analytics not tracking?**
- Check measurement ID is correct
- Verify gtag.js loaded (view source)
- Wait 24 hours for data to appear

## 🎯 Next Steps After Launch

Week 1:
- Monitor analytics daily
- Fix any reported issues
- Share on social media

Week 2-4:
- Publish 2-3 new articles
- Start building email list
- Engage with readers

Month 2-3:
- Apply for affiliate programs
- Guest post on other sites
- Optimize top-performing content

Month 4+:
- Scale content production
- Consider paid advertising
- Explore additional revenue streams

## 📞 Need Help?

**Technical Issues:**
- Check browser console (F12)
- Review code comments
- Search Stack Overflow

**Google Products:**
- Google Analytics Help Center
- AdSense Help Center
- Search Console Help

**Legal Questions:**
- Consult qualified attorney
- DO NOT rely on templates alone

**Content Strategy:**
- Study top finance blogs
- Use Ahrefs/SEMrush for keywords
- Join finance blogging communities

---

**Remember:** This is YOUR business. Take time to understand each component. Don't rush the launch. Quality content + legal compliance = long-term success.
