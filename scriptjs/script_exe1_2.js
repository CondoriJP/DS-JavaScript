// Este spript se encarga de realizar la suma de dos números
// y mostrar el resultado en un la consola del navegador

function suma(a, b) {
    let c = a + b;
    console.log("La suma de " + a + " + " + b + " es: " + c);
}

export function exe1_2() {
    const div = document.getElementById("e1_2_div");
    const buttonE1e2s = document.getElementById("e1_2s");
    if (div.innerHTML == "") {
        buttonE1e2s.innerHTML = "desactivar";

        div.innerHTML = '<input id="e1_2_inp1" class="input_number" type="number" value="5">';
        div.innerHTML += '<input id="e1_2_inp2" class="input_number" type="number" value="10">';
        div.innerHTML += '<button id="e1_2" class="button_exe">ejecutar</button>';

        const buttonE1e2 = document.getElementById("e1_2");
        buttonE1e2.addEventListener("click", () => {
            suma(parseInt(document.getElementById("e1_2_inp1").value), parseInt(document.getElementById("e1_2_inp2").value));
        });
    } else {
        buttonE1e2s.innerHTML = "activar";
        div.innerHTML = "";
    }
}
