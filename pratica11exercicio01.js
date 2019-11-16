function verificaFormulario () {
    var formulario = document.forms["formularioCadastro"]
    var nome = formulario.nome.value
    var email = formulario.email.value
    var mensagem = formulario.mensagem.value

    if (nome != "" && email != "" && mensagem != "") {
    alert("Enviado!")
    }    
    else 
    alert("Os campos nome, e-mail e mensagem são obrigatórios.")
    return false

}