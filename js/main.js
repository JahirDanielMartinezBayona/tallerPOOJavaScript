class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hacerSonido() {
        return `El animal ${this.nombre} hace un sonido.`;
    }
}

class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }

    moverCola() {
        return `El perro ${this.nombre} de raza ${this.raza} está moviendo la cola.`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const animalForm = document.querySelector('#animal-form');
    const animalSoundMessage = document.querySelector('#animal-sound-message');

    animalForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.querySelector('#animal-name').value;
        const edad = parseInt(document.querySelector('#animal-age').value, 10);

        const animal1 = new Animal(nombre, edad);
        const sonido = animal1.hacerSonido();
        animalSoundMessage.textContent = sonido;
        console.log(sonido);
    });

    const dogForm = document.querySelector('#dog-form');
    const dogSoundMessage = document.querySelector('#dog-sound-message');
    const dogTailMessage = document.querySelector('#dog-tail-message');

    dogForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.querySelector('#dog-name').value;
        const edad = parseInt(document.querySelector('#dog-age').value, 10);
        const raza = document.querySelector('#dog-breed').value;

        const perro1 = new Perro(nombre, edad, raza);
        const sonido = perro1.hacerSonido();
        const moverCola = perro1.moverCola();
        dogSoundMessage.textContent = sonido;
        dogTailMessage.textContent = moverCola;
        console.log(sonido);
        console.log(moverCola);
    });
});
