$(function () {

    //Fuction for scroll
    window.onscroll = function () {
        scrollFunction();
        navFunction()
    };

    function scrollFunction() {
        //show or mhide the topBtn in function to scroll
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("topBtn").style.display = "block";
        } else {
            document.getElementById("topBtn").style.display = "none";
        }
    }
    // return to Top
    $('#topBtn').click(function(){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
    // Get the navbar
    var $navbar = document.getElementById("navbar");
    // Get the offset position of the navbar
    var $sticky = navbar.offsetTop;
    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function navFunction() {
        if (window.pageYOffset >= $sticky) {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                $navbar.classList.add("sticky")
            } else {
                $navbar.classList.remove("sticky");
            }
        } else {
            $navbar.classList.remove("sticky");
        }
    }

    //function for contact click
    $('.contactBtn').click(function () {
        $('.bg-modal').css('display', 'flex');
    });
    $('.bg-modal , .modal-close').click(function(){
        $('.bg-modal').css('display', 'none');
    });

    //function for language click
    $('.english-button').click(function () {
        document.location.href= 'indexEn.html';
    });
    $('.french-button').click(function(){
        document.location.href= 'index.html';
    });
});
var appFR = angular.module('appFR', ['ngRoute']);
var appEN = angular.module('appEN', ['ngRoute']);

appFR.config(function($routeProvider){
    $routeProvider
    .when('/', {templateUrl: 'home.html'})
    .when('/me', {templateUrl: 'me.html'})
    .when('/comp', {templateUrl: 'comp.html'})
    .when('/exp', {templateUrl: 'exp.html'})
    .when('/form', {templateUrl: 'form.html'})
    .otherwise({redirectTo: '/'});
});

appEN.config(function($routeProvider){
    $routeProvider
    .when('/', {templateUrl: 'homeEn.html'})
    .when('/me', {templateUrl: 'meEn.html'})
    .when('/comp', {templateUrl: 'compEn.html'})
    .when('/exp', {templateUrl: 'expEn.html'})
    .when('/form', {templateUrl: 'formEn.html'})
    .otherwise({redirectTo: '/'});
});