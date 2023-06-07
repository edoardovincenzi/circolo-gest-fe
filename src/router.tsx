import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from './app/App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <div className="text-5xl text-pink-500">login</div>,
  },
  {
    path: 'operator',
    children: [
      {
        path: 'home',
        element: <div className="text-5xl text-pink-500">home operator</div>,
      },
      {
        path: 'sell',
        element: <div className="text-5xl text-pink-500">sell</div>,
      },
      {
        path: 'store',
        element: <div className="text-5xl text-pink-500">store</div>,
      },
      {
        path: 'end_work_shift',
        element: <div className="text-5xl text-pink-500">end_work_shift</div>,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
