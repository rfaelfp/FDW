$(document).ready(function () {
    if ($("#botao").click(function (){
        if ($("div").hasClass("container")){
            $("div").removeClass("container").addClass("embranco")
            $("embranco").hide()
    }
    }))
})