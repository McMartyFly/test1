$( document ).ready(function() {
    
    function actionsInCombat(){
        $('.aic-button').on('click', function(){
            $('.actions-in-combat').toggleClass('hide');
        })
    }
    
    actionsInCombat();

});