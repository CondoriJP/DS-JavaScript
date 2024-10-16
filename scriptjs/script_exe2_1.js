// Este script se encarga de comparar dos números y mostrar el mayor de ellos.

function comparar(num1, num2) {
    let a;
    let b;
    let c;

    a = num1;
    b = num2;

    if(a > b) {
        c = a;
    } else {
        c = b;
    }
    console.log("El mayor de los tres números es: " + c);
}

export function exe2_1() {
    const div = document.getElementById('e2_1_div');
    const buttonE2e1s = document.getElementById('e2_1s');
    if (div.innerHTML === "") {
        buttonE2e1s.innerHTML = "desactivar";

        div.innerHTML = '<input id="e2_1_inp1" class="input_number" type="number" value="5">';
        div.innerHTML += '<input id="e2_1_inp2" class="input_number" type="number" value="10">';
        div.innerHTML += '<button id="e2_1" class="button_exe">ejecutar</button>';

        const buttonE1e2 = document.getElementById("e2_1");
        buttonE1e2.addEventListener("click", () => {
            comparar(parseInt(document.getElementById("e2_1_inp1").value), parseInt(document.getElementById("e2_1_inp2").value));
        });
    } else {
        buttonE2e1s.innerHTML = "activar";
        div.innerHTML = "";
    }
}
