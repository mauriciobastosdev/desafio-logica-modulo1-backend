function solucao(carta) {
    //seu codigo aqui
    const tabelaManilhas = {
        Q: 'J',
        J: 'K',
        K: 'A',
        A: '2',
        2: '3',
        3: 'Q'
    };
    const manilha = tabelaManilhas[carta]
    console.log(manilha)

}
