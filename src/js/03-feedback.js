import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input[name="email"]');
const userMessage = document.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);
function onInput() {
  let email = userEmail.value;
  let message = userMessage.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}

function onSubmit(e) {
  e.preventDefault();
  console.log(localStorage.getItem(STORAGE_KEY));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

const resp = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (resp) {
  userEmail.value = resp.email;
  userMessage.value = resp.message;
}
