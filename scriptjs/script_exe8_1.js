

export function exe8_1() {
    const div = document.getElementById("e8_1_div");
    const selector = document.getElementById("e8_1s");
    if (div.innerHTML == "") {
        selector.innerHTML = "desactivar";
        div.innerHTML =
            '<div class="box_vertical box_texto3">' +
            '   <p class="texto">Lista con elementos</p>' +
            '   <ul class="lista">' +
            '       <li id="e8_1_ele1">Elemento 1</li>' +
            '       <li id="e8_1_ele2">Elemento 2</li>' +
            '       <li id="e8_1_ele3">Elemento 3</li>' +
            '       <li id="e8_1_ele4">Elemento 4</li>' +
            '   </ul>' +
            '</div>';

        const ele1 = document.getElementById("e8_1_ele1");
        const ele2 = document.getElementById("e8_1_ele2");
        const ele3 = document.getElementById("e8_1_ele3");
        const ele4 = document.getElementById("e8_1_ele4");

        ele1.addEventListener("click", () => {
            console.log(ele1.innerHTML);
        });
        ele2.addEventListener("click", () => {
            console.log(ele2.innerHTML);
        });
        ele3.addEventListener("click", () => {
            console.log(ele3.innerHTML);
        });
        ele4.addEventListener("click", () => {
            console.log(ele4.innerHTML);
        });
    } else {
        selector.innerHTML = "activar";
        div.innerHTML = "";
    }
}
