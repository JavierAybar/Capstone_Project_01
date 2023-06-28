// Hamburger menu  //
import hamburgerMenu from './hamburger_menu.js';

document.addEventListener('DOMContentLoaded', () => {
  hamburgerMenu('.toolbar_btn', '.toolbar__menu', '.toolbar__menuLink');
});

// Add testimonial section dynamically //
import testimonialObj from './testimonial_data.js';

const speakerContainer = document.querySelector('.speaker__cards');

testimonialObj.forEach((speakerData, i) => {
  const speaker = document.createElement('div');
  speaker.classList.add('speaker__card');

  const classHiden = i > 1 ? 'hiden__speaker' : '';

  speaker.innerHTML =
    `<img
    class="speaker__img ${classHiden}"
    src="${speakerData.image}"
    alt="${speakerData.name}"
  />
  <div class="${classHiden}">
    <h3 class="speaker__name">${speakerData.name}</h3>
    <p class="speaker__profession">${speakerData.profession}</p>
    <p class="speaker__description">${speakerData.description}</p>
  </div>`

  speakerContainer.appendChild(speaker);
});

// Funcionality for btn see more //
const btnSeeMore = document.querySelector('.speaker__btn');
const arrowUp = document.querySelector('.arrow_down-icon')
const hidenSpeaker = document.querySelectorAll('.hiden__speaker');
const btnText = document.querySelector('.speaker__btn-span');
const seeLess = 'See Less'
const seeMore = 'See More'

btnSeeMore.addEventListener('click', () => {
   hidenSpeaker.forEach((show) => {show.classList.toggle('hiden__speaker');});

  // change content of button //
   arrowUp.classList.toggle('arrow__up-icon');
   if (btnText.textContent === 'See More') {
    btnText.textContent = seeLess;
   }else {
    btnText.textContent = seeMore;
   }
});