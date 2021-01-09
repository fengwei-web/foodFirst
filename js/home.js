$(function(){
    $(".header1").load("../commonHtml/header.html")
    $(".header2").load("../commonHtml/header2.html")
    $(".footer").load("../commonHtml/footer.html")


    let set = 0;
    let length = document.querySelectorAll('.swiper_list').length
    let onwidth = 100 * parseInt(length) + '%'
    let slwidth = 100 / parseInt(length) + '%'
    console.log(onwidth)
    document.querySelectorAll('.swiper_list').forEach((im,ix) => {
        im.style.width = slwidth
    })
    document.querySelector('#only').style.width = onwidth
    // 点击上一页
    $(".page1_content_box_left").click(()=>{
        if(set == 0){
            set = $(".swiper_list").length-1
        }else{
            set--;
        }
        let lengths = document.querySelectorAll('.swiper_list').length
        let a = (-100 / lengths) * set +'%'
        console.log(document.querySelector('#only').style.transform = `translateX(${a})`)
    })
    // 点击下一页
    $(".page1_content_box_right").click(()=>{
        if(set == $(".swiper_list").length-1){
            set = 0
        }else{
            set++;
        }
        let lengths = document.querySelectorAll('.swiper_list').length
        let a = (-100 / lengths) * set +'%'
        console.log(document.querySelector('#only').style.transform = `translateX(${a})`)
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



    // let left2 = parseFloat($(".page5_content_switch_list").css('left').split("p")[0]);
    // let left3 = parseFloat($(".page5_content_switch_list").css('left').split("p")[0]);
    $(".page5_content_switch_list_bot").hide().eq(1).show();
    
    // $(".page5_content_switch_list").click(function(){
    //     let itemId = $(this).attr("data-index")-1;
    //     let left = parseFloat($(".page5_content_switch_list").eq(itemId).css('left').split("p")[0]);
    //     let dom = $(".page5_content_switch_list").eq(itemId)
    //     let gu = $(".page5_content_switch_list").eq(1);
    //     dom.css('left',left + 'px')
    //     gu.css('left',dom.css('left',left + 'px').css('left'))
    // })





    $(".page5_content_switch_list").click(function(){
        let itemId = $(this).attr("data-index")-1;
        // 当前点击图片路径
        let imgSrc = $(".page5_content_switch_list").eq(itemId).find('img')
        let divStr = $(".page5_content_switch_list").eq(itemId).find("div")
        let tab = $(".page5_content_tab_term").eq(itemId)
        let twoImgSrc = $(".page5_content_switch_list").eq(1).find("img");
        let twoDivStr = $(".page5_content_switch_list").eq(1).find("div");
        let twoTab = $(".page5_content_tab_term").eq(1)
        if($(this).attr("data-type") != 2){
            let img = twoImgSrc.attr("src");
            let tabCen = twoTab.html()
            twoImgSrc.attr("src",imgSrc.attr("src"));
            twoDivStr.find("div>h3").html(divStr.find("div>h3").html()).fadeIn();
            twoDivStr.find("div>p").html(divStr.find("div>p").fadeIn().html());
            imgSrc.attr("src",img)
            twoTab.html(tab.html())
            tab.html(tabCen)
        }else{
            console.log('中间的',imgSrc)
        }
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