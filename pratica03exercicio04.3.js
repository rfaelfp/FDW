var num1, num2, resp

num1 = parseInt(prompt("Digite o primeiro número: "))
if (num1 <= 0)
    alert("O número deve ser maior que zero!")
else 
    num2 = parseInt(prompt("Digite segundo número: "))
    if (num2 <= 0)
    alert("O número deve ser maior que zero!")
else
    Math.log(num1, num2)

