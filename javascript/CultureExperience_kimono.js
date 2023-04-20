
const selectBox = document.querySelector(".select-box");
const selectBoxCurrent = selectBox.querySelector(".select-box__current");
const selectBoxList = selectBox.querySelector(".select-box__list");
const selectBoxOption = selectBox.querySelectorAll(".select-box__option");

selectBoxCurrent.addEventListener("click", () => {
    selectBoxList.classList.toggle("select-box__list--show");
    selectBoxCurrent.querySelector(".select-box__icon").classList.toggle("select-box__icon--rotate");
});

selectBoxOption.forEach((option) => {
    option.addEventListener("click", () => {
        const optionText = option.textContent;
        selectBoxCurrent.querySelector(".select-box__input-text").textContent = optionText;
        selectBoxList.classList.remove("select-box__list--show");
        selectBoxCurrent.querySelector(".select-box__icon").classList.remove("select-box__icon--rotate");
    });
});



// 获取元素
const minusButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');
const numberElement = document.querySelector('.number');

// 定义变量
let numberValue = 0;

// 定义更新数字的函数
function updateNumber(value) {
    numberValue = value;
    numberElement.textContent = numberValue;
}

// 初始化数字为0
updateNumber(numberValue);

// 为减号按钮添加单击事件监听器
minusButton.addEventListener('click', function() {
    if (numberValue > 0) {
    updateNumber(numberValue - 1);
    }
});

// 为加号按钮添加单击事件监听器
plusButton.addEventListener('click', function() {
    if (numberValue < 5) {
    updateNumber(numberValue + 1);
    }
});


    let a = 0
$(function(){
    $('.kimonoinput_bottom').hide();
    $(".kimonoinput_top").click(function(){
        $(".kimonoinput_bottom").slideToggle("slow");
        if(a === 0){
            $('.toparrow').css({transform:"rotate(-90deg)"});
            a = 1;
        }else{
            $('.toparrow').css({transform:"rotate(0deg)"});
            a = 0;
        }
    })
})

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
// ------------------------------------------
        $('.kimonoinput').removeClass('wrapperin');
        $('.kimonoinput').addClass('wrapperout');
        
    }
});