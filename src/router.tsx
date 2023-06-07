import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from './app/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <div className="text-5xl text-pink-500">HOME</div>,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
