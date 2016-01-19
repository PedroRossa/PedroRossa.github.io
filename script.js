$(document).ready(function(){
    //TopMenuItens fade in and out when mouseOver and mouseLeave
    $(".topMenuItem").mouseover(function(){
        $(this).fadeTo("fast", 0.7, function(){});
    });
    $(".topMenuItem").mouseleave(function(){
       $(this).fadeTo(10, 1, function(){}); 
    });
    
})
