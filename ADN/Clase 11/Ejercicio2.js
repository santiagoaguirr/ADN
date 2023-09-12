/*Ejercicio2-Maps:
Escribe una función que tome un mapa de nombres y edades
como entrada y devuelva un array de nombres de personas que tengan más de 30
años
*/

const miMapa = new Map();
const EdadMay30 = [];

miMapa.set("Santigo", 44);
miMapa.set("Manuel", 32);
miMapa.set("Belen", 23);

console.log(miMapa);

function DevolverMayoresA30(miMapa){
    miMapa.forEach((value,key) => {
        if(value > 30){
            EdadMay30.push(key);
        }
    })
    return EdadMay30;
}

console.log(" Los nombres de las personas mayores a 30 son: " + DevolverMayoresA30(miMapa));

