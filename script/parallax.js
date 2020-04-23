$(document).ready(function () {
    var windowWidth;

    $(window).bind('scroll', function (e) {
        windowWidth = $(window).width();
        parallaxScroll();
    });


    function parallaxScroll() {
        var scrolled = $(window).scrollTop();
        if (windowWidth > 1439) {
            console.log('windowWidth', windowWidth);
            $('.parallax1').css('margin-top', (270 - (scrolled * .3)) + 'px');
            $('.parallax2').css('margin-top', (700 - (scrolled * .3)) + 'px');
            $('.parallax3').css('margin-top', (1900 - (scrolled * .4)) + 'px');
        } else if (windowWidth > 1024 && windowWidth < 1440) {
            $('.parallax1').css('margin-top', (270 - (scrolled * .3)) + 'px');
            $('.parallax2').css('margin-top', (700 - (scrolled * .3)) + 'px');
            $('.parallax3').css('margin-top', (1950 - (scrolled * .4)) + 'px');
        } else if (windowWidth > 599 && windowWidth < 1024) {
            $('.parallax1').css('margin-top', (270 - (scrolled * .3)) + 'px');
            $('.parallax2').css('margin-top', (250 - (scrolled * .3)) + 'px');
            $('.parallax3').css('margin-top', (1580 - (scrolled * .4)) + 'px');
        } else if (windowWidth < 600) {
            $('.parallax1').css('margin-top', (250 - (scrolled * .3)) + 'px');
            $('.parallax2').css('margin-top', (180 - (scrolled * .3)) + 'px');
            $('.parallax3').css('margin-top', (1280 - (scrolled * .4)) + 'px');
        }
    }

    $(window).resize(function (e) {
        windowWidth = e.currentTarget.innerWidth;
    });
});