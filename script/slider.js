$(document).ready(function () {
    let currentSlideIndex = 0;
    
    $('.slider .all-slides').slick({
        speed: 600,
        fade: true,
        cssEase: 'linear',
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 100000
    });

    $('.slider .all-slides').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.all-slides').addClass("slick-before-change");
    });

    $('.slider .all-slides').on('afterChange', function(event, slick, currentSlide, nextSlide){
        currentSlideIndex = currentSlide;
    });

    $(".nav1").on("click", function () {
        $('.slider .all-slides')[0].slick.slickGoTo(0);
    });

    $(".nav2").on("click", function () {
        $('.slider .all-slides')[0].slick.slickGoTo(1);
    });

    $(".slick-prev").on("click", function () {
        $('.slider .all-slides')[0].slick.slickGoTo(0);
    });
    
    $(".slick-next").on("click", function () {
        $('.slider .all-slides')[0].slick.slickGoTo(1);
    });
});