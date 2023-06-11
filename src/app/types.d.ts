export interface Category {
  productTypeId: string;
  name: string;
  lastUpdate: Date | null;
}

interface Product {
  productId: string;
  name: string;
  productTypeId: string;
  disabled: boolean;
  lastUpdate: Date | null;
}
