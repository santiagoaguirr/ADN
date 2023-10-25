/* 1. Dia con mayor ingreso de ventas y el monto
    1.1 - Cargar vector de ingresos por dia
    1.2 - Buscar el valor maximo
    1.3 - Mostrar dia y valor
*/


/* 2. Dia con menos gasto y el monto
    2.1 - Cargar vector gastos por dia
    2.2 - Buscar valor minimo
    2.3 - Mostrar dia y valor
*/

/* 3. Promedio de gastos en dias pares, cuyo ingreso no sea menor a loas $1000 diarios.
    3.1 - Si dia%2 == 0 && ingreso < 1000 --> sumar gasto
    3.2 - Dividir SumaGastosDiasPares/CantDias
    3.3 - Mostrar promedio por pantalla
*/

/* 4. Generar un nuevo arreglo con las ganancias obtenidas por cada dia del mes y mostrar el dia con mayor ganancia
    4.1 Crear arreglo ganancias
    4.2 Cargarlo con ingresos - gastos
    4.3 Buscar el maximo
    4.4 Mostrar el arreglo e indicar el dia de valor max
*/

dias = parseFloat(prompt("A continuación, indique cantidad de dias del mes a registrar: "))
var contador = 0
var vectorIngresos = []
var vectorGastos = []
var vectorGanancias = []

while(contador < dias){
    vectorIngresos[contador] = parseFloat(prompt("Ingresos dia " + (contador + 1)+ ":"))   
    vectorGastos[contador] = parseFloat(prompt("Gastos dia " + (contador + 1) + ":"))
    contador++;
}

function buscarMaxPosicion(vector, longitud){
    let maximo = vector[0];
    let maxPos = 0;
    for(let i=0; i<longitud; i++){
        if(vector[i] > maximo){
            maximo = vector[i]
            maxPos = i;
        }
    }
    return maxPos;
}
function buscarMinPosicion(vector, longitud){
    let minimo = vector[0];
    let minPos = 0;
    for(let i=0; i<longitud; i++){
        if(vector[i] < minimo){
            minimo = vector[i]
            minPos = i;
        }
    }
    return minPos;
}

console.log(vectorIngresos);
let maxPos = buscarMaxPosicion(vectorIngresos, dias);
let minPos = buscarMinPosicion(vectorGastos, dias);

console.log("El dia que mas ventas registró fue el dia: " + (maxPos+1));
console.log("Con un total de ventas de : $" + vectorIngresos[maxPos]);

console.log("El dia que menos gastos registró fue el dia: " + (minPos+1));
console.log("Con un gasto total de : $" + vectorGastos[minPos]);

var promedioDiasPares;
var totalGastosPares = 0;
var cantDias=0;


for(let i=0; i<dias; i++){
    if((i+1)%2 == 0){
        if(vectorIngresos[i] <= 1000){
            totalGastosPares+=vectorGastos[i];
            cantDias++;
        }
    }
}
promedioDiasPares = totalGastosPares/cantDias;
console.log("El promedio de gasto en los dias pares cuyo ingreso no supere los $1000 es: $" + promedioDiasPares);

for(let i=0; i<dias; i++){
    vectorGanancias[i] = vectorIngresos[i] - vectorGastos[i];
}

var diaMayorGanancia = buscarMaxPosicion(vectorGanancias,dias);
console.log("El dia en el que se obtuvo mayor ganancia fue el dia " + (diaMayorGanancia+1) + ", con una ganancia de $" + vectorGanancias[diaMayorGanancia])


