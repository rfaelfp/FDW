function maiorMenor () {

var num1, num2, maior, menor, resp

num1 = parseFloat(prompt("Informe o primeiro número:"))
if (num1 <= 0){
alert("O número deve ser maior que zero!")
resp=confirm("Deseja tentar novamente?")}
if (resp == false){
alert("Fim")}

else
num2 = parseFloat(prompt("Informe o segundo número:"))
if (num2 <= num2){
alert("O número deve ser maior que o primeiro!")
confirm("Deseja tentar novamente?")}
else {
menor = Math.min(num1, num2)
maior = Math.max(num1, num2)
document.write("O menor número é: " + menor + "<br>")
document.write("O maior número é: " + maior + "<br>")

maior = Math.sqrt(maior)
menor = Math.pow(menor, 2)
document.write("O menor número elevado ao quadrado é: " + menor + "<br>")
document.write("A raíz quadrada do maior número é: " + maior)
confirm("Deseja tentar novamente?")}
}
