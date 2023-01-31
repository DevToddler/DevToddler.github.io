$(document).ready(function(){
    
    /* 스크롤 시 헤더 fixed */
    $(window).scroll(function(){
        let header_bot = $(window).scrollTop();
        let header_height = $('#header').height();
        if(header_height <= header_bot){
            $('#header').addClass('header_event')
            $("#wrap").css({
                paddingTop: header_height
            })
        }
        else if(header_height >= header_bot){
            $('#header').removeClass('header_event')
            $("#wrap").css({
                paddingTop: 0
            })
        }
    })

    /* top 버튼 */
    $(window).scroll(function(){
        if ($(this).scrollTop() > 600){
            $('.go_top').show();
        } else{
            $('.go_top').hide();
        }
    });

    /* top 버튼 이동에 애니메이션 적용 */
    $('.go_top').click(function(){
        $('html, body').animate({scrollTop:0},400);
    });
    
})