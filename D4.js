/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

// function area(base, altezza) {
//     return base * altezza
// }

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

// function crazySum(int1, int2) {
//     if (int1 === int2) {
//         let ritorno = int1 + int2
//         return3 + ritorno
//     } else {
//         return int1 + int2
//     }
// }

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
// function crazyDiff(intero) {
//     let ritorno = intero - 19
//     if (ritorno < 0) {
//         ritorno = ritorno * -1
//     }
//     return ritorno
// }

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

// function boundary(n) {

//     if (n > 20 && n <= 100) {
//         return true
//     }

//     if (n === 400) {
//         return true
//     }
// }

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

// function epify(stringParam) {
//     if (stringParam.indexOf("EPICODE") === 0) {
//         return stringParam
//     } else {
//         return "EPICODE " + stringParam
//     }
// }

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

// function check3and7(numPos) {
//     if (numPos < 1) {
//         console.log("Parametro non valido")
//         return
//     } else {
//         if (numPos % 3 === 0) {
//             console.log("Parametro check3and7 divisibile per 3")
//             return
//         }
//         if (numPos % 7 === 0) {
//             console.log("Parametro check3and7 divisibile per 7")
//             return
//         }
//         console.log("Parametro non divisibile per 3 o 7")
//     }
// }

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

// function reverseString(stringaDaRibaltare) {
//     let ritorno = ""
//     console.log("DataType stringaDaRibaltare " + typeof (stringaDaRibaltare))
//     console.log("ritorno datatype " + typeof (ritorno))
//     console.log("stringaDaRibaltare datatype " + typeof (stringaDaRibaltare))

//     for (let i = stringaDaRibaltare.length - 1; i >= 0; i--) {
//         ritorno = ritorno.concat(stringaDaRibaltare.substr(i, 1))
//         console.log(stringaDaRibaltare[i])
//     }
//     console.log("Return: " + ritorno)
// }

// reverseString("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dolorum maxime nesciunt. Esse deserunt repellat eius totam doloremque tempore corporis modi animi quam officia maiores, ab debitis magnam perferendis")

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(longString) {
    let ritorno = longString.charAt(0).toUpperCase();

    // non faccio i controlli se la stringa in ingresso è una frase formata da diverse parole perchè è appena iniziata la live di angelo cammaroto
    for (let index = 1; index < longString.length; index++) {
        if (longString.charAt(index - 1) === " " && longString.charAt(index) !== " ") {
            ritorno = ritorno + "" + (longString.charAt(index)).toUpperCase();
            console.log("Carattere [" + longString.charAt(index) + "] DataType " + typeof longString.charAt(index))
        }
        else {
            ritorno = ritorno.concat(longString.charAt(index));
        }
    }
    console.log("Ritorno: " + ritorno)
}


upperFirst("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dolorum maxime nesciunt. Esse deserunt repellat eius totam doloremque tempore corporis modi animi quam officia maiores, ab debitis magnam perferendis")

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

// function cutString(sliceThis){
//     return sliceThis.slice(1, -1);
// }

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

// function giveMeRandom(n) {
//     ritorno = ""
//     console.log(typeof ritorno)
//     for (let i = 0; i < n; i++) {
//         ritorno = ritorno.concat(Math.floor(Math.random() * 10))
//         console.log(Math.floor(Math.random() * 10))

//     }
//     console.log(ritorno)
// }

