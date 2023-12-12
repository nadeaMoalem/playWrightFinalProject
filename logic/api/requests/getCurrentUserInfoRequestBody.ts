export const makeCurrentUserInfoRequest = () =>{
    return {
        "withBasicDetails": true,
        "withCartObject": true,
        "withCartItems": true,
        "withCartCheckoutDetails": false,
        "withMultipass": false
    }
}

