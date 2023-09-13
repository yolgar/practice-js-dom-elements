console.log('DOM');

const firstElement = document.querySelector('.comments__item.comments__item--newest');
console.log(firstElement);
if(firstElement) {
    const elementWithAttr = firstElement.querySelectorAll('[data-info]');
console.log(elementWithAttr.length);
};