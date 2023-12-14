import { CurrentUserInfoResponse } from "./api/responses/currentUserInfoResponse"
import { GlobalInfoResponse } from './api/responses/globalInfoResponse'

async function fetchId(json:CurrentUserInfoResponse):Promise<number|null> {
    const items = json.data.currentUserInfo.cart_object.items || [];
    let id : number|null = null
    if (items){
        id = Number(items[0].id)
        return id
    }
    return id
}

 async function getLabelText(json:CurrentUserInfoResponse){
    const items = json.data.currentUserInfo.cart_object.items || [];
    if(items){
        return items[0].product.image.label
    }
    return null
 }
 async function getFinalPrice(json:CurrentUserInfoResponse){
    const items = json.data.currentUserInfo.cart_object.items || [];
    if(items){
        return items[0].product.price_range.maximum_price.final_price.value
    }
    return null
 }


 async function getWishlisData(json:GlobalInfoResponse){
    const items = json.data.anyWishlist.items || []
    if(items){
        return { id: items[0].id, sku: items[0].product.sku }
    }
    return null
 }

export default { fetchId, getLabelText, getFinalPrice, getWishlisData }