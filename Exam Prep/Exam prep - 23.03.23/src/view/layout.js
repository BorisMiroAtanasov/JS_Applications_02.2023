//import { html } from "../../node_modules/lit-html/lit-html.js"

import { html } from '../../node_modules/lit-html/lit-html.js'

// To Do replacewith actual layuot
export const layoutTemplate = (userData, content) => html `
  <header id="site-header">
            <!-- Navigation -->
            <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/catalog">Dashboard</a>
                    <!-- Guest users -->
                    ${userData ? html `<div id="user">
                        <span>${userData.email}</span>
                        <a class="button" href="/details">My Books</a>
                        <a class="button" href="/create">Add Book</a>
                        <a class="button" href="/logout">Logout</a>
                    </div>
                    
                    ` : html `<div id="guest">
                        <a class="button" href="/login">Login</a>
                        <a class="button" href="/register">Register</a>
                    </div>`}
                    
                    <!-- Logged-in users -->
                    
                </section>
            </nav>
        </header>
        
        <main>
            ${content}
        </main>
        <footer id="site-footer">
            <p>@OnlineBooksLibrary</p>
        </footer>`
