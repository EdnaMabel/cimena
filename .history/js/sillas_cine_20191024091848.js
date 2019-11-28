printTotalTickets();

/**
 * Pinta el valor de los tiquetes en pantalla y guarda el valor en el input.
 */
function printTotalTickets() {
  var total = localStorage.getItem('total');
  if (total !== null) {
    var ticket_value = document.getElementsByClassName('ticket_value')
    document.getElementById('total').value = total
    for (var i = 0; i < ticket_value.length; i++) {
      ticket_value[i].innerHTML = "El total es: " + total
    }
  }
}

/**
 * Pinta el pop-up de la sala de cine.
 */
function paintCinemaChairs() {
  document.getElementsByClassName("swal-modal").style.width = "90% !important;";
  var tmp = document.createElement('div');
  tmp.innerHTML = getCinema();
  swal({
    title: "Selecciona tus sillas",
    content: tmp,
    icon: "success",
    button: "Confirmar"
  }).then((is_true) => {
    if (is_true) {
      swal({
        title: "Sillas seleccionadas",
        text: "Ahora selecciona tu combo",
        icon: "success",
        button: "Comprar",
      }).then((is_true) => {
        var tmp = document.createElement('div');
        tmp.innerHTML = getCombos();
        swal({
          title: "Selecciona tu combo",
          content: tmp,
          icon: "success",
          button: "Comprar",
        })
          .then((is_true) => {

          });
      });
    }
  });
}

function getCombos() {
  var html = '<div class="combos" id="combos">'
  html += '<div class="mega-Combo estilos"  onclick="guardarCombos(17000) ">'
  html += '<div class="imagen"> <img src="imagenes/combos_img/Megacombo.png" alt="mega"></div>'
  html += '<div class="contenido">'
  html += '<h3>Mega Combo</h3>'
  html += '<ul>'
  html += ' <li>Big popcorn</li>'
  html += '<li>2 Gaseosas de 700ml c/u</li>'
  html += '<li>2 hot dogs</li>'
  html += '<li>French fries</li>'
  html += ' <li>Valor: 17.000 pesos</li>'
  html += '</ul>'
  html += '<br>'
  html += '</div>'
  html += '</div>'
  html += '<div class="combomediano estilos" onclick="guardarCombos(14000) ">'
  html += '<img src="imagenes/combos_img/combomediano.png" alt="mediano">'
  html += ' <div class="contenido">'
  html += '<h3>Combo Mediano</h3>'
  html += '<ul>'
  html += ' <li>Popcorn</li>'
  html += '<li>Gaseosa de 700ml </li>'
  html += '<li> Hot dog</li>'
  html += '<li>French fries</li>'
  html += ' <li>Valor: 14.000 pesos</li>'
  html += '</ul>'
  html += '<br>'
  html += '</div>'
  html += '</div>'
  html += '<div class="combosencillo estilos" onclick="guardarCombos(10000) ">'
  html += '<img src="imagenes/combos_img/combosencillo.png" alt="sencillo">'
  html += ' <div class="contenido">'
  html += '<h3>Combo Sencillo</h3>'
  html += '<ul>'
  html += '<li>Popcorn</li>'
  html += '<li>Gaseosa de 700ml</li>'
  html += '<li>Valor:10.000 pesos</li>'
  html += '</ul>'
  html += '<br>'
  html += '</div>'
  html += '</div>'
  html += '<div class="combito estilos" onclick="guardarCombos(7000) ">'
  html += '<img src="imagenes/combos_img/combito.png" alt="combito">'
  html += '<div class="contenido">'
  html += '<h3>Combito</h3>'
  html += '<ul>'
  html += '<li>Popcorn</li>'
  html += ' <li>Gaseosa de 500ml</li>'
  html += '<li>Chocolatina</li>'
  html += '<li>Valor: 7.000 pesos</li>'
  html += '</ul>'
  html += '<br>'
  html += '</div>'
  html += '</div>'
  html += '</div>'
  return html;
}


function guardarCombos(valor) {
  alert(valor)
}
/**
 * Obtiene una tabla html donde tiene el contenido de las sillas, las que están separadas, disponibles y las que seleccionó el usuario.
 */
