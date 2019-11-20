var numeroFigura = 0

function anterior () {
    numeroFigura--
    if (numeroFigura < 0)
      numeroFigura = 3
    mostrarFigura ()
}

function posterior () {
    numeroFigura++
    if (numeroFigura > 3)
      numeroFigura = 0
    mostrarFigura ()
}

function mostrarFigura () {
    var titulo, imagem
    switch (numeroFigura) {
        case 0:
            titulo = "Foto da Pampulha"
            imagem = "<img src='imgpratica09/pampulha.jpg' alt='Foto da Pampulha'></img>"
            break;
        case 1:
            titulo = "Foto da Praça da Liberdade"
            imagem = "<img src='imgpratica09/liberdade.jpg' alt='Foto da Praça da Liberdade'></img>"
            break;
        case 2:
            titulo = "Foto da Praça do Papa"
            imagem = "<img src='imgpratica09/papa.jpg' alt='Foto da Praça do Papa'></img>"
            break;
        case 3:
            titulo = "Foto da Praça Sete"
            imagem = "<img src='imgpratica09/pirulito.jpg' alt='Foto da Praça Sete'></img>"
            break;
        default:
            titulo = "Foto da Pampulha"
            imagem = "<img src='imgpratica09/pampulha.jpg' alt='Foto da Pampulha'></img>"
            break;
    }
    rotulo.innerHTML = titulo
    foto.innerHTML = imagem
}