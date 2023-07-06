import { useMutation, useQuery } from '@tanstack/react-query';
import { getCategories, getListProductDetail, login } from './api';
import { useAuthenticationStore } from '../store/authenticationStore';
import { decodeToken } from 'react-jwt';

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
  const { setLogin } = useAuthenticationStore((state) => state);
  const {
    isError,
    isLoading,
    mutate: mutateLogin,
  } = useMutation(login, {
    onSuccess: (data) => {
      if (data?.token) {
        const myDecodedToken = decodeToken(data?.token);
        console.log(myDecodedToken);
        setLogin('OPERATOR');
      }
    },
  });
  return { isError, isLoading, mutateLogin };
};
