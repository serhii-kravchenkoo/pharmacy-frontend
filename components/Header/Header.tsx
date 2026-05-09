'use client';

import { useAuthStore } from '@/lib/store/authStore';
import Link from 'next/link';

export const Header = () => {
  const user = useAuthStore((state) => state.user);
  return (
    <header>
      <div>
        <Link href="/">E-Pharmacy</Link>
      </div>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/medicine-store">Medicine store</Link>
        <Link href="/medicine">Medicine</Link>
      </nav>

      <div>
        {user ? (
          <p>{user.name}</p>
        ) : (
          <>
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
          </>
        )}
      </div>
    </header>
  );
};
