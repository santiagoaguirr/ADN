function calculadora(){
    let opc,a,b;

    a = parseFloat(prompt("Ingrese n1: "));
    opc = prompt("Operación: ");
    b = parseFloat(prompt("Ingrese n2: "));

    switch(opc){
        case "+": 
            console.log("El resultado de la suma es: " + sumar(a,b));
        break;
        case "-":
            console.log("El resultado de la reta es: " + restar(a,b));
        break;
        case "*":
            console.log("El resultado de la multiplicación es: " + multiplicar(a,b));
        break;
        case "/":
            console.log("El resultado de la división es: " + dividir(a,b));
        break;
        default:
            console.log("Operación no valida: ");
    }
}

function sumar(a,b){
    try{
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Valor ingresado no es numérico");
        }

    return a+b;
    } catch(error){
        console.error("Ocurrió un error: ", error.message);
    }
}   

function restar(a,b){
    try{
        if(isNaN(a) || isNaN(b)){
            throw new Error("Valor ingreasado no es numérico");
        }
    } catch(error){
        console.log("Ocurrio un error: ", error.message);
    }

    return a-b;
}

function multiplicar(a,b){
    try{
        if(isNaN(a) || isNaN(b)){
            throw new Error("Valor ingreasado no es numérico");
        }
    } catch(error){
        console.log("Ocurrio un error: ", error.message);
    }
    return a*b;
}

function dividir(a,b) {
    try {
      if (b === 0) {
        // Si el divisor es cero, lanzamos una excepción con la palabra clave throw
        throw new Error("No se puede dividir por cero.");
      }
      // Realizamos la división si el divisor no es cero
      return a / b;
    } catch (error) {
      // Si se lanza una excepción, la capturamos en el bloque catch y manejamos el error
      console.error("Ocurrió un error: ", error.message);
  }
}

calculadora();