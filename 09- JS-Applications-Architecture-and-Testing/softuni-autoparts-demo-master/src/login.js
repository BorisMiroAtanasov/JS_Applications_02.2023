import { post } from '../data/api.js';
import { login } from '../data/auth.js';
import { showHome } from './home.js';
import { createSubmitListener } from './util.js';


const loginSection = document.getElementById('login');

const loginForm = loginSection.querySelector('#login-form');
createSubmitListener (loginForm, onLogin  )



export function showLogin() {
    document.querySelector('main').replaceChildren(loginSection);
}

async function onLogin(email, password) {

  // const userData =  await sendLoginData(email, password);
  await login(email, password)

   loginForm.reset();

   showHome();
}
