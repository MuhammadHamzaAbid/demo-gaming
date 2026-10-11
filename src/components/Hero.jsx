import React, { useState, useEffect } from 'react';
import { ArrowRight, Zap, ArrowUpRight } from 'lucide-react';
import CyberCanvas from './CyberCanvas';
import { STATS } from '../data/mockData';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 18,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 42);
    targetDate.setHours(20, 0, 0, 0);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] pt-24 pb-16 flex flex-col justify-center items-center overflow-hidden bg-midnight">
      {/* Background Interactive Matrix Canvas */}
      <CyberCanvas />



      {/* Subtle Ambient Red Radial Spotlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-electric/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Emblem Hero Badge with Logo */}
        <div className="relative mb-5 group">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-navy-950/90 border-2 border-electric p-2 shadow-glow relative flex items-center justify-center backdrop-blur-md">
            <img 
              src="/rog-logo.png" 
              alt="ROG Logo" 
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(255,0,51,0.8)]"
            />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-electric"></span>
            </span>
          </div>
        </div>

        {/* Master Headline (Solid high-contrast text, no gradient text) */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-4 uppercase leading-none">
          FOR THOSE WHO DARE <br />
          <span className="text-electric text-glow">
            REPUBLIC OF GAMERS
          </span>
        </h1>

        {/* 3. Subtext (Strictly 18 words <= 20 words limit) */}
        <p className="max-w-xl text-sm sm:text-base md:text-lg text-slate-300 font-sans font-light leading-relaxed mb-8">
          Liquid-cooled RTX 4090 battlestations, 5v5 competition arena, motion sim racing, PS5 Pro pods, and 24/7 ROG Fuel Bar.
        </p>

        {/* 4. Action Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-10">
          <button
            onClick={() => scrollTo('#booking')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-electric hover:bg-electric-light text-white font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-glow hover:shadow-glow-lg flex items-center justify-center gap-2.5 border border-white/20 active:translate-y-0.5"
          >
            <span>Reserve Battle Station</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollTo('#waitlist')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 border border-electric/40 hover:border-electric flex items-center justify-center gap-2"
          >
            <span>Syndicate VIP Waitlist</span>
            <ArrowUpRight className="w-4 h-4 text-electric" />
          </button>
        </div>

        {/* Countdown Telemetry Strip */}
        <div className="w-full max-w-lg bg-navy-950/90 border border-electric/40 rounded-xl p-4 sm:p-5 backdrop-blur-md shadow-card-glow mb-8">
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-navy-800 text-[10px] font-mono uppercase tracking-widest text-slate-400">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-electric" />
              COUNTDOWN TO ARENA COMMISSIONING
            </span>
            <span className="text-electric font-bold">TARGET: NOV 15</span>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[
              { label: 'Days', value: formatNumber(timeLeft.days) },
              { label: 'Hours', value: formatNumber(timeLeft.hours) },
              { label: 'Minutes', value: formatNumber(timeLeft.minutes) },
              { label: 'Seconds', value: formatNumber(timeLeft.seconds) },
            ].map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center justify-center p-2.5 rounded-lg bg-navy-900 border border-navy-800 group hover:border-electric/40 transition-colors"
              >
                <span className="font-display font-bold text-xl sm:text-2xl text-white tracking-wider group-hover:text-electric transition-colors">
                  {unit.value}
                </span>
                <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase mt-0.5">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Architectural Specs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl pt-4 border-t border-navy-800 font-mono">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="font-display font-bold text-xl sm:text-2xl text-white text-glow">
                {stat.value}
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
