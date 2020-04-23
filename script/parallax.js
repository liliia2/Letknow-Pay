$(document).ready(function () {
    $(window).bind('scroll', function (e) {
        parallaxScroll();
    });

    // function parallaxScroll() {
    //     var scrolled = $(window).scrollTop();
    //     console.log('parallaxScroll scrolled = ', scrolled);
    //     // $('.section3 .paralax1').css('top', (0 - (scrolled * .3)) + 'px');
    //     // $('.section3 .paralax2').css('top', (0 - (scrolled * .4)) + 'px');
    // }


    window.onscroll = function () {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        console.log('window.onscroll scrolled = ', scrolled);

        // if (scrolled >= 800) {
        //     $('.section1 .content-wrapper').slick('slickPause');
        //     $(".section1-copy").removeClass("without-blur");
        //     $(".section1-copy").addClass("blur");
        // } else {
        //     $('.section1 .content-wrapper').slick('slickPause');
        //     $(".section1-copy").removeClass("blur");
        //     $(".section1-copy").addClass("without-blur");
        // }

        // if (scrolled >= 500) {
        //     $(".to-top-btn").addClass("active")
        // } else {
        //     $(".to-top-btn").removeClass("active")
        // }
    }
});