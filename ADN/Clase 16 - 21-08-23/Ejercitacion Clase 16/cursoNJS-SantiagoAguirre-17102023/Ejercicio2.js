 // Obtener referencias a los elementos HTML
 const boton1 = document.querySelector("#boton1");
 const boton2 = document.querySelector("#boton2");
 const boton3 = document.querySelector("#boton3");
 const boton4 = document.querySelector("#boton4");
 const boton5 = document.querySelector("#boton5");
 const titulo = document.querySelector("#titulo");
 const parrafo = document.querySelector("#parrafo");

 // Funciones para cambiar el título y el párrafo
 function actualizarInformacion(textoTitulo, textoParrafo) {
     titulo.textContent = textoTitulo;
     parrafo.textContent = textoParrafo;
 }

 // Configurar escuchadores de eventos para cada botón
 boton1.addEventListener("click", () => {
     actualizarInformacion("Botón 1", "Esta es la información del Botón 1.");
 });

 boton2.addEventListener("click", () => {
     actualizarInformacion("Botón 2", "Esta es la información del Botón 2.");
 });

 boton3.addEventListener("click", () => {
     actualizarInformacion("Botón 3", "Esta es la información del Botón 3.");
 });

 boton4.addEventListener("click", () => {
     actualizarInformacion("Botón 4", "Esta es la información del Botón 4.");
 });

 boton5.addEventListener("click", () => {
     actualizarInformacion("Botón 5", "Esta es la información del Botón 5.");
 });
