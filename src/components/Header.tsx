"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header({ currentPage = "home" }: { currentPage?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Inicio", key: "home" },
    { href: "/shop", label: "Tienda", key: "shop" },
    { href: "/workshop", label: "Taller", key: "workshop" },
    { href: "/contact", label: "Contacto", key: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
        <div className="text-2xl font-black italic text-emerald-900 font-headline uppercase tracking-widest">
          The Kinetic Trail
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`font-headline font-bold uppercase tracking-widest transition-colors ${
                currentPage === item.key
                  ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                  : "text-zinc-800 hover:text-orange-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-outline">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm"
              placeholder="Buscar bicicletas..."
              type="text"
            />
          </div>
          <button className="hidden lg:block bg-secondary-container text-on-secondary px-6 py-2 rounded-lg font-headline font-bold uppercase tracking-widest text-sm hover:opacity-80 transition-all duration-300 scale-95 active:scale-90">
            Reservar Mantenimiento
          </button>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="material-symbols-outlined text-primary text-3xl"
            >
              {isMobileMenuOpen ? "close" : "menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-outline/20">
          <div className="px-8 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`block font-headline font-bold uppercase tracking-widest transition-colors ${
                  currentPage === item.key
                    ? "text-orange-600"
                    : "text-zinc-800 hover:text-orange-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full bg-secondary-container text-on-secondary px-6 py-2 rounded-lg font-headline font-bold uppercase tracking-widest text-sm hover:opacity-80 transition-all duration-300">
              Reservar Mantenimiento
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
