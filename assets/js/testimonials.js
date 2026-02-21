/* ═══════════════════════════════════════
   TESTIMONIALS.JS — Carrousel témoignages
   Modifier la vitesse → const SLIDE_INTERVAL = 5000
   Ajouter un témoignage → HTML + les dots se génèrent auto
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.testimonials-track');
    const dotsContainer = document.querySelector('.testi-dots');
    const prevBtn = document.querySelector('.testi-prev');
    const nextBtn = document.querySelector('.testi-next');

    if (!track || !dotsContainer) return;

    const cards = track.querySelectorAll('.testimonial-card');
    const total = cards.length;
    let currentIndex = 0;
    let interval;

    const SLIDE_INTERVAL = 5000;

    // Generate dots
    dotsContainer.innerHTML = '';
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('button');
        dot.classList.add('testi-dot');
        dot.setAttribute('aria-label', 'Témoignage ' + (i + 1));
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.testi-dot');

    function goTo(index) {
        if (index < 0) index = total - 1;
        if (index >= total) index = 0;
        currentIndex = index;
        track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';

        dots.forEach((d, i) => {
            d.classList.toggle('active', i === currentIndex);
        });
    }

    // Arrow buttons
    if (prevBtn) prevBtn.addEventListener('click', () => { goTo(currentIndex - 1); resetAutoSlide(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goTo(currentIndex + 1); resetAutoSlide(); });

    // Auto-slide
    function startAutoSlide() {
        interval = setInterval(() => goTo(currentIndex + 1), SLIDE_INTERVAL);
    }

    function resetAutoSlide() {
        clearInterval(interval);
        startAutoSlide();
    }

    startAutoSlide();

    // Pause on hover
    const wrapper = track.closest('.testimonials-wrapper');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', () => clearInterval(interval));
        wrapper.addEventListener('mouseleave', startAutoSlide);
    }
});
