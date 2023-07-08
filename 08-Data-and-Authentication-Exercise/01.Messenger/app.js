const url = `http://localhost:3030/jsonstore/messenger`;
const massages = document.getElementById("messages");

function attachEvents() {
  document.getElementById("submit").addEventListener("click", postMassages);
  document.getElementById("refresh").addEventListener("click", loadAllMassages);
}
async function postMassages() {
    const author = document.querySelector('[name="author"]');
    const content = document.querySelector('[name="content"]');
    if(author.value !== "" || content.value !== ""){
        await request(url , {author:author.value, content: content.value})
    author.value = "";
    content.value =""
    };

    

}

async function loadAllMassages() {
  const responsse = await fetch(url);
  const data = await responsse.json();

  massages.value = Object.values(data)
    .map(({ author, content }) => `${author}: ${content}`)
    .join("\n");
}
async function request(ulr, option) {
  if (option) {
    option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(option),
    };
  }
  const response = await fetch(ulr, option);

  return response.json()

}

attachEvents();
