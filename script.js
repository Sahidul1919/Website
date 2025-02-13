let buttonOne = document.querySelector(".buttonOne");
let buttontwo = document.querySelector(".buttontwo");
let currentPage = location.pathname.match(/index(\d+)\.html/);
let Pagnum = currentPage ? parseInt(currentPage[1]) : 1;
let body = document.querySelector("body");
let box = document.getElementById("box");


let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let isOn = localStorage.getItem('colorMode') === 'true';

function ColorChange() {
    isOn = !isOn;
    localStorage.setItem('colorMode', isOn);

    if (isOn) {
        document.body.style.backgroundColor = "rgb(254, 254, 219)";
        six.style.backgroundColor = "rgb(31, 35, 41)";
        six.style.color = "white"
        
        six.textContent = "Turn Off";
    } else {
        document.body.style.backgroundColor = "rgb(31, 35, 41)";
        six.style.backgroundColor = "rgb(254, 254, 219)";
        six.style.color = "black"
        
        six.textContent = "Turn On";
    }
}

if (isOn) {
    document.body.style.backgroundColor = "rgb(254, 254, 219)";
    six.style.backgroundColor = "rgb(31, 35, 41)";
    six.style.color = "white"
   
    six.textContent = "Turn Off";
} else {
    document.body.style.backgroundColor = "rgb(31, 35, 41)";
    six.style.backgroundColor = "rgb(254, 254, 219)";
    six.style.color = "black"
    
    six.textContent = "Turn On";
}

six.addEventListener('click', ColorChange);


function saveScrollPosition() {
    sessionStorage.setItem('scrollPosition', window.scrollY);
}

function restoreScrollPosition() {
    let savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem('scrollPosition');
    }
}

function NextPage() {
    saveScrollPosition();
    Pagnum++;
    if (Pagnum > 5) {
        Pagnum = 1;
    }
    location.href = "index" + Pagnum + ".html";
}

function PreviousPage() {
    saveScrollPosition();
    Pagnum--;
    if (Pagnum < 1) {
        Pagnum = 5;
    }
    location.href = "index" + Pagnum + ".html";
}

function NavBarone() {
    saveScrollPosition();
    Pagnum = 1;
    location.href = "index" + Pagnum + ".html";
}
function NavBartwo() {
    saveScrollPosition();
    Pagnum = 2;
    location.href = "index" + Pagnum + ".html";
}
function NavBarthree() {
    saveScrollPosition();
    Pagnum = 3;
    location.href = "index" + Pagnum + ".html";
}
function NavBarfour() {
    saveScrollPosition();
    Pagnum = 4;
    location.href = "index" + Pagnum + ".html";
}
function NavBarfive() {
    saveScrollPosition();
    Pagnum = 5;
    location.href = "index" + Pagnum + ".html";
}

if (buttonOne) {
    buttonOne.addEventListener('click', NextPage);
}

if (buttontwo) {
    buttontwo.addEventListener('click', PreviousPage);
}

if (one) {
    one.addEventListener("click", NavBarone);
}
if (two) {
    two.addEventListener("click", NavBartwo);
}
if (three) {
    three.addEventListener("click", NavBarthree);
}
if (four) {
    four.addEventListener("click", NavBarfour);
}
if (five) {
    five.addEventListener("click", NavBarfive);
}

window.addEventListener('load', restoreScrollPosition);



