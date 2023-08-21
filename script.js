


const blocks = document.querySelector(".gallery-list");

let imgTarget = document.querySelectorAll(".gallery-list li img");

imgTarget.forEach(function (element) {
  element.classList.add("img-target");
});

let block = document.querySelectorAll(".img-target");

const showImg = document.querySelector(".show-img");
const background = document.querySelector(".background");

const nextButton = document.querySelector(".next-button");
const previosButton = document.querySelector(".previous-button");

const buttonClose = document.querySelector('.close');

const body = document.querySelector('body');

console.log(blocks);

let arrImg = [];
let indexArrImg = 0;

block.forEach(function (element) {
  arrImg.push(element.src);
});

console.log(arrImg);


blocks.addEventListener('click', function (event) {
  let i;
  let e = event.target;

  if (!e.classList.contains("img-target")) {
    return;
  }



  
  for (i = 0; i < arrImg.length; i++) {
    if (arrImg[i] == e.src) {
      indexArrImg = i;
      break
    }
  }
  console.log(indexArrImg);
  showImg.src = e.src;

  if (showImg.src) {
    body.classList.add("overflow-hidden");

    background.classList.add('active-open');
    nextButton.classList.add("active-open");
    previosButton.classList.add("active-open");
    showImg.classList.add("active-open");
    buttonClose.classList.add("active-open");
  }
})




nextButton.addEventListener('click', function () {
  indexArrImg++;

  if (indexArrImg >= arrImg.length) {
    indexArrImg = 0;
  }

  showImg.src = arrImg[indexArrImg];
})


previosButton.addEventListener("click", function () {
  indexArrImg--;

  if (indexArrImg < 0) {
    indexArrImg = arrImg.length - 1;
  }

  showImg.src = arrImg[indexArrImg];
});


background.addEventListener('click', function () {

  body.classList.remove("overflow-hidden");

  background.classList.remove("active-open");
  nextButton.classList.remove("active-open");
  previosButton.classList.remove("active-open");
  showImg.classList.remove("active-open");

  burgerOpen.classList.remove("burger-show-text");
  wrapperBurger.classList.remove("burger-z-index");
  burger.classList.remove("burger-active");
  buttonClose.classList.remove("active-open");
})



const burger = document.querySelector(".header-text");
const wrapperBurger = document.querySelector(".wrapper-burger");
const burgerOpen = document.querySelector(".burger-open");

wrapperBurger.addEventListener('click', function () {

  if (!burger.classList.contains("burger-active")) {
    body.classList.add("overflow-hidden");

    burgerOpen.classList.add("burger-show-text");
    wrapperBurger.classList.add("burger-z-index");
    background.classList.add("active-open");
  } else {
    body.classList.remove("overflow-hidden");

    burgerOpen.classList.remove("burger-show-text");
    wrapperBurger.classList.remove("burger-z-index");
    background.classList.remove("active-open");
  }

    burger.classList.toggle("burger-active");
})


buttonClose.addEventListener('click', function () {
  body.classList.remove("overflow-hidden");

  background.classList.remove("active-open");
  nextButton.classList.remove("active-open");
  previosButton.classList.remove("active-open");
  showImg.classList.remove("active-open");

  burgerOpen.classList.remove("burger-show-text");
  wrapperBurger.classList.remove("burger-z-index");
  burger.classList.remove("burger-active");
  buttonClose.classList.remove("active-open");
})

