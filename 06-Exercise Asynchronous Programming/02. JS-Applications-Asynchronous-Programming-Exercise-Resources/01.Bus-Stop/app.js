async function getInfo() {
    // read  input 
    // request to server
    //parse data
    //dysplay data
    //check error

    const stopId = document.getElementById('stopId').value;
    const stopNameElement= document.getElementById('stopName');
    const timeTableElement = document.getElementById('buses')
    const url = ` http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    
    //  console.log(data);
    try {
        stopNameElement.textContent = 'Loading...';
        timeTableElement.replaceChildren()
      const res = await fetch(url);
      if(res.status !== 200){
        throw new Erroe('Stop id not faound')
      }
      const data = await res.json();

      //Object.entries(data.buses)

      stopNameElement.textContent = data.name

    Object.entries(data.buses).forEach(b => {
        let liElement = document.createElement('li');
        liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
        timeTableElement.appendChild(liElement)
    })
    
  } catch (error) {
    stopNameElement.textContent = 'Error';
    
  }


}