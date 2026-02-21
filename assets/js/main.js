/* ═══════════════════════════════════════
   MAIN.JS — Initialisation globale
   Curseur personnalisé, navbar scroll, 
   IntersectionObserver pour les reveals
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Curseur personnalisé ────────────── */
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');

  if (cursor && cursorRing) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    // Enlarge on hover interactive elements
    document.querySelectorAll('a, button, .btn-primary, .btn-outline, .btn-nav, .project-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorRing.style.width = '50px';
        cursorRing.style.height = '50px';
        cursorRing.style.borderColor = 'var(--gold-light)';
      });
      el.addEventListener('mouseleave', () => {
        cursorRing.style.width = '36px';
        cursorRing.style.height = '36px';
        cursorRing.style.borderColor = 'var(--gold)';
      });
    });
  }

  /* ── Navbar scroll ───────────────────── */
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  /* ── Burger menu ─────────────────────── */
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── IntersectionObserver – reveals ──── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => revealObserver.observe(el));
  }

  /* ── Smooth scroll for anchor links ──── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
