let numNoche = prompt ("Introduzca el número de noches: ");
let precioNoche = 60;
let costeHotel = 0;

function calcularCosteHotel(numNoche) {
window.alert ("El número de noches introducidas vale: " + (precioNoche * numNoche) + "€");
}

costeHotel = calcularCosteHotel(numNoche);
console.log (costeHotel);



let costeAvion = 0;
let ciudad = prompt ("Introduzca la ciudad destino: ")

function calcularCosteAvion () {

} 
switch (ciudad) {
    case Paris:
        let Paris = 180;
        console.log (precioNoche * ciudad);
    break;
    case Boston:
        let Boston = 600;
        console.log (precioNoche * ciudad)
    break;
    case Londres:
        let Londres = 120;
        console.log (precioNoche * ciudad)
    break;
}

window.alert (ciudad * precioNoche);