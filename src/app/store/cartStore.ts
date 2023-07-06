import { create } from 'zustand';

type CartStore = {
  count: number;
  inc: () => void;
};
const useCartStore = create<CartStore>()((set) => ({
  count: 1,
  inc: () => set((state: CartStore) => ({ count: state.count + 1 })),
}));
