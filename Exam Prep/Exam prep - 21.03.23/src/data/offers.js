import { get, post } from "./api.js";

const endpoints = {
    catalog:'/data/offers?sortBy=_createdOn%20desc',
    byId: '/data/offers/'
}

export function getOffers(){
    return get(endpoints.catalog)
}
export function getByID(id){
    return get(endpoints.byId + id)
}

export function createOffer(data){
    return post(endpoints.catalog , data)
}
