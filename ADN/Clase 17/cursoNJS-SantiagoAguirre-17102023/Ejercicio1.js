// Estas son mis credenciales predefinidas
const usuarioPredefinido = "usuario";
const contrasenaPredefinida = "password";

// Obtener referencias a elementos HTML
const formulario = document.querySelector("#formulario");
const usuarioInput = document.querySelector("#usuario");
const contrasenaInput = document.querySelector("#contrasena");
const mensaje = document.querySelector("#mensaje");

// Manejar el envío del formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    const usuarioIngresado = usuarioInput.value;
    const contrasenaIngresada = contrasenaInput.value;

    if (usuarioIngresado === usuarioPredefinido && contrasenaIngresada === contrasenaPredefinida) {
        mensaje.textContent = "¡Bienvenidos a la App!";
    } else {
        mensaje.textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
    }
});