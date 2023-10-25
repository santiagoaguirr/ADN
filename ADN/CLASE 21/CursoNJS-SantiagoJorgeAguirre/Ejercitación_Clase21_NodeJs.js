/*Ejercicio 1: Herencia
Crea una jerarquía de clases que modele vehículos. Debe haber una clase base llamada
"Vehiculo" con propiedades comunes como "marca", "modelo" y métodos comunes como
"acelerar" y "frenar". Luego, crea al menos dos subclases que hereden de "Vehiculo", como
"Automovil" y "Bicicleta", con propiedades y métodos específicos de cada tipo de vehículo.
*/

class Vehiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
      this.velocidad = 0;
    }
  
    acelerar(cantidad) {
      this.velocidad += cantidad;
      console.log(`Acelerando a ${this.velocidad} km/h`);
    }
  
    frenar(cantidad) {
      this.velocidad -= cantidad;
      console.log(`Frenando a ${this.velocidad} km/h`);
    }
  }
  
  class Automovil extends Vehiculo {
    constructor(marca, modelo, tipoCombustible) {
      super(marca, modelo);
      this.tipoCombustible = tipoCombustible;
    }
  
    encender() {
      console.log(`Encendiendo el automóvil ${this.marca} ${this.modelo}`);
    }
  }
  
  class Bicicleta extends Vehiculo {
    constructor(marca, modelo, tipo) {
      super(marca, modelo);
      this.tipo = tipo;
    }
  
    pedalear() {
      console.log("Pedaleando la bicicleta");
    }
  }
  
  const auto = new Automovil("Toyota", "Camry", "Gasolina");
  const bici = new Bicicleta("Trek", "X-Caliber", "Montaña");
  E
  auto.encender();
  auto.acelerar(60);
  bici.pedalear();
  bici.acelerar(20);
  

  /*Ejercicio 2: Encapsulamiento
Crea una clase llamada "CuentaBancaria" que tenga propiedades privadas como "saldo" y
"titular". Implementa métodos públicos para depositar, retirar y consultar saldo. Asegúrate
de que el saldo no pueda ser accedido directamente desde fuera de la clase.
*/

class CuentaBancaria {
    constructor(titular) {
      this.titular = titular;
      let saldo = 0;
  
      this.depositar = function (cantidad) {
        if (cantidad > 0) {
          saldo += cantidad;
          console.log(`Depósito de $${cantidad} realizado. Nuevo saldo: $${saldo}`);
        } else {
          console.log("El depósito debe ser mayor que cero.");
        }
      };
  
      this.retirar = function (cantidad) {
        if (cantidad > 0 && cantidad <= saldo) {
          saldo -= cantidad;
          console.log(`Retiro de $${cantidad} realizado. Nuevo saldo: $${saldo}`);
        } else if (cantidad > saldo) {
          console.log("Fondos insuficientes.");
        } else {
          console.log("La cantidad a retirar debe ser mayor que cero.");
        }
      };
  
      this.consultarSaldo = function () {
        console.log(`Saldo actual: $${saldo}`);
      };
    }
  }
  
  const miCuenta = new CuentaBancaria("Santiago Giménez");
  
  miCuenta.depositar(2000);
  miCuenta.retirar(1000);
  miCuenta.consultarSaldo();
  
  /*
Ejercicio 3: Abstracción
Crea una clase abstracta llamada "FiguraGeometrica" que tenga un método abstracto
"calcularArea()" y otro método "imprimirInformacion()". Luego, crea al menos dos subclases
concretas, como "Circulo" y "Triangulo", que hereden de "FiguraGeometrica" y proporcionen
implementaciones concretas de los métodos abstractos.
*/

class FiguraGeometrica {
    constructor() {
      if (this.constructor === FiguraGeometrica) {
        throw new Error("No se puede instanciar una clase abstracta.");
      }
    }
  
    calcularArea() {
      throw new Error("Método abstracto calcularArea() necesita ser implementado.");
    }
  
    imprimirInformacion() {
      throw new Error("Método abstracto imprimirInformacion() necesita ser implementado.");
    }
  }


  class Circulo extends FiguraGeometrica {
    constructor(radio) {
      super();
      this.radio = radio;
    }
  
    calcularArea() {
      return Math.PI * this.radio * this.radio;
    }
  
    imprimirInformacion() {
      console.log(`Círculo - Radio: ${this.radio}, Área: ${this.calcularArea()}`);
    }
  }
  

  class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea() {
      return (this.base * this.altura) / 2;
    }
  
    imprimirInformacion() {
      console.log(`Triángulo - Base: ${this.base}, Altura: ${this.altura}, Área: ${this.calcularArea()}`);
    }
  }
  
  const circulo = new Circulo(5);
  circulo.imprimirInformacion();
  
  const triangulo = new Triangulo(4, 8);
  triangulo.imprimirInformacion();
  
  /*
Ejercicio 4: Polimorfismo
Utilizando las clases de los ejercicios anteriores, crea una función que acepte un arreglo de
objetos de tipo "FiguraGeometrica" y calcule el área de cada figura. Esta función debe ser
capaz de manejar diferentes tipos de figuras geométricas de manera polimórfica, es decir,
sin importar si se trata de círculos, triángulos u otras figuras.
*/

function calcularAreas(figuras) {
    for (let figura of figuras) {
      if (figura instanceof FiguraGeometrica) {
        console.log(`Área de la figura:`);
        figura.imprimirInformacion();
      } else {
        console.log("El objeto no es una figura geométrica válida.");
      }
    }
  }
  
  const circulo = new Circulo(5);
  const triangulo = new Triangulo(4, 8);
  
  calcularAreas([circulo, triangulo]);
  