let libro = {
    titulo: "",
    autor: "",
    anio: 0,
}

function setLibro(titulo, autor, anio) {
    libro.titulo = titulo;
    libro.autor = autor;
    libro.anio = anio;
}

function getLibro() {
    console.log("titulo: "+libro.titulo+", autor: "+libro.autor+", año: "+libro.anio);
}

function esAntiguo(anio){
    if (anio > 10) {
        return true;
    } else {
        return false;
    }
}

export function exe5_2() {
    let exe = "5_2";
    const divSelect = document.getElementById("e"+exe+"_div");
    const buttonSelect = document.getElementById("e"+exe+"s");
    if (divSelect.innerHTML == "") {
        buttonSelect.innerHTML = "desactivar";

        divSelect.innerHTML += '<input id="e'+exe+'_inp1" class="input_text" type="text" value="titulo">'; 
        divSelect.innerHTML += '<input id="e'+exe+'_inp2" class="input_text" type="text" value="autor">'; 
        divSelect.innerHTML += '<input id="e'+exe+'_inp3" class="input_number" type="number" value=0>'; 
        divSelect.innerHTML += '<button id="e'+exe+'setLibro" class="button_exe">set</button>';
        divSelect.innerHTML += '<button id="e'+exe+'getLibro" class="button_exe">mostrar</button>';
        divSelect.innerHTML += '<button id="e'+exe+'calc" class="button_exe">calcular</button>';

        const button_setLibro = document.getElementById("e"+exe+"setLibro");
        button_setLibro.addEventListener("click", () => { 
            let titulo = document.getElementById("e"+exe+"_inp1").value;
            let autor = document.getElementById("e"+exe+"_inp2").value;
            let anio = document.getElementById("e"+exe+"_inp3").value;
            setLibro(titulo, autor, anio);
        });

        const button_getLibro = document.getElementById("e"+exe+"getLibro");
        button_getLibro.addEventListener("click", () => { getLibro() });

        const button_calc = document.getElementById("e"+exe+"calc");
        button_calc.addEventListener("click", () => { 
            console.log('El libro "'+libro.titulo+'" es antiguo: '+esAntiguo(libro.anio));
        });
    } else {
        buttonSelect.innerHTML = "activar";
        divSelect.innerHTML = "";
    }
}
