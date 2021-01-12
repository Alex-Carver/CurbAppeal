


setTimeout(function(){        
    $('.preloader').fadeOut('slow'); 
}, 2000);

    $(function () {
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
    


var $root = $('html, body');

$('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 0, function () {
        window.location.hash = href;
    });

    return false;
});

$('.navbar-toggler').on("click", function(){
    $('#pushContent').slideToggle();
});

