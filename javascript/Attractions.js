
let Att_title = document.getElementsByClassName("mainAtt_textarea")[0].querySelectorAll("li");
let page_Att = document.getElementsByClassName("pageAtt");
// console.log(page_Att);
for(let i = 0; i < Att_title.length; i++){
    Att_title[i].addEventListener("click",function(e){
        e.preventDefault();
        if(Att_title[i].classList.contains("on")){

        }else{
            for(let i = 0; i < Att_title.length; i++){
                Att_title[i].classList.remove("on");
                page_Att[i].classList.remove("on");
            }
            Att_title[i].classList.add("on");
            page_Att[i].classList.add("on");
            // console.log("aaaa")
        }

    });
};


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

    //----------------------------------------------------

    var swiper = new Swiper(".mySwiper", {
        slidesPerView:2.5,
        spaceBetween:5,
        pagination: {
        el: ".swiper-pagination",
        },
    });

    // ----------------------------------------------------
    // let li = document.getElementsByClassName("mainAttli")
    // let dbg = document.getElementsByClassName("mainAtt_weathercardbg")
    // let ck = 0
    // for(let i = 0; i <li.length; i++){
    //     li[i].addEventListener('click',function(){
    //         dbg.style.transform="rotateY(0)";
    //         if(ck===0){
    //         dbg[i].style.transform="rotateY(180deg)";
    //         ck = 1;
    //     }else{
    //         dbg[i].style.transform="rotateY(0deg)";
    //         ck = 0;
    //     }
    //     })
    // }
    let li = document.getElementsByClassName("mainAttli");
    let dbg = document.getElementsByClassName("mainAtt_weathercardbg");

    for (let i = 0; i < li.length; i++) {
        // 在每個dbg元素上儲存狀態ck，初始值為0
        dbg[i].ck = 0;

        li[i].addEventListener('touchstart', function (event) {
            for (let j = 0; j < dbg.length; j++) {
                if (j === i) {
                    if (dbg[j].ck === 0) {
                        dbg[j].style.transform = "rotateY(180deg)";
                        dbg[j].ck = 1;
                    } else {
                        dbg[j].style.transform = "rotateY(0deg)";
                        dbg[j].ck = 0;
                    }
                } else {
                    // 恢復其他元素的原樣式，並將ck狀態設置為0
                    dbg[j].style.transform = "rotateY(0deg)";
                    dbg[j].ck = 0;
                }
            }
        });

        li[i].addEventListener('click', function (event) {
            event.preventDefault(); // 取消默認的點擊行為
        });
    }



    // --------------------------------------------------

    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView:2,
        spaceBetween:3,
        
    });

    let Att_title = document.getElementsByClassName("mainAtt_textarea2")[0].querySelectorAll("li");
    let page_Att = document.getElementsByClassName("pageAtt");
    // console.log(page_Att);
    for(let i = 0; i < Att_title.length; i++){
    Att_title[i].addEventListener("click",function(e){
        e.preventDefault();
        if(Att_title[i].classList.contains("on")){

        }else{
            for(let i = 0; i < Att_title.length; i++){
                Att_title[i].classList.remove("on");
                page_Att[i].classList.remove("on");
            }
            Att_title[i].classList.add("on");
            page_Att[i].classList.add("on");
            // console.log("aaaa")
        }

    });
};



    }
});