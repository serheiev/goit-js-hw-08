import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const userEmail = document.querySelector('input[name="email"]');
const userMessage = document.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput() {
  const email = userEmail.value;
  const message = userMessage.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}

function onSubmit(e) {
  e.preventDefault();
  if (e.target.email.value && e.target.message.value !== '') {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  } else {
    alert('Все поля должны быть заполнены');
  }
}
const resp = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (resp) {
  userEmail.value = resp.email;
  userMessage.value = resp.message;
}
