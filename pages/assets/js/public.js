


// 底部鼠标移入
footWeChat()
function footWeChat(){
    $('.WeChat').hover(function () {
        $('.wxsode').stop().css({'width':'279px','opacity':'1'});
    }, function () {
        $('.wxsode').stop().css({'width':'0px','opacity':'0'});
    })
}

