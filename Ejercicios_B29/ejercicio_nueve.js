const fibo = (numero) => {
    let num1 = 0
    let num2 = 1
    let suma = 0
    let sum = 0
    for (let i = 0; i <= numero - 2 ; i++){
        
        suma = num1 + num2
        num1 = num2
        sum = suma
        num2 = suma
    
        console.log(i  + "+" + suma + "=" + sum)
    }
    
}

fibo(5)