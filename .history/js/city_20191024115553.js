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
  var html = "<img src='imagenes/logo.png' style='width:150px;'><div>Selecciona la ciudad:</div><br>";
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
}

function getDato(llave) {
  var item = null;
  item = localStorage.getItem(llave);
  console.log(llave);
  return item;
}

function setDato(llave, valor) {
  localStorage.setItem(llave, valor);
}