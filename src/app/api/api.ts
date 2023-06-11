import axios from 'axios';
import { Category, ProductDetail, ResponseApi } from '../types';

export const getListProductDetail = async (): Promise<
  ProductDetail[] | undefined
> => {
  try {
    const response = await axios.get<ResponseApi<ProductDetail>>(
      '/products/detail'
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async (): Promise<Category[] | undefined> => {
  try {
    const response = await axios.get<ResponseApi<Category>>('/order-types');
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
