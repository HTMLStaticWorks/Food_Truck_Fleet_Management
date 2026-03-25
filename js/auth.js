// auth.js - Authentication forms validation & mock login

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Mock login
      localStorage.setItem('user-logged-in', 'true');
      window.location.href = 'overview.html';
    });
  }

  if (registerForm) {
    const termsCheck = document.getElementById('terms');
    const registerBtn = document.getElementById('register-btn');
    
    termsCheck.addEventListener('change', (e) => {
      registerBtn.disabled = !e.target.checked;
      if(e.target.checked) {
        registerBtn.style.opacity = '1';
        registerBtn.style.cursor = 'pointer';
      } else {
        registerBtn.style.opacity = '0.5';
        registerBtn.style.cursor = 'not-allowed';
      }
    });

    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if(termsCheck.checked) {
        localStorage.setItem('user-logged-in', 'true');
        window.location.href = 'overview.html';
      }
    });

    // initial state
    registerBtn.disabled = !termsCheck.checked;
    registerBtn.style.opacity = termsCheck.checked ? '1' : '0.5';
  }
});