function getCinema() {
  var chairs = 60;
  usedChairs = getUsedChairs(chairs);

  var html = '<table class="table_chairs" >';

  var rowChairs = ['A', 'B', 'C'];
  var cont = 0;
  for (var i = 0; i < chairs; i++) {
    if (i % 20 == 0) {
      html += '<tr> <td class="name-row" > <div>' + rowChairs[cont] + '</div></td>';
      cont += 1;
    }
    if (i % 10 == 0) {
      html += '<td class="middle-row" ></td>';
    }
    var uc = validateUsedChairs(usedChairs, i, cont);

    //var ls = validateSavedChair(i, cont);
    html += '<td ' + uc["onClickTd"] + uc["backgroundColor"] + ' class="chair-row ' + uc["classTd"] + '"> <input type="hidden" id="chair_' + cont + '_' + i + '" value="' + uc["value"] + '" /> </td>'
  }
  html += '</table>';
  html += '<div class="ticket_value"></div>';
  return html;
}

/**
 * Función para validar si la silla esta guardada en el localStorage, si lo esta, al input que identifica a la silla le pode un valor de 1 y el color de la silla pasa a ser azul.
 * @param {*} chair: Número de silla
 * @param {*} row: Fila.
 * @returns {*} array con el valor del input y color de la silla.
 */
function validateSavedChair(chair, row) {
  value = '0';
  backgroundColor = '';
  if (localStorage.getItem('chair_' + row + '_' + chair) !== null) {
    value = '1';
    backgroundColor = 'style="background-color: #0040FF;"';
  }

  return { value: value, backgroundColor: backgroundColor }
}

/**
 * Función para optener por medio del método Random las sillas que no están disponibles.
 * @param {*} chairs: Cantidad de sillas que tiene la sala cine.
 * @returns {*} array con elas sillas que están deshabilitadas.
 */
function getUsedChairs(chairs) {
  let numberUsedChairs = Math.ceil(Math.random() * chairs);
  let usedChairs = [];

  for (var i = 0; i < numberUsedChairs; i++) {
    usedChairs[i] = Math.ceil(Math.random() * chairs);
  }
  return usedChairs;
}

/**
 * Función para obtener la clase que va a identificar las sillas, si están ocupadas por otros usuarios les agregará la clase "used-chair" la cual deshabilitará la silla para no ser seleccionada por el usuario.
 * Si la silla esta habilitada, le agregará un onclick para que al momento de seleccionar la silla se cambie el estado de la misma y se sume al valor que debe ingresar el usuario.
 * @param {*} usedChairs: Sillas que están separadas por otros usuarios
 * @param {*} chair: Número de silla
 * @param {*} row: Fila 
 * @returns {*} array con la clase que tendrá el <td></td> y con el onclick
 */
function validateUsedChairs(usedChairs, chair, row) {
  var ls = validateSavedChair(chair, row);
  var classTd = 'available-chair';
  var onClickTd = 'onclick="selectChair(' + chair + ', ' + row + ', this)"';
  if (usedChairs.indexOf(chair) >= 0 && ls["value"] === '0') {
    classTd = 'used-chair';
    onClickTd = '';
  }
  return { classTd: classTd, onClickTd: onClickTd, backgroundColor: ls["backgroundColor"], value: ls["value"] }
}

/**
 * Función para modificar el color de la silla seleccionada y guardar el valor de la silla al total de lo que el usuario debe pagar.
 * @param {*} chair: Número de silla 
 * @param {*} row: Fila 
 * @param {*} e: Objeto <td></td> 
 */
function selectChair(chair, row, e) {
  var idChair = document.getElementById('chair_' + row + '_' + chair).value;
  if (parseInt(document.getElementById('total').value) < 60000 || idChair === '1') {
    if (idChair === '0') {
      var value = '1';
      total = (parseInt(document.getElementById('total').value) + 15000)
      e.style.backgroundColor = "#0040FF"
      localStorage.setItem('chair_' + row + '_' + chair, 'chair_' + row + '_' + chair);
    } else {
      var value = '0';
      total = (parseInt(document.getElementById('total').value) - 15000)
      e.style.backgroundColor = "#00FF00"
      localStorage.removeItem('chair_' + row + '_' + chair)
    }
    document.getElementById('chair_' + row + '_' + chair).value = value
    localStorage.setItem('total', total)
    printTotalTickets();
  } else {
    alert("No puede comprar mas de 4 sillas")
  }
}