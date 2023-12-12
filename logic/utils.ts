import { CurrentUserInfoResponse } from "./api/responses/currentUserInfoResponse"

export async function fetchId(sku:string, json:CurrentUserInfoResponse):Promise<number|null> {
    const cartObject = json.data.currentUserInfo.cart_object;
    const items = cartObject?.items || [];
    let id : number|null = null
    for (const item of items){
        if (item.product && item.product.sku === sku){
            id = Number(item.id)
            return id
        }
    }
    return id
}

export default fetchId