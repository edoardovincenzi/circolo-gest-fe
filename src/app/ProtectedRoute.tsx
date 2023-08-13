import { Navigate, useNavigate } from 'react-router-dom';
import { OBJ_ROUTING } from '@/router';
// import { Pending } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Role, useAuthenticationStore } from './store/authenticationStore';
import { useEffect } from 'react';
import { decodeToken } from 'react-jwt';

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
    userId,
  } = useAuthenticationStore((state: any) => state);
  const navigate = useNavigate();
  if (!userId) {
    const token = localStorage.getItem('token');
    if (token) {
      const myDecodedToken = decodeToken(token);
      console.log('myDecodedToken: ' + JSON.stringify(myDecodedToken));
    }
  }

  if (stateLogin) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Typography variant="h1">Errore di autenticazione</Typography>
      </div>
    );
  }
  if (!userId && role !== roleUser && !stateLogin) {
    // user is not authenticated
    return <></>;
  }
  return children;
};
