function verificaFormulario () {
    var formulario = document.forms["formularioCadastro"]
    var senha = formulario.senha.value
    var contraSenha = formulario.contraSenha.value
    var sexo = formulario.sexo.value
    var nome = formulario.nome.value
    var email = formulario.email.value
    var data = formulario.dataNascimento.value
    var contraSenha = formulario.contraSenha.value

    if (senha != contraSenha) {
        alert("Senhas diferentes")
    }
    if (sexo == "selecione") {
        alert("Gentileza escolher o sexo")
    }
    if (nome.value != "" && email.value != "" && data.value != "")
    alert("Cadastrado!")
    else 
    alert("Preencher todos os campos")
}

function reescrever () {
    if (site.value == "")
    site.value = "https://"
}
