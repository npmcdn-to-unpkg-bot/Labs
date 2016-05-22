(function ($) {

    $('.jcarousel').jcarousel({
        animation: {
            duration: 1200,
            easing: 'easeOutElastic'
        },
        transitions: true,
        wrap: 'circular'
    }).jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });

    $('.jcarousel-pagination').on('jcarouselpagination:createend', function () {
        $('.jcarousel-pagination a:first').addClass('active');
    });

    $('.jcarousel-pagination').jcarouselPagination({
        item: function (page) {
            return '<a href="#' + page + '">&nbsp;</a>';
        }
    });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        });

    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('selected');
        $(this).addClass('selected');
    });
    
    $('.banners-accordion').on('click', function () {
        $('.banners-panel').removeClass('show');
        $('.banners-accordion').removeClass('active');
        $(this).addClass('active');
        $(this).next('.banners-panel').addClass('show');
    });
    // var acc = document.getElementsByClassName("banners-accordion");
    
    // for (var i = 0; i < acc.length; i++) {
    //     acc[i].onclick = function(){
    //         this.classList.toggle("active");
    //         this.nextElementSibling.classList.toggle("show");
    // }
    // }
} (jQuery));