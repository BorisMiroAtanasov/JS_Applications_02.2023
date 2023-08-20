import { html } from '../../node_modules/lit-html/lit-html.js'
import { deleteMotor, getByID } from '../data/motorcicles.js';
import { getUserData } from '../util.js';





const detailsTemplate = (motor, onDelete) => html`
<section id="details">
<div id="details-wrapper">
            <img id="details-img" src=${motor.imageUrl} alt="example1" />
            <p id="details-title">${motor.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="year">Year: ${motor.year}</p>
                <p class="mileage">Mileage: ${motor.mileage} km.</p>
                <p class="contact">Contact Number: ${motor.contact}</p>
                   <p id = "motorcycle-description">
                   ${motor.about}
                        </p>
              </div>
               <!--Edit and Delete are only for creator-->
               ${motor.canEdit ? html`
               <div id="action-buttons">
            
            <a href="/catalog/${motor._id}/edit" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
          </div> ` : null}
          
            </div>
        </div>
      </section>

`;


export async function detailsPage(ctx) {

  const id = ctx.params.id;
  const motor = await getByID(id);

  const userData = getUserData()

  // console.log(userData._id);
  // console.log(motor._ownerId);



  if (userData && userData._id === motor._ownerId) {
    motor.canEdit = true;
  }
  ctx.render(detailsTemplate(motor, onDelete));

  async function onDelete() {
    const choice = confirm('Are you sure')
    if (choice) {
      await deleteMotor(id);

      ctx.page.redirect('/catalog')
    }
  }

}