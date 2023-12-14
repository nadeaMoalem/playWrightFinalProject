export interface GlobalInfoResponse {
    data: Data
  }
  
  export interface Data {
    currentUserInfo: CurrentUserInfo
    anyWishlist: AnyWishlist
  }
  
  export interface CurrentUserInfo {
    customerId: number
  }
  
  export interface AnyWishlist {
    items_count: number
    items: Item[]
  }
  
  export interface Item {
    id: number
    product: Product
  }
  
  export interface Product {
    sku: string
    visibility: string
  }
  