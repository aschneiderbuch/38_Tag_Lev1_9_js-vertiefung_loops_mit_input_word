console.log("test");

/* 

Frage

Array mit Wörtern
    Nur Wörter ins HTML   wenn  mit länge  =  Inputfeld Zahl

    loop 


    evtl.   weiteres Input   zum Wörter hinzufügen zum Array    
            push() ?


*/

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

let input = document.querySelector("#input");
let valueI = 0;
let button = document.querySelector("#button");

let output = document.querySelector("#output");

button.addEventListener("click", auslesen);


console.log(valueI);
console.log(input)

function auslesen() {
    valueI = Number(input.value);
console.log(words.length);    // 12 
    let runden = 0
    for (runden = 0; runden < words.length; runden = runden + 1) // macht 12 runden    
     {
        console.log(words.length)  // 12
        vergleichsWort = words[runden];  
        console.log(vergleichsWort);      // hallo Auto Waschmaschine Schrank Katze Beispiel Eltern Fenster Geb
        console.log(vergleichsWort.length);  // 5   4      13           7       5
       console.log(valueI)

        if (valueI === vergleichsWort.length){
            console.log(vergleichsWort);

            output.innerHTML = vergleichsWort;
        }
    }


}

auslesen();

console.log(Number(valueI));   // !!! wieso wird nicht der value zurück gegeben
console.log(input)
