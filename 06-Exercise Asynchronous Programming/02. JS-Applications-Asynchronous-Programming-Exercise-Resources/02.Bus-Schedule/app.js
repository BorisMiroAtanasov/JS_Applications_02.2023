function solve() {
    let label = document.querySelector('#info span');
    let departBtn = document.getElementById('depart');
    let arrivetBtn = document.getElementById('arrive');
    let stop = {
        next: "depot"
    };

    async function depart() {
        // get info for next stop
        //display next stop
        departBtn.disabled = true
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        const res = await fetch(url);

        if(res.status !== 200){
            label.textContent = `Error`
            departBtn.disabled = true;
            arrivetBtn.disabled = true;
            alert('Wrong Data')
            
        }
        stop = await res.json();

        label.textContent = `Next stop ${stop.name}`
        arrivetBtn.disabled = false

    
     }

    function arrive() {
        label.textContent = `Arriving at ${stop.name}`

        departBtn.disabled = false;

        arrivetBtn.disabled = true;

        
    }

    return {
        depart,
        arrive
    };
}

let result = solve();