$(document).ready(function(){
    $.header_evt = function(){
        let header_bot = $(window).scrollTop();
        let header_height = $('#header').height();
        if(header_height <= header_bot){
            $('#header').addClass('header_fixed')
            $("#wrap").css({
                paddingTop: header_height
            })
        }
        else if(header_height >= header_bot){
            $('#header').removeClass('header_fixed')
            $("#wrap").css({
                paddingTop: 0
            })
        }
    }
    
    /* 스크롤 시 헤더 fixed */
    $(window).scroll(function(){
        $.header_evt();
    })
    /* 클릭으로 화면 이동 시에도 헤더 fixed*/
    $(window).click(function(){
        $.header_evt();

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