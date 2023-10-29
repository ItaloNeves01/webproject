$(document).ready(function() {
    var currentIndex = 0;
    var newsCards = $('.news-card');

    $(window).on('resize', function() {
        var cardWidth = $('.news-card').outerWidth(true);
        var visibleCards = Math.floor($('.noticiasCard').width() / cardWidth);
        newsCards.removeClass('active');
        newsCards.eq(currentIndex).addClass('active');
    }).trigger('resize');

    $('.noticiasCard').on('scroll', function() {
        var cardWidth = $('.news-card').outerWidth(true);
        currentIndex = Math.floor($('.noticiasCard').scrollLeft() / cardWidth);
        newsCards.removeClass('active');
        newsCards.eq(currentIndex).addClass('active');
    });
});
