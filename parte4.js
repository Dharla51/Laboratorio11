const NumAle = Math.floor(Math.random() * 10) + 1;
let Num = parseInt(prompt("DIGITA EL NUMERO:  "));

if (Num === NumAle) {
console.log("¡FELICIDADES, ADIVINASTE EL NUMERO!");
document.write("¡FELICIDADES, ADIVINASTE EL NUMERO!");
} 
else {
console.log("LO SIENTO, EL NUMERO ERA " + NumAle);
document.write("LO SIENTO, EL NUMERO ERA " + NumAle);
}
