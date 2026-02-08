"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-900/90 backdrop-blur border-b border-stone-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-2 h-6 bg-orange-500 rounded-sm group-hover:h-7 transition-all" />
            <span className="text-xl font-semibold tracking-tight text-stone-100">
              Ground <span className="text-green-400">Up</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
            <Link href="/learn" className="hover:text-orange-400 transition">
              Learn
            </Link>
            <Link href="/gear" className="hover:text-orange-400 transition">
              Gear
            </Link>
            <Link href="/guides" className="hover:text-orange-400 transition">
              Guides
            </Link>
            <Link href="/contact" className="hover:text-orange-400 transition">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/newsletter"
              className="bg-green-700 text-white px-4 py-2 rounded-xl text-sm hover:bg-green-600 transition"
            >
              Join Updates
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stone-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-stone-700 bg-stone-900">
          <div className="px-4 py-4 flex flex-col gap-4 text-stone-200 font-medium">
            <Link href="/learn" onClick={() => setIsOpen(false)}>
              Learn
            </Link>
            <Link href="/gear" onClick={() => setIsOpen(false)}>
              Gear
            </Link>
            <Link href="/guides" onClick={() => setIsOpen(false)}>
              Guides
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link
              href="/newsletter"
              className="mt-2 bg-green-700 text-white px-4 py-2 rounded-xl text-center"
              onClick={() => setIsOpen(false)}
            >
              Join Updates
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
