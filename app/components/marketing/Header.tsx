import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Becoming.
        </h1>
      </div>
      <nav className="flex items-center justify-between px-4 py-2">
        <ul className="flex items-center gap-3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/team">Team</Link>
          </li>
          <li>
            <Link href="/careers">Careers</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
          <li>
            <Link href="/terms">Terms</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
