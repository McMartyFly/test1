$( document ).ready(function() {
    
    function openList(){
        $('.main').on('click', function(){
            if($(this).hasClass('active')){
                $(this).siblings('.index-wrap').find('.index').removeClass('open');
                $(this).siblings('.page').removeClass('show');
                $(this).siblings('.page').find('.spell-head').removeClass('active');
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
            }
        });
    };
    
    function openSpell(){
        $('.spell-head').on('click', function(){
            $(this).toggleClass('active');
            $(this).siblings('.spell-detail').toggleClass('open');
        });
    };
    
    openList();
    openPage();
    openSpell();
    
});