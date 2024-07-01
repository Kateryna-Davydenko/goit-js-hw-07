"use strict";

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let inputs = document.querySelectorAll("input");
  let formValues = {};
  let isFormValid = true;

  inputs.forEach(function (input) {
    if (input.value.trim() === "") {
      isFormValid = false;
      alert("All form fields must be filled in");
    }
    formValues[input.name] = input.value.trim();
  });

  if (isFormValid) {
    console.log(formValues);
    inputs.forEach(function (input) {
      input.value = "";
    });
  }
});
