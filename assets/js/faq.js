/* ═══════════════════════════════════════
   FAQ.JS — Accordion questions/réponses
   Ajouter une question → HTML uniquement
   Le JS détecte automatiquement les .faq-item
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
        const question = item.querySelector('.faq-q');
        const answer = item.querySelector('.faq-a');

        if (!question || !answer) return;

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Close all others
            items.forEach(other => {
                if (other !== item) {
                    other.classList.remove('open');
                    const otherA = other.querySelector('.faq-a');
                    const otherQ = other.querySelector('.faq-q');
                    if (otherA) otherA.style.maxHeight = '0';
                    if (otherQ) otherQ.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle current
            if (isOpen) {
                item.classList.remove('open');
                answer.style.maxHeight = '0';
                question.setAttribute('aria-expanded', 'false');
            } else {
                item.classList.add('open');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
});
