let numNoche = prompt ("Introduzca el número de noches: ");
let precioNoche = 60;
let costeHotel = 0;
let sumaprecio = numNoche*precioNoche;

function calcularCosteHotel(numNoche) {
window.alert ("El número de noches introducidas vale: " + (precioNoche * numNoche) + "€");
return precioNoche * numNoche;
}

costeHotel = calcularCosteHotel(numNoche);
console.log (costeHotel);


let costeAvion = 0;
let ciudad = prompt ("Introduzca la ciudad destino: ");

function calcularCosteAvion (ciudad) {
    switch (ciudad) {
        case "Paris":
            window.alert("El coste de noches en Paris es de: " + (180 + sumaprecio) + "€");
            return;
        case "Boston":
            window.alert("El coste de noches en Boston es de: " + (600 + sumaprecio) + "€"); /* Tanto sumaprecio como costeHotel funcionan, ya que hemos guardado el resultado de costeHotel con un return  */
            return;
        case "Londres":
            window.alert("El coste de noches en Londres es de: " + (120 + costeHotel) + "€");
            return;
    }
} 

costeAvion = calcularCosteAvion(ciudad);
console.log (costeAvion);