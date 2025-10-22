// Plug Into Wealth - Main JavaScript

// Google Analytics Initialization
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX'); // REPLACE WITH YOUR GA4 ID

// Track page views
function trackPageView(pageName) {
  gtag('event', 'page_view', {
    page_title: pageName,
    page_location: window.location.href,
    page_path: window.location.pathname
  });
}

// Track newsletter signups
function trackNewsletterSignup(email) {
  gtag('event', 'newsletter_signup', {
    method: 'website_form',
    value: 1
  });
}

// Track guide clicks
function trackGuideClick(guideName) {
  gtag('event', 'guide_click', {
    guide_name: guideName,
    event_category: 'engagement'
  });
}

// Newsletter Form Handler
document.addEventListener('DOMContentLoaded', function() {
  const newsletterForm = document.getElementById('newsletter-form');
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const emailInput = document.getElementById('newsletter-email');
      const messageDiv = document.getElementById('newsletter-message');
      const submitBtn = newsletterForm.querySelector('button[type="submit"]');
      
      const email = emailInput.value.trim();
      
      // Basic email validation
      if (!isValidEmail(email)) {
        showMessage(messageDiv, 'Please enter a valid email address.', 'error');
        return;
      }
      
      // Disable submit button
      submitBtn.disabled = true;
      submitBtn.textContent = 'Subscribing...';
      
      try {
        // TODO: Replace with your actual newsletter API endpoint
        // Example: Mailchimp, ConvertKit, etc.
        
        // Simulated API call - REPLACE WITH REAL IMPLEMENTATION
        await simulateNewsletterSignup(email);
        
        // Track signup
        trackNewsletterSignup(email);
        
        // Show success message
        showMessage(messageDiv, 'Success! Check your email to confirm your subscription.', 'success');
        emailInput.value = '';
        
      } catch (error) {
        showMessage(messageDiv, 'Oops! Something went wrong. Please try again.', 'error');
      } finally {
        // Re-enable button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Subscribe';
      }
    });
  }
  
  // Add click tracking to guide links
  const guideLinks = document.querySelectorAll('.guide-card a, .blog-card a');
  guideLinks.forEach(link => {
    link.addEventListener('click', function() {
      const guideName = this.closest('.guide-card, .blog-card')?.querySelector('h4')?.textContent || 'Unknown';
      trackGuideClick(guideName);
    });
  });
});

// Helper Functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showMessage(element, message, type) {
  element.textContent = message;
  element.className = type;
  element.style.display = 'block';
  
  // Hide message after 5 seconds
  setTimeout(() => {
    element.style.display = 'none';
  }, 5000);
}

// Simulated newsletter signup - REPLACE WITH REAL API
async function simulateNewsletterSignup(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate 90% success rate
      if (Math.random() > 0.1) {
        // TODO: Send to your email service provider
        console.log('Newsletter signup:', email);
        resolve({ success: true });
      } else {
        reject(new Error('Signup failed'));
      }
    }, 1000);
  });
}

// Google AdSense Integration
// Add this function to initialize AdSense ads after page load
function initializeAds() {
  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    console.error('AdSense error:', e);
  }
}

// Call after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAds);
} else {
  initializeAds();
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
