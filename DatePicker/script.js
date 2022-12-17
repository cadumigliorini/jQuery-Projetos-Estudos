$(function(){

    var horaescolhaCampo;

    $('input').bind('focus', function(){

        var pos = $(this).offset();
        var width = $(this).width();

        $('.hora-escolha').css('left', pos.left + width + 5);
        $('.hora-escolha').css('top', pos.top);
        $('.hora-escolha').show();

        horaescolhaCampo = $(this);

    });

    $('input').bind('blur', function(){

        setTimeout(function(){
            $('.hora-escolha').hide();
        }, 200);  

    }); 
    
    $('.hora-escolha button').bind('click', function(){

        var hora = $(this).html();
        horaescolhaCampo.val(hora);

    });
});