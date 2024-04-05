"use strict";

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';


form.addEventListener('input', function () {
  const formData = {
    email: emailInput.value.trim(),
    message: textarea.value.trim(),
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


function updateFormContent() {
  const formUpdate = JSON.parse(localStorage.getItem(localStorageKey)) || {};
  emailInput.value = formUpdate.email ?? '';
  textarea.value = formUpdate.message ?? '';
}

updateFormContent();


form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formSubmit = JSON.parse(localStorage.getItem(localStorageKey)) || {};

  if (formSubmit.email && formSubmit.message) {
    console.log(formSubmit);

    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});

