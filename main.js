const buttonRight = document.querySelector('.right');
const buttonLeft = document.querySelector('.left');

buttonRight.onclick = function () {
    document.querySelector('.projects__horizontal-scroll-container')
        .scrollLeft += 756;
};
buttonLeft.onclick = function () {
    document.querySelector('.projects__horizontal-scroll-container')
        .scrollLeft -= 756;
};