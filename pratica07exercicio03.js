function notaMedia (param) {
    diferenca = (param.getElementsByClassName("total")[0].innerHTML - document.getElementById("mediaweb").innerHTML)
    document.getElementById("resultadomedia").innerHTML = "A diferença da média com o total é " + diferenca.toFixed(2)
    media = document.getElementById("mediaweb").innerHTML
    if (param.getElementsByClassName("total")[0].innerHTML <= media)
        document.getElementById("resultado").innerHTML = "Aluno com nota abaixo da média"
    else
        document.getElementById("resultado").innerHTML = "Aluno com nota acima da média"
}
function notaMedia2 (param) {
    diferenca = (param.getElementsByClassName("total")[0].innerHTML - document.getElementById("mediaProgramacao").innerHTML)
    document.getElementById("resultadomedia").innerHTML = "A diferença da média com o total é " + diferenca.toFixed(2)
    media = document.getElementById("mediaProgramacao").innerHTML
    if (param.getElementsByClassName("total")[0].innerHTML <= media)
        document.getElementById("resultado").innerHTML = "Aluno com nota abaixo da média"
    else
        document.getElementById("resultado").innerHTML = "Aluno com nota acima da média"
}

