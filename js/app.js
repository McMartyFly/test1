$( document ).ready(function() {
    
    function actionsInCombat(){
        $('.aic-page.one').on('click', function(){
            $('.spells, .features, .class-race').addClass('hide');
            $('.combat').removeClass('hide');
        });
        $('.aic-page.two').on('click', function(){
            $('.combat, .features, .class-race').addClass('hide');
            $('.spells').removeClass('hide');
        });
        $('.aic-page.three').on('click', function(){
            $('.combat, .spells, .class-race').addClass('hide');
            $('.features').removeClass('hide');
        });
        $('.aic-page.four').on('click', function(){
            $('.combat, .spells, .features').addClass('hide');
            $('.class-race').removeClass('hide');
        });
    };
    
    actionsInCombat();

});