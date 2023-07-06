import { create } from 'zustand';

type AuthenticationStore = {
  logged: boolean;
  role: Role;
  setLogin: (newRole: Role) => void;
  setLogout: () => void;
};
export type Role = 'OPERATOR' | 'ADMIN' | 'NOROLE';
export const useAuthenticationStore = create<AuthenticationStore>()((set) => ({
  logged: false,
  role: 'NOROLE',
  setLogin: (newRole: Role) =>
    set((state: AuthenticationStore) => {
      if (newRole === 'OPERATOR' || newRole === 'ADMIN') {
        return { role: newRole, logged: true };
      }
      return { role: state.role };
    }),
  setLogout: () => set(() => ({ role: 'NOROLE', logged: false })),
}));
