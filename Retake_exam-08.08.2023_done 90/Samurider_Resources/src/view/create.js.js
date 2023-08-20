import { html } from '../../node_modules/lit-html/lit-html.js'
import { createMotor } from '../data/motorcicles.js'
import { createSubmitHandler } from '../util.js';



const createTemplate = (onCreate) => html `
<section id="create">
          <h2>Add Motorcycle</h2>
          <div class="form">
            <h2>Add Motorcycle</h2>
            <form class="create-form" @submit=${onCreate}>
              <input
                type="text"
                name="model"
                id="model"
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="moto-image"
                placeholder="Moto Image"
              />
              <input
              type="number"
              name="year"
              id="year"
              placeholder="Year"
            />
            <input
            type="number"
            name="mileage"
            id="mileage"
            placeholder="mileage"
          />
          <input
            type="text"
            name="contact"
            id="contact"
            placeholder="contact"
          />
            <textarea
              id="about"
              name="about"
              placeholder="about"
              rows="10"
              cols="50"
            ></textarea>
              <button type="submit">Add Motorcycle</button>
            </form>
          </div>
        </section>
 
`;




export  async function createPage(ctx){
  ctx.render(createTemplate(onCreate));

  async function onCreate(event) {
      event.preventDefault();

      const form = event.currentTarget;
      const formData = Object.fromEntries(new FormData(form));
      for (let input in formData) {
          if (formData[input] === '') {
              return alert('All fields are required!');
          }

          //(1) друг начин за проверка ако има такава , ползваш 1 или 2
           if (input === 'year' && Number(formData[input]) < 0) {
             alert('The year must be a positive number!');
               return;
           } else if(input === 'mileage' && Number(formData[input]) < 0){
            alert('The price must be a positive number!');
            return;

           }else if(input === 'contact' && Number(formData[input]) < 0){

           }else{
            formData[input] = formData[input].trim();
           }
           return
       
          

           
      }

      const { model,
        imageUrl, 
        year, 
        mileage,
        contact,
        about } = formData;
      //(1) тук const го слагаме да е let защото имаме стойности който приемат променливи
      // year = Number(year);
      // price = Number(price);


      await createMotor({model,
        imageUrl, 
        year, 
        mileage,
        contact,
        about});

      form.reset();
      ctx.page.redirect('/catalog');
  }
}