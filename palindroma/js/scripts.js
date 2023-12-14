/*
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/

let text = prompt("Per favore inserisci la parola");
console.log(text);

let textInverted = "";

function palindromo (text) {

    for (let i = text.length - 1; i >= 0; i--) {

        textInverted = textInverted + text[i];
        console.log(textInverted);
    }

    if (text == textInverted){
        
        return true;

    } else {
        return false;
    }

}

console.log(palindromo(text));