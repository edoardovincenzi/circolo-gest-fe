import axios from 'axios';
import {
  Category,
  DecodedToken,
  ProductDetail,
  RefreshToken,
  ResponseApi,
} from '../types';
import { Cookie } from '@mui/icons-material';

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

const fakeResponse = {
  userId: 'D3778EAB-1195-4C31-A4B0-7384F816BF08',
  token:
    'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3JvbGVfaWQiOiI0NzY1MTM3Ny0wMTgzLTRENUQtOUQ0Ny1COTE4RTFDQkUyRTAiLCJhY2Nlc3NfdG9rZW5fZHVyYXRpb24iOjE4MDAwMCwic3ViIjoidGVzdGxvZ2luMyIsImlhdCI6MTY5MTkxODA1OCwiZXhwIjoxNjkxOTE4MjM4fQ.QsHGTUBKaHEzqpN5pdQNpwqN3DxLibO-kroiIQxAx7I',
  tokenDurationMs: 180000,
  refreshToken:
    'eyJhbGciOiJIUzI1NiJ9.eyJyZWZyZXNoX2d1aWQiOiIyM0U4RjZFNS0xM0RGLTQ1NTQtQkVEMy0zMDRFNzM0MENDMjEiLCJzdWIiOiJ0ZXN0bG9naW4zIiwiaWF0IjoxNjkxOTE4MDU4LCJleHAiOjE2OTE5MzI0NTh9.5DfIcjvANkb-Obx3yV1uY31x1yPbikn86Ol_kK7dlKM',
  refreshTokenDurationMs: 14400000,
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
    const token = response.data.data.token;
    axios.defaults.headers.common = { Authorization: `bearer ${token}` };
    // axios.defaults.headers.common = {
    //   Authorization: `bearer ${fakeResponse.token}`,
    // };
    // localStorage.setItem('token', fakeResponse.token);
    return response.data.data;
    return fakeResponse;
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
    const token = response.data.data.accessToken;
    axios.defaults.headers.common = { Authorization: `bearer ${token}` };
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
