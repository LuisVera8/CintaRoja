class Animal {
    constructor (piernas, cerebro) {
        this.piernas = piernas;
        this.cerebro = cerebro;
    }
}

class Humano extends Animal {
    constructor (piernas, cerebro, pulgares) {
        super(piernas, cerebro);
        this.pulgares = pulgares;
    }

    hablar() {
        return "blah blah";
    }
}

class Estudiante extends Humano {
    constructor(matricula, piernas, cerebro, pulgares) {
        super(piernas, cerebro, pulgares)
        this.matricula = matricula;
    }

    reprobar() {
        return "Carajo... de nuevo!!!"
    }
}

