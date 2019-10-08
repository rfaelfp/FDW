function somar () {
    var n1 = document.getElementById ("primeiroNumero").value
    var n2 = document.getElementById ("segundoNumero").value
    var soma = parseInt (n1) + parseInt (n2)
    document.getElementById ("soma").innerHTML = soma
}
function subtrair () {
    var n1 = document.getElementById ("primeiroNumero").value
    var n2 = document.getElementById ("segundoNumero").value
    var subtrair = parseInt (n1) - parseInt (n2)
    document.getElementById ("subtrair").innerHTML = subtrair
}
function multiplicar () {
    var n1 = document.getElementById ("primeiroNumero").value
    var n2 = document.getElementById ("segundoNumero").value
    var multiplicar = parseInt (n1) * parseInt (n2)
    document.getElementById ("multiplicar").innerHTML = multiplicar
}
function dividir () {
    var n1 = document.getElementById ("primeiroNumero").value
    var n2 = document.getElementById ("segundoNumero").value
    var dividir = parseInt (n1) / parseInt (n2)
    document.getElementById ("dividir").innerHTML = dividir
}
function potencia () {
    var n1 = document.getElementById ("primeiroNumero").value
    var n2 = document.getElementById ("segundoNumero").value
    var potencia = Math.pow(n1, n2)
    document.getElementById ("potencia").innerHTML = potencia
}
