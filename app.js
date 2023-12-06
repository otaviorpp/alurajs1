alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Tente adivinhar o número de 1 até 100.");
    if (chute == numeroSecreto) {
        break; // quebra o WHILE e sai das chaves dessa condição de ENQUANTO, portanto a proxima linha a ser lida será fora das chaves
    }
    else {
        let palavraDica = chute > numeroSecreto ? 'menor' : 'maior'
        alert(`O número secreto é ${palavraDica} do que ${chute}`);

        // if (chute > numeroSecreto) {
        //     alert('O número secreto é menor do que '+ chute);
        // }
        // else {
        //     alert('O número secreto é maior do que '+ chute);
        // }

        // tentativas = tentativas + 1;

        tentativas++
    }
}

// if(tentativas > 1) {
//     alert(`Você acertou em ${tentativas} tentativas! O número era ${numeroSecreto}`);
// }
// else {
//     alert(`Você acertou em ${tentativas} tentativa! O número era ${numeroSecreto}`);
// }

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';   
alert(`Você acertou em ${tentativas} ${palavraTentativa}! O número era ${numeroSecreto}`);

