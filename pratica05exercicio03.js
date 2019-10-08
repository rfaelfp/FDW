function pares () {
    var vetor = []
    var n1 = document.getElementById ("primeiroNumero").value
    if (n1 <= 0)
    alert("O primeiro número deve ser maior que zero!")
    else
    var n2 = document.getElementById ("segundoNumero").value
    if (n2 <= n1)
    alert("O segundo número deve ser maior que o primeiro")
    else
    for (n1; n1 <= n2; n1++) {
    if (n1 % 2 == 0)
    vetor = vetor + n1 + ", "
    }
    document.getElementById ("numeros").innerHTML = vetor
    
    //var soma = parseInt (n1) + parseInt (n2)
    //document.getElementById ("soma").innerHTML = soma
}