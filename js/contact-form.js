/**
 * CONTACT FORM HANDLER
 * Mengirim data contact form ke N8N Webhook dengan state management
 */

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('form');
  
  if (!contactForm) {
    console.warn('[Contact Form] Form element not found');
    return;
  }

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;
  let isSubmitting = false;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) return;
    isSubmitting = true;
    
    // Get form values
    const formData = new FormData(contactForm);
    const data = {
      firstName: formData.get('firstName') || '',
      lastName: formData.get('lastName') || '',
      email: formData.get('email') || '',
      service: formData.get('service') || '',
      message: formData.get('message') || '',
      timestamp: new Date().toISOString(),
      source: 'contact-form'
    };

    // Validate required fields
    if (!data.firstName.trim() || !data.email.trim() || !data.message.trim()) {
      showMessage('Please fill in all required fields', 'error');
      isSubmitting = false;
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      showMessage('Please enter a valid email address', 'error');
      isSubmitting = false;
      return;
    }

    // Show loading state
    setButtonState('loading');
    console.log('[Contact Form] Sending data:', data);

    try {
      console.log('[Contact Form] Fetching webhook...');
      const response = await fetch('https://workflow.srvdevhome.my.id/webhook/1cc154dc-383f-4247-916e-ad6bc2723cec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'omit',
        mode: 'cors'
      });

      console.log('[Contact Form] Response status:', response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('[Contact Form] Response error:', errorText);
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      
      // Show success message with animation
      showMessage('Message sent successfully! We will get back to you soon.', 'success');
      setButtonState('success');
      
      // Reset form after a delay
      setTimeout(() => {
        contactForm.reset();
        setButtonState('default');
        isSubmitting = false;
      }, 2000);
      
      // Log success
      console.log('[Contact Form] Message sent:', result);
      
    } catch (error) {
      console.error('[Contact Form] Error details:', {
        message: error.message,
        type: error.type,
        stack: error.stack
      });
      showMessage('Failed to send message. Please try again or contact us directly.', 'error');
      setButtonState('error');
      isSubmitting = false;
    }
  });

  /**
   * Manage button state dengan visual feedback
   */
  function setButtonState(state) {
    const states = {
      default: {
        disabled: false,
        text: originalButtonText,
        class: 'bg-primary hover:bg-primary/90'
      },
      loading: {
        disabled: true,
        text: '🔄 Sending...',
        class: 'bg-blue-600 cursor-wait opacity-75'
      },
      success: {
        disabled: true,
        text: '✅ Message Sent!',
        class: 'bg-green-600'
      },
      error: {
        disabled: true,
        text: '❌ Try Again',
        class: 'bg-red-600 hover:bg-red-700'
      }
    };

    const stateConfig = states[state] || states.default;
    
    submitButton.disabled = stateConfig.disabled;
    submitButton.textContent = stateConfig.text;
    
    // Update button classes
    submitButton.className = `w-full ${stateConfig.class} text-white font-bold py-3 rounded-lg transition-all`;
    
    // Add animation for success/error
    if (state === 'success' || state === 'error') {
      submitButton.classList.add('animate-pulse');
    } else {
      submitButton.classList.remove('animate-pulse');
    }
  }

  /**
   * Tampilkan pesan feedback ke user dengan icon
   */
  function showMessage(message, type) {
    // Remove existing message if any
    const existingMessage = contactForm.querySelector('[data-message]');
    if (existingMessage) {
      existingMessage.remove();
    }

    // Message icons & colors
    const messageConfig = {
      success: {
        icon: '✅',
        bgClass: 'bg-green-500/10 border border-green-500/30',
        textClass: 'text-green-400',
        title: 'Success'
      },
      error: {
        icon: '⚠️',
        bgClass: 'bg-red-500/10 border border-red-500/30',
        textClass: 'text-red-400',
        title: 'Error'
      }
    };

    const config = messageConfig[type] || messageConfig.error;

    // Create message element dengan icon
    const messageEl = document.createElement('div');
    messageEl.setAttribute('data-message', 'true');
    messageEl.className = `${config.bgClass} ${config.textClass} p-4 rounded-lg mb-6 text-sm font-medium animate-slideInDown flex items-start gap-3`;
    messageEl.innerHTML = `
      <span class="text-lg shrink-0 mt-0.5">${config.icon}</span>
      <div class="flex-1">
        <p class="font-semibold">${config.title}</p>
        <p class="opacity-90 text-xs mt-1">${message}</p>
      </div>
    `;

    // Insert at top of form
    contactForm.insertBefore(messageEl, contactForm.firstChild);

    // Auto-remove success message after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        messageEl.style.animation = 'slideOutUp 300ms ease forwards';
        setTimeout(() => messageEl.remove(), 300);
      }, 5000);
    }
  }
});
