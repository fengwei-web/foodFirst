$(function(){
    $(".header-top3").load("./commonHtml/header3.html");
    $(".footer_bot").load("./commonHtml/footer.html");

    // tab切换  进入页面默认显示第一项内容
    $(".content_box").find('li:eq(0)').show().siblings().hide();
    $(".content_nav_tab_list").click(function(){
        $(this).addClass('content_nav_tab_list_active').siblings().removeClass('content_nav_tab_list_active');
        let itemId = $(this).attr('data-id')-1;
        $(".content_box").find('li:eq('+itemId+')').show().siblings().hide()
    })
   
})