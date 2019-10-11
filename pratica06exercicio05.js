function valorVetor () {
    var i, vet = new Array (5)
    document.write("Posições do vetor dos valores de entrada com desconto de 10%: <br>")
    for(i = 0; i < vet.length; i++){
    vet[i] = parseFloat(prompt("Informe um número: "))
}
    for(i = 0; i < vet.length; i++) {
    document.write("- vet[" + i + "]" + ((vet[i] /100 * 90).toFixed(2)) + "<br>")
}
}