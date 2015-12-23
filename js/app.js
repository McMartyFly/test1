$( document ).ready(function() {
    
    function openList(){
        $('.main').on('click', function(){
            $(this).siblings().toggleClass('open');
            $(this).toggleClass('active');
        });
    };
    
    function openPage(){
        $('.index').on('click', function(){
            $(this).closest('.index-wrap').find('.index').removeClass('open');
            $(this).addClass('open');
        });
    };
    
    openList();
    openPage();
    
});