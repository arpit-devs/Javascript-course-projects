"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const tabContainer = document.querySelector(".operations__tab-container");
const tab = document.querySelectorAll(".operations__tab");
const tabContent = document.querySelectorAll(".operations__content");
const nav = document.querySelector(".nav");
const initialCoords = nav.getBoundingClientRect();
const section1 = document.querySelector("#section--1");
import { header } from "./challenge.js";

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((e) => {
  e.addEventListener("click", openModal);
});
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//modern scroll mehod

//scroll nav
// document.querySelectorAll(".nav__link").forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.preventDefault();
//     const id = el.getAttribute("href");
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

//event delegation we put event listner to parent to access its child
document.querySelector(".nav__links").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

//tabs

tabContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");
  // console.log(clicked);

  //guard clause
  if (!clicked) return;

  //active tab
  tab.forEach((t) => {
    t.classList.remove("operations__tab--active");
  });
  tabContent.forEach((c) => {
    c.classList.remove("operations__content--active");
  });

  clicked.classList.add("operations__tab--active");

  //active content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

const handleHover = function (e) {
  // console.log(this);
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = e.target.closest(".nav").querySelectorAll(".nav__link");
    const logo = e.target.closest(".nav").querySelector("#logo");
    siblings.forEach((s) => {
      if (s !== link) {
        s.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

//sticky navigation
// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });
const navHeight = nav.getBoundingClientRect().height;

const obsCallback = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(header);

//revealing section
const allSection = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  // console.log(entries);
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach((section) => {
  section.classList.add("section--hidden");
  sectionObserver.observe(section);
});

//load image
const imgTarget = document.querySelectorAll("img[data-src]");

const loadImage = function (entries, observer) {
  entries.forEach((entry) => {
    //guarding class
    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    // entry.target.classList.remove("lazy-img");
    entry.target.addEventListener("load", () => {
      entry.target.classList.remove("lazy-img");
    });
    observer.unobserve(entry.target);
  });
};

const imageObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
});

imgTarget.forEach((img) => {
  imageObserver.observe(img);
});

//slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
let currSlide = 0;
const maxSlide = slides.length;
const dotContainer = document.querySelector(".dots");

// slider.style.overflow = "visible";
const createDots = function () {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class = "dots__dot" data-slide="${i}"></button>`,
    );
  });
};

createDots();

const activeDot = function (i) {
  document.querySelectorAll(".dots__dot").forEach((dot) => {
    dot.classList.remove("dots__dot--active");
  });
  document
    .querySelector(`[data-slide="${i}"]`)
    .classList.add("dots__dot--active");
};

const gotoSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};

slides.forEach((s) => {
  s.style.transition = "none";
});

gotoSlide(0);
activeDot(0);

requestAnimationFrame(() => {
  slides.forEach((s) => {
    s.style.transition = "";
  });
});

const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  gotoSlide(currSlide);
  activeDot(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  gotoSlide(currSlide);
  activeDot(currSlide);
};

btnRight.addEventListener("click", nextSlide);

btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    e.preventDefault();
  }
  if (e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowLeft") prevSlide();
});

dotContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots__dot")) {
    currSlide = Number(e.target.dataset.slide);
    gotoSlide(currSlide);
    activeDot(currSlide);
  }
});
