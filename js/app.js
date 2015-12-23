$( document ).ready(function() {
    
    function openList(){
        $('.main').on('click', function(){
            $(this).siblings().toggleClass('open');
            $(this).toggleClass('active');
        })
    };
    
    openList();

});