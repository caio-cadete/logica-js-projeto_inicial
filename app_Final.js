alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random()*numeroMaximo + 100); // Math.random por padrão gera um número aleatório decimal de 0 (inclusivo) e 1 de forma pseudo aleatória, então *100 temos 3 casas decimais.
console.log(numeroSecreto);

let numeroDigitado; // Definição de variável sem valor
let tentativas = 1;
console.log(numeroSecreto.length);


while (numeroDigitado != numeroSecreto) {
    numeroDigitado = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (numeroDigitado == numeroSecreto) {
    } else {
        if (numeroDigitado > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroDigitado}`);
        } else { (numeroDigitado < numeroSecreto) 
            alert(`O número secreto é maior que ${numeroDigitado}`);
        }        
        tentativas ++; // Dentro do bloco 'else', caso a pessoa não tenha descoberto o número secreto. 
                       // tentativas = tentativas + 1
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa'; // Operador Ternário
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
