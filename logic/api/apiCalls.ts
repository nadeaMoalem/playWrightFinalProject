import { httpRequest } from "../../infrastructure/api-setup"
import { makeLoginRequest } from "./requests/loginRequest"
import { makeAddToCartRequest } from "./requests/addItemToCartRequestBody"
import urls from "../../config/urls.json"
import { BrowserContext } from "playwright"
import { makeDeleteItemFromCartRequest } from "./requests/deleteItemFromCartRequestBody"
import { makeCurrentUserInfoRequest } from "./requests/getCurrentUserInfoRequestBody"
import { makeAddToWishListRequest } from "./requests/addToWishListRequestBody"
import { makeDeleteItemFromWishListRequest } from "./requests/deleteItemFromWishListRequestBody"

async function loginCall(context: BrowserContext){
    const url = urls.login_url
    return await httpRequest(url, makeLoginRequest(), context)
}

async function addToCart(context: BrowserContext, sku:string){
    const url = urls.add_to_cart
    return await httpRequest(url, makeAddToCartRequest(sku, 1), context)
}


async function deleteFromCart(context: BrowserContext, id:number){
    const url = urls.remove_from_cart
    return await httpRequest(url, makeDeleteItemFromCartRequest(id), context)
}

async function getUserInfo(context:BrowserContext){
    const url = urls.get_user_info
    return await httpRequest(url, makeCurrentUserInfoRequest(), context)
}

async function addToWishList(context:BrowserContext, sku:string, attributes:string, values:string){
    const url = urls.add_to_wishlist
    return await httpRequest(url, makeAddToWishListRequest(sku, attributes, values), context)
}

async function removeFromWishList(context:BrowserContext, id:number){
    const url = urls.remove_from_wishlist
    return (await httpRequest(url, makeDeleteItemFromWishListRequest(id), context))

}

async function getGlobalInfo(context:BrowserContext){
    const url = urls.get_global_info
    return await httpRequest(url, {}, context)
}
export default { loginCall, addToCart, deleteFromCart, getUserInfo, removeFromWishList, addToWishList, getGlobalInfo }