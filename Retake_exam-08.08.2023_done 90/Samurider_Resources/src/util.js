const itemName = 'userData';

export function getUserData(){
    return JSON.parse(localStorage.getItem(itemName))
}


export function setUserData(data){
    return localStorage.setItem(itemName,JSON.stringify(data));
}
export function clearUserData(){
    localStorage.removeItem(itemName)
}

export function createSubmitHandler(callback){
    return function(event){
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())

        //това тримва полетата в register i login
        for (let input in data) {
            data[input] = data[input].trim();
        }
        callback(data, form)
    } 
 }

 // const notification = document.querySelector('.notification');
// const alertText = notification.querySelector('span');


// export function alertFnMessage(message) {
//     notification.style.display = 'block';
//     alertText.textContent = message;
    
//     setTimeout(() => {
//         notification.style.display = 'none';
//     }, 3000);
// }