function solucao(min, max, valores) {
    //seu codigo aqui
    let possiveis = [];
    for (let valor of valores) {
        if (valor >= min && valor <= max) {
            possiveis.push(valor)
        }
    }
    console.log(possiveis)
}

