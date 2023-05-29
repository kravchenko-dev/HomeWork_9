//                         -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

const addTag = (version, tag) => {
    divJS.insertAdjacentHTML(`${version}`, `${tag}`);
}; 

addTag("afterbegin", `<button id="delText">delete text</button>`);
addTag("beforeend", `<div id="text">some text</div>`);

let delText = document.querySelector('#delText');
let text = document.querySelector('#text');
console.log(text)

delText.addEventListener('click', ()=> {text.remove()});

//                        -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

addTag("beforeend", `<button id="hide">hide me</button>`);

let hide = document.querySelector('#hide');

hide.addEventListener('click', ()=> {hide.remove()});

//                        -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

addTag("beforeend", `<button id="show" class="neutral">show and hide text</button>`);
addTag("beforeend", `<div class="text"><p id="textP"></p></div>`);
let textP = document.querySelector('#textP');

const addText = function() {
    let tree = document.querySelector('#divJS').outerHTML.toString();

    textP.textContent = tree ;
}

const deleteText = function() {
    textP.textContent = " " ;
}

let show = document.querySelector('#show');

show.addEventListener('click', ()=> {
    if(show.className === "neutral") {
        show.className = "textActive";
        addText();
    } else if(show.className === "textActive") {
        show.className = "neutral";
        deleteText();
    }
});