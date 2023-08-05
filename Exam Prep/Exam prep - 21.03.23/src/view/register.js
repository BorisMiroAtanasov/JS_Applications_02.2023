import { html } from '../../node_modules/lit-html/lit-html.js'
import { register } from '../data/auth.js'
import { createSubmitHandler } from '../util.js'

// To Do Replace with actual view

const registerTemplate = (onregister) => html `
<h1>Register Page</h1>
<form @submit=${onregister}>
    <label>Email: <input type="text" name="email"></label>
    <label>Password: <input type="password" name="password"></label>
    <label>Repeat: <input type="password" name="repass"></label>
    <button>Register</button>


</form>

`

export function registerPage(ctx){
    ctx.render (registerTemplate(createSubmitHandler(onRegister)))
// To Do chage user object based on requerments
    async function onRegister({email, password, repass}, form){
        if(email == "" || password == ""){
            return alert('All fields are required!')
        }
        if(password != repass){
            return alert ('Password don t match')
        }
        await register(email, password);
        form.reset();
        // To Do use redirect location from reqierments
        ctx.page.redirect('/');
    }
}