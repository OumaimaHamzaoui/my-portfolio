"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 bg-gray-800/80 backdrop-blur-md shadow-lg py-4 sm:py-5 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-12">
        <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition">
          My Portfolio
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLinks />
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden flex flex-col items-center bg-gray-900/90 backdrop-blur-md py-4 space-y-4"
          >
            <NavLinks closeMenu={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLinks({ closeMenu }: { closeMenu?: () => void }) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/technologies", label: "Technologies" },
    { href: "/contact", label: "Contact" },
  ];

  return links.map(({ href, label }) => (
    <Link
      key={href}
      href={href}
      className="text-white hover:text-blue-400 transition text-lg"
      onClick={closeMenu ? () => closeMenu() : undefined}
    >
      {label}
    </Link>
  ));
}
