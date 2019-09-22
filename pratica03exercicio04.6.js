function calculaJurosComposto () {
    c = parseInt(prompt("Informe o capital inicial: "))
    if (c <= 0 | c == NaN)
        alert("O número tem que ser inteiro!")
    else
        t = parseInt(prompt("Informe o numero de dias: "))
            if (t <= 0 | t == NaN)
                alert("O número tem que ser inteiro!")
            else 
                i = parseFloat(prompt("Informe a taxa de juros: "))
                if (i <= 0 | i == NaN)
                    alert("O número tem que ser inteiro!")
                else
                    i = i / 100
                    m = c * Math.pow((1 + i), t)
                    document.write("O resultado é " + m)
}