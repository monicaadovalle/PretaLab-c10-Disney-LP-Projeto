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
        tentativas++;
        atualizarFeedback("Esse número é muito maior, tente novamente")
    } else {
        tentativas++;
        atualizarFeedback("O número é muito baixo, tente de novo")
    }
    const novaPontuacao = 100 - (tentativas*10);
    atualizarPontuacao(novaPontuacao)
    console.log (tentativas)

}

function reiniciarJogo() {
    // to-do
}
