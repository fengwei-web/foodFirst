$(".header-top3").load("./commonHtml/header3.html");
$(".footer_bot").load("./commonHtml/footer.html");
$(function(){
    // tab切换

    if(window.location.href.split('?')[1]){
        var index = window.location.href.split('?')[1].split('=')[1] - 1;
        $('.enter_tab_left_list').eq(index).addClass('enter_tab_left_list_active').siblings().removeClass('enter_tab_left_list_active');
        $(".tab_con").find("li:eq("+ index +")").show().siblings().hide();
    }
    $(".enter_tab_left_list").click(function(){
        $(this).addClass('enter_tab_left_list_active').siblings().removeClass('enter_tab_left_list_active')
        
        var itemId = $(this).attr("tabid")-1;
        $(".tab_con").find("li:eq("+ itemId +")").show().siblings().hide();
    })
})