import { html } from '../../node_modules/lit-html/lit-html.js'
import { login } from '../data/auth.js'
import { createSubmitHandler } from '../util.js'

// To Do Replace with actual view

const loginTemplate = (onLogin) => html `
<h1>Login Page</h1>
<form @submit=${onLogin}>
    <label>Email: <input type="text" name="email"></label>
    <label>Password: <input type="password" name="password"></label>
    <button>Login</button>


</form>

`

export function loginPage(ctx){
    ctx.render (loginTemplate(createSubmitHandler(onLogin)))
// To Do chage user object based on requerments
    async function onLogin({email, password}, form){
        await login(email, password);
        form.reset();
        // To Do use redirect location from reqierments
        ctx.page.redirect('/');
    }
}