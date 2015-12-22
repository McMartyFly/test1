$( document ).ready(function() {
    
    function openList(){
        $('.button').on('click', function(){
            $(this).siblings().toggleClass('open');
        })
    };
    
    openList();

});