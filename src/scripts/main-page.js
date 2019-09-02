$(document).ready(function () {
    $(".full-width-slider .owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        smartSpeed: 1500,
        navText: [
            "<span class='arrow-wrap'><i class='fa fa-long-arrow-left' aria-hidden='true'></i></span>",
            "<span class='arrow-wrap'><i class='fa fa-long-arrow-right' aria-hidden='true'></i></span>"
        ]
    });
    $(".slider-category .owl-carousel").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        smartSpeed: 1000,
        navText: [
            "<i class='fa fa-bug'></i>",
            "<i class='fa fa-bug'></i>"
        ]
    });
    $(".bestsellers .owl-carousel").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        smartSpeed: 1000,
        URLhashListener: true,
        startPosition: 'one',
        navText: [
            "<i class='fa fa-bug'></i>",
            "<i class='fa fa-bug'></i>"
        ]
    });
    $(".receipts .owl-carousel").owlCarousel({
        items: 5,
        loop: true,
        nav: true,
        smartSpeed: 1000,
        navText: [
            "<i class='fa fa-bug'></i>",
            "<i class='fa fa-bug'></i>"
        ]
    });

    const owl1 = $('.hits .owl-carousel');
    owl1.owlCarousel();
    // Go to the next item
    $('.hits .slider-arrow__left').click(function() {
        owl1.trigger('prev.owl.carousel');
    });
    $('.hits .slider-arrow__right').click(function() {
        owl1.trigger('next.owl.carousel');
    });
    const owl2 = $('.news .owl-carousel');
    owl2.owlCarousel();
    $('.news .slider-arrow__left').click(function() {
        owl2.trigger('prev.owl.carousel');
    });
    $('.news .slider-arrow__right').click(function() {
        owl2.trigger('next.owl.carousel');
    });
    const owl3 = $('.receipts .owl-carousel');
    owl3.owlCarousel();
    $('.receipts .slider-arrow__left').click(function() {
        owl3.trigger('prev.owl.carousel');
    });
    $('.receipts .slider-arrow__right').click(function() {
        owl3.trigger('next.owl.carousel');
    });
    const owl4 = $('.bestsellers .owl-carousel');
    owl4.owlCarousel();
    $('.bestsellers .slider-arrow__left').click(function() {
        owl4.trigger('prev.owl.carousel');
    });
    $('.bestsellers .slider-arrow__right').click(function() {
        owl4.trigger('next.owl.carousel');
    });
    const owl5 = $('.blog-slider .owl-carousel');
    owl5.owlCarousel();
    $('.blog-slider .slider-arrow__left').click(function() {
        owl5.trigger('prev.owl.carousel');
    });
    $('.blog-slider .slider-arrow__right').click(function() {
        owl5.trigger('next.owl.carousel');
    });
});