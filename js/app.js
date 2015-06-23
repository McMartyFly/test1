$( document ).ready(function() {
    function test(){
        $('.button').on('click', function(){
            $('.demo').html('has been touched');
        })
    }

    test();
});