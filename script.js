'use strict'

const div2Text = document.querySelector('.div_2_text_left');
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.arrow1_icon');
const rightArrow = document.querySelector('.arrow2_icon');
const sliderItems = slider.querySelectorAll('img');
const sliderTexts = div2Text.querySelectorAll('.div2_bottom_text');
const circles = document.querySelector('.div2_icons')

sliderItems.forEach(function (slide, index){
    if(index !== 0){
        slide.classList.add('hidden');
    }
    slide.dataset.index = index;
    sliderItems[0].setAttribute('data-active', '');
});

sliderTexts.forEach(function (text, index){
    if(index !== 0){
        text.classList.add('hidden');
    }
    text.dataset.index = index;
    sliderTexts[0].setAttribute('data-active', '');
});

//выделение выбранных кружочков, не смог придумать 
//как реализовать это без повторения кода
circles.querySelector('#circle1').addEventListener('click', () =>{
    circles.querySelector('#circle1').classList.add('circleActive');
    circles.querySelector('#circle2').classList.remove('circleActive');
    circles.querySelector('#circle3').classList.remove('circleActive');
});
circles.querySelector('#circle2').addEventListener('click', () =>{
    circles.querySelector('#circle2').classList.add('circleActive');
    circles.querySelector('#circle1').classList.remove('circleActive');
    circles.querySelector('#circle3').classList.remove('circleActive');
});
circles.querySelector('#circle3').addEventListener('click', () =>{
    circles.querySelector('#circle3').classList.add('circleActive');
    circles.querySelector('#circle2').classList.remove('circleActive');
    circles.querySelector('#circle1').classList.remove('circleActive');
});


//стрелки вперёд и назад
rightArrow.addEventListener('click', ()=>{
    showNextSlide('next');
});

leftArrow.addEventListener('click', ()=>{
    showNextSlide('prev');
});


//Функция переключения слайдов
function showNextSlide(direction) {
	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');
    const currentText = div2Text.querySelector('[data-active]');
	currentText.classList.add('hidden');
	currentText.removeAttribute('data-active');

	let nextSlideIndex;
	if (direction === 'next') {
		nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
	} else if (direction === 'prev') {
		nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
	}

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
	nextSlide.classList.remove('hidden');
	nextSlide.setAttribute('data-active', '');

    const nextText = div2Text.querySelector(`[data-index="${nextSlideIndex}"]`);
	nextText.classList.remove('hidden');
	nextText.setAttribute('data-active', '');
}
