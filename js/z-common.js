$(".production-slider").slick({

    infinite: true,
    fade: true,
    cssEase: 'linear',

    responsive: [{

        breakpoint: 1024,
        settings: {}

    }, {

        breakpoint: 600,
        settings: {}

    }, {

        breakpoint: 300,
        settings: {}

    }]
});
$(".faq__item").click(
    function(){
        $(this).children('.faq__answer').toggleClass('hidden');
        $(this).children('.faq__question' ).toggleClass('hidden');
    }
)

var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70,
    'side': 'right'
});

// Toggle button
document.querySelector('.header-fixed__menu').addEventListener('click', function() {
    slideout.toggle();
});