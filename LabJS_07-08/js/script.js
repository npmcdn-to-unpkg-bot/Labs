$(function() {

    $("#content div").hide(); 
    $("#tabs li:first").attr("id","current"); 
    $("#tabs li:first").css({
        "transform": "translateX("+($( window ).width() - $("#tabs li:first").outerWidth(true) - 116)+"px)"
    });
    
    $("#content div:first").fadeIn(); 
    $("#content").css({
        'background-image': "linear-gradient(to top, #fff," + $("#tabs li:first a").css("background-color") +")"
    }); 
    
    $('#tabs li a').click(function(e) {
        e.preventDefault();
        $("#content div").hide(); 
        $("#tabs li").attr("id",""); 
        $("#tabs li").css({
            "transform": "translateX(" + 0 + "px)"
        });
        
        if ($(this).attr('href')!='#login') {
            
            $("#tabs .login").removeClass("login");
            
            $(this).parent().attr("id","current"); 
            $(this).parent().css({
                "transform": "translateX("+($( window ).width() - $(this).outerWidth(true) - 116)+"px)"
            });
        } else {
            $(this).parent().addClass("login");
        }
        
        $($(this).attr('href')+"," + $(this).attr('href') + " *").fadeIn(); 
        $("#content").css({
            'background-image': "linear-gradient(to top, #fff," + $(this).css("background-color") +")"
        }); 
    });
    
    $('.masterTooltip').hover(function(){
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
    }, function() {
            $(this).attr('title', $(this).data('tipText'));
            $('.tooltip').remove();
        }).mousemove(function(e) {
            var mousex = e.pageX + 5; 
            var mousey = e.pageY + 5; 
            $('.tooltip').css({ top: mousey, left: mousex })
        });
});