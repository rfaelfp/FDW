function aprovadoReprovado (param) {
    if(param.getElementsByClassName("total")[0].innerHTML >= 70 && param.getElementsByClassName("faltas")[0].innerHTML < 3)
    document.getElementById("resultado").innerHTML = "Aprovado"
    else
        document.getElementById("resultado").innerHTML = "Reprovado"
}