import { BrowserContext } from "playwright"

let context : BrowserContext

export const setNewContext = async (newContext:BrowserContext) => context = newContext
export const getNewContext = (): BrowserContext => context;

const httpRequest = async(url:string, data:Object, context:BrowserContext) =>{
    const response = await context.request.post(
        url, 
        {data: data, headers: {"Content-Type": "application/json"}}
        )
    const state = await context.storageState()
    const updatedContext = await context.browser()?.newContext({ storageState: state })
    await setNewContext(updatedContext!)
    return response
}

export{ httpRequest }


