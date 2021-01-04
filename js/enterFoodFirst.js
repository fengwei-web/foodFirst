$(".header-top3").load("./commonHtml/header3.html");
$(".footer_bot").load("./commonHtml/footer.html");
$(function(){
    // tab切换
    $(".enter_tab_left_list").click(function(){
        $(this).addClass('enter_tab_left_list_active').siblings().removeClass('enter_tab_left_list_active')
        
        var itemId = $(this).attr("tabid")-1;
        $(".tab_con").find("li:eq("+ itemId +")").show().siblings().hide();
    })
})