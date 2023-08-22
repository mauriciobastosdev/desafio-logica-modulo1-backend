function solucao(numeros) {
    // seu codigo aqui
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    while (soma > numeros.length) {
        soma -= numeros.length;

    }
    console.log(soma);
}