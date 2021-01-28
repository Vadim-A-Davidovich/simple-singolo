const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const sliderBody = document.querySelector('.slider__body');

arrowLeft.addEventListener('click', () => {
  sliderBody.classList.toggle('second');
});

arrowRight.addEventListener('click', () => {
  sliderBody.classList.toggle('second');
});

const tags = document.querySelectorAll('.portfolio__tag .tag');
const wrapper = document.querySelector('.layout-4-column');

const removeClass = (elements) => {
  elements.forEach(element => element.classList.remove('selected'))
};

tags.forEach(tag => {
  tag.addEventListener('click', (event) => {
    removeClass(tags);
    event.target.classList.add('selected');
    wrapper.setAttribute('data-sort-selected', event.target.getAttribute('data-sort'))
  });
});

const mobileButtonElement = document.querySelector('.mobile-button');
const headerWrapper = document.querySelector('.header__wrapper');

mobileButtonElement.addEventListener('click', () => {
  headerWrapper.classList.toggle('menu__open');
});

const anchors = document.querySelectorAll('.navigation_link a[href*="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    removeClass(anchors);
    e.target.classList.add('selected');
    const blockID = anchor.getAttribute('href').substr(1)
    const section = document.getElementById(blockID);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
});