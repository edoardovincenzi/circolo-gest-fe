import { combineReducers, configureStore } from '@reduxjs/toolkit';
import listProductsReducer from '@/app/store/listProducts/listProductsSlice';
import categoryReducer from './category/categorySlice';
import cartReducer from './cart/cartSlice';
import ordersReducer from './orders/ordersSlice';

const operatorSell = combineReducers({
  LIST_PRODUCTS: listProductsReducer,
  CATEGORY: categoryReducer,
  CART: cartReducer,
  ORDERS: ordersReducer,
});

const rootReducer = combineReducers({
  OPERATOR_SELL: operatorSell,
  USER_INFO: operatorSell,
  OPERATION_STORE: operatorSell,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
