$(document).ready(function () {
  validateAndPrintCity();
});

var overlay = document.getElementById('overlay');
var popup = document.getElementById('popup');
var btnCerrarPopup = document.getElementById('btn-cerrar-popup');


function cerrarPopup() {
  document.getElementById('overlay').style.display = "none";
}