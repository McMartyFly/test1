$( document ).ready(function() {
    
    var slimmed = 0;
    
    function openList(){
        $('.main').on('click', function(){
            if($(this).hasClass('active')){
                $(this).siblings('.index-wrap').find('.index').removeClass('open');
                $(this).siblings('.index-wrap').css({'height': '0px'});
                
                $(this).siblings('.page').removeClass('show');
                $(this).siblings('.page').find('.spell-head').removeClass('active');
            } else {
                var maxH = $(this).siblings('.index-wrap').css({ 'height': 'auto'}).height();
                $(this).siblings('.index-wrap').css({'height': '0px'});
                // $(this).siblings('.spell-detail').css({'height': maxH });
                $(this).siblings('.index-wrap').animate({
                    height: maxH
                }, 0, function(){
                
                });
            };
            
            $(this).siblings().toggleClass('open');
            $(this).toggleClass('active');
        });
    };
    
    function openPage(){
        $('.index').on('click', function(){
            $(this).closest('.index-wrap').find('.index').removeClass('open');
            $(this).addClass('open');
            
            $(this).closest('.index-wrap').siblings('.page').removeClass('show');
            
            if($(this).hasClass('cantrip')){
                $(this).closest('.index-wrap').siblings('.page.cantrip').addClass('show');
            } else if ($(this).hasClass('one')){
                $(this).closest('.index-wrap').siblings('.page.one').addClass('show');
            } else if ($(this).hasClass('two')){
                $(this).closest('.index-wrap').siblings('.page.two').addClass('show');
            } else if ($(this).hasClass('three')){
                $(this).closest('.index-wrap').siblings('.page.three').addClass('show');
            } else if ($(this).hasClass('four')){
                $(this).closest('.index-wrap').siblings('.page.four').addClass('show');
            } else if ($(this).hasClass('five')){
                $(this).closest('.index-wrap').siblings('.page.five').addClass('show');
            } else if ($(this).hasClass('six')){
                $(this).closest('.index-wrap').siblings('.page.six').addClass('show');
            } else if ($(this).hasClass('seven')){
                $(this).closest('.index-wrap').siblings('.page.seven').addClass('show');
            } else if ($(this).hasClass('eight')){
                $(this).closest('.index-wrap').siblings('.page.eight').addClass('show');
            } else if ($(this).hasClass('nine')){
                $(this).closest('.index-wrap').siblings('.page.nine').addClass('show');
            } else if ($(this).hasClass('invocation')){
                $(this).closest('.index-wrap').siblings('.page.invocation').addClass('show');
            }
        });
    };
    
    function openSpell(){
        $('.spell-head').on('click', function(){
            
            
            
            if($(this).hasClass('on')){
                $(this).siblings('.spell-detail').css({'height': '0px'});
            } else {
                var maxH = $(this).siblings('.spell-detail').css({ 'height': 'auto'}).height();
                $(this).siblings('.spell-detail').css({'height': '0px'});
                // $(this).siblings('.spell-detail').css({'height': maxH });
                $(this).siblings('.spell-detail').animate({
                    height: maxH
                }, 0, function(){
                
                });
            }
            $(this).toggleClass('on');
            $(this).siblings('.spell-detail').toggleClass('open');
        });
    };
    
    function slim(){
        $('.stack').on('click', function(){
            $(this).toggleClass('right');
            if (slimmed == 0){
                
                $('.spell-head').each(function(){
                    $(this).parent('li').addClass('slim');
                    if($(this).siblings('.spell-detail').hasClass('open')){
                        $(this).parent('li').removeClass('slim');
                    }
                });
                
                slimmed = 1;
            } else {
                
                $('.spell-head').parent('li').removeClass('slim');
                
                slimmed = 0;
            }
            
        });
    };
    
    function closeStack(){
        $('.stack').on('click', function(){
            $('.stack').children().toggleClass('flat');
            
        });
    };
    
    function slick(){
        $('.slick-wrap').slick({
            
        });
    };
    
    // slick();
    openList();
    openPage();
    openSpell();
    slim();
    closeStack();
    
});