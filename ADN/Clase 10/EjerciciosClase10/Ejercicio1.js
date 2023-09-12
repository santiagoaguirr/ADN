var contadorPar=0;
var contadorImpar=0;
var patente;

patente = parseFloat(prompt("Ingrese ultimo digito de la patente: "));

while(patente !=-1){
    if(patente%2 == 0){
        contadorPar++;
    }
    else{
        contadorImpar++;
    }
    patente = parseFloat(prompt("Ingrese último digito de la patente: "));
}

console.log("Patentes con numeración par: " + contadorPar);
console.log("Patentes con numeración impar: " + contadorImpar);

