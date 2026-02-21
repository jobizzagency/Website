/* ═══════════════════════════════════════
   PARTICLES.JS — Particules Hero
   Modifier le nombre → const COUNT = 25
   Modifier la taille → Math.random() * 4
   Modifier la vitesse → animation-duration
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('particles');
    if (!container) return;

    const COUNT = 25;

    function createParticles() {
        container.innerHTML = '';
        for (let i = 0; i < COUNT; i++) {
            const p = document.createElement('div');
            p.classList.add('particle');
            const size = Math.random() * 3 + 1;
            p.style.width = size + 'px';
            p.style.height = size + 'px';
            p.style.left = Math.random() * 100 + '%';
            p.style.animationDuration = (Math.random() * 12 + 8) + 's';
            p.style.animationDelay = (Math.random() * 15) + 's';
            p.style.animationName = 'float-particle';
            p.style.animationTimingFunction = 'linear';
            p.style.animationIterationCount = 'infinite';
            container.appendChild(p);
        }
    }

    createParticles();

    // Recreate on resize (debounced)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(createParticles, 300);
    });
});
