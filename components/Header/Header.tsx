import Link from 'next/link';

export const Header = () => {
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
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
      </div>
    </header>
  );
};
