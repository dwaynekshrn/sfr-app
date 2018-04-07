import $ from "jquery";
import Materialize from 'materialize-css/dist/js/materialize.min';

$(document).ready(function(){
    $(".button-collapse").sideNav();
    $(".dropdown-button").dropdown();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.parallax').parallax();
    $('select').material_select();
    $('.slider').slider();
  });
