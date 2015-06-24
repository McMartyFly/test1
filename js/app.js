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
    
    function diceRoll(){
        var roll = 1;
        roll = Math.floor(Math.random() * 6) + 1;
        
        if (roll == 1){
            $('.dot').css('background-color','blue');
            $('.dot.five').css('background-color','#fff');
        } else if (roll == 2){
            $('.dot').css('background-color','blue');
            $('.dot.three, .dot.seven').css('background-color','#fff');
        } else if (roll == 3){
            $('.dot').css('background-color','blue');
            $('.dot.one, .dot.five, .dot.nine').css('background-color','#fff');
        } else if (roll == 4){
            $('.dot').css('background-color','blue');
            $('.dot.one, .dot.three, .dot.seven, .dot.nine').css('background-color','#fff');
        } else if (roll == 5){
            $('.dot').css('background-color','blue');
            $('.dot.one, .dot.three, .dot.five, .dot.seven, .dot.nine').css('background-color','#fff');
        } else {
            $('.dot').css('background-color','blue');
            $('.dot.one, .dot.three, .dot.four, .dot.six, .dot.seven, .dot.nine').css('background-color','#fff');
        }
    }
    
    var spins = 0;
    
    function rollAnimation(){
        $('.dice').on('click', function(){
            spins = Math.floor(Math.random() * 9) + 5;
            var animate = setInterval(function(){
                diceRoll();
                spins = spins - 1;
            
                if (spins == 0){
                    clearInterval(animate);
                }
            }, 250);
        });
    }
    
    rollAnimation();
    startupSelection();
    actionsInCombat();

});