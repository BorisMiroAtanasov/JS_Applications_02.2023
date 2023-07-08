async function solution() {
    const main = document.getElementById('main')

    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
  const res = await fetch(url);

  const data = await res.json();
  // console.log(data);
  data.forEach((a) => {
    let divAccordion = createElement('div','',['class','accordion']);
    let divHead =createElement('div','',['class', 'head']);
    let divSpan = createElement('span',a.title);
    let divButton = createElement('button', 'More', ['class','button','id',a._id]);
    let divExtra = createElement('div', '',['class', 'extra']);
    let p = createElement('p');

    divButton.addEventListener('click', toggle);

    


    divExtra.appendChild(p)
    divHead.appendChild(divButton);
    divHead.appendChild(divSpan);
    divAccordion.appendChild(divHead);
    divAccordion.appendChild(divExtra);
    main.appendChild(divAccordion);
  });
  async function toggle(ev){
    const accordeon = ev.target.parentNode.parentNode;

    const p = ev.target.parentNode.parentNode.children[1].children[0];

    const extra = ev.target.parentNode.parentNode.children[1];
    console.log(extra);
    
    const id = ev.target.id

    const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

    const response = await fetch(url);
    const data = await response.json();
    
    p.textContent = data.content
    //console.log(extra);
    const hidden = ev.target.textContent === 'More'
    extra.style.display = hidden ? 'block' : 'none'
    ev.target.textContent = hidden ? 'Less' : 'More'

    

  }

  function createElement(type, content, attributes = []){
    const element = document.createElement(type);

    if(content){
      element.textContent = content;
    }
    if(attributes.length > 0){
      for(let i=0; i< attributes.length; i+=2){
        element.setAttribute(attributes[i],attributes[i+1])
      }
    }
    return element;

  }

    
}

solution()