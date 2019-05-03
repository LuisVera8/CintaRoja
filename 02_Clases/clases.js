class Carro {
    constructor(marca, color, motor, modelo){
        this.marca = marca;
        this.color = color;
        this.motor = motor;
        this.modelo = modelo;
    }

    arrancar(){
        return 'run run';
    }

    getMarcar(){
        return this.marca;
    }

    setMarca(marca){
        if(marca==='Faw')
        
    }
}

const bocho = new Carro ('VolksWagen', 'Amarillo', 'V8', '68');

console.log(bocho)