import { html } from '../../node_modules/lit-html/lit-html.js'
import { getAllMotors } from '../data/motorcicles.js'



const catalogTemplate = (motors) => html `
 <h2>Available Motorcycles</h2>
        ${motors.length > 0 ? motors.map(motorCard) : html `
        <h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
         <!-- Display an h2 if there are no posts -->
        


`;

const motorCard = (motor) => html`
 <div class="motorcycle">
            <img src=${motor.imageUrl} />
            <h3 class="model">${motor.model}</h3>
            <p class="year">Year: ${motor.year}</p>
            <p class="mileage">Mileage: ${motor.mileage} km.</p>
            <p class="contact">Contact Number: ${motor.contact}</p>
            <a class="details-btn" href="/catalog/${motor._id}">More Info</a>
          </div>

`;

export  async function catalogPage(ctx){
  const motors = await getAllMotors()
    ctx.render(catalogTemplate(motors))
}