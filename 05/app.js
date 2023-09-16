console.log('DOM');

const curr = document.querySelector('.js-curr');

const newButton = document.createElement('button');
newButton.innerText = 'usuń z koszyka';
curr.parentElement.appendChild(newButton);


const sblList = Array.from(curr.parentElement.children);
sblList.forEach(function(item){
    if(item !== curr){
    item.classList.add('siblings');
}
})


const artc = curr.parentElement.nextElementSibling;
console.log(artc);
artc.setAttribute('title', 'nextElementSibling');


const lstAtr = artc.nextElementSibling;
console.log(lstAtr);
const btnEl = lstAtr.children[lstAtr.children.length -1];
const pElement = document.createElement('p');
lstAtr.insertBefore(pElement,btnEl);


const newArtc = curr.parentElement.cloneNode(true);
curr.parentElement.parentElement.insertBefore(newArtc, curr.parentElement);