import { create } from 'zustand';

type Store = {
  count: number;
  inc: () => void;
};
const useCartStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state: Store) => ({ count: state.count + 1 })),
}));
