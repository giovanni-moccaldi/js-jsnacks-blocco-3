numbers = [];
console.log(numbers)

let ask = parseInt(prompt("scegli un numero"));
// console.log(ask)


i = 0
arrivatia50 = false;
while (ask > 50 && !arrivatia50) {

    const numeri = numbers[i];
    let somma = numeri + ask;
    console.log(somma)

    if (somma < 50) {
        arrivatia50 = true;
    }

    i++
}