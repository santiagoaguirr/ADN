/* 
Una empresa desea controlar los ingresos y gastos producidos durante un mes de venta. 
Para ello se deberá ingresar estos datos mediante dos arreglos, donde cada elemento de cada arreglo 
corresponde a cada día del mes que se está vendiendo. Para esto se deberá ingresar previamente la 
cantidad de días que corresponde al mes de evaluación. Se pide calcular y mostrar: 
a) El día con mayor ingreso de ventas indicando el monto obtenido. 
b) El día que se gastó menos, indicando el gasto obtenido. 
c) El promedio de gastos durante los días pares, cuyo ingreso no sea menor a los $1.000 diarios. 
d) Generar y mostrar un nuevo arreglo con las ganancias obtenidas por cada día del mes, mostrando 
también el día de ese mes que mayor ganancia tuvo (Ganancia = Ingreso - Gastos).
*/
    // 1 - Leer Datps
    // 2 - El día con mayor ingreso de ventas indicando el monto obtenido. 
    // 3 - El día que se gastó menos, indicando el gasto obtenido. 
    // 4 - El promedio de gastos durante los días pares, cuyo ingreso no sea menor a los $1.000 diarios. 
    // 5 - Generar arreglo con las ganancias obtenidas por cada día del mes

        // 1.1 Leer cantidad de dias
        // 1.2 Leer Ingresos
        // 1.3 Leer Gastos

        // 2.1 Mayor con valor muy bajo '0'
        // 2.2 si Mayor < Ingreso
        // 2.3 Mayor = Ingresos
        // 2.4 posMayor = i;

        // 3.1 gastoMenor Le asigno un valor muy alto 9999999
        // 3.2 si gastoMenor > (Ingreso - Gasto )
        // 3.3 gastoMenor = (Ingreso - Gasto)
        // 3.4 posGastoMenor = i;

        // 4.1 si i % 2 == 0
        // 4.2 si Ingreso >= 100
        // 4.3 sumarGastos += Gastos
        // 4.4 contarSumaGasto++
        // 4.5 promedio = sumarGastos/contarGastos

        // 5.1 IngresosNetos = ( Ingresos - Gastos )
/**
 * 
 * @param {*} mensaje 
 * @returns Valor ingresado por el usuario
 */    
const leerDatos = mensaje => parseFloat(prompt(mensaje));
/**
 * 
 * @param {*} mayor 
 * @param {*} posMayor 
 * @param {*} ingreso 
 * @returns valorMayor actualizado y Posición Mayor
 */
const calcularMayor = (mayor,posMayor,ingreso,i) => (mayor<ingreso)?[ingreso,i]:[mayor,posMayor];
/**
 * 
 * @param {*} gastoMenor 
 * @param {*} posGastoMenor 
 * @param {*} ingreso 
 * @param {*} gasto 
 * @param {*} i 
 * @returns Gasto Menor y posición Gasto Menor
 */
const calcularGastoMenor = (gastoMenor,posGastoMenor,ingreso,gasto,i) => ( gastoMenor > ( ingreso - gasto ))?[(ingreso-gasto),i]:[gastoMenor,posGastoMenor];
/**
 * 
 * @param {*} sumaGastoPar 
 * @param {*} cantidadGastoPar 
 * @param {*} gasto 
 * @param {*} ingreso 
 * @param {*} i 
 * @returns 
 */
const sumarGastosPares = (sumaGastoPar,cantidadGastoPar,gasto,ingreso,i) => ((i % 2 == 0)&&(ingreso>=1000))?[(sumaGastoPar + gasto),(cantidadGastoPar + 1)]:[sumaGastoPar,cantidadGastoPar];
/**
 * 
 * @param {*} sumaGastoPar 
 * @param {*} cantidadGastoPar 
 * @returns promedio de gastos pares
 */
const calcularPromedio = (sumaGastoPar,cantidadGastoPar) =>(sumaGastoPar!=0 && cantidadGastoPar!=0)? sumaGastoPar/cantidadGastoPar:0;
/**
 * 
 * @param {*} gasto 
 * @param {*} ingreso 
 * @returns 
 */
const generarIngresosNetos = (gasto,ingreso) => ingreso-gasto;
const App = () => {
    let N = leerDatos('Ingrese cantidad de dias :');
    let ingresos = [];
    let gastos = [];
    let gananciasNetas = [];
    let mayor = 0;
    let posMayor = 0;
    let gastoMenor = 0;
    let posGastoMenor = 0;
    let sumaGastoPar = 0;
    let cantidadGastoPar = 0;
    let promedioGastoPar = 0;
        for (let i = 0; i < N; i++) {
            ingresos[i] = leerDatos('Ingresos día '+(i+1)+' :');
            gastos[i] = leerDatos('Gastos día '+(i+1)+' :');
        }
        for (let i = 0; i < N; i++){
            [ mayor , posMayor ] = calcularMayor(mayor,posMayor,ingresos[i],i);
            [ gastoMenor , posGastoMenor ] = calcularGastoMenor(gastoMenor, posGastoMenor , ingresos[i], gastos[i],i);
            [ sumaGastoPar , cantidadGastoPar ] = sumarGastosPares(sumaGastoPar,cantidadGastoPar,gastos[i],ingresos[i],i);
            gananciasNetas[i] = generarIngresosNetos(gastos[i],ingresos[i]);
        }
        console.log
        promedioGastoPar = calcularPromedio(sumaGastoPar,cantidadGastoPar);
        console.log('El día con mayor ingreso de ventas indicando el monto obtenido ->'+posMayor+' ganancias :'+mayor);
        console.log('El día que se gastó menos, indicando el gasto obtenido ->'+posGastoMenor+' gasto: '+gastoMenor); 
        console.log('El promedio de gastos durante los días pares, cuyo ingreso no sea menor a los $1.000 diarios ->'+promedioGastoPar); 
        console.log('Generar arreglo con las ganancias obtenidas por cada día del mes');
        for (let i = 0; i < N; i++) {
            console.log(gananciasNetas[i]);
        }
}
App();