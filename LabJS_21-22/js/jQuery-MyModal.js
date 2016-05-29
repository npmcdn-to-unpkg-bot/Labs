(function ($) {
    $.fn.jMyModal = function (options) {
        var defaults = {

        };
        var settings = $.extend(defaults, options);
        var $link = this;
        var $body = $('body');
        var $modal;
        var $overlay = $('.myModal-overlay');
        $overlay.fadeIn().addClass('in');
        $body.append($overlay);

        $('.myModal-overlay').on('click', myClose);
        $('.myBtn-close').on('click', myClose);
        $('.myModal-close').on('click', myClose);
        $('.myModal-dialog').on('click', function () {
            event.stopPropagation();
        });
        function myClose() {
            $overlay.fadeOut().removeClass('in');
        }
        return this;
    };
})(jQuery);