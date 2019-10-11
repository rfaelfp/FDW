function calculaJurosComposto () {
let c, t, i, m
    c = parseFloat(prompt("Informe o capital inicial: "))
    if (c <= 0)
        alert("O número tem que ser inteiro!")
    else
        t = parseFloat(prompt("Informe o numero de dias: "))
            if (t <= 0)
                alert("O número tem que ser inteiro!")
            else 
                i = parseFloat(prompt("Informe a taxa de juros: "))
                if (i <= 0)
                    alert("O número tem que ser inteiro!")
                else
                    i = i / 100
                    m = c * Math.pow((1 + i), t)
                    document.write("O resultado é " + m)
}