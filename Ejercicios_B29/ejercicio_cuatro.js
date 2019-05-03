let prom = 0;
let sum = 0;

const arr = [2,2,2,3,2,3]
for (let i = 0; i < arr.length; i++){
    sum = sum + arr[i]
}
prom = sum / arr.length;
console.log("Este es el promedio: "+prom)

let mitad = arr.length/2
mitad = Math.round(mitad)

console.log("La mediana es: "+arr[mitad])