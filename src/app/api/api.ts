import axios from 'axios';
import { Category, Login, ProductDetail, ResponseApi } from '../types';

export const getListProductDetail = async (): Promise<
  ProductDetail[] | undefined
> => {
  try {
    const response = await axios.get<ResponseApi<ProductDetail[]>>(
      '/products/detail'
    );
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async (): Promise<Category[] | undefined> => {
  try {
    const response = await axios.get<ResponseApi<Category[]>>('/order-types');
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (): Promise<Login | undefined> => {
  try {
    const response = await axios.post<ResponseApi<Login>>('/auth/login', {
      username: 'testlogin3',
      password: 'testlogin3',
    });
    const token = response.data.data.token;
    axios.defaults.headers.common = { Authorization: `bearer ${token}` };
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
