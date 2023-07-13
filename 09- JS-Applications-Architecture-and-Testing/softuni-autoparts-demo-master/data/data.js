import { get } from "./api.js"

export async function getParts(){
    return get('http://localhost:3030/data/autoparts')
}