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
let button = document.querySelector("#button");

let output = document.querySelector("#output");

button.addEventListener("click", auslesen);


//console.log(input)

function auslesen(event) {
    event.preventDefault();
    
    let valueI = Number(input.value);
    // console.log(words.length);    // 12 
    for (let rundenIndex = 0; rundenIndex < words.length; rundenIndex = rundenIndex + 1) // macht 12 runden    
    {
        //console.log(words.length)  // 12
        let vergleichsWort = words[rundenIndex];
        //    console.log(vergleichsWort);      // hallo Auto Waschmaschine Schrank Katze Beispiel Eltern Fenster Geb
        //    console.log(vergleichsWort.length);  // 5   4      13           7       5
        // console.log(valueI)

        if (valueI === vergleichsWort.length) {
            //console.log(vergleichsWort);
            output.innerHTML += vergleichsWort + " ";
            // console.log(vergleichsWort); 
        }
    }
    output.innerHTML += "<br>";   // damit nach komplette ausgabe in neuen Zeile 



}

let button_input = document.querySelector("#button_input");

button_input.addEventListener("click", (event) => {
event.preventDefault()

let valueString = String(input.value)
console.log(valueString);
console.log(words);
console.log(words.length);
words.push(valueString);
console.log(words);
console.log(words.length);

}
)
