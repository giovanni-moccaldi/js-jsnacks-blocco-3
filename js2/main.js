numbers = [];
// console.log(numbers)
let ask = parseInt(prompt("scegli un numero"));

i = 0
arrivatia50 = false;
while (numbers.lenght < 50 && !arrivatia50) {

    const numeri = numbers[i];
    ask.append(numeri);
    if (numeri < 50) {
        arrivatia50 = true;
    }

    i++
}