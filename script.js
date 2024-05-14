$(document).ready(function(){
    $('#btn-mobile').on('click', function () {
        $('#menu-mobile').toggleClass('active')
    });

    ScrollReveal().reveal('#start', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#sobremim', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#Habilidades', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#project', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#contato', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

});