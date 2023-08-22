function solucao(jogadores) {
    //seu codigo aqui
    const jogadas = { 0: 0, 1: 0 };
    let nome = "NINGUEM"
    for (const jogador of jogadores) {
        jogadas[jogador.jogada]++;
    }
    for (const jogador of jogadores) {
        if (jogadas[jogador.jogada] === 1) {
            nome = jogador.nome;
            break;
        }
    }
    console.log(nome)
}