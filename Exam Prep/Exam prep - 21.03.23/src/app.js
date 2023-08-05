import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { getUserData } from './util.js';
import { layoutTemplate } from './view/layout.js';
import { homePage } from './view/home.js';
import { loginPage } from './view/login.js';
import { registerPage } from './view/register.js';
import { logout } from './data/auth.js';
import { catalogPage } from './view/catalog.js';
import { detailsPage } from './view/details.js';



//To do change render root depending on project HTML structure

const root = document.getElementById('wrapper');
page(decorateContext)
page ('index.html' , '/');
page('/', homePage);
page('/catalog', catalogPage);
page('/catalog/:id', detailsPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);



page.start();

function decorateContext(ctx, next){
ctx.render = renderView

    next();
}
//To Do injeckt dependensis
function renderView(content){
    const userData = getUserData();
    render(layoutTemplate(userData,content), root)

}

function logoutAction(ctx){
    logout();
    ctx.page.redirect('/');
}
