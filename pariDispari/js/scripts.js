/*
Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
*/

const minimo = 1;
const massimo = 5;
const pari = "pari";
const dispari = "dispari";
let numeroFinale= "";

const utenteInput = prompt("Pari o dispari?");
console.log(utenteInput);

const sceltaUtente = utenteInput;
const sceltaPc = (Math.random() * (massimo - minimo + 1)) + minimo;

let numeroUtente = prompt("inserisci un numero da 1 a 5");
console.log(numeroUtente);

numeroUtente = parseFloat(numeroUtente);
console.log(numeroUtente);

const isValid = !isNaN(numeroUtente);

if (isValid) {
  console.log("Hai inserito un numero valido:", numeroUtente);

        if (utenteInput == pari || utenteInput == dispari) {

            const numeroRandomPc = Math.random() * 5;
            console.log(numeroRandomPc);
            numeroFinale = numeroRandomPc + numeroUtente;

                if(numeroFinale % 2 == 0) {
                    console.log("La somma è pari.");
                    if (utenteInput === pari) {
                      console.log("Complimenti! Hai vinto!");
                    } else {
                      console.log("Mi dispiace, hai perso!");
                    }
                  } else {
                    console.log("La somma è dispari.");
                    if (utenteInput === dispari) {
                      console.log("Complimenti! Hai vinto!");
                    } else {
                      console.log("Mi dispiace, hai perso!");
                    }
                  }
        } else {
            alert ("mi raccomando, inserisci solo dispari o pari!");
        }

} else {
  console.log("L'input non è un numero valido.");
}

let risultatoPari;
if (numeroFinale % 2 === 0) {
  console.log("La somma è pari.");
  risultatoPari = true;
} else {
  console.log("La somma è dispari.");
  risultatoPari = false;
}

if (utenteInput === pari && risultatoPari) {
  console.log("Complimenti! Hai vinto!");
} else if (utenteInput === dispari && !risultatoPari) {
  console.log("Complimenti! Hai vinto!");
} else {
  console.log("Mi dispiace, hai perso!");
}

