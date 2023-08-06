import { html } from '../../node_modules/lit-html/lit-html.js'
import { login } from '../data/auth.js'
import { createSubmitHandler } from '../util.js'

// To Do Replace with actual view

const loginTemplate = (onLogin) => html `
<section id="login-page" class="login">
            <form id="login-form" action="" method="" @submit=${onLogin}>
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>

`

export function loginPage(ctx){
    ctx.render (loginTemplate(createSubmitHandler(onLogin)))
// To Do chage user object based on requerments
    async function onLogin({email, password}, form){
        await login(email, password);
        form.reset();
        // To Do use redirect location from reqierments
        ctx.page.redirect('/catalog');
    }
}