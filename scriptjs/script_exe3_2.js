// Este script solicita un número al usuario y no finaliza hasta que el número ingresado sea mayor a 100.

export function exe3_2() {
    let entrada;
    do {
        entrada = prompt("Ingrese un número mayor a 100: ");
        entrada = parseInt(entrada);
    } while (entrada < 100);
    console.log("Ingresaste un número mayor a 100: " + entrada);
}
