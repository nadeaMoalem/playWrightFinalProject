export const makeDeleteItemFromCartRequest = (itemId: number) => {
    return {
            "cart_item_id": itemId,
            "skip_collect": 1,
            "withMultipass": false
    }
}