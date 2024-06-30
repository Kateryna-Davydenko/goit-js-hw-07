"use strict";

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let inputs = document.querySelectorAll("input");
  let formData = {};

  inputs.forEach((input) => {
    let key = input.name;
    let value = input.value.trim();
    formData[key] = value;

    if (value.trim() === "") {
      alert("All form fields must be filled in");
    }
  });

  console.log(formData);

  inputs.forEach((input) => {
    input.value = "";
  });
});
