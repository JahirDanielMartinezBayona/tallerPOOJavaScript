class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar() {
        return `Hola, mi nombre es ${this.nombre}.`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#personaForm');
    const greetingMessage = document.querySelector('#greetingMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const edad = document.querySelector('#edad').value;
        const sexo = document.querySelector('#sexo').value;

        const persona1 = new Persona(nombre, edad, sexo);
        greetingMessage.textContent = persona1.saludar();
    });
});
