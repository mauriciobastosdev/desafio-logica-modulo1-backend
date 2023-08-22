function solucao(lista) {
    // seu codigo aqui
    let idadeMaisNovo = Infinity;
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] >= 18) {
            if (idadeMaisNovo > lista[i]) {
                idadeMaisNovo = lista[i]
            }
        }
    }
    if (idadeMaisNovo === Infinity) {
        console.log("CRESCA E APARECA")
    } else {
        console.log(idadeMaisNovo);
    }
}
