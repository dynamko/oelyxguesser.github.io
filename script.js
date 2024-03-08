var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000, // 5 seconds
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});