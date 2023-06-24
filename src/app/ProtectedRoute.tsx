import { Navigate } from 'react-router-dom';
import { useLogin } from './api/useApi';
import { OBJ_ROUTING } from '@/router';
import { Pending } from '@mui/icons-material';
import { Typography } from '@mui/material';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { data, isError, isLoading } = useLogin();
  if (!data?.userId) {
    // user is not authenticated
    return <Navigate to={OBJ_ROUTING.LOGIN} />;
  }
  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Pending />
      </div>
    );
  }
  if (isError) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Typography variant="h1">Errore di autenticazione</Typography>
      </div>
    );
  }
  return children;
};
