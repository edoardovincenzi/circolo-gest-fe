import axios from 'axios';
import {
  Category,
  DecodedToken,
  ProductDetail,
  RefreshToken,
  ResponseApi,
} from '../types';
import { decodeToken } from 'react-jwt';

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

export const login = async (): Promise<DecodedToken | undefined> => {
  try {
    const response = await axios.post<ResponseApi<DecodedToken>>(
      '/auth/login',
      {
        username: 'testlogin3',
        password: 'testlogin3',
      }
    );
    const { token, refreshToken } = response.data.data;
    localStorage.setItem('token', token);
    localStorage.setItem('refresh-token', refreshToken);
    axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const postRefreshToken = async (
  refreshToken: string
): Promise<RefreshToken | undefined> => {
  try {
    const response = await axios.post<ResponseApi<RefreshToken>>(
      '/auth/refresh-token',
      {
        refreshToken: refreshToken,
      }
    );
    const { accessToken, refreshToken: newRefreshToken } = response.data.data;
    localStorage.setItem('token', accessToken);
    localStorage.setItem('refresh-token', newRefreshToken);
    axios.defaults.headers.common = { Authorization: `Bearer ${accessToken}` };
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
