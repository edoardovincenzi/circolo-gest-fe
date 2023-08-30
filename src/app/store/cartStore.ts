import { create } from 'zustand';
import { ProductDetailWithQuantity } from '../types';

type CartStore = {
  count: number;
  productList: ProductDetailWithQuantity[] | [];
  incrementCart: (numIncremente: number) => void;
  addProducts: (newProduct: ProductDetailWithQuantity) => void;
};
export const useCartStore = create<CartStore>()((set) => ({
  count: 0,
  productList: [],
  incrementCart: (numIncremente: number) =>
    set((state: CartStore) => ({ count: state.count + numIncremente })),
  addProducts: (newProduct: ProductDetailWithQuantity) => {
    set((state: CartStore) => {
      const productAlreadyExist = state.productList.find(
        (product) => product.productId === newProduct.productId
      );
      if (productAlreadyExist) {
        const newProductList = state.productList.map((product) => {
          if (product.productId === newProduct.productId) {
            product.quantity += newProduct.quantity;
          }
          return product;
        });
        return {
          productList: [...newProductList],
        };
      }
      return {
        productList: [...state.productList, newProduct],
      };
    });
  },
}));
