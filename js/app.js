$( document ).ready(function() {
    
    function openList(){
        $('.main').on('click', function(){
            if($(this).hasClass('active')){
                $(this).siblings('.index-wrap').find('.index').removeClass('open');
            };
            
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