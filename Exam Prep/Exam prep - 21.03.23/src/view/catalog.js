import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAllOffers } from '../data/offers.js';

// To Do Replace with actual view

const catalogTemplate = (offers) => html `
<section id="dashboard">
          <h2>Job Offers</h2>

          ${offers.length > 0 ? html `
          <div class="offer">
            <img src="./images/example1.png" alt="example1" />
            <p>
              <strong>Title: </strong><span class="title">Sales Manager</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">1900</span></p>
            <a class="details-btn" href="">Details</a>
          </div>
          <div class="offer">
            <img src="./images/example2.png" alt="example2" />
            <p>
              <strong>Title: </strong
              ><span class="title">Senior Frontend Software Engineer</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">7000</span></p>
            <a class="details-btn" href="">Details</a>
          </div>
          <div class="offer">
            <img src="./images/example3.png" alt="./images/example3.png" />
            <p>
              <strong>Title: </strong
              ><span class="title">Invoice Administrator</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">1700</span></p>
            <a class="details-btn" href="">Details</a>
          </div>` : html ` <h2>No offers yet.</h2>`}

       
         
        </section>`;


export async function catalogPage(ctx){
  const offers = await getAllOffers()
    ctx.render(catalogTemplate(offers));

}