$("#content div").hide();
    $("#tabs li:first").attr("id", "current");
    $("#tabs li:first").css({
        "transform": "translateX(" + ($(window).width() - $("#tabs li:first").outerWidth(true)) + "px)"
    });

    $("#content div:first").fadeIn();
    $("#content div:first div").fadeIn();
    $("#content").css({
        'background-image': "linear-gradient(to top, #fff," + $("#tabs li:first a").css("background-color") + ")"
    });

    $('#tabs li a').click(function(e) {
        e.preventDefault();
        $("#content div").hide();
        $("#tabs li").attr("id", "");
        $("#tabs li").css({
            "transform": "translateX(" + 0 + "px)"
        });

        if ($(this).attr('href') != '#login') {

            $("#tabs .login").removeClass("login");

            $(this).parent().attr("id", "current");
            $(this).parent().css({
                "transform": "translateX(" + ($(window).width() - $(this).outerWidth(true)) + "px)"
            });
        } else {
            $(this).parent().addClass("login");
        }

        $($(this).attr('href') + "," + $(this).attr('href') + " div").fadeIn();
        // console.log($(this).attr('href') + "," + $(this).attr('href') + " *");
        $("#content").css({
            'background-image': "linear-gradient(to top, #fff," + $(this).css("background-color") + ")"
        });
    });

    $('.masterTooltip').hover(function() {
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
        $('.tooltip').css({
            top: mousey,
            left: mousex
        })
    });

$('.jcarousel').jcarousel({
    animation: {
        duration: 1200,
        easing: 'easeOutElastic'
    },
    transitions: true,
    wrap: 'circular'
});

$('.jcarousel-control-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
});

$('.jcarousel-control-next').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
});

// $('.jcarousel-pagination').jcarouselPagination({
//     'perPage': 1
// });
$('.jcarousel-pagination').on('jcarouselpagination:createend', function() {
    $('.jcarousel-pagination a:first').addClass('active');
    $("#select_id").selectbox('change','1',1);
});

$('.jcarousel-pagination').jcarouselPagination({
    item: function(page) {
        return '<a href="#' + page + '">' + page + '</a>';
    }
});

$('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
        var val = this.text;
       $("#select_id").selectbox('change',val,val);
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    });
    
$("#select_id").selectbox({
	onChange: function (val, inst) {
        $('.jcarousel').jcarousel('scroll', val-1);
	}
});

$(".menu-dropdown").hover(
  function () {
    //   console.log($(this).children(".sub-menu"));
	$(this).children(".sub-menu").slideDown().animate({
		backgroundColor:"#777"
    }, 500 );
}, 
function () {
    //   console.log($(this).children(".sub-menu"));
	$(this).children(".sub-menu").slideUp().animate({
		backgroundColor:"#555"
    }, 500 );
}
);

