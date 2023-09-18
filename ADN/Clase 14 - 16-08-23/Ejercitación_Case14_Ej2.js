const promedio = (sumatoria, cantidadElementos) => {
    return sumatoria/cantidadElementos;
}

const porcentaje = (totalElementos,cantElementos) => {
    return (cantElementos*100)/totalElementos;
}

funcion
let n;
n = prompt("1 - INGRESAR DATOS PACIENTE , 2 - SALIR = ");
let vectorPesos = []
let vectorAlturas = []
let elementos = 0;
while(n !== "2"){
    elementos+=1;
    var peso,altura;
    peso = parseFloat(prompt("Ingrese el peso del paciente: "));
    vectorPesos.push(peso);
    altura = parseFloat(prompt("Ingrese la altura del paciente: "));
    vectorAlturas.push(altura);
    alert("Los datos del paciente fueron ingresados correctamente!");
    
    n = prompt("1 - INGRESAR DATOS PACIENTE , 2 - SALIR = ");
}



console.log(vectorAlturas);
console.log(vectorPesos);