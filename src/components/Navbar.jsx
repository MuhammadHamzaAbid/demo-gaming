import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldAlert } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function Navbar({ onBookClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#zones' },
    { name: 'Stations', href: '#booking' },
    { name: 'Rates', href: '#pricing' },
    { name: 'Tournaments', href: '#tournaments' },
    { name: 'Atmosphere', href: '#gallery' },
    { name: 'Progress', href: '#progress' },
    { name: 'Arena Location', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-midnight/95 backdrop-blur-md border-b border-navy-800 shadow-lg shadow-black/80 py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* ROG Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-navy-950 border border-electric/40 group-hover:border-electric transition-all duration-300 shadow-glow-sm overflow-hidden p-1">
            <img 
              src="/rog-logo.png" 
              alt="ROG Republic of Gamers" 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-electric"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black text-xl tracking-wider text-white">
                ROG
              </span>
              <span className="font-display font-bold text-xs tracking-widest text-electric uppercase px-1.5 py-0.5 rounded bg-electric/10 border border-electric/30">
                REPUBLIC OF GAMERS
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 font-mono mt-0.5">
              Karachi Arena &bull; For Those Who Dare
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white transition-colors duration-200 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-electric transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_#FF0033]"></span>
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              if (onBookClick) onBookClick();
              else {
                document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-electric text-white text-xs font-mono font-bold tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-electric-light hover:shadow-neon-red active:scale-95 border border-electric/60 group cyber-cut"
          >
            <span className="relative z-10 flex items-center gap-2">
              Reserve Battle Station
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-navy-950 border border-electric/40 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-electric" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-midnight/98 border-b border-navy-800 px-4 pt-4 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200 font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-200 hover:text-white hover:bg-navy-900 transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-navy-800">
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-electric text-white font-bold text-xs uppercase tracking-wider text-center hover:bg-electric-light transition-all shadow-glow"
            >
              Reserve Battle Station
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
