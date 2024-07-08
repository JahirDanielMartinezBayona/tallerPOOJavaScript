class Figura {
    constructor(color, width, height) {
        this.color = color;
        this.width = width;
        this.height = height;
    }

    calcularArea() {
        const area = this.width * this.height;
        return `El área de la figura de color ${this.color} es ${area} cm².`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const figureForm = document.querySelector('#figure-form');
    const areaMessage = document.querySelector('#area-message');

    figureForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const color = document.querySelector('#figure-color').value;
        const width = parseFloat(document.querySelector('#figure-width').value);
        const height = parseFloat(document.querySelector('#figure-height').value);

        const figura1 = new Figura(color, width, height);
        const mensajeArea = figura1.calcularArea();
        areaMessage.textContent = mensajeArea;
        console.log(mensajeArea);
    });
});