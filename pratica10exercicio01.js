function esconderInfo () {
    info.style.visibility = "hidden";
}

function mostrarInfo (opcao) {
    var descricao
    info.style.visibility = "visible";
    window.location.href='#logo'

switch (opcao) {
    case "rio":
        descricao = "Informações do Rio de Janeiro. Orçamento do Rio de Janeiro."
        break;
    case "bali":
        descricao = "Informações de Bali. Orçamento de Bali."
        break;
    case "londres":
        descricao = "Informações de Londres. Orçamento de Londres."
        break;
    case "sydney":
        descricao = "Informações de Sydney. Orçamento de Sydney."
        break;
    case "lisboa":
        descricao = "Informações de Lisboa. Orçamento de Lisboa."  
        break;
    case "amsterdam":
        descricao = "Informações de Amsterdam. Orçamento de Amsterdam."
        break;
    default:
        break;
}
    info2.innerHTML = descricao
}