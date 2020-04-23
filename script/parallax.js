$(document).ready(function () {
    $(window).bind('scroll', function (e) {
        parallaxScroll();
    });

    function parallaxScroll() {
        var scrolled = $(window).scrollTop();
        $('.parallax1').css('margin-top', (270 - (scrolled * .3)) + 'px');
        $('.parallax2').css('margin-top', (700 - (scrolled * .3)) + 'px');
        $('.parallax3').css('margin-top', (1980 - (scrolled * .4)) + 'px');
    }
});