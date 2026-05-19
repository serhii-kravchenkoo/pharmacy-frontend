'use client';

import { useEffect } from 'react';
import { api } from '@/services/api/api';
import { useAuthStore } from '@/lib/store/authStore';

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const { setUser, setLoading, logout } = useAuthStore();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get('/api/user/user-info');

        setUser(response.data);
      } catch {
        logout();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [setUser, setLoading, logout]);

  return <>{children}</>;
};
