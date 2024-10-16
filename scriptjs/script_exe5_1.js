
let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Barcelona",
}

function getPersona() {
    console.log("Nombre: " + persona.nombre + ", Edad: " + persona.edad + ", Ciudad: " + persona.ciudad);
}

function setCiudad(ciudad) {
    persona.ciudad = ciudad;
}

export function exe5_1() {
    let exe = "5_1";
    const divSelect = document.getElementById("e"+exe+"_div");
    const buttonSelect = document.getElementById("e"+exe+"s");
    if (divSelect.innerHTML == "") {
        buttonSelect.innerHTML = "desactivar";

        divSelect.innerHTML += '<input id="e'+exe+'_inp1" class="input_number" type="text" value="ciudad">';
        
        divSelect.innerHTML += '<button id="e'+exe+'setCiudad" class="button_exe">set</button>';
        divSelect.innerHTML += '<button id="e'+exe+'get" class="button_exe">mostrar</button>';

        const button_setCiudad = document.getElementById("e"+exe+"setCiudad");
        button_setCiudad.addEventListener("click", () => { setCiudad(document.getElementById("e"+exe+"_inp1").value) });

        const button_get = document.getElementById("e"+exe+"get");
        button_get.addEventListener("click", () => { getPersona() });
    } else {
        buttonSelect.innerHTML = "activar";
        divSelect.innerHTML = "";
    }
}
