$(function(){

    $("#collapse-btn1").click(function(){
        $(".content-1").slideToggle("500ms");
        $(".arrow1").toggle();
    })
    
    $("#collapse-btn2").click(function(){
        $(".content-2").slideToggle("500ms");
        $(".arrow2").toggle();
    })
    $("#collapse-btn3").click(function(){
        $(".content-3").slideToggle("500ms");
        $(".arrow3").toggle();
    })
    $("#collapse-btn4").click(function(){
        $(".content-4").slideToggle("500ms");
        $(".arrow4").toggle();
    })


    $("[id^=slide-]").click(function(){
        var num = $(this).attr("id").replace("slide-", "");

        if(!($(this).hasClass("activo"))){
            $(this).addClass("activo");
            $("[id^=slide-]").not($(this)).removeClass("activo");
            // $("#bloque" + num).fadeIn("fast").promise().done(function(){
            //     $("[id^=bloque]").not($("#bloque" + num)).fadeOut("fast");
            // })
            
            $("[id^=bloque]").not($("#bloque" + num)).fadeOut("fast").promise().done(function(){
                $("#bloque" + num).fadeIn("fast")
            })
        }
    })

})