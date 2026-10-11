import React from 'react';
import { MapPin, Clock, MessageSquare, Instagram, ExternalLink, Navigation, Zap } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function ContactLocation() {
  return (
    <section id="contact" className="py-24 relative bg-midnight border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Stacked vertically) */}
        <div className="mb-14 pb-6 border-b border-navy-800">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase mb-3">
            Arena Access & Concierge
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xl font-light leading-relaxed">
            Located in Bukhari Commercial, Phase 6 DHA, Karachi. Dedicated valet, 100% uninterrupted generator backup, and on-site staff until 5:00 AM.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Details & Direct Links (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address */}
            <div className="p-6 rounded-2xl bg-navy-950 border border-navy-800 shadow-card-glow">
              <span className="text-[10px] font-mono uppercase tracking-wider text-electric font-bold block mb-1">
                ROG Flagship Arena Clubhouse
              </span>
              <h3 className="font-display font-bold text-xl text-white mb-2">
                {BRAND_INFO.address}
              </h3>
              <p className="text-sm text-slate-300 font-sans mb-3">
                {BRAND_INFO.city}
              </p>
              <div className="text-xs font-mono text-slate-400">
                Landmark: 2-minute drive from Ittehad & Khayaban-e-Bukhari intersection
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-6 rounded-2xl bg-navy-950 border border-navy-800 shadow-card-glow">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-electric" />
                <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                  Operating Schedule
                </h4>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {BRAND_INFO.hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-1.5 border-b border-navy-900 last:border-none">
                    <span className="text-slate-400">{item.days}</span>
                    <span className="text-white font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-navy-950 hover:bg-navy-900 border border-navy-800 hover:border-electric transition-all flex items-center gap-3 text-slate-200 hover:text-white"
              >
                <div className="w-9 h-9 rounded-lg bg-navy-900 border border-electric/40 flex items-center justify-center text-electric">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">WhatsApp Desk</span>
                  <span className="text-xs font-bold font-sans">{BRAND_INFO.phone}</span>
                </div>
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-navy-950 hover:bg-navy-900 border border-navy-800 hover:border-electric transition-all flex items-center gap-3 text-slate-200 hover:text-white"
              >
                <div className="w-9 h-9 rounded-lg bg-navy-900 border border-electric/40 flex items-center justify-center text-electric">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Instagram</span>
                  <span className="text-xs font-bold font-sans">{BRAND_INFO.instagram}</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Stylized Minimalist Architectural Map (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-navy-950 border border-navy-800 overflow-hidden shadow-card-glow h-[420px] flex flex-col justify-between p-6">
              
              {/* Minimal Dark Vector Map Background in ROG Red */}
              <div className="absolute inset-0 bg-[#060608] overflow-hidden pointer-events-none">
                <svg className="w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="arch-map-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FF0033" strokeWidth="0.6" strokeOpacity="0.25" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#arch-map-grid)" />
                  {/* Street Arteries representing Bukhari Commercial DHA 6 */}
                  <line x1="0" y1="210" x2="1000" y2="210" stroke="#FF0033" strokeWidth="2" strokeOpacity="0.5" />
                  <line x1="280" y1="0" x2="280" y2="500" stroke="#FF0033" strokeWidth="2" strokeOpacity="0.5" />
                  <line x1="0" y1="110" x2="1000" y2="110" stroke="#FF2E55" strokeWidth="1" strokeOpacity="0.25" />
                  <line x1="520" y1="0" x2="520" y2="500" stroke="#FF2E55" strokeWidth="1" strokeOpacity="0.25" />
                </svg>
              </div>

              {/* Top coordinates tag */}
              <div className="relative z-10 flex justify-between font-mono text-[11px] text-slate-400">
                <span className="bg-navy-950/90 px-2.5 py-1 rounded border border-navy-800">
                  KARACHI // 24.8607&deg; N, 67.0011&deg; E
                </span>
                <span className="bg-navy-950/90 px-2.5 py-1 rounded border border-navy-800 text-electric font-bold">
                  BUKHARI COMM. // PHASE 6 DHA
                </span>
              </div>

              {/* Center Location Pin with ROG Logo */}
              <div className="relative z-10 self-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-black border-2 border-electric flex items-center justify-center p-1.5 shadow-glow">
                  <img src="/rog-logo.png" alt="ROG Pin" className="w-full h-full object-contain" />
                </div>
                <div className="mt-2 px-3.5 py-1.5 rounded-lg bg-black/95 border border-navy-700 text-center font-mono shadow-md">
                  <span className="font-bold text-xs text-white block">ROG REPUBLIC OF GAMERS</span>
                  <span className="text-[9px] text-electric uppercase font-bold">Bukhari Commercial Lane 4, DHA 6</span>
                </div>
              </div>

              {/* Bottom directions link */}
              <div className="relative z-10 flex items-center justify-between bg-black/90 p-3.5 rounded-xl border border-navy-800 backdrop-blur-md font-mono text-xs">
                <span className="text-slate-300">Dedicated valet & 100% online generator power</span>
                <a
                  href="https://maps.google.com/?q=Bukhari+Commercial+DHA+Phase+6+Karachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-electric hover:bg-electric-light text-white font-bold border border-white/20 transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
