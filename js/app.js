//Chiedere all’utente di inserire una parola 
//Creare una funzione per capire se la parola inserita è palindroma. Questa funzione deve ricevere come input la
// parola inserita dall’utente e ritornare true se la parola è palindroma e false se la parola non è palindroma






// PROVA PER LA FUNZIONE

// const parola = prompt('inserisci una parola da controllare')  //string
// let newParola = ""
// for (let i = parola.length - 1; i >= 0; i--) {
//     newParola += parola.charAt(i); // Aggiunge il carattere corrente alla nuova stringa
    //     }
    //     console.log(newParola)

//     if(parola === newParola){
//         console.log('la parola e palindroma')
//     } else {
//         console.log('la parola non e palindroma')
//     }




// const parola = prompt('inserisci una parola da controllare')  //string
// function palindroma(text) {
//     let newParola = ""


//     for (let i = text.length - 1; i >= 0; i--) {
//         newParola += text.charAt(i); // Aggiunge il carattere corrente alla nuova stringa
        
//         }
        
//         // console.log(newParola)
    
//         if(text === newParola){
//            return ('la parola e palindroma')
//         } else {
//            return ('la parola non e palindroma')
//         }
// }

// const prova = palindroma(parola)

// console.log(prova)








function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }


// sommiamo i due numeri e controlliamo se sono pari o dispari tramite funzione
function moduloNumber(num1){
let moduloNumero = num1 % 2

if ( moduloNumero === 0 ){
   return ('pari')  //  numero e pari
} else {
    return ('dispari') //  numero e dispari 
}

}



const numInserito = parseInt(prompt('inserisci un numero pari o dispari compreso da 1 a 5'))
console.log('il numero inserito e :', moduloNumber(numInserito))

const controlloNumInserito = moduloNumber(numInserito)   // PARI O DISPARI NUMERO INSERITO 


const randomNumber = getRandomIntInclusive(1,5)
const controlloNumRandom = moduloNumber(randomNumber)    // PARI O DISPARI NUMERO RANDOM
console.log(randomNumber)
console.log('il numero randomico e :', moduloNumber(randomNumber))


const somma = numInserito + randomNumber
const controllo = moduloNumber(somma)
console.log(' la somma e : ' , controllo)

if(controlloNumInserito !== controlloNumRandom){

    if ( controllo === controlloNumInserito && controllo !== controlloNumRandom){
    console.log('ha vinto il giocatore')
    } else if (controllo === controlloNumRandom && controllo !== controlloNumInserito) {
    console.log('ha vinto il pc')
    }
} else{
    console.log('partita finita in parita')
}

















// const moduloInserito = numInserito % 2
// console.log(moduloInserito)
// const moduloRandom = randomNumber % 2
// console.log(moduloRandom)

// if ( moduloInserito === 0 && sum === true && moduloRandom !== 0 ){

//     console.log('ha vinto il giocatore' )
    

// } else if ( moduloRandom === 0 && sum === true && moduloInserito !== 0){
//     console.log('ha vinto il pc')





