# JoBizz Agency — Site Web Officiel

Site web vitrine de l'agence **JoBizz Agency** — création de sites web professionnels pour TPE, artisans et PME.

## 🚀 Déploiement sur GitHub Pages

1. Crée un dépôt GitHub public : `jobizz-agency`
2. Upload tous les fichiers en respectant la structure ci-dessous
3. **Settings → Pages → Source** : branche `main` → dossier `/ (root)` → **Save**
4. Site en ligne sur : `https://TON-USERNAME.github.io/jobizz-agency/`

## ✏️ Modifications rapides

| Ce que tu veux changer       | Fichier à ouvrir                 |
|------------------------------|----------------------------------|
| Couleurs du site             | `assets/css/main.css` → `:root`  |
| Textes et contenu            | `index.html`                     |
| Prix des formules            | `index.html` → section `#pricing`|
| Email de contact             | `assets/js/contact.js` → `EMAIL` |
| Lien WhatsApp                | `index.html` → `.whatsapp-btn`   |
| Vitesse du carrousel         | `assets/js/testimonials.js`      |
| Ajouter un projet portfolio  | `index.html` → section `#portfolio` |
| Ajouter une question FAQ     | `index.html` → section `#faq`   |
| Animations                   | `assets/css/animations.css`      |
| Nombre de particules Hero    | `assets/js/particles.js` → `COUNT` |

## 📁 Structure des fichiers

```
jobizz-agency/
├── index.html                    ← Page principale
├── 404.html                      ← Page 404 stylisée
├── README.md                     ← Ce fichier
└── assets/
    ├── css/
    │   ├── main.css              ← Variables, reset, utilitaires
    │   ├── navbar.css            ← Barre de navigation
    │   ├── hero.css              ← Section Hero
    │   ├── stats.css             ← Bande chiffres clés
    │   ├── portfolio.css         ← Grille portfolio + mockups CSS
    │   ├── pricing.css           ← Cartes tarifs
    │   ├── why.css               ← Section différenciants
    │   ├── testimonials.css      ← Carrousel témoignages
    │   ├── faq.css               ← Accordion FAQ
    │   ├── contact.css           ← Formulaire contact
    │   ├── footer.css            ← Pied de page
    │   └── animations.css        ← Keyframes et transitions
    └── js/
        ├── main.js               ← Curseur, navbar, reveals
        ├── particles.js          ← Particules Hero
        ├── stats.js              ← Compteurs animés
        ├── portfolio.js          ← Hover portfolio mobile
        ├── testimonials.js       ← Carrousel témoignages
        ├── faq.js                ← Accordion FAQ
        └── contact.js            ← Validation formulaire
```

## 🛠️ Technologies

- **HTML5** sémantique
- **CSS3** (variables, grid, flexbox, backdrop-filter, animations)
- **JavaScript** vanilla (aucun framework)
- **Google Fonts** : Cormorant Garamond + DM Sans
- **Font Awesome** : icônes CDN
- Zero build, zero npm, zero dépendance
