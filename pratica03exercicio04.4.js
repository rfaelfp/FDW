function calculaArea () {
    var raio, area

    raio = parseFloat(prompt("Informe o valor do raio: "))

    area = Math.PI * raio * raio
    document.write("A área é: " + area)
}