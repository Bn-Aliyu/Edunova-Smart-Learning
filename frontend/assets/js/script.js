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
  const regex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.\]?[(]?[0-9]{1,4}[)]?[-\s.\]?[0-9]{1,9}$/;
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

/**
 * PASSWORD VISIBILITY TOGGLE
 */

const initPasswordToggle = () => {
  const eyeIcons = document.querySelectorAll('.fa-eye, .fa-eye-slash');
  
  eyeIcons.forEach(icon => {
    if (!icon.dataset.initialized) {
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
      icon.dataset.initialized = true;
    }
  });
};

/**
 * INIT ALL UTILITIES
 */

document.addEventListener('DOMContentLoaded', () => {
  initPasswordToggle();
});