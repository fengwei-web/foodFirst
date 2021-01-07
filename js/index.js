    
    $(document).ready(function() {
        $('#fullpage').fullpage({
            // anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
            navigation: true,
            navigationPosition: 'right',
            // loopBottom: true, // 滚动到最后一屏之后继续滚动到第一屏
        });

        // $.fn.fullpage.moveSlideRight();
        
    });
    $(".newOut").css('display',"none")
    // 第三屏
    $(".fullPage_three").on('mouseover',()=>{
        setTimeout(()=>{
            $('.setOut').css("display","none")
            $(".newOut").css('display',"block")
            $(".fullPage_three").css('background-image',"url('./img/home/3-1.png')");
        },3000)
    })

    $(".five_switch_list").click(function(){
        let itemId = $(this).attr("data-type")-1;
        // 当前点击图片路径
        let imgSrc = $(".five_switch_list").eq(itemId).find("img")
        let twoImgSrc = $(".five_switch_list").eq(1).find("img");
        if($(this).attr("data-type") != 2){
            console.log()
            let img = twoImgSrc.attr("src");
            twoImgSrc.attr("src",imgSrc.attr("src"));
            imgSrc.attr("src",img)
        }else{
            console.log('中间的',imgSrc)
        }
    })


    // js判断当前环境是在pc端还是手机端


    // mozilla/5.0 (linux; android 5.0; sm-g900p build/lrx21t) applewebkit/537.36 (khtml, like gecko) chrome/87.0.4280.88 mobile safari/537.36
    // mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/87.0.4280.88 safari/537.36
    var sUserAgent = navigator.userAgent.toLowerCase();
    // var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    // var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    // var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    // var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    // var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    // var bIsAndroid = sUserAgent.match(/android/i) == "android";
    // var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    // var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    // if(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    //     alert("您是手机登录");
    // } else {
    //     alert("您是电脑登录");
    // }