export function exe8_2() {
    const div = document.getElementById('e8_2_div');
    const selector = document.getElementById('e8_2s');
    if (div.innerHTML == "") {
        selector.innerHTML = "desactivar";
        div.innerHTML += '<input type="text" id="e8_2_input1" class="input_text">';
        div.innerHTML += '<button id="e8_2_button1" class="button_exe">Deshabilitar Campo</button>';
        div.innerHTML += '<button id="e8_2_button2" class="button_exe">Habilitar Campo</button>';

        const input = document.getElementById('e8_2_input1');
        const button1 = document.getElementById('e8_2_button1');
        const button2 = document.getElementById('e8_2_button2');

        button1.addEventListener('click', () => {
            input.disabled = true;
        });

        button2.addEventListener('click', () => {
            input.disabled = false;
        });
    } else {
        selector.innerHTML = "activar";
        div.innerHTML = "";
    }
}
