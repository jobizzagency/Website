/* ═══════════════════════════════════════
   STATS.JS — Compteurs animés
   Modifier les valeurs → data-target dans index.html
   Modifier la durée → const DURATION = 2000
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;

    const DURATION = 2000;
    let hasAnimated = false;

    function easeOut(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function animateCounters() {
        const nums = statsSection.querySelectorAll('.stat-num');
        nums.forEach(num => {
            const target = parseInt(num.getAttribute('data-target'));
            const suffix = num.getAttribute('data-suffix') || '';
            const prefix = num.getAttribute('data-prefix') || '';

            if (isNaN(target)) {
                // For non-numeric stats like ∞
                num.textContent = prefix + suffix;
                return;
            }

            const start = performance.now();

            function update(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / DURATION, 1);
                const easedProgress = easeOut(progress);
                const current = Math.round(target * easedProgress);
                num.textContent = prefix + current + suffix;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    num.textContent = prefix + target + suffix;
                }
            }

            requestAnimationFrame(update);
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
});
