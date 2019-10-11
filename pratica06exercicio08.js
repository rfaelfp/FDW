function menorMaiorVet() {
    var i = prompt("Informe a quantidade de entradas:")
    i = parseInt(i)
    var vet = new Array(i);
    for (i = 0; i < vet.length; i++){
        vet[i] = prompt("Informe os números de entrada: ")
    }
    var i = Math.max.apply(null, vet)
    document.write("O maior número do vetor é: " + i)        
}