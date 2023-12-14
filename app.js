alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Tente adivinhar o número de 1 até ${numeroMaximo}.`);
    if (chute == numeroSecreto) {
        break; // quebra o WHILE e sai das chaves dessa condição de ENQUANTO, portanto a proxima linha a ser lida será fora das chaves
    }
    else {
        let palavraDica = chute > numeroSecreto ? 'menor' : 'maior'
        alert(`O número secreto é ${palavraDica} do que ${chute}`);
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';   
alert(`Você acertou em ${tentativas} ${palavraTentativa}! O número era ${numeroSecreto}`);

