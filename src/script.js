let numeroAleatorio = 50;
let tentativas = 0;

function jogoDeAdivinhacao() {
    const PalpiteDigitado = pegarPalpiteDigitado();

    if (!PalpiteDigitado) {
        alert("Digite um valor válido")
        return; 
    }

    if (PalpiteDigitado === numeroAleatorio) {
        alert("Parabéns, você ganhou")
    } else if (PalpiteDigitado > numeroAleatorio) {
        atualizarFeedback("Esse número é muito maior, tente novamente")
    } else {
        atualizarFeedback("O número é muito baixo, tente de novo")
    }
}

function reiniciarJogo() {
    // to-do
}
