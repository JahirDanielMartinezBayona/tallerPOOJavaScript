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

class Estudiante extends Persona {
    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }

    estudiar() {
        return `Estoy estudiando ${this.carrera}.`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#studentForm');
    const greetingMessage = document.querySelector('#greetingMessage');
    const studyMessage = document.querySelector('#studyMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const edad = document.querySelector('#edad').value;
        const sexo = document.querySelector('#sexo').value;
        const carrera = document.querySelector('#carrera').value;

        const estudiante1 = new Estudiante(nombre, edad, sexo, carrera);
        greetingMessage.textContent = estudiante1.saludar();
        studyMessage.textContent = estudiante1.estudiar();
    });
});
