/* **********************************************************
EJERCICIO 1:
    Escribí un código en el cual crees un array con los numeros del 1 al 10, y
    que imprima por consola a todos los números del array multiplicados por 2.
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Con for:
for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i] * 2);
}

//Con while:
// let i = 0;
// while ( i < numeros.length){
//     console.log(numeros[i] * 2);
//     i++;
// }


/* **********************************************************
EJERCICIO 2:
    Escribí una función que pueda recibir un número como parámetro y
    que imprima por consola la tabla de multiplicación del 1 al 10 de ese número.
*/

// Con sintaxis de function:
function tablaDel(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`El número ${numero} multiplicado por ${i} es igual a ${numero * i} `);
    }
}

// Descomentar para llamar a la funcion:
//tablaDel(5);

// Con sintaxis de funcion flecha:
const tablaDelConFlecha = (numero) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`El número ${numero} multiplicado por ${i} es igual a ${numero * i} `);
    }
};
  
// Descomentar para llamar a la funcion:
// tablaDelConFlecha(10);


/* **********************************************************
EJERCICIO 3:
    - Escribir las funciones “sumar”, “restar”, “multiplicar”, “dividir” que puedan 
    recibir dos parámetros e imprima en consola el resultado de la operación matemática correspondiente.
    - Escribir una función que reciba dos números y una función como parámetros y que muestre en consola 
    el resultado correspondiente a la operación matemática pasada como parámetro.
*/

// Con sintaxis de function:
function sumar(numero1, numero2) {
    console.log(numero1 + numero2);
  }
  
function restar(numero1, numero2) {
    console.log(numero1 - numero2);
}
  
function multiplicar(numero1, numero2) {
    console.log(numero1 * numero2);
}
  
function dividir(numero1, numero2) {
    console.log(numero1 / numero2);
}
  
//Con sintaxis de flecha:
const sumar2 = (numero1, numero2) => {
    console.log(numero1 + numero2);
};
  
const restar2 = (numero1, numero2) => {
    console.log(numero1 - numero2);
};
  
const multiplicar2 = (numero1, numero2) => {
    console.log(numero1 * numero2);
};
  
const dividir2 = (numero1, numero2) => {
    console.log(numero1 / numero2);
};

// descomentar para llamar a las funciones:
//sumar(20,30);
//restar(30,20);
//multiplicar(5,5);
//dividir(10,2);

//funcion flecha de hacerOperacion:
const hacerOperación = (numero1, numero2, callback) => {
    callback(numero1, numero2);
};
 
// descomentar para llamar a la funcion:
//   hacerOperación(200, 200, sumar);
//   hacerOperación(100, 50, restar);
//   hacerOperación(20, 20, multiplicar);
//   hacerOperación(20, 2, dividir);


/* **********************************************************
EJERCICIO 4:
    La empresa 'Ailu' realizó 5 ventas. De cada venta se tomó nota de los siguientes datos:
    - Importe de la venta
    - Tipo de prenda vendida ('c', 'p')
    Se pide mostrar por consola los datos que va ingresando el usuario.
*/

const procesarDatos = () => {

    let importe = 0,
    prenda;

    for (let i = 0; i < 5; i++){

        importe = parseInt(prompt("Ingrese el importe de la venta:"));
        console.log(`El importe ingresado es: ${importe}`);

        prenda = prompt("Ingrese el tipo de prenda vendida (c, p):");
        console.log(`El tipo de prenda ingresada es: ${prenda}`);

    }
}
// descomentar para llamar a la funcion:
//procesarDatos();


/* **********************************************************
EJERCICIO 5:
    La empresa 'Ailu' realizó 5 ventas. De cada venta se tomó nota de los siguientes datos:
    - Importe de la venta
    - Tipo de prenda vendida ('c', 'p')
    Se pide informar al final del proceso:
    - El importe total de las ventas de 'c', y el importe total de las ventas de 'p'
    - La cantidad de ventas totales que hubo de 'c', y la cantidad de ventas totales que hubo de 'p'
    - Si hubo mas ventas de 'c' o de 'p'

**** INTERPRETACION DEL ENUNCIADO DEL EJERCICIO 5: ****
    Datos a pedir al usuario 5 veces:
        - Importe de la venta
        - Tipo de prenda vendida ('c', 'p')

    Datos a mostrar por consola (1 sola vez al final del proceso):
        - El importe total de las ventas de 'c'
        - El importe total de las ventas de 'p'
        - La cantidad de ventas totales que hubo de 'c'
        - La cantidad de ventas totales que hubo de 'p'
        - Si hubo mas ventas de camisetas o de pantalones
*/

// ***** RESOLUCION 1: *****

// descomentar variables para usar en RESOLUCION 1:
// let prenda;
// let importe = 0,
//     importeTotalC = 0,
//     importeTotalP = 0,
//     cantidadTotalC = 0,
//     cantidadTotalP = 0;

