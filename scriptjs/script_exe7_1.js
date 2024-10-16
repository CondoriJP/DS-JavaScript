export function exe7_1() {
    const div = document.getElementById('e7_1_div');
    const selector = document.getElementById('e7_1s');
    if (div.innerHTML == "") {
        selector.innerHTML = "desactivar";
        
        div.innerHTML = 
            '<div id="e7_1text" class="box_vertical box_texto3 texto1">' + 
            '<p>hola</p>' + 
            '<p>hola</p>' + 
            '<p>hola</p>' +
            '</div>';
        div.innerHTML += '<button id="e7_1butt1" class="button_exe">cambiar</button>';
        
        const butt1 = document.getElementById('e7_1butt1');
        butt1.addEventListener("click", () => {
            const styleText = document.getElementById("e7_1text");
            if (styleText.classList.contains("texto1")) {
                styleText.classList.remove("texto1");
                styleText.classList.add("texto2");
            } else {
                styleText.classList.remove("texto2");
                styleText.classList.add("texto1");
            }
        });
    } else {
        selector.innerHTML = "activar";
        div.innerHTML = "";
    }
}
