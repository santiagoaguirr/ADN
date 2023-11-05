$(document).ready(function (){
    $('#mi-boton').click(function() {
        $('#ejemplo').html('Pulpos voladores');
    });

setTimeout(() => {
    $('.mensaje').fadeIn(3000)
}, 3000);

$('#boton-desaparecer').click(function() {
    $('.mensaje').fadeOut(3000)
    });

$('#boton-aparecer').click(() => {
     $('.mensaje').fadeIn(3000)
    });


$('#boton-toggle').click(() => {
    let element = $('.card')
    if(element.hasClass('visible')){
        element.removeClass('visible')
    } else {
        element.addClass('visible');
    }
})
})






