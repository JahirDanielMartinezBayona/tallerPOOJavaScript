class Figura {
    constructor(color, area) {
        this.color = color;
        this.area = area;
    }

    calcularArea() {
        return `El área de la figura de color ${this.color} es ${this.area} cm².`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const figureForm = document.querySelector('#figure-form');
    const areaMessage = document.querySelector('#area-message');

    figureForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const color = document.querySelector('#figure-color').value;
        const area = parseFloat(document.querySelector('#figure-area').value);

        const figura1 = new Figura(color, area);
        const mensajeArea = figura1.calcularArea();
        areaMessage.textContent = mensajeArea;
        console.log(mensajeArea);
    });
});