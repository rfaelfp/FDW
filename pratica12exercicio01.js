function esconderInfo () {
    info.style.visibility = "hidden";
}

function mostrarInfo (opcao) {
    var descricao = ""
    var sinopse = ""
    var horario = ""
    info.style.visibility = "visible";
    window.location.href='#logo'

switch (opcao) {
    case "filme1":
        descricao = "Ford vs Ferrari"
        sinopse = "Os vencedores do Oscar, Matt Damon e Christian Bale estrelam Ford Vs Ferrari, a incrível história real do visionário designer automotivo americano Carroll Shelby (Damon) e do destemido piloto britânico Ken Miles (Bale). Juntos, eles lutaram contra o domínio corporativo, as leis da física e seus próprios demônios pessoais para construir um carro de corrida revolucionário para a Ford Motor Company, assumir o controle das pistas e derrotar os carros dominantes de Enzo Ferrari, nas 24 Horas de Le Mans, na França em 1966."
        horario = "Legendado em português - 2D - 11:30, 14:40, 17:50 e 21:00"
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
    info3.innerHTML = sinopse
    info4.innerHTML = horario
}