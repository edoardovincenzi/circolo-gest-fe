export interface ResponseApi<T> {
  data: T;
  message: null | string;
  statusCode: number;
  success: boolean;
  timestamp: string;
}

export interface Category {
  orderTypeId: string;
  name: string;
  lastUpdate: Date | null;
  selected: boolean;
}

export interface Product {
  productId: string;
  name: string;
  productTypeId: string;
  disabled: boolean;
  lastUpdate: Date | null;
}
export interface ProductDetail {
  productId: string;
  name: string;
  productTypeId: string;
  productTypeName: string;
  price: number;
  priceLastUpdate: string;
  warehouseQuantity: number;
  warehouseLastUpdate: string;
}

export interface DecodedToken {
  userId: string;
  token: string;
  tokenDurationMs: number;
  refreshToken: string;
  refreshTokenDurationMs: number;
}
export interface RefreshToken {
  accessToken: 'string';
  refreshToken: 'string';
}
