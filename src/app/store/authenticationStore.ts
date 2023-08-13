import { create } from 'zustand';

type AuthenticationStore = {
  logged: boolean;
  role: Role;
  userId: string;
  setLogin: (newRole: Role) => void;
  setUserId: (newUserId: string) => void;
  setLogout: () => void;
};
export type Role = 'OPERATOR' | 'ADMIN' | 'NOROLE';
export const useAuthenticationStore = create<AuthenticationStore>()((set) => ({
  logged: false,
  role: 'NOROLE',
  userId: '',
  setUserId: (newUserId: string) => set(() => ({ userId: newUserId })),
  setLogin: (newRole: Role) =>
    set((state: AuthenticationStore) => {
      if (newRole === 'OPERATOR' || newRole === 'ADMIN') {
        return { role: newRole, logged: true };
      }
      return { role: state.role };
    }),
  setLogout: () => set(() => ({ role: 'NOROLE', logged: false, userId: '' })),
}));
