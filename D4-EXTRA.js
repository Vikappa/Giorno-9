// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/


// function checkArray(inputAr = []) {

//     let ritorno = 0

//     for (let index = 0; index < inputAr.length; index++) {
//         if (inputAr[index] > 5) {
//             ritorno += inputAr[index]
//             console.log(inputAr[index] + " è maggiore di 5")
//         } else {
//             console.log(inputAr[index] + " minore o uguale a 5")
//         }
//     }

//     return ritorno
// }

// checkArray([5, 12, 7, 18])

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

// function shoppingCart(cartArray = []) {
//     let totPrize = 0
//     for (let i = 0; i < cartArray.length; i++) {
//         prodottoInAnalisi = cartArray[i]
//         totPrize += prodottoInAnalisi.price * prodottoInAnalisi.quantity
//     }
//     return totPrize
// }

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

// function addToShoppingCart(oggettoCarrello) {
//     for (let i = 0; i < shoppingCart.length; i++) {
//         if (
//             oggettoCarrello.name === shoppingCart[i].name
//         ) {
//             shoppingCart[i].quantity++
//         }
//     }
// }

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

// function maxShoppingCart(shoppingCart) {
//     const record = {
//         index: 0,
//         prezzo: 0,
//     }

//     record.price = shoppingCart[0].price

//     for (let i = 0; i < array.length; i++) {
//         if (shoppingCart[i].price > record.price) {
//             record.price = shoppingCart[i].price
//             record.index = i
//         }
//     }
//     return shoppingCart[record.index]
// }

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

// function latestShoppingCart(shoppingCart) {
//     return latestShoppingCart[latestShoppingCart.length - 1]
// }

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

// function loopUntil(numIntero) {
//     maggioreDiX = 0

//     while (maggioreDiX < 3) {
//         let numeroCasuale = Math.floor(Math.random() * 10);
//         console.log(numeroCasuale)
//         if (numeroCasuale > numIntero) {
//             maggioreDiX++
//         } else {
//             maggioreDiX = 0
//         }
//     }
// }

// loopUntil(6)

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

// function average(arrayParametro) {

//     let nValori = arrayParametro.length - 1
//     let sommaVal = 0;

//     for (let i = 0; i < arrayParametro.length; i++) {
//         sommaVal += arrayParametro[i]
//     }

//     return sommaVal / nValori

// }

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

// function longest(stringArray = []) {
//     const record = {
//         index: 0,
//         length: 0,
//     }

//     record.length = stringArray[0].length

//     for (let i = 1; i < stringArray.length; i++) {
//         if(record.length<stringArray[i].length){
//             record.index = i
//             record.length = stringArray[i].length
//         }
//     }
//     return stringArray[record.index]
// }

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
// antiSpam("We we leggite ssu scam")

// function antiSpam(emailContent) {
//     let toScan = emailContent.toLowerCase()
//     if (toScan.indexOf("spam") === -1 && toScan.indexOf("scam") === -1) {
//         console.log("Safe")
//         return true
//     }
//     else {
//         console.log("Spam")
//         return false
//     }
// }

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
