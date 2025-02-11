import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 bg-gray-800/80 backdrop-blur-md shadow-lg py-4 z-50">
      <div className="container mx-auto flex justify-between px-6">
        <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition">
          My Portfolio
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
