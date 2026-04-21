"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-[120] transition-all duration-700 flex justify-center ${scrolled ? 'py-4' : 'py-6 md:py-8'}`}>
        <nav className={`transition-all duration-700 flex justify-between items-center ${scrolled ? 'header-fixed px-6 md:px-12' : 'w-[92%] md:w-[95%] max-w-[1400px] bg-white py-4 md:py-6 px-6 md:px-12 rounded-[24px] md:rounded-[32px] shadow-[0_15px_40px_-15px_rgba(120,87,74,0.1)] border border-primary/5'}`}>
          <div className="flex flex-col gap-0 cursor-pointer group">
            <span className={`text-[6px] md:text-[7px] tracking-[0.5em] uppercase text-primary/80 font-bold transition-all duration-500 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'mb-1'}`}>Medical Artistry</span>
            <span className={`font-headline font-bold tracking-[-0.03em] text-primary transition-all duration-500 ${scrolled ? 'text-lg md:text-xl' : 'text-xl md:text-3xl'}`}>AURA <span className="font-light italic">AESTHETIC.</span></span>
          </div>
          
          <div className={`hidden lg:flex items-center gap-12 font-body text-[9px] tracking-[0.4em] uppercase font-bold transition-all duration-500 ${scrolled ? 'text-on-surface' : 'text-on-surface/70'}`}>
            <Link className="text-primary" href="/">Gallery</Link>
            <a className="hover:text-primary transition-colors" href="#layanan">Services</a>
            <a className="hover:text-primary transition-colors" href="#hasil">Results</a>
            <a className="hover:text-primary transition-colors" href="#tentang">Philosophy</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/reservation" className={`hidden lg:block rounded-full font-bold tracking-[0.2em] uppercase text-[9px] transition-all duration-500 ${scrolled ? 'bg-primary text-white px-8 py-3.5 shadow-xl shadow-primary/20' : 'bg-primary text-white px-10 py-5 hover:bg-primary-container'}`}>
              Book Now
            </Link>

            <Link href="/reservation" className={`lg:hidden rounded-full font-bold tracking-[0.2em] uppercase text-[8px] transition-all duration-500 bg-primary text-white ${scrolled ? 'px-4 py-2.5' : 'px-5 py-3'}`}>
              Book Now
            </Link>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              aria-controls="mobile-menu"
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[130]"
            >
              <div className={`w-6 h-[1.5px] bg-primary transition-all ${isMenuOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`}></div>
              <div className={`w-6 h-[1.5px] bg-primary transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </button>
          </div>
        </nav>
      </header>

      <div id="mobile-menu" className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <Link onClick={() => setIsMenuOpen(false)} className="mobile-nav-link text-primary" href="/">Gallery</Link>
        <a onClick={() => setIsMenuOpen(false)} className="mobile-nav-link" href="#layanan">Services</a>
        <a onClick={() => setIsMenuOpen(false)} className="mobile-nav-link" href="#hasil">Results</a>
        <a onClick={() => setIsMenuOpen(false)} className="mobile-nav-link" href="#tentang">Philosophy</a>
        <Link onClick={() => setIsMenuOpen(false)} href="/reservation" className="mt-12 bg-primary text-white px-16 py-6 rounded-full text-xs font-bold tracking-[0.5em] uppercase opacity-0 translate-y-10 transition-all duration-700 delay-500 active:scale-95">
          Book Now
        </Link>
      </div>
    </>
  );
}
