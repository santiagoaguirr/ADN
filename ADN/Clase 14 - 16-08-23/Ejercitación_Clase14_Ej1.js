
const funcionSuprema = () => {
    let totalNumeros=0;
    cantidad = parseFloat(prompt("Ingrese la cantidad de numeros que desea ingresar: "));
    let multiplosCinco=0, multiplosTres=0,multiplosCincoYTres=0;
    let sumatoriaMultiplosCinco=0;

    while((totalNumeros < cantidad) || (n > 1000 && n%2==0) ){
        n = parseFloat(prompt("Ingrese un numero: "));
        totalNumeros+=1;
        if(n%5 === 0){
            sumatoriaMultiplosCinco+=n;
            multiplosCinco+=1;
        }
        if(n%3 === 0){
            multiplosTres+=1;
        }
        if(n%5 === 0 && n%3 ===0){
            multiplosCincoYTres+=1;
        }
    }
    let promedioMultiplosCinco;
    promedioMultiplosCinco = promedio(sumatoriaMultiplosCinco,multiplosCinco);
    console.log("El promedio de los múltiplos de cinco es : " + promedioMultiplosCinco);
    procentajeMultiplosTres = porcentaje(totalNumeros, multiplosTres);
    console.log("El porcentaje de multiplos de 3 ingresados es: " + procentajeMultiplosTres);
    console.log("La cantidad de numeros que son multiplos de 3 y 5 simultáneamente es: " + multiplosCincoYTres);
}

const promedio = (sumatoria, cantidadElementos) => {
    return sumatoria/cantidadElementos;
}

const porcentaje = (totalElementos,cantElementos) => {
    return (cantElementos*100)/totalElementos;
}

funcionSuprema();

