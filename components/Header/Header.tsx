'use client';

import { useAuthStore } from '@/lib/store/authStore';
import { logoutUser } from '@/services/api/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const Header = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const handleLogout = async () => {
    await logoutUser();
    logout();
    router.push('/login');
  };

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
          <>
            <p>{user.name}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
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
