import { Navigate, useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Role, useAuthenticationStore } from './store/authenticationStore';
import { decodeToken } from 'react-jwt';
import { checkExiredToken } from './utils';
import { OBJ_ROUTING } from '@/router';
import { postRefreshToken } from './api/api';
import axios from 'axios';
import { useEffect } from 'react';

export const ProtectedRoute = ({
  children,
  role,
}: {
  children: JSX.Element;
  role: Role;
}): JSX.Element => {
  const {
    role: roleUser,
    logged: stateLogin,
    setUserId,
    setLogin,
  } = useAuthenticationStore((state: any) => state);
  const userId = useAuthenticationStore((state) => state.userId);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userId) {
      const token = localStorage.getItem('token');
      const refreshToken = localStorage.getItem('refresh-token');
      if (token && refreshToken) {
        if (refreshToken && !checkExiredToken(refreshToken)) {
          axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
          postRefreshToken(refreshToken)
            .then((response) => {
              if (response) {
                const myDecodedToken = decodeToken(response.accessToken) as {
                  user_role_id: string;
                };
                if (myDecodedToken?.user_role_id) {
                  setUserId(myDecodedToken.user_role_id);
                  setLogin('OPERATOR');
                }
              }
            })
            .catch(() => navigate(OBJ_ROUTING.LOGIN));
        } else {
          navigate(OBJ_ROUTING.LOGIN);
        }
      } else {
        navigate(OBJ_ROUTING.LOGIN);
      }
    }
  }, []);

  if (!userId && role !== roleUser && !stateLogin) {
    // user is not authenticated
    return <></>;
  }
  return children;
};
