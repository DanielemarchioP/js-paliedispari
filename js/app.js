//Chiedere all’utente di inserire una parola 
//Creare una funzione per capire se la parola inserita è palindroma. Questa funzione deve ricevere come input la
// parola inserita dall’utente e ritornare true se la parola è palindroma e false se la parola non è palindroma


const parola = prompt('inserisci una parola da controllare')  //string

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

function palindroma(text) {
    let newParola = ""


    for (let i = text.length - 1; i >= 0; i--) {
        newParola += text.charAt(i); // Aggiunge il carattere corrente alla nuova stringa
        
        }
        
        // console.log(newParola)
    
        if(text === newParola){
           return ('la parola e palindroma')
        } else {
           return ('la parola non e palindroma')
        }
}

const prova = palindroma(parola)

console.log(prova)



