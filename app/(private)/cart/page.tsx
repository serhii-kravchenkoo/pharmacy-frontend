'use client';

import Loader from '@/components/Loader/Loader';
import { useAuthStore } from '@/lib/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CartPage() {
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.isLoading);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);
  if (isLoading) {
    return <Loader />;
  }
  if (!user) {
    return null;
  }

  return <h1>Cart Pager</h1>;
}
