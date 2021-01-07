$(function(){
    $(".header1").load("../commonHtml/header.html")
    $(".header2").load("../commonHtml/header2.html")
    $(".footer").load("../commonHtml/footer.html")


    let set = 0;
    // 点击上一页
    $(".swiper_list").eq(set).show().siblings().hide();
    $(".page1_content_box_left").click(()=>{
        if(set == 0){
            set = $(".swiper_list").length-1
        }else{
            set--;
        }
        console.log(set)
        $(".swiper_list").eq(set).show().siblings().hide();
    })

    // 点击上一页
    $(".page1_content_box_right").click(()=>{
        if(set == $(".swiper_list").length-1){
            set = 0
        }else{
            set++;
        }
        console.log(set)
        $(".swiper_list").eq(set).show().siblings().hide();
    })
    
    // 第三屏
    $(".page3_content_newOut").css('display',"none")
    $(".page3_content").on('mouseover',()=>{
        setTimeout(()=>{
            $('.page3_content_setOut').css("display","none")
            $(".page3_content_newOut").css('display',"block")
            $(".page3_content").css('background-image',"url('./img/home/3-1.png')");
        },3000)
    })




    // 整屏滚动
    var nowscreen = 0;
    var $h = $(window).height();
    var $points = $('.points li');
    var $pages = $('.pages');
    var len =$('.pages').length;
    var timer = null;

    $pages.eq(0).addClass('moving');
    $pages.css({height:$h});
    //-1 是向下滑动，1是 像上滑动
    $(window).mousewheel(function (event,dat) {
        clearTimeout(timer);
        timer=setTimeout(function () {
            if(dat==-1)
            {
                nowscreen++;
                if(nowscreen>len-1){
                    nowscreen = len-1;
                }
            }
            else{
                nowscreen--;
                if(nowscreen<0)
                {
                    nowscreen = 0;
                }
            }
            $('.pages_con').animate({top:-$h*nowscreen},300);
            $points.eq(nowscreen).addClass('active').
            siblings().removeClass('active');

            $pages.eq(nowscreen).addClass('moving').
            siblings().removeClass('moving');
        },200);
    });
    $points.click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.pages_con').animate({top:-$h*$(this).index()},300);
        $pages.eq($(this).index()).addClass('moving').
            siblings().removeClass('moving');
    })

})