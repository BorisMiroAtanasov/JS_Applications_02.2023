import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAllBooks } from '../data/book.js'



const catalogTemplate = (books) => html `
 <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <!-- Display ul: with list-items for All books (If any) -->
            <ul class="other-books-list">
               ${books.length > 0 ? books.map(oneBook) : 
               html `<p class="no-books">No books in database!</p>`
               
            }
            </ul>
            <!-- Display paragraph: If there are no books in the database -->
            
        </section>


`;

const oneBook = (book) => html `
<li class="otherBooks">
                    <h3>${book.title}</h3>
                    <p>${book.description}</p>
                    <p class="img"><img src=${book.imageUrl}></p>
                    <a class="button" href="/catalog/${book._id}">Details</a>
                </li>
`;



export async function catalogPage(ctx){

    const books = await getAllBooks()
    ctx.render (catalogTemplate(books))
}