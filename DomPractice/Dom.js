const listElements=document.querySelectorAll('li')
const h1=document.getElementById('main-title');

h1.textContent='some new title !';
h1.style.color='white';
h1.style.backgroundColor='black';

const li=document.querySelector('li:last-of-type');
li.textContent=li.textContent+ '(changed!)';

const body=document.body;

for (const lists of listElements) {
    console.dir(lists)
}


const ul=document.querySelector('ul');

console.log(ul.children);
console.log(ul.children[1]);


const a=document.body.firstElementChild.nextElementSibling;
const li1=document=a.firstElementChild;
console.log(li1);
