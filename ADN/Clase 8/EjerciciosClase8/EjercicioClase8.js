/* 1)
var nombre = "Santiago";
var edad = 24;
var nombreProyecto = "Sistema gestión para empresa impresión 3d";
var ideaProyecto ="La empresa ofrece servicios de impresión 3d, recibe pedidos de clientes y se encarga de realizar la impresión en 3d de lo solicitado.";

console.log(nombre);
console.log(edad);
console.log(nombreProyecto);
console.log(ideaProyecto);
*/

/* 2)
var nombre2;
var interesesProg;

nombre2 = prompt("Ingrese su nombre: ");
interesesProg = prompt("Cuales son sus intereses en programación");

console.log(nombre2);
console.log(interesesProg);
*/

/* 3)
var n1;
var n2;

n1 = parseFloat(prompt("Ingrese un numero"));
n2 = parseFloat(prompt("Ingrese otro numero"));

console.log("Suma = ", n1, " + " , n2 , "-->", n1+n2);
console.log("Suma = ", n1, " - " , n2 , "-->", n1-n2);
console.log("Suma = ", n1, " / " , n2 , "-->", n1/n2);
console.log("Suma = ", n1, " * " , n2 , "-->", n1*n2);
*/

/*
var nombreVendedor;
var cantidadVentas;
var valorVentas;
var salarioBase = 5000;
var comisionTotal;

nombreVendedor = prompt("Ingrese nombre del vendedor:");

cantidadVentas = parseInt(prompt("Cantidad de ventas que realizó ", nombreVendedor));

valorVentas = parseFloat(prompt("Valor total de las ventas realizadas"));

comisionTotal = valorVentas * 0.15;
console.log("El salario que le corresponde a ", nombreVendedor, " es de ", salarioBase + comisionTotal);
*/

/*
var sumatoria = 0;
var cantNumeros = 0;
var n;

n = parseFloat(prompt("Ingrese un numero: "));

while(n != 0){
    if(n>0){
        cantNumeros = cantNumeros + 1;
        sumatoria = sumatoria + n; 
    }
    n = parseFloat(prompt("Ingrese un numero: "));
}

console.log("El promedio entre los numeros positivos ingresados es : ", sumatoria/cantNumeros);
*/


