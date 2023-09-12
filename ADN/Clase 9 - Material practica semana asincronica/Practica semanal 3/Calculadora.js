function calculadora(){
    let opc,a,b;
    try{
        a = parseFloat(prompt("Ingrese n1: "));
        if(isNaN(a)){
            throw Error("El valor ingresado no es numérico");
        }
    } catch(error){
        console.error("Ocurrió un error: ", error.message);
    }

    opc = prompt("Operación: ");
    
    try{
        b = parseFloat(prompt("Ingrese n2: "));
        if(isNaN(b)){
            throw Error("El valor ingresado no es numérico");
        }
    } catch(error){
        console.error("Ocurrió un error: ", error.message);
    }

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
            if(dividir(a,b) === undefined || isNaN(dividir(a,b))){
                console.log("Intente nuevamente");
            }
            else{
                
                console.log("El resultado de la división es: " + dividir(a,b));
            }
        break;
        default:
            console.log("Operación no valida! ");
    }
}


function sumar(a,b){
    return a+b;
};

function restar(a,b){
        return a-b;
};

function multiplicar(a,b){
    return a*b;
};

function dividir(a,b) {
    try {
        if((a === 0 || b ===0)){
            throw new Error("No se permite dividir por 0");
        }
      return a / b;

    } catch(error){
        console.error("Ocurrió un error: ", error.message);
    }
};

calculadora()