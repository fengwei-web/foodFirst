$(function(){
    $(".header-top3").load("./commonHtml/header3.html");
    $(".footer_bot").load("./commonHtml/footer.html");
    



    if(window.location.href.split('?')[1]){
        var index = window.location.href.split('?')[1].split('=')[1] - 1;
        $('.content_nav_tab_list').eq(index).addClass('content_nav_tab_list_active').siblings().removeClass('content_nav_tab_list_active');
        $(".content_box").find("li:eq("+ index +")").show().siblings().hide();
    }
    // tab切换  进入页面默认显示第一项内容
    $(".content_box_list").eq(0).show().siblings().hide();
    $(".content_nav_tab_list").click(function(){
        $(this).addClass('content_nav_tab_list_active').siblings().removeClass('content_nav_tab_list_active');
        let itemId = $(this).attr('data-id')-1;
        $(".content_box_list").eq(itemId).show().siblings().hide();
    })
    
    $(".social_big_box_list").eq(0).show().siblings().hide();
    $(".social_btn1").click(function () { 
        $(this).addClass('social_btn1_active').siblings().removeClass('social_btn1_active');
        let itemId = $(this).attr('data-id')-1;
        $(".social_big_box_list").eq(itemId).show().siblings().hide();
    })
})