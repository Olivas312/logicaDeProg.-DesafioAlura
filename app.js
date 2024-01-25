alert("Bem vindo ao jogo do número secreto");
var numeroMaximo = 5000;
var numeroSecreto = parseInt(Math.random()*`${numeroMaximo}`+1);
var numeroEscolido ;
var tentativa = 1;

while(numeroEscolido != numeroSecreto){
    numeroEscolido = Number(prompt(`Escolha um número de 1 a ${numeroMaximo}`));
    if(numeroEscolido == numeroSecreto){
    alert(`Você encontrou o número secreto, com ${tentativa} tentativas`);
    }else{
        if(numeroEscolido < numeroSecreto){
        alert(`O número secreto é maior que o número ${numeroEscolido}`);
        }else{
        alert(`O número secreto é menor que o número ${numeroEscolido}`);
        }
        tentativa ++;  
    }
}