import { post } from "./api.js";


export async function login(email, password){
    const userData =  await  post('/users/login', {email, password});
   // return userData

   localStorage.setItem('userData', JSON.stringify({
    email: userData.email, 
    id: userData.id,
    accessToken: userData.accessToken


   }))

//    localStorage.setItem('email', userData.email);
//    localStorage.setItem('id', userData._id);
//    localStorage.setItem('accessToken', userData.accessToken);
}