let numeroAleatorio = 10;
let tentativas = 0;

function jogoDeAdivinhacao() {
    const PalpiteDigitado = pegarPalpiteDigitado();

    if (!PalpiteDigitado) {
        alert("Digite um valor válido")
        return; 
    }

    if (PalpiteDigitado === numeroAleatorio) {
        alert("Parabéns, você ganhou")
        reiniciarJogo();
        return;
    } else if (PalpiteDigitado > numeroAleatorio) {
        tentativas++;
        atualizarFeedback("Esse número é muito maior, tente novamente")
    } else {
        tentativas++;
        atualizarFeedback("O número é muito baixo, tente de novo")
    }
    const novaPontuacao = 100 - (tentativas*10);
    atualizarPontuacao(novaPontuacao)
    
    const palpitesFalhos = pegarPalpitesFalhos(); 
    const novosPalpitesFalhos = palpitesFalhos + "  " +  PalpiteDigitado; 
    atualizarPalpitesFalhos(novosPalpitesFalhos)
}

function reiniciarJogo() {
    const vaiReiniciar = confirm ("Deseja Reiniciar o jogo?");

    if (vaiReiniciar === true) {
        tentativas = 0; 
        atualizarPalpitesFalhos(" ");
        atualizarPontuacao(100);
        atualizarFeedback(" ");
        limparPalpiteDigitado( );

    }

}
