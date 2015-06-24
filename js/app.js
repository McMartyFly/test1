$( document ).ready(function() {
    
    function actionsInCombat(){
        $('.aic-page.one').on('click', function(){
            $('.aic-page').css('background-color', '#ffffff');
            $(this).css('background-color', '#FFCC00');
            $('.spells, .features, .class-race').addClass('hide');
            $('.combat').removeClass('hide');
        });
        $('.aic-page.two').on('click', function(){
            $('.aic-page').css('background-color', '#ffffff');
            $(this).css('background-color', '#FFCC00');
            $('.combat, .features, .class-race').addClass('hide');
            $('.spells').removeClass('hide');
        });
        $('.aic-page.three').on('click', function(){
            $('.aic-page').css('background-color', '#ffffff');
            $(this).css('background-color', '#FFCC00');
            $('.combat, .spells, .class-race').addClass('hide');
            $('.features').removeClass('hide');
        });
        $('.aic-page.four').on('click', function(){
            $('.aic-page').css('background-color', '#ffffff');
            $(this).css('background-color', '#FFCC00');
            $('.combat, .spells, .features').addClass('hide');
            $('.class-race').removeClass('hide');
        });
    }
    
    function startupSelection(){
        $('.aic-page').css('background-color', '#ffffff');
        $('.aic-page.one').css('background-color', '#FFCC00');
        $('.spells, .features, .class-race').addClass('hide');
        $('.combat').removeClass('hide');
    }
    
    startupSelection();
    actionsInCombat();

});