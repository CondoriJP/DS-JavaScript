
function guardarCorreo() {
    const correo = document.getElementById("e9_1_in1").value;
    localStorage.setItem("correo", correo);
}

function recuperarCorreo() {
    const correo = localStorage.getItem("correo");
    const div2 = document.getElementById("e9_1_div2");
    if (correo == null || correo == "") {
        localStorage.setItem("correo", "");
        div2.innerHTML = "";
    } else {
        div2.innerHTML = '<p class="texto">Correo Guardado: ' + correo + '</p>';
        div2.innerHTML += '<button id="e9_1_borrar" class="button_exe">Borrar Correo</button>';
        
        const borrar = document.getElementById("e9_1_borrar");
        borrar.addEventListener("click", () => {
            localStorage.removeItem("correo");
            recuperarCorreo();
        });
    }
}

export function exe9_1(){
    const div = document.getElementById("e9_1_div");
    const selector = document.getElementById("e9_1s");
    if (div.innerHTML == "") {
        selector.innerHTML = "desactivar";
        div.innerHTML =
            '<div class="box_vertical box_texto3"> ' +
            '   <div class="box_horizontal">' +
            '       <p class="texto">Correo Electrónico:</p>' +
            '       <input type="text" class="input_text" id="e9_1_in1">' +
            '       <button id="e9_1_guardar" class="button_exe">Guardar Correo</button>' +
            '   </div>' +
            '   <div id="e9_1_div2" class="box_vertical"></div>' +
            '</div>';
        recuperarCorreo();
        const guardar = document.getElementById("e9_1_guardar");
        guardar.addEventListener("click", () => {
            guardarCorreo();
            recuperarCorreo();
        });
    } else {
        selector.innerHTML = "activar";
        div.innerHTML = "";
    }
}
