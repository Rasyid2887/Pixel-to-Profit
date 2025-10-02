// Tailwind config
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0F172A',
        'accent-orange': '#F97316',
        'bg-light': '#F8FAFC',
        'text-muted': '#94A3B8'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(15, 23, 42, 0.4)',
      }
    }
  }
};

// Init Lucide icons
window.addEventListener('DOMContentLoaded', function() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
});
