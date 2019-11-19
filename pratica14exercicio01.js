$(document).ready(function( ){
$("#cor").click(function (){
    if ($("div").hasClass("branco")) 
        $("div").removeClass("branco").addClass("amarelo")
})
$("#limpar").click(function () {
    if ($("div").hasClass("amarelo"))
    $("div").removeClass("amarelo").addClass("branco")
})
})