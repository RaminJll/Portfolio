const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.droit');
footerYear.innerHTML = `&copy; ${currentYear} Ramin Jalili. Tous droits réservés.`;