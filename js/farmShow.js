$(function(){
    $(".header-top3").load("./commonHtml/header3.html");
    $(".footer_bot").load("./commonHtml/footer.html");
    var data = null;
    // let paging = new Paging({ total: 100 });
    

    if(window.location.href.split('?')[1]){
        var index = window.location.href.split('?')[1].split('=')[1] - 1;
        $('.content_nav_tab_list').eq(index).addClass('content_nav_tab_list_active').siblings().removeClass('content_nav_tab_list_active');
        $(".content_box").find("li:eq("+ index +")").show().siblings().hide();
    }
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
            $(".list_bot_con_pic").find("img").attr("src",data.plotList[0].cropInfo.logoPath)
            getLastDataByDeviceNum(data.plotList[0].deviceNum)
        }
    });
    // 获取传感度数据
    function getLastDataByDeviceNum(deviceNum){
        $.ajax({
            url: "http://weixin.himynf.com/app/smartCtrl/getLastDataByDeviceNum",
            data:{
                deviceNum: deviceNum
            },
            success(res){
                $(".data1").html(res.rtData.airTemperature)
                $(".data2").html(res.rtData.airHumidity)
                $(".data3").html(res.rtData.soilTemperature)
                $(".data4").html(res.rtData.soilHumidity)
                $(".data5").html(res.rtData.light)
                $(".data6").html(res.rtData.CO2)
            }
        })
    }
    $(".list_bot_head_rig").on('click','.list_bot_head_rig_term',function (e) { 
        let content = e.currentTarget.innerHTML;
        let arr = [].slice.call($(".list_bot_head_rig").find('div'));
        arr.forEach((v,i) => {
            // console.log(v.innerHTML == content)
            if(v.innerHTML == content){
                getLastDataByDeviceNum(data.plotList[i].deviceNum)
                if(data.plotList[i].cropInfo){
                    $(".list_bot_con_pic").find("img").attr("src",data.plotList[i].cropInfo.logoPath)
                }else{
                    $(".list_bot_con_pic").find("img").attr("src",'./img/farmShow/list1.png')
                }
            }
        });
    })
})