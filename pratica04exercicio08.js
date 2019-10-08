function somaNumeros() {
var num, contro, soma
soma = 0

num = parseInt(prompt("Informe um número natural:"))
if (num <= 1)
    alert("Não se trata de um número natural")
    else
    for (contro = 0; contro <= num; contro++) {
    if (contro % 2 != 0)
    document.write(contro + "<br>")
    if (contro % 2!= 0)
    soma = contro + soma
}
document.write("O total dos números ímpares é: " + soma)
}