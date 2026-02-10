const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
}));

const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.droit');
footerYear.innerHTML = `&copy; ${currentYear} Ramin Jalili. Tous droits réservés.`;