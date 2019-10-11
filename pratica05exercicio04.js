function operacao (p) {
var operacao = p
    operacao = parseInt(operacao)

switch (operacao) {
    case 1:
    var base = document.getElementById ("base").value
    var altura = document.getElementById ("altura").value
    var soma = parseInt (base) * parseInt (altura)
    document.getElementById ("numeros").innerHTML = soma
  
    break
    case 2:
    var base = document.getElementById ("base").value
    var altura = document.getElementById ("altura").value
    var soma = (parseInt (base) * parseInt (altura)) / 2
    document.getElementById ("numeros").innerHTML = soma
    
    break
    case 3:
    var basemaior = document.getElementById ("base").value
    var basemenor = document.getElementById ("altura").value
    var altura = document.getElementById ("alturatrapezio").value
    var soma = (parseInt (basemaior) + parseInt (basemenor)) * parseInt(altura) / 2
    document.getElementById ("numeros").innerHTML = soma
    
    break
    default:
    console.log("Código Inválido")
}
}