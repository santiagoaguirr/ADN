/// Tomo los elementos botones
const boton1 = document.querySelector("#Boton1");
const boton2 = document.querySelector("#Boton2");
const boton3 = document.querySelector("#Boton3");
const boton4 = document.querySelector("#Boton4");
const boton5 = document.querySelector("#Boton5");

/// Tomo elementos h1 y p

const display = document.querySelector("#display");
const parrafo = document.querySelector("#parrafo");

    boton1.addEventListener("click", () => {
        display.innerText = "Boton 1";
    });
