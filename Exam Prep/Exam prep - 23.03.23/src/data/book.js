import { del, get, post, put } from "./api.js";

const endPoints = {
    catalog:'/data/books?sortBy=_createdOn%20desc',
    byId:'/data/books',
}

export async function getAllBooks(){
    return get(endPoints.catalog)
}
export async function getById(id){
    return get(endPoints.byId+id)
}
export async function createBook(data){
    return post(endPoints.catalog, data)
}

export async function updataBook(id,data){
    return put(endPoints.byId + id, data)
}

export async function deleteBook(id){
    return del(endPoints.byId + id)
}