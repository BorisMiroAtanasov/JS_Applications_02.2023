import { del, get, post, put } from "./api.js";

const endpoints = {
    catalog:'/data/motorcycles?sortBy=_createdOn%20desc',
    byId: '/data/motorcycles/'
}

export async function getAllMotors(){
    return get(endpoints.catalog)
}
export async function getByID(id){
    return get(endpoints.byId + id)
}

export async function createMotor(data){
    return post(endpoints.catalog , data)
}

export async function updateMotor(id, data){
    return put(endpoints.byId + id , data)
}

export async function deleteMotor(id){
    return del(endpoints.byId + id)
}