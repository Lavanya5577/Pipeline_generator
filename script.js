// Year in footer
document.querySelectorAll('#year').forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Button message
const ctaBtn = document.getElementById('ctaBtn');
const ctaMsg = document.getElementById('ctaMsg');
if (ctaBtn && ctaMsg) {
  ctaBtn.addEventListener('click', () => {
    ctaMsg.textContent = 'Thanks! You just triggered a tiny JS interaction 🎉';
  });
}

// Fake contact form handler (no backend!)
const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
if (form && statusEl) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    statusEl.textContent = 'Form submitted (demo only).';
    form.reset();
  });
}
