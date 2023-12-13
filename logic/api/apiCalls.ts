import { httpRequest } from "../../infrastructure/api-setup"
import { makeLoginRequest } from "./requests/loginRequest"
import { makeAddToCartRequest } from "./requests/addItemToCartRequestBody"
import urls from '../../config/urls.json'
import { BrowserContext } from 'playwright'
import { makeDeleteItemFromCartRequest } from "./requests/deleteItemFromCartRequestBody"
import { makeCurrentUserInfoRequest } from "./requests/getCurrentUserInfoRequestBody"

export async function loginCall(context: BrowserContext){
    const url = urls.login_url
    return httpRequest(url, makeLoginRequest(), context)
}

export async function addToCart(context: BrowserContext, sku:string){
    const url = urls.add_to_cart
    return httpRequest(url, makeAddToCartRequest(sku, 1), context)
}


export async function deleteFromCart(context: BrowserContext, id:number){
    const url = urls.remove_from_cart
    return httpRequest(url, makeDeleteItemFromCartRequest(id), context)
}

export async function getUserInfro(context:BrowserContext){
    const url = urls.get_user_infro
    return httpRequest(url, makeCurrentUserInfoRequest(), context)
}

