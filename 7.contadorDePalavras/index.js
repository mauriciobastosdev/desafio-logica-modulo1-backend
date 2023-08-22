

function solucao(texto) {
    // Seu codigo aqui
    let contador = 0;
    let dentroPalavra = false;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === ' ' || texto[i] === '\t' || texto[i] === '\n') {
            dentroPalavra = false;
        } else if (!dentroPalavra) {
            dentroPalavra = true;
            contador++;
        }
    }
    console.log(contador)
}
