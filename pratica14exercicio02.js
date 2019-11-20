$(document).ready(function () {
    $("#botao").click(function (){
        if ($("div").hasClass("container")){
            $("img").hide()
            $("div").removeClass("container").addClass("embranco")
        }        


    })
})