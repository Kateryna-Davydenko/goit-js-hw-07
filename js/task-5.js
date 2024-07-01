"use strict";

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
button.addEventListener("click", function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = "#" + randomColor;
  span.textContent = "#" + randomColor;
});
