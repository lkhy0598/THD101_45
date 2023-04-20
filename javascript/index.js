// -------------------pagelink------------------------
$(function(){
    let viewport = $(window).width();
    if(viewport > 414 ){


        $('.pagelink_img>li').hover(function () {
            $(this).css({ 'width': '100%' });
            $(this).siblings().css({ 'width': '0' })
        }, function () {
            $('.pagelink_img>li').css({ 'width': '25%' });

        }) 
    }
})

// --------------------------------------------------------------

gsap.registerPlugin(ScrollTrigger);
        gsap.utils.toArray(".fullimgattchment").forEach((fullimgattchment,i)=>{
            ScrollTrigger.create({
                trigger:fullimgattchment,
                start: "top top",
                end: "+=1850", 
                pin:true,
                pinSpacing:false
            })
        })




// -----------------捲軸_background-attachment-------------------

// let contrl_el = document.getElementsByClassName("fullscreenwidth_contrl")[0];

// document.addEventListener("scroll",function(){
//     // innerHeight
//     // console.log(screenY )
//     contrl_el.style.width = ((scrollY/(innerHeight-80))*100) +"%"
// })


// ---------------------newspic_change---------------------------------


let news_text = document.getElementsByClassName("newstext");
let news_img = document.getElementsByClassName("indexnews_main--img");
for(let i = 0; i <news_text.length; i++ ){
    news_text[i].addEventListener("mouseenter",function(){
        if(news_img[i].classList.contains("on")){

        }else{
            for(let i = 0; i <news_text.length; i++ ){
                news_img[i].classList.remove("on");
            }
            news_img[i].classList.add("on");
        }
    })            
};


// -----------------------intro_scroll------------------------------


let intro = document.getElementsByClassName("intro")[0];
let introimg = document.getElementsByClassName("intro_img")[0];
document.addEventListener("scroll",function(){
    let introHi = intro.getBoundingClientRect().top;
    if(introHi < 750 && introHi > -400){
        introimg.classList.add("out")
    }else{
        introimg.classList.remove("out")
    }
});


// ---------------------------intro2_scroll----------------------------

let intro2 = document.getElementsByClassName("intro2")[0];
let intro2photoline = document.getElementsByClassName("intro2_photo--line")[0].querySelectorAll("li");
document.addEventListener("scroll",function(){
    let introHi2 = intro2.getBoundingClientRect().top;
    // console.log(introHi2)
    if(introHi2 < 540 && introHi2 > -360){
        for(let i = 0; i < intro2photoline.length; i++){
            intro2photoline[i].classList.add("in")
        }   
    }else{
        for(let i = 0; i < intro2photoline.length; i++){
            intro2photoline[i].classList.remove("in")
        }
    }
});

// ---------------------------------------------------------------

let pagelink = document.getElementsByClassName("pagelink_img")[0];
let pagelinkli = document.getElementsByClassName("pagelink_img")[0].querySelectorAll("li");

document.addEventListener("scroll",function(){
    let pagelinkhi = pagelink.getBoundingClientRect().top;
    if(pagelinkhi < 840 && pagelinkhi > -360){
        for(let i = 0; i < pagelinkli.length; i++){
            pagelinkli[i].classList.add("show")
        }   
    }else{
        for(let i = 0; i < pagelinkli.length; i++){
            pagelinkli[i].classList.remove("show")
        }
    }
});


// -------------------------------------------------------

$(function(){
    let viewport = $(window).width();
    if(viewport <= 414){

// -------------------mobilenav---------------------
        let isNavVisible = false;
        let mobilespan = $('.headmobile_top span');
        let mobileNav = $(".headmobile_nav");
        
        // 初始隱藏 '.headmobile_nav' 元素
        mobileNav.hide();
        
        // 點擊 '.headmobile_top' 元素時觸發顯示/隱藏 '.headmobile_nav' 元素
        $('.headmobile_top').click(function(){
            if (isNavVisible) {
                // 如果 '.headmobile_nav' 元素已經顯示，則隱藏它
                mobilespan.removeClass("on");
                mobileNav.slideUp("slow", function() {
                    isNavVisible = false;
                });
            } else {
                // 如果 '.headmobile_nav' 元素還沒顯示，則顯示它
                mobilespan.addClass("on");
                mobileNav.slideDown("slow", function() {
                    isNavVisible = true;
                });
            }
        });
        
        // 當點擊事件發生在除了 '.headmobile_nav' 和 '.headmobile_top' 兩個元素之外的其他區域時，隱藏 '.headmobile_nav' 元素
        $(document).on("click", function(event) {
            if (!$(event.target).is('.headmobile_nav, .headmobile_top')) {
                if (isNavVisible) {
                    mobilespan.removeClass("on");
                    mobileNav.slideUp("slow", function() {
                        isNavVisible = false;
                    });
                }
            }
        });

// -----------------------------------------

        $('.intro2').removeClass('wrapperout');
        $('.intro2').addClass('wrapperin');

        

// ---------------------------------------------





    }
});


$(function(){
    let viewport = $(window).width();
    if(viewport <= 375){

gsap.registerPlugin(ScrollTrigger);

// 遍歷每個 .fullimgattchment 元素
gsap.utils.toArray(".fullimgattchment").forEach(fullimgattchment => {
// 創建滾動觸發動畫
gsap.to(fullimgattchment, {
    scrollTrigger: {
        trigger: fullimgattchment,
        start: "top top", // 當滾動到 .fullimgattchment 元素的頂部時觸發動畫
        endTrigger: ".fullscreen_img03", // 指定滾動觸發動畫的結束元素為 .fullscreen 元素
    //   markers: true, // 啟用 markers 屬性，用於設置滾動觸發動畫的標記點
        scrub: true, // 啟用 scrub 屬性實現平滑滾動效果
        pin: true, // 啟用 pin 屬性將元素固定
        pinSpacing: false // 設置 pinSpacing 屬性為 false，表示不應用間距
    },
    yPercent: -100, // 根據需要調整滾動效果的幅度
    ease: "none" // 設置緩動函數，這裡設置為 "none" 以保持線性滾動
    });
});
        



    }
});