const procesarVentas = () => { // funcion para pedir los datos al usuario y para hacer los calculos correspondientes

    for (let i = 0; i < 5; i++){

        importe = parseInt(prompt("Ingrese el importe de la venta:"));
        prenda = prompt("Ingrese el tipo de prenda vendida (c, p):");
    
        //Con if:
        if (prenda === 'c'){
            importeTotalC = importe + importeTotalC; // es lo mismo que escribir: importeTotalC+=importe;
            cantidadTotalC++;
        } else if (prenda === 'p'){
            importeTotalP = importe + importeTotalP;
            cantidadTotalP++;
        } else {
            console.log('El tipo de prenda ingresada es incorrecta');
        }

        // En lugar de usar if, podemos usar switch:

        // switch (prenda) {
        //     case 'c':
        //         importeTotalC = importe + importeTotalC;
        //         cantidadTotalC++;
        //         break;
        //     case 'p':
        //         importeTotalP = importe + importeTotalP;
        //         cantidadTotalP++;
        //         break;
        //     default:
        //         console.log('El tipo de prenda ingresada es incorrecta');
        // }
    }
}

const mostrarDatos = () => { // funcion para mostrar los datos

    console.log(`El importe total de la venta de camisetas es: ${importeTotalC}`);
    console.log(`El importe total de la venta de pantalones es: ${importeTotalP}`);
    console.log(`La cantidad de ventas de camisetas es: ${cantidadTotalC}`);
    console.log(`La cantidad de ventas de pantalones es: ${cantidadTotalP}`);

    // Usamos if para mostrar si hubo mas ventas de camisas, de pantalones, o si hubo la misma cantidad:
    if (cantidadTotalC > cantidadTotalP){
        console.log("Hubo mas ventas de camisetas");
    } else if (cantidadTotalP === cantidadTotalC){
        console.log("Hubo la misma cantidad de ventas de camisetas que de pantalones");
    } else {
        console.log("Hubo mas ventas de pantalones")
    }
    
}
// descomentar para llamar a las funciones:
// procesarVentas();
// mostrarDatos();


// ***** RESOLUCION 2: *****

const procesarVentas2 = () => {

    let importe = 0,
    prenda,
    importeTotalC = 0,
    importeTotalP = 0,
    cantidadTotalC = 0,
    cantidadTotalP = 0;

    for (let i = 0; i < 5; i++){

        importe = parseInt(prompt("Ingrese el importe de la venta:"));
        prenda = prompt("Ingrese el tipo de prenda vendida (c, p):");
    
        switch (prenda) {
            case 'c':
                importeTotalC = importe + importeTotalC;
                cantidadTotalC++;
                break;
            case 'p':
                importeTotalP = importe + importeTotalP;
                cantidadTotalP++;
                break;
            default:
                console.log('El tipo de prenda ingresada es incorrecta');
        }
    }

    // La función mostrarDatos2 es una función interna, una clausura (closure):
    const mostrarDatos2 = () => {
        
        console.log(`El importe total de la venta de camisetas es: ${importeTotalC}`);
        console.log(`El importe total de la venta de pantalones es: ${importeTotalP}`);
        console.log(`La cantidad de ventas de camisetas es: ${cantidadTotalC}`);
        console.log(`La cantidad de ventas de pantalones es: ${cantidadTotalP}`);

        if (cantidadTotalC > cantidadTotalP){
            console.log("Hubo mas ventas de camisetas");
        } else if (cantidadTotalP === cantidadTotalC){
            console.log("Hubo la misma cantidad de ventas de camisetas que de pantalones");
        } else {
            console.log("Hubo mas ventas de pantalones")
        }

    }

    mostrarDatos2();

}
// descomentar para llamar a la funcion:
//procesarVentas2();


// ***** RESOLUCION 3 *****

const procesarVentas3 = () => {

    let importe = 0;
    let prenda;
    let importeTotalC = 0;
    let importeTotalP = 0;
    let cantidadTotalC = 0;
    let cantidadTotalP = 0;

    for (let i = 0; i < 5; i++){

        importe = parseInt(prompt("Ingrese el importe de la venta:"));
        prenda = prompt("Ingrese el tipo de prenda vendida (c, p):");
    
        switch (prenda) {
            case 'c':
                importeTotalC = importe + importeTotalC;
                cantidadTotalC++;
                break;
            case 'p':
                importeTotalP = importe + importeTotalP;
                cantidadTotalP++;
                break;
            default:
                console.log('El tipo de prenda ingresada es incorrecta');
        }

    }

    mostrarDatos3(importeTotalC, importeTotalP, cantidadTotalC, cantidadTotalP);

}

const mostrarDatos3 = (importeTotalC, importeTotalP, cantidadTotalC, cantidadTotalP) => {

    console.log(`El importe total de la venta de camisetas es: ${importeTotalC}`);
    console.log(`El importe total de la venta de pantalones es: ${importeTotalP}`);
    console.log(`La cantidad de ventas de camisetas es: ${cantidadTotalC}`);
    console.log(`La cantidad de ventas de pantalones es: ${cantidadTotalP}`);

    if (cantidadTotalC > cantidadTotalP){
        console.log("Hubo mas ventas de camisetas");
    } else if (cantidadTotalP === cantidadTotalC){
        console.log("Hubo la misma cantidad de ventas de camisetas que de pantalones");
    } else {
        console.log("Hubo mas ventas de pantalones")
    }

}
// descomentar para llamar a la funcion:
// procesarVentas3();