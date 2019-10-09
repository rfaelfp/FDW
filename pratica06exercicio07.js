function mediaAritimetica () {
    var f, i = prompt("Informe a quantidade de entradas:")
    i = parseInt(i)
 var vet = new Array (i);
 for (i = 0; i < vet.length; i++) {
 vet[i] = prompt ("Informe um número: ")
 }
 var total = 0
 for (i = 0; i < vet.length; i++) {
     total += parseInt(vet[i])
 }
document.write ("A média aritmética é " + (total / i.toFixed(2)))
}