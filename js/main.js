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
            // console.log(this, this.realIndex, MAIN_SLIDE_NAV_LI);
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
// console.log(MAIN_VISUAL_SLIDE_ARROWS[1]);

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

const PF_LEFT_SLIDE_OPTION = {
    // loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: "#mainPortfolio .arrows li:nth-child(2)",
        prevEl: "#mainPortfolio .arrows li:nth-child(1)",
    }
    // autoplay: {
    //     delay: 3000,
    // },
}
const PF_LEFT_SLIDE = new Swiper('.pf_left_slide', PF_LEFT_SLIDE_OPTION);

const PF_RIGHT_SLIDE_OPTION = {
    // loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
}
const PF_RIGHT_SLIDE = new Swiper('.pf_right_slide', PF_RIGHT_SLIDE_OPTION);
PF_LEFT_SLIDE.controller.control = PF_RIGHT_SLIDE;
PF_RIGHT_SLIDE.controller.control = PF_LEFT_SLIDE;

const MS_CONTENT = document.querySelectorAll('#mainSolution .Ms_content .content');
const MS_NUM = document.querySelector('#mainSolution .base .num')
const MS_SLIDE_OPTION = {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 100,
    centeredSlides: true,
    slideActiveClass: "on",
    on: {
        slideChangeTransitionStart: function () {
            // console.log(this.realIndex, this.slides.length);
            let idx = this.realIndex;
            let total = MS_CONTENT.length;
            // for (let i = 0; i < MS_CONTENT.length; i++) {
            //     MS_CONTENT[i].classList.remove('on');
            // }

            MS_NUM.innerHTML = `<strong>${idx < 9 ? 0 : ''}${idx + 1}</strong> / <span>${idx < 9 ? 0 : ''}${total}</span>`;
            MS_CONTENT.forEach(it => it.classList.remove('on'));
            MS_CONTENT[idx].classList.add('on');
        }
    },
    navigation: {
        nextEl: "#mainSolution .arrows li:nth-child(2)",
        prevEl: "#mainSolution .arrows li:nth-child(1)",
    },
    pagination: {
        el: '#mainSolution .dots',
        clickable: true,
    }
}
const MS_SLIDE = new Swiper('.Ms_slide', MS_SLIDE_OPTION);


//바닐라 자바스크립트로 youtube 영상 넣기
//head에 script src 유툽.api넣어주기!!
let player;
// const Y_OPTION =
function onYouTubeIframeAPIReady() {
    player = new YT.Player('main_movie01', {
        height: '100%',
        width: '100%',
        videoId: 'raw3Nu0_mBQ',
    });
}

// pp.onclick = () => {
//     console.log('btn')
// } id는 변수에 담지않고도 함수를 실행할수 있다

// const Y_PLAY_BTN = document.querySelector('#pp');
// const Y_PAUSE_BTN = document.querySelector('#pp2');
// const Y_PLAY_VIDEO = () => {
//     console.log(111);
//     player.playVideo();
// }
// const Y_PAUSE_VIDEO = () => {
//     console.log(111);
//     player.pauseVideo();
// }
// Y_PLAY_BTN.addEventListener('click', Y_PLAY_VIDEO);
// Y_PAUSE_BTN.addEventListener('click', Y_PAUSE_VIDEO);


const V_BTN = document.querySelector('.video_btn');
let SW = true;
const V_SWITCH = e => {
    const tg = e.target;
    tg.classList.toggle('on');
    SW ? player.playVideo() : player.pauseVideo();
    SW = !SW;
}
// let SW : 전역변수, 전역변수를 지역변수로 가둬서 사용하는 방법이 클로져
// V_SWITCH

V_BTN.addEventListener('click', V_SWITCH)