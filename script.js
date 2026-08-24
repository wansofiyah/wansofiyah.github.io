// Scroll-reveal: fade/slide elements in as they enter the viewport.
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => io.observe(el));
});
