'use client';

import { useEffect } from 'react';
import { api } from '@/services/api/api';
import { useAuthStore } from '@/lib/store/authStore';

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const setUser = useAuthStore((state) => state.setUser);
  const setLoading = useAuthStore((state) => state.setLoading);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get('/api/user/user-info');

        setUser(response.data);
        setLoading(false);
      } catch {
        console.log('Not authorized');
        setLoading(false);
      }
    };

    checkAuth();
  }, [setUser, setLoading]);

  return <>{children}</>;
};
