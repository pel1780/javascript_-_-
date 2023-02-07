const TOP_BANNER = document.querySelector('#header .topBanner');
const TOP_BANNER_BTN = document.querySelector('#header i');

const TOP_BANNER_CLOSE = () => {
    TOP_BANNER.classList.add('on');
};
TOP_BANNER_BTN.addEventListener('click', TOP_BANNER_CLOSE);
// ////// top banner

const SLIDE_OPTION = {
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
const TOP_BANNER_SLIDE = new Swiper('.topBanner', SLIDE_OPTION);
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