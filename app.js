/* CodePass App JavaScript Utilities */

// 1. Theme Management (Light / Dark Mode)
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initModals();
});

function initTheme() {
  const savedTheme = localStorage.getItem('codepass-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('codepass-theme', newTheme);
}

// 2. Modal Management
function initModals() {
  // Close modal when clicking overlay background
  const overlays = document.querySelectorAll('.modal-overlay');
  overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  // Close modals on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const openOverlay = document.querySelector('.modal-overlay.open');
      if (openOverlay) {
        closeModal(openOverlay.id);
      }
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// 3. FAQ Accordion Toggle
function tg(b) {
  const qaCard = b.parentElement;
  const isOpen = qaCard.classList.contains('open');
  
  // Close all other FAQs for accordion effect (optional, let's keep them independent but smooth)
  qaCard.classList.toggle('open');
  
  // Update aria attributes or symbols if necessary
  const pm = b.querySelector('.pm');
  if (pm) {
    pm.textContent = qaCard.classList.contains('open') ? '–' : '+';
  }
}

// 4. Waitlist Sign Up Logic
function joinWaitlist(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type=email]');
  if (!input) return false;
  
  const email = input.value.trim();
  if (!email || !validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  
  // Save to LocalStorage database mock-up
  let waitlist = JSON.parse(localStorage.getItem('codepass_waitlist') || '[]');
  if (!waitlist.includes(email)) {
    waitlist.push(email);
    localStorage.setItem('codepass_waitlist', JSON.stringify(waitlist));
  }
  
  // Clean email inputs across the page
  const allEmailInputs = document.querySelectorAll('input[type=email]');
  allEmailInputs.forEach(i => i.value = "");
  
  // Render Success Modal Content dynamically
  showWaitlistSuccess(email);
  return false;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showWaitlistSuccess(email) {
  // Create or retrieve success modal
  let successModal = document.getElementById('success-modal');
  
  if (!successModal) {
    // Inject success modal if it doesn't exist
    successModal = document.createElement('div');
    successModal.id = 'success-modal';
    successModal.className = 'modal-overlay';
    successModal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close" onclick="closeModal('success-modal')">&times;</button>
        <div class="success-anim">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h2 class="modal-title">You're on the List! 🎉</h2>
          <p style="margin-bottom: 24px; color: var(--muted);">We've saved <strong><span id="registered-email"></span></strong> to our launch list. You will get early-access pricing and updates.</p>
          <div style="background: var(--bg); border: 1px solid var(--line); border-radius: 12px; padding: 20px; margin-bottom: 28px;">
            <h4 style="color: var(--navy); margin-bottom: 6px; font-weight: 700;">Take the 20-Question Diagnostic Quiz Now</h4>
            <p style="font-size: 14px; color: var(--muted); margin-bottom: 16px;">Test your knowledge in ICD-10-CM, CPT, HCPCS, and Modifiers in English & Hindi.</p>
            <a href="app.html" class="btn" style="width: 100%;">Start Free Practice Quiz</a>
          </div>
          <button class="btn btn-ghost" onclick="closeModal('success-modal')" style="width: 100%;">Go Back</button>
        </div>
      </div>
    `;
    document.body.appendChild(successModal);
    initModals();
  }
  
  // Set the email text
  document.getElementById('registered-email').textContent = email;
  openModal('success-modal');
}

// 5. Bulk/Organization inquiry form handler
function handleBulkInquiry(e) {
  e.preventDefault();
  const name = document.getElementById('bulk-name').value.trim();
  const email = document.getElementById('bulk-email').value.trim();
  const org = document.getElementById('bulk-org').value.trim();
  const size = document.getElementById('bulk-size').value;
  const msg = document.getElementById('bulk-msg').value.trim();
  
  if (!name || !email || !org) {
    alert("Please fill in all required fields.");
    return false;
  }
  
  const inquiry = { name, email, org, size, msg, date: new Date().toISOString() };
  let inquiries = JSON.parse(localStorage.getItem('codepass_bulk_inquiries') || '[]');
  inquiries.push(inquiry);
  localStorage.setItem('codepass_bulk_inquiries', JSON.stringify(inquiries));
  
  // Close the bulk modal and show a nice thank you
  closeModal('bulk-modal');
  
  alert(`Thank you, ${name}! Your inquiry for ${org} has been submitted. Zeeshan will contact you at ${email} within 24 hours. 🚀`);
  e.target.reset();
  return false;
}

// 6. Contact Form handler
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const msg = document.getElementById('contact-msg').value.trim();
  
  if (!name || !email || !msg) {
    alert("Please fill in all required fields.");
    return false;
  }
  
  const contact = { name, email, msg, date: new Date().toISOString() };
  let contacts = JSON.parse(localStorage.getItem('codepass_contacts') || '[]');
  contacts.push(contact);
  localStorage.setItem('codepass_contacts', JSON.stringify(contacts));
  
  closeModal('contact-modal');
  alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
  e.target.reset();
  return false;
}
