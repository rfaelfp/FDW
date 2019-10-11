function fahreheintToCelsius () {
    var f, c
    f = parseFloat(prompt("Informe a temperatura em Fahrenheit:"))

    c = (5 / 9) * (f - 32)
    document.write("A conversão de " + f +  "°F para graus celsius é: " + c.toFixed(2) + "°C")
}