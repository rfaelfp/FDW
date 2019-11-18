function esconderInfo () {
    info.style.visibility = "hidden";
}

function mostrarInfo (opcao) {
    var descricao = ""
    var sinopse = ""
    var horario = ""
    info.style.visibility = "visible";

switch (opcao) {
    case "filme1":
        descricao = "Ford vs Ferrari"
        sinopse = "Os vencedores do Oscar, Matt Damon e Christian Bale estrelam Ford Vs Ferrari, a incrível história real do visionário designer automotivo americano Carroll Shelby (Damon) e do destemido piloto britânico Ken Miles (Bale). Juntos, eles lutaram contra o domínio corporativo, as leis da física e seus próprios demônios pessoais para construir um carro de corrida revolucionário para a Ford Motor Company, assumir o controle das pistas e derrotar os carros dominantes de Enzo Ferrari, nas 24 Horas de Le Mans, na França em 1966."
        horario = "Legendado em português - 2D - 11:30, 14:40, 17:50 e 21:00"
        break;
    case "filme2":
        descricao = "Star Wars: Episódio IX"
        sinopse = "Lucasfilm e o diretor J.J. Abrams juntam forças mais uma vez para levar os espectadores a uma jornada épica em uma galáxia muito, muito distante em Star Wars: A Ascensão Skywalker, a fascinante conclusão da saga Skywalker, na qual novas lendas nascerão e a batalha final pela liberdade ainda está por vir."
        horario = "Legendado em português - 3D - 00:01, 13:50, 14:50, 17:10, 18:10m 19:30, 20:30 e 21:30"
        break;
    case "filme3":
        descricao = "Coringa"
        sinopse = "O comediante falido Arthur Fleck encontra violentos bandidos pelas ruas de Gotham City. Desconsiderado pela sociedade, Fleck começa a ficar louco e se transforma no criminoso conhecido como Coringa."
        horario = "Legendado em português - 2D - 11:30, 14:40, 17:50 e 21:00"
        break;
    case "filme4":
        descricao = "Dora e a Cidade Perdida"
        sinopse = "A aventureira Dora rapidamente se vê liderando o macaco Botas, o primo Diego, um misterioso habitante da selva, seus pais e um grupo de adolescentes em uma aventura para resolver um mistério impossível por trás de uma cidade perdida de ouro."
        horario = "Legendado em português - 2D - 11:30, 14:40, 17:50 e 21:00"
        break;
    case "filme5":
        descricao = "Os Parças"  
        sinopse = "Quatro amigos, depois de serem obrigados a participar de um golpe, resolvem abrir uma agência de casamentos na Rua 25 de Março."
        horario = "Legendado em português - 2D - 11:30, 14:40, 17:50 e 21:00"
        break;
    case "filme6":
        descricao = "Malévola: Dona do Mal"
        sinopse = "Em Malévola: Dona do Mal, uma sequência do sucesso de bilheteria global de 2014, Malévola e sua afilhada Aurora começam a questionar os complexos laços familiares que as prendem à medida que são puxadas em direções diferentes por casamentos, aliados inesperados e novas forças sombrias em jogo."
        horario = "Legendado em português - 2D - 11:30, 14:40, 17:50 e 21:00"
        break;
    case "filme7":
        descricao = "A Família Addams"
        sinopse = "Prepare-se para estalar os dedos! A Família Addams está de volta às telonas na primeira animação de comédia sobre o clã mais excêntrico do pedaço. Engraçada, estranha e completamente icônica, a Família Addams redefine o que significa ser um bom vizinho."
        horario = "Legendado em português - 2D - 11:30, 14:40, 17:50 e 21:00"
        break;
    case "filme8":
        descricao = "O Exterminador do Futuro: Destino Sombrio"
        sinopse = "Na sexta aventura da saga Exterminador do Futuro, Arnold Schwarzenegger interpreta novamente o papel icônico de T-800, enquanto Linda Hamilton encarna mais uma vez Sarah Connor."
        horario = "Legendado em português - 2D - 11:30, 14:40, 17:50 e 21:00"
        break;
    default:
        break;
}
    info2.innerHTML = descricao
    info3.innerHTML = sinopse
    info4.innerHTML = horario
}