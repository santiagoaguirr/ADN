var temperatura=0;


temperatura= parseFloat(prompt("¿De cuanto es la temperatura?"));
if(temperatura<15){
    console.log("Ir en auto");
}
else if(temperatura > 20){
    console.log("Ir en bicicleta");
}
else{
    console.log("Ir en metro / bus");
}
