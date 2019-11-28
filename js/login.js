// tomar un elemento del documento 
var login = document.getElementById("login");
var loginUser = document.getElementById("loginUser");
var loginUserPass = document.getElementById("loginUserPass");

if (localStorage.getItem('name')) {
    loginUser.innerHTML = localStorage.getItem('name');
}

if (localStorage.getItem('pass')) {
    loginUser.innerHTML = localStorage.getItem('pass');
}

//localStorage.clear(); Comenté esta línea porque estaba elimiando la variable que se guardaba de la ciudad..

function signIn() {
    swal("Ingresa tu nombre: ", {
        content: "input",
        buttons: true,
    }).then((name) => {
        if (name) {
            localStorage.setItem('name', name)
            if (name == "Admin" || name == "User") {
                swal("Ingresa contraseña:", {
                    content: "input",
                }).then((pass) => {
                    if (pass){
                        localStorage.setItem('pass', pass);
                        loginUser.innerHTML = name;
                        swal("Acceso correcto!");
                    }else{
                        swal("", "No ingresaste ninguna contraseña", "warning");
                    }
                });
            } else {
                swal({
                    title: "Ingreso Incorrecto",
                    text: "Por favor intentar nuevamente",
                    icon: "warning",
                    button: "OK",
                    dangerMode: true,
                })

            }
        }
    });
}
/*var conf = confirm("¿Desea ingresar a nuestra plataforma?");
if (conf) {
    var userName1 = prompt("Ingresa tu nombre");
    localStorage.setItem('name', userName1);
    if (userName1 == "Admin" || userName1 == "User") {
        var password = prompt("Ingresa contraseña");
        localStorage.setItem('pass', password);
        // userName1 = userName1.toLowerCase();
        if (userName1 == "Admin" && password == "12345678" || userName1 == "User" && password == "098765") {
            swal({
                title: 'Ingreso Correcto',
                text: " ",
                type: 'success',
                button: "Ok"
            })
            loginUser.innerHTML = userName1;
        } else {

            // si no es correcto es que el nombre esta mal 
            swal("Ingreso Denegado, intentalo de nuevo ")

        }
    }
} else {
    // localStorage.removeItem('name', 'pass')
    return false;
}*/
// localStorage.removeItem('name', 'pass')



login.onclick = function () {
    signIn();
}