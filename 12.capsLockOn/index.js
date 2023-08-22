function processData(input) {
    let restoPalavra = input.slice(1, input.length)
    if (input.length == 1) {
        input = input.toUpperCase()
    } else if (input[0] === input[0].toLowerCase() && input[1] === input[1].toUpperCase()) {
        console.log(input[0].toUpperCase() + restoPalavra.toLowerCase())
    } else if (input[0] === input[0].toUpperCase() && input[1] === input[1].toUpperCase()) {
        console.log(input[0].toLowerCase() + restoPalavra.toLowerCase())
    } else {
        console.log(input)
    }
}