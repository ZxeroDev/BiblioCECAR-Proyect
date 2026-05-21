var usuariosDePrueba = [
    { usuario: "admin@cecar.edu.co", clave: "admin123" },
    { usuario: "dylan@cecar.edu.co", clave: "dylan123" },
    { usuario: "andres@cecar.edu.co", clave: "andres123" }
];

// Ahora escuchamos el clic del botón directamente
document.getElementById('btnEntrar').addEventListener('click', function() {

    var txtUsuario = document.getElementById('usuario').value;
    var txtPassword = document.getElementById('password').value;

    // Validación básica por si los dejan vacíos
    if (txtUsuario === "" || txtPassword === "") {
        alert("Por favor, llene todos los campos.");
        return;
    }

    var usuarioEncontrado = false;

    for (var i = 0; i < usuariosDePrueba.length; i++) {
        if (usuariosDePrueba[i].usuario === txtUsuario && usuariosDePrueba[i].clave === txtPassword) {
            usuarioEncontrado = true;
            break;
        }
    }

    if (usuarioEncontrado) {
        window.location.href = "html/principal.html";
    } else {
        alert("Error: Usuario o contraseña incorrectos.");
    }
});