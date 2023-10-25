$(document).ready(function (){
    $('#mi-boton').click(function() {
        $('#ejemplo').html('Pulpos voladores');
    });

setTimeout(() => {
    $('.mensaje').fadeIn(3000)
}, 3000);

$('#mi-boton').click(function() {
    $('.mensaje').fadeOut(3000)
    });
})



