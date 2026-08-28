"use strict";

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
export const header = document.querySelector(".header");

// //this return a live html collection when you remove a tag from document it also remove from the allButton
// const allButton = document.getElementsByTagName("button");
// console.log(allButton);
// //this also return live collection
// console.log(document.getElementsByClassName("btn"));

//creating and inserting element
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  "We use cookies for improved functionality and analytics <button class= 'btn btn--close--cookie'>Got it</button>";

header.append(message);
// header.prepend(message.cloneNode(true));

//before and after place the message as they call as a sibling
// header.before(message);
// header.after(message);

document.querySelector(".btn--close--cookie").addEventListener("click", () => {
  //old way
  //   message.parentElement.removeChild(message);
  //modern way
  message.remove();
});

//remember these were added as inline style so you can console them
message.style.backgroundColor = "#37383d";
message.style.width = "120%";
// console.log(message.style.width);

//you can use getcomputedstyle to see the hidden style in the css
// console.log(getComputedStyle(message).height);
message.style.height =
  Number.parseInt(getComputedStyle(message).height) + 30 + "px";
// console.log(getComputedStyle(message).height);

// document.documentElement.style.setProperty("--color-primary", "orangered");

//Attribute
// const logo = document.querySelector(".nav__logo");
//standart attribute
// console.log(logo.alt);
// console.log(logo.className);

//not standard attribute
// console.log(logo.designer);
// console.log(logo.getAttribute("designer"));
// console.log(logo.setAttribute("company", "Bankist"));

//data attribute
// console.log(logo.dataset.versionNumber);

//class method
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

//dont use this will override all the classes
// logo.className = 'kill'

//old scroll method
// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");

// btnScrollTo.addEventListener("click", (e) => {
//   const s1coord = section1.getBoundingClientRect();
//   //   console.log(s1coord);
//   //   console.log(e.target.getBoundingClientRect());
//   //   console.log(scrollX, scrollY);
//   //   console.log(
//   //     document.documentElement.clientHeight,
//   //     document.documentElement.clientWidth,
//   //   );
//   //scrolling
//   //   window.scrollTo(0, s1coord.top + scrollY);

//   window.scrollTo({
//     top: s1coord.top + scrollY,
//     behavior: "smooth",
//   });
// });

//this is the old way but now we use only event listner
/*
const h1 = document.querySelector("h1");
h1.onmouseenter = function () {
  alert("you are viewing the heading");
};


const h1 = document.querySelector("h1");

const alertMsg = function () {
  alert("you are viewing the header section");
  h1.removeEventListener("mouseenter", alertMsg);
};
h1.addEventListener("mouseenter", alertMsg);


const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = function () {
  return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
};

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("navlin", e.target);
  //generally its not a good idea to stop propagation
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("navlinks", e.target);
});

//you can use capturing phase by passing true in the eventlistner
document.querySelector(".nav").addEventListener(
  "click",
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log("nav", e.target);
  },
  true,
);


const h1 = document.querySelector("h1");
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

//going upward
console.log(h1.parentElement);
console.log(h1.parentNode);
h1.closest("header").style.backgroundColor = "var(--color-secondary)";

//going sideways
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

//get all the siblings
console.log(h1.parentElement.children);
*/

// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log("Html parsed and dom tree build", e);
// });

// window.addEventListener("load", (e) => {
//   console.log("page fully loaded", e);
// });

//this is useful with form submission
// window.addEventListener("beforeunload", (e) => {
//   e.preventDefault();
//   // e.returnValue = "";
// });
