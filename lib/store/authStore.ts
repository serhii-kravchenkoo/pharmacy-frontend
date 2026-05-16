import { create } from 'zustand';

type User = {
  name: string;
  email: string;
};

type AuthState = {
  user: User | null;

  isLoading: boolean;

  setUser: (user: User) => void;

  logout: () => void;

  setLoading: (isLoading: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  isLoading: true,

  setUser: (user) => set({ user }),

  setLoading: (value) => set({ isLoading: value }),

  logout: () => set({ user: null, isLoading: false }),
}));
