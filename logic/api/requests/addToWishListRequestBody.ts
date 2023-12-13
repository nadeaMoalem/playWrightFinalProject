export const makeAddToWishListRequest = (sku: string, attributes: string, values: string) => {
    return {
        "sku": [
            sku
        ],
        "attributes": [
            attributes
        ],
        "values": [
            values
        ]
    }
}