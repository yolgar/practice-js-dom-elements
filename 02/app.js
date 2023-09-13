console.log('DOM');

const linkList = document.querySelectorAll('a[data-url]');
console.log(linkList);
linkList.forEach (function (el) {
    const attr = el.getAttribute('data-url');
    el.setAttribute('href', attr);
});