import { useQuery } from '@tanstack/react-query';
import { getCategories, getListProductDetail, login } from './api';

export const useGetListProductDeatil = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ['list_products_detail'],
    queryFn: getListProductDetail,
  });
  return { isError, isLoading, data };
};

export const useGetCategories = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
  return { isError, isLoading, data };
};

export const useLogin = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ['login'],
    queryFn: login,
  });
  return { isError, isLoading, data };
};
