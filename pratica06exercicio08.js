function menorMaiorVet() {
    var i = prompt("Informe a quantidade de entradas:")
    i = parseInt(i)
    var vet = new Array(i);
    for (i = 0; i < vet.length; i++){
        vet[i] = prompt("Informe um número: ")
    }
    var i = Math.max.apply(null, vet)
    document.write(i)        
}