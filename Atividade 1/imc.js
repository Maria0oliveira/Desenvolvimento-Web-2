function calcularIMC(peso,altura){
    const imc = peso / (altura * altura);
    let mensagem = "";
    if(imc <18.5){
        mensagem = "Abaixo do peso";}
    else if(imc >= 18.5 && imc <24){
        mensagem = "Peso normal";}
    else if(imc >= 24 && imc <30){
        mensagem = "Sobrepeso";}
    else if(imc >= 30 && imc <40){
        mensagem = "Obesidade";}
    return mensagem + " - IMC: " + imc.toFixed(2);
}

console.log (calcularIMC(70, 1.75))