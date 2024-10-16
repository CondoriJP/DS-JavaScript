// Este script recibe un valor en grados Celsius y devuelve su equivalente en grados Fahrenheit.

function convertirCelsiusAFahrenheit(celcius) {
    let fehrenheit = celcius * 1.8 + 32;
    return fehrenheit;
}


export function exe4_2() {
    const div = document.getElementById("e4_2_div");
    const buttonE4_2s = document.getElementById("e4_2s");
    if (div.innerHTML == "") {
        buttonE4_2s.innerHTML = "desactivar";

        div.innerHTML = '<input id="e4_2_inp1" class="input_number" type="number" value="5">';
        div.innerHTML += '<button id="e4_2" class="button_exe">ejecutar</button>';

        const buttonE4_2 = document.getElementById("e4_2");
        buttonE4_2.addEventListener("click", () => {
            let celcius = parseInt(document.getElementById("e4_2_inp1").value);
            let fahrenheit = convertirCelsiusAFahrenheit(celcius);
            console.log(celcius + "°C son equivalentes a " + fahrenheit + "°F");
        });
    } else {
        buttonE4_2s.innerHTML = "activar";
        div.innerHTML = "";
    }
}
