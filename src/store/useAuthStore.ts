import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: User | null;
}

interface AuthActions {
  login: (accessToken: string, refreshToken: string, user: User) => void;
  setAccessToken: (token: string) => void;
  logout: () => void;
  reset: () => void;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
};

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      ...initialState,
      
      login: (accessToken, refreshToken, user) => set({ accessToken, refreshToken, user }),

      setAccessToken: (token) => set({ accessToken: token }),
      
      logout: () => set(initialState),

      reset: () => set(initialState),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useIsLoggedIn = () => useAuthStore((state) => !!state.accessToken);
export const useUserInfo = () => useAuthStore((state) => state.user);
export const useAuthActions = () => useAuthStore((state) => ({ 
  login: state.login, 
  logout: state.logout,
  setAccessToken: state.setAccessToken
}));