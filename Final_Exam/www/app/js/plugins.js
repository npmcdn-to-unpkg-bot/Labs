(function($) {
    $.fn.jcarousel = function(options) {
        // console.log('jcarousel!!!');
        var defaults = {
            width: $('.jcarousel__img').width(),
            height: $('.jcarousel__img').height()
        };

        var settings = $.extend(defaults, options);
        var pos = 0;
        var items = $('.jcarousel__item').length / 3;
        if (pos == 0) {
            $('.jcarousel-prev').animate({
                // opacity: "0.5"
            }, 500);
        };
        var slideWidth = parseInt(settings.width);

        $('.jcarousel-list').css({
            width: items * slideWidth + 'px',
            height: settings.height,
            left: pos + 'px'
        });

        $('.jcarousel').css({
            width: settings.width,
            height: settings.height
        });


        this.on('click', '.jcarousel-next', function(event) {
            event.preventDefault();
            if (pos >= -items * slideWidth + slideWidth) {
                pos -= slideWidth;
                $(this).closest('.jcarousel').children('.jcarousel-list').css("left", pos + 'px');
            }
            if (pos < -items * slideWidth + slideWidth) {
                pos = 0;
                $(this).closest('.jcarousel').children('.jcarousel-list').css("left", pos + 'px');
            };
        });

        this.on('click', '.jcarousel-prev', function(event) {
            event.preventDefault();
            if (pos <= 0) {
                pos += slideWidth;
                $(this).closest('.jcarousel').children('.jcarousel-list').css("left", pos + 'px');
            }
            if (pos > 0) {
                pos = -items * slideWidth + slideWidth;
                $(this).closest('.jcarousel').children('.jcarousel-list').css("left", pos + 'px');
            };
        });

        return this;
    };
})(jQuery);