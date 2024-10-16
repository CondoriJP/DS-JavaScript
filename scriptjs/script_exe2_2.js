// Este script solicita un número al usuario y determina si es par o impar

export function exe2_2() {
    let entrada = prompt("Ingresa un número y te dire si es par o impar");
    entrada = parseInt(entrada);
    if (entrada % 2 === 0) {
        console.log("El número " + entrada + ", es par");
    } else {
        console.log("El número " + entrada + ", es impar");
    }
}
