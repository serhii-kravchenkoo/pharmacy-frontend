import Link from 'next/link';

export const Footer = () => {
  return (
    <footer>
      {/* Logo */}
      <div>
        <Link href="/">E-Pharmacy</Link>
      </div>

      {/* Text */}
      <p>
        Get the medicine to help you feel better, get back to your active life,
        and enjoy every moment
      </p>

      {/* Social links (зовнішні → <a>) */}
      <ul>
        <li>
          <a
            href="https://www.facebook.com/goITclub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/goitclub/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/c/GoIT"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </li>
      </ul>

      {/* Navigation (внутрішні → Link) */}
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/medicine-store">Medicine store</Link>
        <Link href="/medicine">Medicine</Link>
      </nav>

      {/* Bottom */}
      <div>
        <p>© E-Pharmacy 2023. All Rights Reserved</p>
        <div>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};
