var base, altura
var operacao = (
            [1] + document.getElementById ("aretangulo") == true +
            [2] + document.getElementById ("aretangulo") == true +
            [3] + document.getElementById ("aretangulo") == true
            )
switch (operacao) {
    case 1:
    function aretangulo () {
    var base = document.getElementById ("base").value
    var altura = document.getElementById ("altura").value
    var soma = parseInt (base) * parseInt (altura)
    document.getElementById ("numeros").innerHTML = soma
}
    break
    case 2:
    console.log(n1 + " - " + n2 + " = " + (n1 - n2))
    break
    case 3:
    console.log(n1 + " * " + n2 + " = " + (n1 * n2))
    break
    default:
    console.log("Código Inválido")
}