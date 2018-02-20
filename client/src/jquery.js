import $ from "jquery";

$(document).ready(function(){
    $(".button-collapse").sideNav();
    $(".dropdown-button").dropdown();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.parallax').parallax();
    $('select').material_select();
  });
