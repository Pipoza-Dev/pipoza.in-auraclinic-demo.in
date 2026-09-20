/**
 * AuraCare Health & Wellness Clinic - Main Interactive Controller
 * Built for Pipiza Dev Studio Showcase Demo
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemes();
  initMobileDrawer();
  initHeaderScroll();
  initDemoModal();
  initNumberCounters();
  initToasts();
  initGlobalFormSimulations();
});

/* --------------------------------------------------------------------------
   1. Theme Management System
   -------------------------------------------------------------------------- */
const THEMES = [
  { id: 'aqua', name: 'Aqua Breeze', color: '#0284c7' },
  { id: 'emerald', name: 'Emerald Healing', color: '#059669' },
  { id: 'rose', name: 'Rose Blush', color: '#e11d48' },
  { id: 'lavender', name: 'Lavender Serenity', color: '#7c3aed' },
  { id: 'amber', name: 'Warm Amber', color: '#d97706' }
];

function initThemes() {
  const savedTheme = localStorage.getItem('auracare_theme') || 'aqua';
  setTheme(savedTheme);

  // Desktop Theme Toggle Dropdown
  const themeBtn = document.getElementById('themeBtn');
  const themeMenu = document.getElementById('themeMenu');

  if (themeBtn && themeMenu) {
    themeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      themeMenu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!themeMenu.contains(e.target) && !themeBtn.contains(e.target)) {
        themeMenu.classList.remove('show');
      }
    });

    // Populate theme menu options
    themeMenu.innerHTML = THEMES.map(theme => `
      <button type="button" class="theme-option ${theme.id === savedTheme ? 'active' : ''}" data-theme="${theme.id}">
        <span class="theme-preview-dot" style="background-color: ${theme.color};"></span>
        <span>${theme.name}</span>
      </button>
    `).join('');

    themeMenu.querySelectorAll('.theme-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-theme');
        setTheme(selected);
        themeMenu.classList.remove('show');
        showToast(`Theme changed to ${btn.textContent.trim()}`, 'info', 'fa-palette');
      });
    });
  }

  // Populate Mobile Drawer Theme Chips if present
  const mobileThemeChips = document.getElementById('mobileThemeChips');
  if (mobileThemeChips) {
    mobileThemeChips.innerHTML = THEMES.map(theme => `
      <button type="button" class="mobile-theme-chip ${theme.id === savedTheme ? 'active' : ''}" data-theme="${theme.id}">
        <span class="theme-preview-dot" style="background-color: ${theme.color};"></span>
        <span>${theme.name.split(' ')[0]}</span>
      </button>
    `).join('');

    mobileThemeChips.querySelectorAll('.mobile-theme-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-theme');
        setTheme(selected);
        showToast(`Theme changed to ${btn.textContent.trim()}`, 'info', 'fa-palette');
      });
    });
  }
}

function setTheme(themeId) {
  document.documentElement.setAttribute('data-theme', themeId);
  localStorage.setItem('auracare_theme', themeId);

  // Update button dots
  const currentDot = document.getElementById('currentThemeDot');
  const themeObj = THEMES.find(t => t.id === themeId) || THEMES[0];
  if (currentDot) {
    currentDot.style.backgroundColor = themeObj.color;
  }

  // Update active state in theme options
  document.querySelectorAll('.theme-option, .mobile-theme-chip').forEach(el => {
    if (el.getAttribute('data-theme') === themeId) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   2. Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('mobileCloseBtn');

  if (!toggleBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Close drawer on internal nav clicks
  drawer.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   3. Header Sticky & Scroll Effect
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   4. Pipiza Dev Demo Modal Controller
   -------------------------------------------------------------------------- */
function initDemoModal() {
  const modalOverlay = document.getElementById('demoModalOverlay');
  const openTriggers = document.querySelectorAll('.trigger-demo-modal');
  const closeBtn = document.getElementById('closeDemoModal');

  if (!modalOverlay) return;

  function openModal() {
    modalOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  openTriggers.forEach(t => t.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('show')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   5. Number Counter Animation
   -------------------------------------------------------------------------- */
function initNumberCounters() {
  const counters = document.querySelectorAll('.counter-val');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseFloat(entry.target.getAttribute('data-target'));
        const isDecimal = entry.target.getAttribute('data-decimal') === 'true';
        animateCounter(entry.target, target, isDecimal);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target, isDecimal = false) {
  let start = 0;
  const duration = 1600;
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = start + (target - start) * easeOut;

    el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      el.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString();
    }
  }

  requestAnimationFrame(updateCount);
}

/* --------------------------------------------------------------------------
   6. Toast Notifications System
   -------------------------------------------------------------------------- */
function initToasts() {
  if (!document.getElementById('toastContainer')) {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
}

function showToast(message, type = 'info', iconClass = 'fa-circle-info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${iconClass}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* --------------------------------------------------------------------------
   7. Global Form Simulations (Newsletter, Quick Contact, etc.)
   -------------------------------------------------------------------------- */
function initGlobalFormSimulations() {
  // Newsletter Form
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput ? emailInput.value : "guest@example.com";
      
      // Redirect to dynamic success page
      window.location.href = `success.html?type=newsletter&email=${encodeURIComponent(email)}`;
    });
  });

  // Quick Search Bar Form (Homepage)
  const quickSearch = document.getElementById('quickSearchForm');
  if (quickSearch) {
    quickSearch.addEventListener('submit', (e) => {
      e.preventDefault();
      const specialty = document.getElementById('quickSpecialty')?.value || '';
      const doctorName = document.getElementById('quickDoctorName')?.value || '';
      
      const queryParams = new URLSearchParams();
      if (specialty) queryParams.set('specialty', specialty);
      if (doctorName) queryParams.set('query', doctorName);
      
      window.location.href = `doctors.html?${queryParams.toString()}`;
    });
  }
}
