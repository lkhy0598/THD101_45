$(function(){
    let viewport = $(window).width();
    if(viewport > 414){
const sections = document.querySelectorAll('section');

function mouseenterHandler(event) {
    sections.forEach(section => {
        if (section !== event.target && section !== document.querySelector('.Tasty04') && section !== document.querySelector('.Tasty10')) {
            section.classList.remove('selected');
            section.style.filter = 'grayscale(100%)';
            section.style.transition = 'all 0.3s ease';
        }
});

event.target.classList.add('selected');
    if (event.target !== document.querySelector('.Tasty04') && event.target !== document.querySelector('.Tasty10')) {
    event.target.style.filter = 'grayscale(0%)';
    event.target.style.transition = 'all 0.3s ease';
    } else {
    sections.forEach(section => {
        section.classList.remove('selected');
        section.style.filter = 'grayscale(0%)';
        section.style.transition = 'all 0.3s ease';
        });
    }
}

function mouseleaveHandler(event) {
    sections.forEach(section => {
        if (section !== document.querySelector('.Tasty04') && section !== document.querySelector('.Tasty10')) {
            section.classList.remove('selected');
            section.style.filter = 'grayscale(0%)';
            section.style.transition = 'all 0.3s ease';
        }
    });
}

sections.forEach(section => {
    section.addEventListener('mouseenter', mouseenterHandler);
    section.addEventListener('mouseleave', mouseleaveHandler);
});
}
});

// ----------------------------------------------------------

$(function(){
    let viewport = $(window).width();
    if(viewport <= 414){

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

        // ----------------------------------------------------------------------

        let tastymobile = document.getElementsByClassName('Tastymb');

        // 迴圈註冊 click 事件處理函式
        for (let i = 0; i < tastymobile.length; i++) {
            tastymobile[i].addEventListener('click', function() {
                let tastymba = this.querySelector('a');
                let tastymbaSpans = this.querySelectorAll('a span');
                tastymba.classList.toggle('on');
        
                tastymbaSpans.forEach(function(span) {
                    span.classList.toggle('on');
                });
        
                for (let j = 0; j < tastymobile.length; j++) {
                    if (j !== i) {
                        let otherTastymba = tastymobile[j].querySelector('a');
                        let otherTastymbaSpans = tastymobile[j].querySelectorAll('a span');
                        otherTastymba.classList.remove('on');
        
                        otherTastymbaSpans.forEach(function(span) {
                            span.classList.remove('on');
                        });
                    }
                }
        
                for (let j = 0; j < tastymobile.length; j++) {
                    if (j !== i) {
                        tastymobile[j].classList.add('dark');
                    } else {
                        tastymobile[j].classList.remove('dark');
                    }
                }
            });
        }
        
        // 註冊 click 事件處理函式，當點擊 document 元素時，移除所有 tastymobile 元素的 on 類別並加上 dark 類別
        document.addEventListener('click', function(event) {
            let target = event.target;
            if (!target.closest('.Tastymb')) {
                let tastymbaList = document.querySelectorAll('.Tastymb a.on');
                tastymbaList.forEach(function(tastymba) {
                    tastymba.classList.remove('on');
                    let tastymbaSpans = tastymba.parentNode.querySelectorAll('span');
                    tastymbaSpans.forEach(function(span) {
                        span.classList.remove('on');
                    });
                    tastymba.closest('.Tastymb').classList.add('dark');
                });
        
                let tastymobileList = document.querySelectorAll('.Tastymb');
                tastymobileList.forEach(function(tastymobile) {
                    tastymobile.classList.remove('dark');
                });
            } else {
                let tastymba = target.closest('.Tastymb').querySelector('a');
                if (!tastymba.classList.contains('on')) {
                    let tastymbaList = document.querySelectorAll('.Tastymb a.on');
                    tastymbaList.forEach(function(tastymba) {
                        tastymba.classList.remove('on');
                        let tastymbaSpans = tastymba.parentNode.querySelectorAll('span');
                        tastymbaSpans.forEach(function(span) {
                            span.classList.remove('on');
                        });
                        tastymba.closest('.Tastymb').classList.add('dark');
                    });
        
                    let tastymobileList = document.querySelectorAll('.Tastymb');
                    tastymobileList.forEach(function(tastymobile) {
                        tastymobile.classList.remove('dark');
                    });
                }
            }
        });
        
        

    }
});