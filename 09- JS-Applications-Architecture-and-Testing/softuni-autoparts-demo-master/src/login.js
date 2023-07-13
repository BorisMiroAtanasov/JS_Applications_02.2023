import { post } from '../data/api.js';
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
  const userData =  await post( 'http://localhost:3030/users/login', {email, password})

   localStorage.setItem('email', userData.email);
   localStorage.setItem('id', userData._id);
   localStorage.setItem('accessToken', userData.accessToken);

   loginForm.reset();

   showHome();
}
