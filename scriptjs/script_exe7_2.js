export function exe7_2() {
    const div = document.getElementById('e7_2_div');
    const selector = document.getElementById('e7_2s');
    if (div.innerHTML == "") {
        selector.innerHTML = "desactivar";
        div.innerHTML = 
            '<p class="texto">Ingresa un texto</p>' +
            '<input type="text" class="input_text" id="e7_2_in1">' +
            '<button id="e7_2_b1" class="button_exe">Mostrar Alerta</button>';
        const button = document.getElementById('e7_2_b1');
        button.addEventListener('click', () => {
            const input = document.getElementById('e7_2_in1');
            alert(input.value);
        });
    } else {
        selector.innerHTML = "activar";
        div.innerHTML = "";
    }
}
