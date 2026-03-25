// script.js - Main Client Logic

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-overlay');
  const mobileClose = document.querySelector('.mobile-close');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      overlay.classList.add('active');
    });

    mobileClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
    });
  }

  // Dashboard Mobile Sidebar Toggle
  const dashboardHamburger = document.querySelector('.dashboard-hamburger');
  if (dashboardHamburger) {
    dashboardHamburger.addEventListener('click', () => {
      document.body.classList.toggle('sidebar-active');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
      const sidebar = document.querySelector('.dashboard-sidebar');
      if (document.body.classList.contains('sidebar-active') && 
          sidebar && 
          !sidebar.contains(e.target) && 
          !dashboardHamburger.contains(e.target)) {
        document.body.classList.remove('sidebar-active');
      }
    });
  }

  // Dashboard Access Control
  const isDashboardPage = document.querySelector('.dashboard-layout') !== null;
  const isLoggedIn = localStorage.getItem('user-logged-in') === 'true';

  if (isDashboardPage && !isLoggedIn) {
    window.location.href = 'login.html';
  }

  // Navbar dashboard links handling (prevent access if not logged in)
  const dashboardLinks = document.querySelectorAll('.dashboard-link');
  dashboardLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (!isLoggedIn) {
        e.preventDefault();
        showLoginPrompt();
      }
    });
  });

  // Logout Logic
  const logoutBtn = document.querySelector('.logout-link');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('user-logged-in');
      window.location.href = 'index.html';
    });
  }

  // Login Prompt Modal
  function showLoginPrompt() {
    let modal = document.getElementById('login-prompt-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'login-prompt-modal';
      modal.className = 'modal active';
      modal.innerHTML = `
        <div class="modal-content">
          <h3>Access Restricted</h3>
          <p style="margin: 16px 0;">Please login to access the dashboard</p>
          <a href="/login.html" class="btn btn-primary btn-full" onclick="event.stopPropagation()">Login Now</a>
          <button class="btn btn-outline btn-full" style="margin-top: 12px;" onclick="document.getElementById('login-prompt-modal').classList.remove('active')">Cancel</button>
        </div>
      `;
      modal.querySelector('a').href = 'login.html';
      document.body.appendChild(modal);
    } else {
      modal.classList.add('active');
    }
  }
});
