// Clase Figura base
class Figura {
    constructor(color) {
        this.color = color;
    }

    calcularArea() {
        throw new Error("Método calcularArea() debe ser implementado en la subclase.");
    }
}

// Clase Círculo que hereda de Figura
class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }

    calcularArea() {
        const area = Math.PI * Math.pow(this.radio, 2);
        return `El área del círculo de color ${this.color} es ${area.toFixed(2)} cm².`;
    }
}

// Manejo del formulario y de la lógica de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#circle-form');
    const messageElement = document.querySelector('#circle-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const color = document.querySelector('#circle-color').value;
        const radio = parseFloat(document.querySelector('#circle-radius').value);

        const circulo1 = new Circulo(color, radio);
        const areaMessage = circulo1.calcularArea();
        messageElement.textContent = areaMessage;
        console.log(areaMessage);
    });
});