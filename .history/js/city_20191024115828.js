function validateAndPrintCity() {
  if (!getDato("ciudad")) {
    seleccionarCiudad();
  } else {
    $(".ciudad").text(localStorage.getItem("ciudad"));
  }
}

function seleccionarCiudad() {
  var tmp = document.createElement('div');
  tmp.innerHTML = getContent();
  swal({
    buttons: false,
    content: tmp,
    className: "miclaseprueba"
  }).then((is_true) => {
    if (is_true) {
    }
  });
}

function getContent() {
  var html = "<img src='imagenes/logopopup.jpg' style='width:200px;'><br><div style='color:white; font-family: sans-serif;'>Selecciona tu ciudad:</div><br>";
  var arregloCiudades = ['Armenia', 'Barranquilla', 'Bogota', 'Bucaramanga', 'Cali', 'Cartagena', 'Cucuta', 'Medellín'];
  html += '<ul class="city-ul">';
  for (var i = 0; i < arregloCiudades.length; i++) {
    html += '<li><a href="#" onclick="saveCity(&#39;' + arregloCiudades[i] + '&#39;);">' + arregloCiudades[i] + '</li>';
  }
  html += '</ul>';
  return html;
}

function saveCity(city) {
  setDato("ciudad", city);
  swal.close();
  $(".ciudad").text(city);
  ////////DESDE AQUÍ --- Código para desplegar los teatros según la ciudad --- ///////////
  var diccionario = {
    "Armenia": ["-Selecciona teatro-", "Unicentro", "Portal del Quindio", "Altavista"],
    "Barranquilla": ["-Selecciona teatro-", "Americano", "Buenavista", "Metrocentro"],
    "Bogota": ["--Selecciona teatro--", "Gran Estación", "Santa fé", "Salitre Plaza"],
    "Bucaramanga": ["-Selecciona teatro-", "Cañaveral", "La florida", "Caracolí"],
    "Cali": ["-Selecciona teatro-", "Jardín Plaza", "Cosmocentro", "Limonar"],
    "Cartagena": ["-Selecciona teatro-", "Caribe Plaza", "Paseo La Castellana", "Plaza Bocagrande"],
    "Cucuta": ["-Selecciona teatro-", "Multicine metro", "Multicine Unicentro", "Ventura Plaza"],
    "Medellin": ["-Selecciona teatro-", "El tesoro", "Los Molinos", "San Diego"],
  }
  var teatros = diccionario[getDato('ciudad')]
  var opc = ""
  console.log(getDato('ciudad'))
  for (i = 0; i < teatros.length; i++) {
    opc = opc + '<option>' + teatros[i] + '</option>';
  }
  var sel = document.getElementById("Seleccionar-Teatros");
  sel.innerHTML = opc;
  //////////HASTA AQUÍ --- Código para desplegar los teatros según la ciudad --- ///////////
}

function getDato(llave) {
  var item = null;
  item = localStorage.getItem(llave);
  return item;
}
function setDato(llave, valor) {
  localStorage.setItem(llave, valor);
}
$("#cambiarCiudad").click(function (e) {
  e.preventDefault(); //-->Hace que la página no cargue nuevamente "#" ver en URL
  seleccionarCiudad();
});