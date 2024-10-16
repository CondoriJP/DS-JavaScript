export function exe6_2() {
    let pares = [];

    for (let i=1; i<=20; i++) {
        if (i % 2 == 0) {
            pares.push(i);
        }
    }

    console.log("Primeros 10 números pares: "+pares);
}
