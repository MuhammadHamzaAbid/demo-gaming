import React from 'react';
import { ArrowUp } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-navy-800 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-900">
          
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3 focus:outline-none group">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-navy-950 border border-electric p-1 shadow-glow-sm">
                <img src="/rog-logo.png" alt="ROG Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-xl tracking-wider text-white">
                    ROG
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-electric uppercase px-1.5 py-0.5 rounded bg-electric/10 border border-electric/30">
                    REPUBLIC OF GAMERS
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 font-mono">
                  Flagship Esports Arena &bull; Karachi
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 font-sans max-w-sm leading-relaxed font-light">
              Karachi's premier ASUS ROG esports arena and nocturnal gaming sanctuary in DHA Phase 6. Featuring custom liquid-cooled ROG Strix RTX 4090 battle stations, 5v5 tournament stage, direct-drive motion sim racing, PS5 Pro lounges, private 4K laser cinema, championship billiards, and 24/7 ROG Fuel Bar.
            </p>

            <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
              <span>FACILITY STATUS: PHASE 4 ARENA COMMISSIONING (DHA 6)</span>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-3">
              Gaming Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li><a href="#zones" className="hover:text-electric transition-colors">ROG Strix PC Arena</a></li>
              <li><a href="#zones" className="hover:text-electric transition-colors">5v5 Tournament Stage</a></li>
              <li><a href="#zones" className="hover:text-electric transition-colors">Sim Racing Hyper-Drive</a></li>
              <li><a href="#zones" className="hover:text-electric transition-colors">PS5 Pro VIP Pods</a></li>
              <li><a href="#zones" className="hover:text-electric transition-colors">VIP Streamer Studio</a></li>
              <li><a href="#zones" className="hover:text-electric transition-colors">Private 4K Laser Cinema</a></li>
              <li><a href="#zones" className="hover:text-electric transition-colors">Championship Billiards</a></li>
            </ul>
          </div>

          {/* Column 2: Competitions */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-3">
              ROG Tournaments
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li><a href="#tournaments" className="hover:text-electric transition-colors">ROG Valorant Masters (Rs. 250k)</a></li>
              <li><a href="#tournaments" className="hover:text-electric transition-colors">Tekken 8 & EA FC 25 Showdown</a></li>
              <li><a href="#tournaments" className="hover:text-electric transition-colors">Karachi 8-Ball Snooker Open</a></li>
              <li><a href="#tournaments" className="hover:text-electric transition-colors">ROG Sim Racing Grand Prix</a></li>
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-3">
              Direct Access
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li><a href="#booking" className="hover:text-electric transition-colors">Reserve Battle Station</a></li>
              <li><a href="#pricing" className="hover:text-electric transition-colors">Official Rates & Passes</a></li>
              <li><a href="#progress" className="hover:text-electric transition-colors">Arena Commissioning</a></li>
              <li><a href="#gallery" className="hover:text-electric transition-colors">Venue Atmosphere</a></li>
              <li><a href="#contact" className="hover:text-electric transition-colors">Bukhari Commercial, DHA 6</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} ROG REPUBLIC OF GAMERS KARACHI. Powered by ASUS ROG. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Arena Rules</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Play</a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-navy-900 border border-navy-800 text-slate-400 hover:text-white hover:border-electric transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-electric" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
