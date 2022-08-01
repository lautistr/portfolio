const buttonRight = document.querySelector('.right');
const buttonLeft = document.querySelector('.left');
const scrollContainer = document.querySelector('.projects__horizontal-scroll-container')

let scrollCounter = 0;
console.log(scrollCounter)

const scrollLocation = () => {
    if (scrollCounter == 0) {
        buttonLeft.style.display = 'none';
        buttonRight.style.display = 'block';
    }
    if (scrollCounter == 2){
        buttonRight.style.display = 'none';
        buttonLeft.style.display = 'block';

    }
    if (scrollCounter > 0 && scrollCounter < 2) {
        buttonLeft.style.display = 'block';
        buttonRight.style.display = 'block';
    }
}

buttonRight.onclick = function () {
    scrollContainer.scrollLeft += 754;
    scrollCounter += 1;
    scrollLocation()
    console.log(scrollCounter)
};
buttonLeft.onclick = function () {
    scrollContainer.scrollLeft -= 754;
    scrollCounter -= 1;
    scrollLocation()
    console.log(scrollCounter)
};
