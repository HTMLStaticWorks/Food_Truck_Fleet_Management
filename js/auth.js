// auth.js - Authentication forms validation & mock login

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Mock login

      window.location.href = 'overview.html';
    });
  }

  if (registerForm) {
    const termsCheck = document.getElementById('terms');

    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Browser validation (required attribute) will handle the checkbox
      // but we add a check here too for safety
      if (termsCheck.checked) {
        window.location.href = 'overview.html';
      }
    });
  }
});

