const TOP_BANNER = document.querySelector('#header .topBanner');
const TOP_BANNER_BTN = document.querySelector('#header i');

const TOP_BANNER_CLOSE = () => {
    TOP_BANNER.classList.add('on');
};
TOP_BANNER_BTN.addEventListener('click', TOP_BANNER_CLOSE);
// ////// top banner

const TOP_BANNER_SLIDE_OPTION = {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".dots",
        clickable: true,
    },
};
const TOP_BANNER_SLIDE = new Swiper('.topBanner', TOP_BANNER_SLIDE_OPTION);
// /////// top banner slide

const HD_WRAP = document.querySelector('#header .hdWap');

const HD_WRAP_HANDLER = () => {
    let SCT = window.scrollY;
    // console.log('스트롤량 : ', SCT);
    // HD_WRAP.classList.toggle('on');
    // if (SCT >= 100) {
    //     HD_WRAP.classList.add('on');
    // } else {
    //     HD_WRAP.classList.remove('on');
    // }
    SCT >= 100
        ? HD_WRAP.classList.add('on')
        : HD_WRAP.classList.remove('on')
}

window.addEventListener('scroll', HD_WRAP_HANDLER);


const MAIN_SLIDE_NAV = document.querySelector('#mainVisual .silde_nav');
const MAIN_SLIDE_NAV_LI = document.querySelectorAll('#mainVisual .silde_nav li');

const MAIN_SLIDE_NUM = document.querySelector('#mainVisual .num');

const MAIN_VISUAL_SLIDE_OPTION = {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // navigation: {
    //     nextEl: "#mainVisual .arrows .right_arrow",
    //     prevEl: "#mainVisual .arrows .left_arrow",
    // },
    on: {
        slideChangeTransitionStart: function () {
            console.log(this, this.realIndex, MAIN_SLIDE_NAV_LI);
            let idx = this.realIndex;
            let total = this.slides.length;
            MAIN_SLIDE_NAV_LI.forEach(it => it.classList.remove('on'));
            MAIN_SLIDE_NAV_LI[idx].classList.add('on');
            MAIN_SLIDE_NUM.innerHTML = `<strong>${idx < 9 ? 0 : ''}${idx + 1}</strong> / <span>${idx < 9 ? 0 : ''}${total - 2}</span>`
            // if ((idx + 1) > 10) {
            //     MAIN_SLIDE_NUM.innerHTML = `<strong>${idx + 1}</strong> / <span>${total - 2}</span>`
            // } else {
            //     MAIN_SLIDE_NUM.innerHTML = `<strong>0${idx + 1}</strong> / <span>0${total - 2}</span>`
            // }
        }
    }
};

const MAIN_VISUAL_SLIDE = new Swiper('.mainSlide', MAIN_VISUAL_SLIDE_OPTION);

const MAIN_VISUAL_SLIDE_ARROWS = document.querySelectorAll('#mainVisual .arrows>div');
console.log(MAIN_VISUAL_SLIDE_ARROWS[1]);

MAIN_VISUAL_SLIDE_ARROWS[0].addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slidePrev(2000);
});
MAIN_VISUAL_SLIDE_ARROWS[1].addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slideNext(2000);
});

// 이벤트의 위임

const MAIN_SLIDE_NAV_HANDLER = e => {
    e.preventDefault();
    // console.log(e.target);
    // for (i = 0; i < MAIN_SLIDE_NAV_LI.length; i++) {
    //     MAIN_SLIDE_NAV_LI[i].classList.remove('on');
    // }
    const TG = e.target.parentElement;
    // 배열에서 번호 받아오기
    const I = [...MAIN_SLIDE_NAV_LI].indexOf(TG);
    //console.log(I);
    //TG.classList.add('on');
    MAIN_VISUAL_SLIDE.slideTo(I + 1);
}
MAIN_SLIDE_NAV.addEventListener('click', MAIN_SLIDE_NAV_HANDLER);