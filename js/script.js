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

  // Logout Logic
  const logoutBtn = document.querySelector('.logout-link');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();

      window.location.href = 'index.html';
    });
  }
});
