import { useQuery } from '@tanstack/react-query';
import { getListProducts } from './api';

export const useGetListProducts = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ['list_products'],
    queryFn: getListProducts,
  });
  return { isError, isLoading, data };
};
