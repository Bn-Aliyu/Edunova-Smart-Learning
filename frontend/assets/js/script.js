// ============================================
// EDUNOVA - JAVASCRIPT UTILITIES
// DOM, Events, Storage, Validation & API
// ============================================

/**
 * DOM SELECTION SHORTCUTS
 */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const getById = (id) => document.getElementById(id);

/**
 * EVENT LISTENERS
 */

const onClick = (selector, callback) => {
  $(selector)?.addEventListener('click', callback);
};

const onChange = (selector, callback) => {
  $(selector)?.addEventListener('change', callback);
};

const onInput = (selector, callback) => {
  $(selector)?.addEventListener('input', callback);
};

const onSubmit = (selector, callback) => {
  $(selector)?.addEventListener('submit', (e) => {
    e.preventDefault();
    callback(e);
  });
};

/**
 * LOCAL STORAGE HELPERS
 */

const storeData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const removeData = (key) => {
  localStorage.removeItem(key);
};

const clearData = () => {
  localStorage.clear();
};

/**
 * VALIDATION FUNCTIONS
 */

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const isValidPassword = (password) => {
  return password.length >= 8;
};

const isValidPhone = (phone) => {
  const regex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
  return regex.test(phone);
};

const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const validateForm = (formId) => {
  const form = getById(formId);
  if (!form) return false;
  
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('input-error');
      isValid = false;
    } else {
      input.classList.remove('input-error');
    }
  });

  return isValid;
};

/**
 * STRING UTILITIES
 */

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const truncate = (str, length) => {
  return str.length > length ? str.substring(0, length) + '...' : str;
};

const formatString = (str) => {
  return str.trim().replace(/\s+/g, ' ');
};

/**
 * API HELPERS
 */

const fetchAPI = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    showToast('Error: ' + error.message, 'error');
    throw error;
  }
};

const getAPI = async (url) => {
  return fetchAPI(url, { method: 'GET' });
};

const postAPI = async (url, data) => {
  return fetchAPI(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

const putAPI = async (url, data) => {
  return fetchAPI(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

const deleteAPI = async (url) => {
  return fetchAPI(url, { method: 'DELETE' });
};

/**
 * TIME UTILITIES
 */

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

const formatTime = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date));
};

const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [key, value] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / value);
    if (interval >= 1) {
      return `${interval} ${key}${interval > 1 ? 's' : ''} ago`;
    }
  }
  return 'just now';
};

/**
 * ANIMATION UTILITIES
 */

const fadeIn = (element, duration = 300) => {
  element.style.opacity = '0';
  element.style.transition = `opacity ${duration}ms`;
  setTimeout(() => {
    element.style.opacity = '1';
  }, 10);
};

const fadeOut = (element, duration = 300) => {
  element.style.transition = `opacity ${duration}ms`;
  element.style.opacity = '0';
};

const slideUp = (element, duration = 300) => {
  element.style.animation = `slideUp ${duration}ms ease-out`;
};

const slideDown = (element, duration = 300) => {
  element.style.animation = `slideDown ${duration}ms ease-out`;
};

const scrollTo = (element) => {
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/**
 * TOAST NOTIFICATION
 */

const showToast = (message, type = 'info', duration = 3000) => {
  const container = document.querySelector('.toast-container') || createToastContainer();
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">
      ${getToastIcon(type)}
    </span>
    <span class="toast-message">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    fadeOut(toast, 300);
    setTimeout(() => toast.remove(), 300);
  }, duration);
};

const getToastIcon = (type) => {
  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  };
  return icons[type] || icons.info;
};

const createToastContainer = () => {
  const container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
};

/**
 * SCROLL TO TOP BUTTON
 */

const initScrollToTop = () => {
  const btn = document.querySelector('.scroll-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

/**
 * PASSWORD VISIBILITY TOGGLE
 */

const initPasswordToggle = () => {
  const eyeIcons = document.querySelectorAll('.fa-eye, .fa-eye-slash');
  
  eyeIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const input = this.parentElement.querySelector('input[type="password"], input[type="text"]');
      if (input) {
        if (input.type === 'password') {
          input.type = 'text';
          this.classList.remove('fa-eye');
          this.classList.add('fa-eye-slash');
        } else {
          input.type = 'password';
          this.classList.remove('fa-eye-slash');
          this.classList.add('fa-eye');
        }
      }
    });
  });
};

/**
 * FORM VALIDATION ON INPUT
 */

const initFormValidation = () => {
  const inputs = document.querySelectorAll('input, textarea, select');
  
  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (input.hasAttribute('required') && !input.value.trim()) {
        input.classList.add('input-error');
      } else {
        input.classList.remove('input-error');
      }
    });

    input.addEventListener('input', () => {
      if (input.value.trim()) {
        input.classList.remove('input-error');
      }
    });
  });
};

/**
 * INIT ALL UTILITIES
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollToTop();
  initPasswordToggle();
  initFormValidation();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    $,
    $$,
    getById,
    onClick,
    onChange,
    onInput,
    onSubmit,
    storeData,
    getData,
    removeData,
    clearData,
    isValidEmail,
    isValidPassword,
    isValidPhone,
    isValidURL,
    validateForm,
    capitalize,
    truncate,
    formatString,
    fetchAPI,
    getAPI,
    postAPI,
    putAPI,
    deleteAPI,
    formatDate,
    formatTime,
    timeAgo,
    fadeIn,
    fadeOut,
    slideUp,
    slideDown,
    scrollTo,
    showToast,
  };
}
