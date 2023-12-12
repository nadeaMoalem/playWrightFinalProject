export interface CurrentUserInfoResponse {
  data: Data;
}
interface Data {
  currentUserInfo: CurrentUserInfo;
}
interface CurrentUserInfo {
  customerId: number;
  social_login_session: Socialloginsession;
  is_logged_in: number;
  scBalance: number;
  customerGroupId: number;
  firstName: string;
  firstNameOriginal: string;
  lastName: string;
  gender: string;
  birthdate: string;
  email: string;
  city: string;
  zip: string;
  country: string;
  isDCMember: number;
  dcId: string;
  dcBalance: number;
  dc_membership_points_percent: number;
  dc_vip_checked: boolean;
  dc_vip_show: boolean;
  telephone: string;
  international_phone: string;
  isMultipassUser: boolean;
  isMultipassLinkVisible: boolean;
  cart_items_count: number;
  customerEmail: string;
  first_time_user: number;
  pastPurchase: number;
  cart_object: Cartobject;
}
interface Cartobject {
  id: string;
  email: string;
  max_dc_points: number;
  items: Item[];
  minicart_subtotal: number;
}
interface Item {
  __typename: string;
  id: string;
  product: Product3;
  quantity: number;
  prices: Prices;
  configurable_options: Configurableoption2[];
  checkoutItemInfo: CheckoutItemInfo;
}
interface CheckoutItemInfo {
  qty_options: string[];
  has_stock_error: boolean;
  last_in_stock_qty: string;
}
interface Configurableoption2 {
  id: number;
  option_label: string;
  value_id: number;
  value_label: string;
}
interface Prices {
  price: Regularprice;
  row_total: Regularprice;
}
interface Product3 {
  __typename: string;
  sku: string;
  id: number;
  visibility: string;
  status: string;
  early_cutoff: number;
  icon_stampa?: any;
  justlanded: string;
  stock_status2: string;
  stampa?: any;
  stampa_sale?: number;
  stampa_strip?: any;
  stampa_vip_strip?: any;
  lastcall: string;
  category_ids: string[];
  brand: string;
  has_school: boolean;
  use_qty: number;
  brand_url: Brandurl;
  div_top: string;
  div_top_code: string;
  div: string;
  div_code: string;
  type?: any;
  fabric: string;
  meta_title?: any;
  meta_keyword?: any;
  meta_description?: any;
  swatch_image?: any;
  image: Image;
  media_gallery: Mediagallery[];
  small_image: Image;
  thumbnail: Image;
  fragile_product: number;
  description: Description;
  categories: Category[];
  configurable_options: Configurableoption[];
  price_range: Pricerange;
  variants: Variant[];
  tx_labels: Txlabels2;
  resizeMap: ResizeMap;
  __decorate_was_here: boolean;
  blocks: Blocks;
  defaultColorValueIndex: number;
  inStockSkuVariantsBy: InStockSkuVariantsBy;
  __from: string;
}
interface InStockSkuVariantsBy {
  color: Color;
  size: Size;
}
interface Size {
  '33': string[];
  '35': string[];
  '10154': string[];
  '40'?: string[];
  '1440'?: string[];
}
interface Color {
  '20'?: string[];
  '21'?: string[];
  '4'?: string[];
  '2148'?: string[];
  '9077'?: string[];
}
interface Blocks {
  size_chart: string;
  brand: string;
  laundry: string;
  delivery: string;
  description: Description2;
}
interface Description2 {
  content: string;
  cssSelector: string;
  contentReact: string;
  schedule_contentReact: string;
  contentWidgets: any[];
  schedule_contentWidgets: any[];
  contentText: string;
  schedule_contentText: string;
}
interface Txlabels2 {
  stampa_sale?: string;
  brand: string;
  laundry: string;
  manufacturer: string;
  div_top: string;
  div: string;
}
interface Variant {
  attributes: Attribute[];
  product: Product2;
}
interface Product2 {
  id: number;
  sku: string;
  justlanded: string;
  status: string;
  stock_status2: string;
  stampa?: any;
  stampa_sale?: any;
  stampa_strip?: number;
  stampa_vip_strip?: any;
  lastcall?: any;
  swatch_image?: any;
  state_stampa: Statestampa;
  person_height?: string;
  person_size?: any;
  parent_product: Parentproduct;
  image: Image;
  media_gallery: Mediagallery2[];
  small_image: Image;
  thumbnail: Image;
  name: string;
  laundry: number;
  fragile_product?: any;
  manufacturer: string;
  brand: string;
  div_top: string;
  div_top_code: string;
  div: string;
  div_code: string;
  type?: any;
  description: Description;
  price_per_100: Priceper100;
  price_range: Pricerange;
  tx_labels: Txlabels;
  resizeMap: ResizeMap;
  __decorate_was_here: boolean;
  fabric: string;
}
interface ResizeMap {
}
interface Txlabels {
  brand: string;
  laundry: string;
  manufacturer: string;
  div_top: string;
  div: string;
}
interface Priceper100 {
  label: string;
  show_price_per_100: boolean;
}
interface Mediagallery2 {
  disabled: boolean;
  label: string;
  position: number;
  url: string;
}
interface Parentproduct {
  product: Product;
}
interface Product {
  id: number;
  sku: string;
  name: string;
  status: string;
  visibility: string;
  icon_stampa?: any;
  state_stampa: Statestampa;
  person_height?: string;
  person_size?: any;
  fabric: string;
  manufacturer: string;
  laundry: number;
  description: Description;
}
interface Statestampa {
  class: string;
  html: string;
  text: string;
}
interface Attribute {
  label: string;
  code: string;
  value_index: number;
}
interface Pricerange {
  minimum_price: Minimumprice;
  maximum_price: Minimumprice;
}
interface Minimumprice {
  regular_price: Regularprice;
  final_price: Regularprice;
  discount: Discount;
}
interface Discount {
  amount_off: number;
  percent_off: number;
}
interface Regularprice {
  value: number;
  currency: string;
}
interface Configurableoption {
  attribute_code: string;
  attribute_id: string;
  id: number;
  label: string;
  values: Value[];
}
interface Value {
  default_label: string;
  label: string;
  store_label: string;
  use_default_value: boolean;
  value_index: number;
  swatch_data: Swatchdata;
}
interface Swatchdata {
  value: string;
}
interface Category {
  name: string;
  path_in_store?: any;
  path: string;
  url_key: string;
  url_path: string;
  level: number;
  id: number;
  breadcrumbs?: Breadcrumb[];
}
interface Breadcrumb {
  category_id: number;
  category_level: number;
  category_name: string;
  category_url_path: string;
  category_url_key: string;
}
interface Description {
  html: string;
}
interface Mediagallery {
  disabled: boolean;
  label: string;
  position: number;
  url: string;
  __typename: string;
}
interface Image {
  disabled?: any;
  label: string;
  position?: any;
  url: string;
}
interface Brandurl {
  brand: number;
  name: string;
  url: string;
}
interface Socialloginsession {
  date_of_birth?: any;
  email?: any;
  first_name?: any;
  is_proxy_email?: any;
  last_name?: any;
  provider?: any;
  redirect_url?: any;
}