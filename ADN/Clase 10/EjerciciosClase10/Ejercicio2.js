var n;
sumatoria = 0;

while(true){
    
    try{
        n = parseFloat(prompt("Ingrese un numero para validar que sea positivo y mostrar todos los impares anteriores al mismo"));
        if(n<0){
            throw "Numero ingresado no es positivo";
        }
        break;
    } catch(error){
        console.error("Se produjo un error", error);
    }

}
for(i=0;i<n;i++){
    if(i%2 != 0){
        console.log(i + " ");
        sumatoria = sumatoria + i;
    }
}
console.log("La sumatoria de los numeros impares anteriores a " + n + " es: " + sumatoria);