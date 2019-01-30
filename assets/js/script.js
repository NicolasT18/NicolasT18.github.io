//Fonction pour le scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    //afficher ou masquer le topBtn en fonction du scroll
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}
// retourne en haut de la page
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//function for CV PDF click
function cvFunction(){
    alert('Le CV PDF n\'est pas encore disponible');
}
//function for hire click
function hireFunction(){
    alert('Cette option n\'est pas encore disponible');
}
//function for contact click
function contactFunction(){
    alert('Cette option n\'est pas encore disponible');
}