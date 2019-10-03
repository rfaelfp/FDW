var i, n = parseInt(prompt("Informe um número"))
var soma = 0
var somatotal

for (i = 0; i <= n; i += 3)
    document.write(i + ", ")


document.write("<br>")
var soma = 0
console.log(("Multiplos de 5 no intervalo [0, " + n + "]:"))

for (i = 0; i <= n; i += 5)
    document.write(i + ", ")

document.write("<br>")
var soma = 0
console.log(("Potência base 2 no intervalo [0, " + n + "]:"))

for (i = 0; i <= n; i++)
    document.write(Math.pow(2, i) + ", ")


document.write("<br>")
var soma = 0
console.log(("Potência base Variável no intervalo [0, " + n + "]:"))

for (i = 0; i <= n; i++)
    document.write(Math.pow(i, 3) + ", ")


for (i = 0; i <= n; i += 3)
    soma = soma + i
document.write("= " + soma)

for (i = 0; i <= n; i += 5)
    soma = soma + i
document.write("= " + soma)

for (i = 0; i <= n; i++)
    soma = soma + Math.pow(2, i++)
document.write("= " + soma)

for (i = 0; i <= n; i++)
    soma = soma + Math.pow(i, 3)
document.write("= " + soma)

somatotal = soma
document.write(somatotal)