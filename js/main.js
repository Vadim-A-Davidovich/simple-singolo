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
    for(let element of elements) {
        element.classList.remove('selected')
      }
  }

  for(let element of tags) {
    element.addEventListener('click', (event) => {
        removeClass(tags);
        event.target.classList.add('selected');
        wrapper.setAttribute('data-sort-sected', event.target.getAttribute('data-sort'))
      });
  }

const mobButton = document.querySelector('.mobile-button');
const headerWrapper = document.querySelector('.header__wrapper');

mobButton.addEventListener('click', () => {
  headerWrapper.classList.toggle('menu__open');
});

const anchors = document.querySelectorAll('.navigation_link a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        removeClass(anchors);
        e.target.classList.add('selected');
        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}