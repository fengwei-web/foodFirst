$(function(){
    $(".header-top3").load("./commonHtml/header3.html");
    $(".footer_bot").load("./commonHtml/footer.html");
    var data = null;
    // let paging = new Paging({ total: 100 });
    

    // tab切换  进入页面默认显示第一项内容
    $(".content_box").find('li:eq(0)').show().siblings().hide();
    $(".content_nav_tab_list").click(function(){
        $(this).addClass('content_nav_tab_list_active').siblings().removeClass('content_nav_tab_list_active');
        let itemId = $(this).attr('data-id')-1;
        $(".content_box").find('li:eq('+itemId+')').show().siblings().hide()
    })
    



    // 获取数据
    $.ajax({
        url: "http://weixin.himynf.com/app/smartCtrl/getFarmInfo/103",
        success: function (response) {
            data = response.rtData.areaList[0];
            var str = '';
            var str1 = '';
            str += `<div class="list_bot_head_left">${data.areaName}</div>`
            for(var i = 0;i< data.plotList.length ;i++){
                str1 += `<div class="list_bot_head_rig_term">${data.plotList[i].plotName}</div>`
            }
            $(".list_bot_heads").html(str);
            $(".list_bot_head_rig").html(str1);
        }
    });

    $(".list_bot_head_rig").on('click','.list_bot_head_rig_term',function (data) { 
        console.log(data.currentTarget.innerHTML);

    })
})