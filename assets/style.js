// Sélection des éléments
const sidenav = document.getElementById("mySidenav");
const burger = document.getElementById("burger");
const closeBtn = document.getElementById("closeBtn");
const backToTop = document.getElementById("backToTop");

// Fonction pour ouvrir le menu
function openMenu() {
    sidenav.classList.add("open");
}

// Fonction pour fermer le menu
function closeMenu(event) {
    event.preventDefault(); // Empêche le comportement par défaut (si nécessaire)
    sidenav.classList.remove("open");
}

// Ouvrir le menu en cliquant sur le bouton burger
burger.addEventListener("click", openMenu);

// Fermer le menu en cliquant sur le bouton de fermeture "×"
closeBtn.addEventListener("click", closeMenu);

// Fermer le menu en cliquant en dehors du menu
window.addEventListener("click", function (event) {
    if (!sidenav.contains(event.target) && event.target !== burger) {
        sidenav.classList.remove("open");
    }
});

// Retour en haut de la page (aucune interférence ici)
backToTop.addEventListener("click", function (event) {
    // Aucun event.preventDefault() ici pour permettre le comportement par défaut
    // Le navigateur fait défiler automatiquement la page vers #header
});
