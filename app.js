alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 50;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto não acertar o número secreto
while (chute != numeroSecreto) {
    chute = prompt("Tente adivinhar o número de 1 até 100.");
    if (chute == numeroSecreto) {
        alert(`Você acertou em ${tentativas} tentativas! O número era ${numeroSecreto}`);
        // outra opção correta seria:
        // alert('Você acertou! O número era ' + numeroSecreto)
    }
    else {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor do que '+ chute);
        }
        else {
            alert('O número secreto é maior do que '+ chute);
        }
        // tentativas = tentativas + 1;
        tentativas++
    }
}




