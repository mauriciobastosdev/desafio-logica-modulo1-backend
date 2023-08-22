function solucao(min, km) {
    //seu codigo aqui
    let valorBase = min * 0.50 + km * 0.70;
    if (km > 10) {
        valorBase -= (km - 10) * 0.20;
    }
    if (min > 20) {
        valorBase -= (min - 20) * 0.20;
    }
    console.log(Math.round(valorBase * 100));
}