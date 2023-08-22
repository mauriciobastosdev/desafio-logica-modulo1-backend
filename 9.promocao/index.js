function solucao(precos) {
    //seu codigo aqui
    let valorTotal = 0;
    let produtoMaisBarato = precos[0];
    for (let preco of precos) {
        if (preco < produtoMaisBarato) {
            produtoMaisBarato = preco;
        }
        valorTotal += preco;
    }
    if (precos.length >= 3) {
        valorTotal -= produtoMaisBarato / 2;
    }
    console.log(valorTotal);
}