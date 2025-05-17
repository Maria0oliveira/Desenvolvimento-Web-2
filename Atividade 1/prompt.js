const palavra = prompt ("Digite uma palavra:");
const length = palavra.length;
    let i = 0;
function verificarPalindromo (palavra){
    if (palavra === palavra.split("").reverse().join("")){
        console.log ("A palavra " + palavra + " é um palíndromo.");
    } else {
        console.log ("A palavra " + palavra + " não é um palíndromo.");
    }
}
verificarPalindromo("Ana");
verificarPalindromo("celular")