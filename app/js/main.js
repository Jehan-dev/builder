$(function () {

    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        prevArrow: '<button class="slick-arrow slick-prev"><</button>',
        nextArrow: '<button class="slick-arrow slick-next">></button>',
        responsive: [
            {
                breakpoint: 1192,
                settings: {
                    arrows: false,
                }
            },],
    });

    $('.header__menu').on('click', function() {
       $('.header__nav').slideToggle(); 
    });

})