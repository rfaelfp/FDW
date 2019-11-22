function verificaFormulario () {
    var formulario = document.forms["formularioCadastro"]
    var senha = formulario.senha.value
    var contraSenha = formulario.contraSenha.value
    var sexo = formulario.sexo.value
    var nome = formulario.nome.value
    var email = formulario.email.value
    var data = formulario.dataNascimento.value
    var controleCampos = true
    var controleSenha = true

    if (senha != contraSenha) 
        controleSenha = false 
    if (nome == "" || email == "" || data == "" || senha == "" || sexo == "selecione")
        controleCampos = false

    if (controleSenha == false) 
    alert("As senhas não combinam")
    if (controleCampos == false)
    alert("Gentileza preencher todos os campos")
    if (controleSenha == true && controleCampos == true)
    alert("Cadastrado") 

}

function reescrever () {
    if (site.value == "")
    site.value = "https://"
}
