let numeroAleatorio = Math.floor(Math.random()* 100) + 1;
let tentativas = 0;
let palpites = [];

function jogoDeAdivinhacao() {
    const PalpiteDigitado = pegarPalpiteDigitado();

    if (!PalpiteDigitado || isNaN(PalpiteDigitado)||PalpiteDigitado<1||PalpiteDigitado>100) {
        alert("Digite um valor válido entre 1 e 100")
        return; 
    }
    /*const erro 
    erro.includes ("12")
    true 
    erro.includes ("15")
    false
    */ 

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

    const pontuacaoAtual = pegarPontuacao(); 
    if (pontuacaoAtual === "Você tem 0 pontos")
        alert ("Deu ruim! Você perdeu.")
        reiniciarJogo();

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
