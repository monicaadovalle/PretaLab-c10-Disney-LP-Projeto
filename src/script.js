let numeroAleatorio = Math.floor(Math.random()* 100) + 1;
let tentativas = 0;
let palpites = [];

function jogoDeAdivinhacao() {
    const PalpiteDigitado = pegarPalpiteDigitado();

    if (!PalpiteDigitado || isNaN(PalpiteDigitado)||PalpiteDigitado<1||PalpiteDigitado>100) {
        alert("Digite um valor válido entre 1 e 100")
        return;
    
    }
    if (palpites.includes(PalpiteDigitado)) {
        alert("Você ja tentou este palpite. Tente novamente com um número diferente.")
        return;
    }
    palpites.push(PalpiteDigitado);

    if (PalpiteDigitado === numeroAleatorio) {
        alert("Parabéns, você ganhou")
        reiniciarJogo();
        return;
    } else if (PalpiteDigitado > numeroAleatorio) {
        tentativas++;
        atualizarFeedback("Esse número é muito maior, tente novamente")
    } else {
        tentativas++;
        atualizarFeedback("O número é muito baixo, tente de novo amore")
    }
    const novaPontuacao = 100 - (tentativas*10);
    atualizarPontuacao(novaPontuacao)
    
    const palpitesFalhos = pegarPalpitesFalhos(); 
    const novosPalpitesFalhos = palpitesFalhos + "  " +  PalpiteDigitado; 
    atualizarPalpitesFalhos(novosPalpitesFalhos)

    const pontuacaoAtual = pegarPontuacao(); 
    if (pontuacaoAtual === "Você tem 0 pontos")
        alert ("Deu ruim! Você perdeu.")
        reiniciarJogo(pontuacaoAtual = 0); // Para altera
}
 
function reiniciarJogo(pontuacaoAtual=0) {
    const vaiReiniciar = confirm ("Deseja Reiniciar o jogo?");
    if (vaiReiniciar === true) {
        tentativas = 0;
        palpites = [] 
        atualizarPalpitesFalhos(" ");
        atualizarPontuacao(100);
        atualizarFeedback(" ");
        limparPalpiteDigitado(" ");
    }

}
