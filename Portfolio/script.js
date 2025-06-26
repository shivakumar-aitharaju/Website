// ========== Smooth Scroll + Close Menu ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    // Close menu on mobile after clicking a link
    const navLinks = document.getElementById('nav-links');
    const menuToggle = document.getElementById('menu-toggle');
    navLinks.classList.remove('active');
    menuToggle.classList.remove('open');

    const icon = menuToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

// ========== Hamburger Menu Toggle ==========
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open');

  const icon = menuToggle.querySelector('i');
  if (menuToggle.classList.contains('open')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// ========== Theme Toggle ==========
const themeToggle = document.getElementById('toggle-theme');
const themeIcon = themeToggle.querySelector('i');
const root = document.documentElement;

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  root.setAttribute('data-theme', 'light');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
}

// Toggle theme and save
themeToggle.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  if (currentTheme === 'light') {
    root.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  } else {
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
});

// ========== Scroll Reveal Animation ==========
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Reveal once
    }
  });
}, {
  threshold: 0.2
});

// Apply reveal to all sections
document.querySelectorAll('section, .project-card').forEach((el, i) => {
  el.classList.add('hidden');
  observer.observe(el);
});


