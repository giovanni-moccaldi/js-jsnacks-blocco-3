// chiedere numeri
// chiedo all'utente un numero minimo
let numero1 = parseint(prompt("scegli un numero"));
// chiedo all'utente un numero massimo
let numero2 = parseint(prompt("scegli un altro numero"));
// console.log(numero1);
// console.log(numero2);
// genero un numero compreso tra il valore minimo ed il valore massimo forniti dall'utente
let valorerandom = Math.floor(Math.random() * 50) + 1;
while (valorerandom >= numero1 && valorerandom <= numero2) {

    console.log(valorerandom);

}


