import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '@/app/App';
import Home from '@/app/pages/operator/home/Home';
import LayoutPage from '@/app/root/LayoutPage';
import Sell from '@/app/pages/operator/sell/Sell';

export const OBJ_ROUTING = {
  LOGIN: 'login',
  OPERATOR: 'operator',
  HOME: 'home',
  SELL: 'sell',
  STORE: 'store',
  ENDWORKSHIFT: 'end_work_shift',
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: OBJ_ROUTING.LOGIN,
    element: <div className="text-5xl text-pink-500">login</div>,
  },
  {
    path: OBJ_ROUTING.OPERATOR,
    children: [
      {
        path: OBJ_ROUTING.HOME,
        element: (
          <LayoutPage>
            <Home />
          </LayoutPage>
        ),
      },
      {
        path: OBJ_ROUTING.SELL,
        element: (
          <LayoutPage>
            <Sell />
          </LayoutPage>
        ),
      },
      {
        path: OBJ_ROUTING.STORE,
        element: <div className="text-5xl text-pink-500">store</div>,
      },
      {
        path: OBJ_ROUTING.ENDWORKSHIFT,
        element: <div className="text-5xl text-pink-500">end_work_shift</div>,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to="/operator/home" replace />,
  },
]);
