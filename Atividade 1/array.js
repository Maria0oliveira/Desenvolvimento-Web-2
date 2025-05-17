let numeros = ["3","7","2","9","4"];
    const maior=Math.max(3,7,2,9,4);
    const menor=Math.min(3,7,2,9,4);

console.log ("Maior número:" + maior);
console.log ("Menor número:" + menor);

let dobro = numeros.map(function(numero){
    return Number(numeros) * 2;
});

console.log ("Dobro dos números será:" + dobro);
    
const numerosMaioresQue5 = numeros.filter(function(numero) {
    return Numeros  (numeros) >5;
})