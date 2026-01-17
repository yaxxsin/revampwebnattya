/**
 * QUICK START GUIDE
 * How to edit website content in 5 minutes
 */

// ============================================
// STEP 1: EDIT COMPANY INFORMATION
// ============================================
// Open: js/config.js
// Find the "brand" section and update:

CONFIG.brand = {
  name: "Your Company Name",              // Change this
  logo: "dns",                            // Material Symbols icon name
  tagline: "Your business tagline",       // Update this
  description: "Your description here",   // Update this
};

// ============================================
// STEP 2: UPDATE HERO SECTION (Homepage)
// ============================================
// In js/config.js, find "hero" section:

CONFIG.hero = {
  title: "Your Main Heading Here",
  subtitle: "Your subtitle with value proposition",
  image: "https://your-image-url.jpg",   // Replace with your image
};

// ============================================
// STEP 3: ADD OR EDIT SERVICES
// ============================================
// In js/config.js, find "services" array:

CONFIG.services = [
  {
    icon: "videocam",           // See Material Symbols: fonts.google.com/icons
    title: "Service Name",
    description: "What this service does...",
    link: "#service-details"
  },
  {
    icon: "router",
    title: "Another Service",
    description: "Description here...",
    link: "#service-details"
  },
  // Add more services here...
];

// ============================================
// STEP 4: UPDATE STATISTICS (Homepage Stats)
// ============================================
// In js/config.js, find "stats" array:

CONFIG.stats = [
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "500+", label: "Happy Clients" },
  { value: "50+", label: "Team Members" },
  { value: "15+", label: "Years in Business" },
];

// ============================================
// STEP 5: UPDATE CONTACT INFORMATION
// ============================================
// In js/config.js, find "contact" section:

CONFIG.contact = {
  address: {
    label: "Visit Us",
    text: "Your Address<br>City, State ZIP"
  },
  phone: {
    label: "Call Us",
    number: "+1 (555) 123-4567",
    hours: "Mon-Fri 9am-5pm"
  },
  email: {
    label: "Email Us",
    address: "support@yourcompany.com",
    hours: "We reply within 24 hours"
  },
};

// ============================================
// STEP 6: UPDATE FOOTER LINKS
// ============================================
// In js/config.js, find "footer" section and update links

// ============================================
// COMMON CUSTOMIZATIONS
// ============================================

// CHANGE PRIMARY COLOR:
// 1. Edit index.html (around line 30)
// 2. Find: colors: { "primary": "#135bec", ... }
// 3. Change #135bec to your color (hex code)
// 4. Do this for all .html files

// CHANGE FONTS:
// 1. Edit the <link> tag for Google Fonts
// 2. Go to: fonts.google.com
// 3. Select fonts you want
// 4. Copy the <link> tag into <head>
// 5. Update fontFamily in tailwind config

// CHANGE ANIMATION SPEED:
// 1. Open css/styles.css
// 2. Find :root { ... }
// 3. Change --duration-slow: 500ms; to your preference

// ADD NEW PAGES:
// 1. Copy index.html to new-page.html
// 2. Update navigation links in all files
// 3. Update page title in <title> tag
// 4. Change active nav link (add "text-white" class)

// ============================================
// MATERIAL SYMBOLS ICONS (for services)
// ============================================
// Popular icons to use:
// "videocam" - CCTV/Video
// "router" - Networking
// "cloud_upload" - Cloud Services
// "verified_user" - Security
// "support_agent" - Support/Help
// "settings_ethernet" - Infrastructure
// "security" - Security/Locks
// "storage" - Server/Storage
// "bug_report" - Testing
// "trending_up" - Analytics

// Find more at: fonts.google.com/icons

// ============================================
// FILE LOCATIONS
// ============================================
// js/config.js          ← EDIT THIS FOR CONTENT
// css/styles.css        ← EDIT FOR STYLING/ANIMATIONS
// index.html            ← Update <title> only
// services.html         ← Update <title> only
// about.html            ← Update <title> only
// contact.html          ← Update <title> only

// ============================================
// TESTING YOUR CHANGES
// ============================================
// 1. Edit config.js
// 2. Save file (Ctrl+S)
// 3. Refresh browser (F5 or Ctrl+R)
// 4. Check Console (F12) for errors
// 5. Test on mobile (Ctrl+Shift+M in Chrome)

// ============================================
// COMMON MISTAKES TO AVOID
// ============================================
// ❌ Don't: Edit text directly in HTML
// ✅ Do: Edit in js/config.js

// ❌ Don't: Delete closing quotes or braces
// ✅ Do: Keep syntax valid (check Console for errors)

// ❌ Don't: Use <br> in config (causes issues)
// ✅ Do: Use <br> in HTML if needed

// ❌ Don't: Forget commas between array items
// ✅ Do: Add commas: { ... }, { ... }

// ============================================
// GET HELP
// ============================================
// Syntax Error? → Check browser Console (F12)
// Image not showing? → Check URL is correct
// Styling looks wrong? → Hard refresh (Ctrl+Shift+R)
// Content not updating? → Clear cache and refresh

// ============================================
// ADVANCED TIPS
// ============================================

// TIP 1: Add HTML to service description
CONFIG.services[0].description = "Text with <strong>bold</strong>";

// TIP 2: Use classes for styling in config
CONFIG.hero.title = "Title <span class='text-primary'>Highlighted</span>";

// TIP 3: Add more stats dynamically
CONFIG.stats.push({ value: "10M+", label: "Data Processed" });

// TIP 4: Create custom colors
// Edit css/styles.css and add to :root:
// --my-custom-color: #ff0000;
// Then use: color: var(--my-custom-color);

// ============================================
// LAUNCH CHECKLIST
// ============================================
// Before publishing:
// [ ] Update CONFIG.brand with real company info
// [ ] Add real services (at least 3-4)
// [ ] Add real contact information
// [ ] Add real statistics/metrics
// [ ] Update all images with real photos
// [ ] Test on mobile device
// [ ] Check all links work
// [ ] Test contact form backend
// [ ] Update meta descriptions for SEO
// [ ] Optimize images for web (reduce size)

/**
 * THAT'S IT! Your website is ready to customize.
 * Just edit js/config.js and refresh the page!
 */
