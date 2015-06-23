$( document ).ready(function() {
    var health = 0;
    $('.total').html(health);
    
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
        
    }
    
    hpCalc();
    test();
});