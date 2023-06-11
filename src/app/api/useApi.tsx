import { useQuery } from '@tanstack/react-query';
import { getCategories, getListProductDetail } from './api';

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
