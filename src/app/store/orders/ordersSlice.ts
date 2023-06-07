import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  productId: string;
  name: string;
  productTypeId: string;
  disabled: boolean;
  lastUpdate: Date | null;
}

const initialState: Product[] = [];

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = ordersSlice.actions;

export default ordersSlice.reducer;
