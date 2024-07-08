class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hacerSonido() {
        return `El animal ${this.nombre} hace un sonido.`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const animalForm = document.querySelector('#animal-form');
    const soundMessage = document.querySelector('#sound-message');

    animalForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.querySelector('#animal-name').value;
        const edad = parseInt(document.querySelector('#animal-age').value, 10);

        const animal1 = new Animal(nombre, edad);
        const sonido = animal1.hacerSonido();
        soundMessage.textContent = sonido;
        console.log(sonido);
    });
});