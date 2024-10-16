// Este script contiene la función esPar que recibe un número y devuelve true si es par y false si es impar.

function esPar(num){
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

export function exe4_1(){ 
    const div = document.getElementById("e4_1_div");
    const buttonE4e1s = document.getElementById("e4_1s");
    if (div.innerHTML == "") {
        buttonE4e1s.innerHTML = "desactivar";

        div.innerHTML = '<input id="e4_1_inp1" class="input_number" type="number" value="5">';
        div.innerHTML += '<button id="e4_1" class="button_exe">ejecutar</button>';

        const buttonE4e1 = document.getElementById("e4_1");
        buttonE4e1.addEventListener("click", () => {
            let numero = parseInt(document.getElementById("e4_1_inp1").value);
            let espar = esPar(numero);
            console.log("El número " + numero + " es par: " + espar);
        });
    } else {
        buttonE4e1s.innerHTML = "activar";
        div.innerHTML = "";
    }
}
