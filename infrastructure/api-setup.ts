import { BrowserContext } from "playwright"

const httpRequest = async(url:string, data:Object, context:BrowserContext) =>{
    const response = await context.request.post(url, {data: data, headers: {"Content-Type": "application/json"}})
    const state = await context.storageState()
    const updatedContext = await context.browser()?.newContext({ storageState: state })
    return { response, context: updatedContext }
}

export{ httpRequest }


