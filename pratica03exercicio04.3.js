function calculaLogaritimo () {
    var num1, num2, result 

    num1 = parseInt(prompt("Digite o primeiro número (logaritimando): "))
    if (num1 <= 0)
        alert("O número deve ser maior que zero!")
    else 
        num2 = parseInt(prompt("Digite segundo número (base): "))
        if (num2 <= 0)
        alert("O número deve ser maior que zero!")
        else
        result = (Math.log(num1) / Math.log(num2))
        document.write("<h1>Resultado: " + result + "</h1>")
}