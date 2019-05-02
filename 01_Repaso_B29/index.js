// function printName(name) {
//     console.log('Me llamo:',name);
//     return name;
// }

// printName('Luis');

// // FUNCION ANONIMA ECMA5

// var myFunction = function () {
//     return 'funcion anonima'
// }

// console.log (myFunction());

// // FUNCION ANONIMA ECMA6

// var myFunction2 = () => {
//     return 'funcion anonima ECMA6';
// }

// console.log (myFunction2());

// console.log('Primer Ejercicio')

// function converCF(Grados) {
//     console.log('Tu valor en °C es: ',Grados);
//     return(Grados * (9/5)) + 32;
// }

// let Grados = prompt ('¿A cuantos grados celcius (°C)?')
// console.log('La conversion a grados Farenheit es: ' + converCF(Grados) + ' °F')

// console.log('Segundo Ejercicio')

// function tabla(numero) {
//     for (let i = 0 ; i <= 10 ; i++){
//         let mult = (i*numero)
//         console.log(i + ' x ' + numero + ' = ' + mult)
//     }
// }

// let numero = prompt ('¿que numero a multiplicar quieres?')

// tabla(numero)

console.log('Tercer Ejercicio')

function parametros (){
    return 'Se pasaron' + arguments.length + 'argumentos';
}

parametros()