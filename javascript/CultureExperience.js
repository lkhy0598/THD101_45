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

    //----------------------------------------------
        
        let op = 0
        let culmainS = $('.Culmain section');
        let culmainP = $('.Culmain p')
        let mbbtn = $('.Culmain_mobilebtn')

        culmainP.hide();
        mbbtn.hide();
        
            culmainS.click(function(){
                let p = $(this).find('p');
                let img = $(this).find('img');
                let h4 = $(this).find('h4');
                let mbbtn = $(this).find('.Culmain_mobilebtn');
                if( $(this).find('p').hasClass('active')) {
                    //如果有active的類別，目前點擊的收起來
                        p.slideUp('slow');
                        p.removeClass('active');
                        
                    }else{
                    //如果沒有active，目前點擊的打開，其他兄弟收起來
                        $(this).siblings().find('p').slideUp('slow');
                        p.slideDown('slow');
                        $(this).siblings().find('p').removeClass('active');
                        p.addClass('active');
                    }

                if( $(this).find('img').hasClass('active')) {
                    img.removeClass('active');
                    img.removeClass('ck');
                }else{
                    $(this).siblings().find('img').removeClass('ck');
                    $(this).siblings().find('img').removeClass('active');
                    img.addClass('active');
                    img.addClass('ck')
                }

                if( $(this).find('h4').hasClass('active')) {
                    h4.removeClass('active');
                    h4.removeClass('ck');
                }else{
                    $(this).siblings().find('h4').removeClass('ck');
                    $(this).siblings().find('h4').removeClass('active');
                    h4.addClass('active');
                    h4.addClass('ck')
                }

                if( $(this).find('.Culmain_mobilebtn').hasClass('active')) {
                        mbbtn.slideUp('slow');
                        mbbtn.removeClass('active');
                        
                    }else{
                        $(this).siblings().find('.Culmain_mobilebtn').slideUp('slow');
                        mbbtn.slideDown('slow');
                        $(this).siblings().find('.Culmain_mobilebtn').removeClass('active');
                        mbbtn.addClass('active');
                    }
            });
        
        

    }
});