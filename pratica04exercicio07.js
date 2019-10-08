var i, n = parseInt(prompt("Informe um número"))

var soma = 0

for (i = 0; i <= n; i += 3) {
    soma = soma + i
    document.write(i + ", ")
}
document.write("= " + soma + "<br>")

var soma = 0
for (i = 0; i <= n; i += 5) {
    soma = soma + i
    document.write(i + ", ")
}
document.write("= " + soma + "<br>")

var soma = 0
console.log(("Potência base 2 no intervalo [0, " + n + "]:"))
for (i = 0; i <= n; i++) {
    soma = soma + Math.pow(2, i)
    document.write(Math.pow(2, i) + ", ")
}
document.write("= " + soma + "<br>")

var soma = 0
console.log(("Potência base Variável no intervalo [0, " + n + "]:"))

for (i = 0; i <= n; i++) {
    soma = soma + Math.pow(i, 3)
    document.write(Math.pow(i, 3) + ", ")
}
document.write("= " + soma)
