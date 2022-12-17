$(function(){

    $('#senha').bind('keyup', function(){

        var txt = $(this).val();
        var forca = 0;

        //letras
        //numeros
        //caracteres especiais

        var reg = new RegExp(/[a-z]/i);
        if(reg.test(txt)){
            forca += 25;
        }

        var reg = new RegExp(/[0-9]/i);
        if(reg.test(txt)){
            forca += 25;
        }

        var reg = new RegExp(/[^a-z0-9]/i);
        if(reg.test(txt)){
            forca += 25;
        }

        $('.forca').html('força: ' + forca);

    });

});