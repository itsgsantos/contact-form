import messageSent from './messageSent.js';

const form = document.querySelector('#form');
const terms = document.querySelector('#terms');
const button = document.querySelector('#submit');
const termsError = document.querySelector('#termsError');
const fieldsRequired = document.querySelectorAll('[required]');
const errors = document.querySelectorAll('[data-span="error"]');
const querys = document.querySelectorAll('[data-queryType]');
const queryTypeError = document.querySelector('#queryTypeError');
let queryTypeSelect = null;

function handleClick() {
  fieldsRequired.forEach((field) => {
    if (!field.value.trim()) {
      field.classList.add('invalid');
    }
  });

  errors.forEach((error) => {
    if (error.previousElementSibling.classList.contains('invalid')) {
      error.classList.add('show');
    }
  });

  querys.forEach((query) => {
    if (query.checked) {
      queryTypeSelect = query;
    }
  });

  if (queryTypeSelect === null) {
    queryTypeError.classList.add('show');
  }

  if (!terms.checked) {
    termsError.classList.add('show');
  }
}

function hideError() {
  fieldsRequired.forEach((field) => {
    field.classList.remove('invalid');
  });

  queryTypeError.classList.remove('show');

  errors.forEach((error) => {
    error.classList.remove('show');
  });
}

function handleChange() {
  hideError();
}

function handleInput() {
  hideError();
}

function handleSubmit(event) {
  event.preventDefault();
  messageSent();
  form.reset();
}

button.addEventListener('click', handleClick);

form.addEventListener('submit', handleSubmit);
form.addEventListener('change', handleChange);
form.addEventListener('input', handleInput);
