import { useMutation, useQuery } from '@tanstack/react-query';
import { getCategories, getListProductDetail, login } from './api';
import { useAuthenticationStore } from '../store/authenticationStore';
import { decodeToken } from 'react-jwt';
import { DecodedToken } from '../types';

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
  const { setLogin, setUserId } = useAuthenticationStore((state) => state);
  const {
    isError,
    isLoading,
    mutate: mutateLogin,
  } = useMutation(login, {
    onSuccess: (data) => {
      if (data) {
        const { token, userId } = data;
        const myDecodedToken = decodeToken(token);
        console.log(myDecodedToken);
        setUserId(userId);
        setLogin('OPERATOR');
      }
    },
  });
  return { isError, isLoading, mutateLogin };
};
