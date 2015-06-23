$( document ).ready(function() {
    var health = 0;
    var tempHp = 0;
    $('.total').html(health);
    $('.thp-total').html(tempHp);
    
    function test(){
        $('.button').on('click', function(){
            $('.demo').html('has been touched');
        })
    }
    
    function hpCalc(){
        $('.more-hp').on('click', function(){
            health +=1;
            $('.total').html(health);
        })
        $('.less-hp').on('click', function(){
            health -= 1;
            $('.total').html(health);
        })
        
        $('.more-thp').on('click', function(){
            tempHp +=1;
            $('.thp-total').html(tempHp);
        })
        $('.less-thp').on('click', function(){
            tempHp -= 1;
            $('.thp-total').html(tempHp);
        })
    }
    
    function actionsInCombat(){
        $('.aic-button').on('click', function(){
            $('.actions-in-combat').toggleClass('hide');
        })
    }
    
    actionsInCombat();
    hpCalc();
    test();
});