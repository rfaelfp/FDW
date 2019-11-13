function verificaFormulario () {
    var formulario = document.forms["formularioCadastro"]
    var senha = formulario.senha.value
    var contraSenha = formulario.contraSenha.value
    var sexo = formulario.sexo.value

    if (senha != contraSenha) {
        alert("Senhas diferentes")
        return false }
    if (sexo == "selecione") {
        alert("Gentileza escolher o sexo")
        return false
    }
}

function reescrever () {
    if (site.value == "")
    site.value = "https://"
}