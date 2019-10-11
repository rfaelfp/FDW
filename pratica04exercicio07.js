var i, n = parseInt(prompt("Informe um número"))
 function quatroEmUm () {
var soma = 0

for (i = 1; i <= n; i += 3) {
    soma = soma + i
    document.write(i + " - ")
}
document.write("<br> O valor total é: " + soma + "<br>")

var soma = 0
for (i = 1; i <= n; i += 5) {
    soma = soma + i
    document.write(i + " - ")
}
document.write("<br>O valor total é: " + soma + "<br>")

var soma = 0
for (i = 1; i <= n; i++) {
    soma = soma + Math.pow(2, i)
    document.write(Math.pow(2, i) + " - ")
}
document.write("<br>O valor total é: " + soma + "<br>")

var soma = 0

for (i = 1; i <= n; i++) {
    soma = soma + Math.pow(i, 3)
    document.write(Math.pow(i, 3) + " - ")
}
document.write("<br>O valor total é: " + soma)
}