import axios from 'axios';
import { Product } from '../types';

export const getListProducts = async (): Promise<Product[] | undefined> => {
  try {
    const response = await axios.get('/products');
    return response.data.data.data;
  } catch (error) {
    console.log(error);
  }
};
