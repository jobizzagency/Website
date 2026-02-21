/* ═══════════════════════════════════════
   CONTACT.JS — Formulaire de contact
   Utilise FormSubmit.co pour envoyer
   les emails directement depuis le site
═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const success = document.querySelector('.form-success');
    const submitBtn = form ? form.querySelector('.form-submit') : null;

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get values
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const phone = form.querySelector('#phone').value.trim();
        const need = form.querySelector('#need').value;
        const message = form.querySelector('#message').value.trim();

        // Validation
        if (!name) {
            highlightField('#name');
            return;
        }
        if (!email || !isValidEmail(email)) {
            highlightField('#email');
            return;
        }
        if (!message) {
            highlightField('#message');
            return;
        }

        // Disable button during send
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
        }

        try {
            // Send via FormSubmit.co AJAX
            const formData = new FormData(form);

            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Show success
                if (success) {
                    success.classList.add('visible');
                }
                form.reset();

                // Hide success after 6s
                setTimeout(() => {
                    if (success) success.classList.remove('visible');
                }, 6000);
            } else {
                alert('Une erreur est survenue. Veuillez réessayer ou nous contacter par WhatsApp.');
            }
        } catch (error) {
            alert('Erreur de connexion. Veuillez vérifier votre connexion internet ou nous contacter par WhatsApp.');
        } finally {
            // Re-enable button
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer ma demande';
            }
        }
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function highlightField(selector) {
        const field = form.querySelector(selector);
        if (field) {
            field.style.borderColor = '#e74c3c';
            field.focus();
            setTimeout(() => {
                field.style.borderColor = '';
            }, 3000);
        }
    }
});
