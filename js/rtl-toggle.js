// rtl-toggle.js - Handle RTL and Theme toggling

document.addEventListener('DOMContentLoaded', () => {
  // RTL Setup
  const rtlToggles = document.querySelectorAll('.rtl-toggle-btn');
  const html = document.documentElement;
  
  const savedRTL = localStorage.getItem('rtl-mode');
  if (savedRTL === 'true') {
    html.setAttribute('dir', 'rtl');
  } else {
    html.setAttribute('dir', 'ltr'); // Default
  }

  rtlToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isRTL = html.getAttribute('dir') === 'rtl';
      if (isRTL) {
        html.setAttribute('dir', 'ltr');
        localStorage.setItem('rtl-mode', 'false');
      } else {
        html.setAttribute('dir', 'rtl');
        localStorage.setItem('rtl-mode', 'true');
      }
    });
  });

  // Theme Setup
  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('theme-mode');
  
  if (savedTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
  }

  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isDark = html.getAttribute('data-theme') === 'dark';
      if (isDark) {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme-mode', 'light');
      } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme-mode', 'dark');
      }
    });
  });
});
