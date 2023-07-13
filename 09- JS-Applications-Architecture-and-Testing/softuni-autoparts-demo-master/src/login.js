import { post } from '../data/api.js';
import { login } from '../data/auth.js';
import { showHome } from './home.js';

const loginSection = document.getElementById('login');

const loginForm = loginSection.querySelector('#login-form');
loginForm.addEventListener('submit', onLogin);

export function showLogin() {
    document.querySelector('main').replaceChildren(loginSection);
}

async function onLogin(event) {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const { email, password } = Object.fromEntries(formData.entries());

  // const userData =  await sendLoginData(email, password);
  await login(email, password)

   

   loginForm.reset();

   showHome();
}
