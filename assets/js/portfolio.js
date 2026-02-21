/* ═══════════════════════════════════════
   PORTFOLIO.JS — Interactions portfolio
   Simple : gestion hover overlays (CSS fait le gros)
   Ajouter un projet → HTML uniquement, le JS suit
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');

    // Touch support for mobile
    cards.forEach(card => {
        card.addEventListener('touchstart', () => {
            // Remove active from all others
            cards.forEach(c => {
                if (c !== card) c.classList.remove('hovered');
            });
            card.classList.toggle('hovered');
        }, { passive: true });
    });

    // Add hovered class on touch for overlay visibility
    // On desktop, CSS :hover handles everything
});
