export const makeAddToCartRequest = (itemId: string, quantity: number) => {
    return {
        cart_items: [
            {
                data: {
                    quantity,
                    any_sku: itemId,
                },
            },
        ],
        skip_collect: 1,
    }
}
