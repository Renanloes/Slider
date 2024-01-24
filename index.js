const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');
// indice = index
let indiceAtual = 0;

function passarSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    }else if (index >= slides.length) {
        index = 0;
    }
    
    const newTransformValue = -index * 100 + 'vw';
    sliderContainer.style.transform = 'translateX(' + newTransformValue + ')';
    indiceAtual = index;
}

setaEsquerda.addEventListener('click', () => {
    passarSlide(indiceAtual - 1);
});

setaDireita.addEventListener('click', () => {
    passarSlide(indiceAtual + 1);
});