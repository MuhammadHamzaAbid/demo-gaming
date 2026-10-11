import React, { useState } from 'react';
import { ArrowRight, Check, Film, Gamepad2, CircleDot, Trophy, Sparkles, Zap } from 'lucide-react';
import { OFFICIAL_RATE_CARDS, PRICING_MONTHLY, PRICING_BUNDLES, BRAND_INFO } from '../data/mockData';

export default function Pricing() {
  const [viewMode, setViewMode] = useState('official'); // 'official' | 'monthly' | 'bundles'

  const handleBook = (gameName) => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 relative bg-midnight border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Mode Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-navy-800 gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
              Rates & Game Passes
            </h2>
          </div>

          {/* Pricing Model Switcher */}
          <div className="p-1 rounded-xl bg-navy-950 border border-navy-800 flex items-center font-mono text-xs">
            <button
              onClick={() => setViewMode('official')}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                viewMode === 'official'
                  ? 'bg-electric text-white border border-white/30 shadow-glow font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Official Rate Card</span>
            </button>
            <button
              onClick={() => setViewMode('monthly')}
              className={`px-4 py-2 rounded-lg transition-all ${
                viewMode === 'monthly'
                  ? 'bg-electric text-white border border-white/30 shadow-glow font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Passes
            </button>
            <button
              onClick={() => setViewMode('bundles')}
              className={`px-4 py-2 rounded-lg transition-all ${
                viewMode === 'bundles'
                  ? 'bg-electric text-white border border-white/30 shadow-glow font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Session Bundles
            </button>
          </div>
        </div>

        {/* View 1: EXACT Reproduction of the Official Rate Menu Board */}
        {viewMode === 'official' && (
          <div className="rounded-3xl bg-gradient-to-b from-[#101017] via-midnight to-[#060608] border-2 border-electric/50 p-6 sm:p-12 shadow-glow relative overflow-hidden">
            
            {/* Subtle radial background red glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-electric/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Top Brand Header */}
            <div className="text-center mb-10 relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-xl bg-navy-950 border border-electric p-2 mb-3 shadow-glow-sm">
                <img src="/rog-logo.png" alt="ROG Logo" className="w-full h-full object-contain" />
              </div>

              <div className="inline-flex flex-col items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-2xl sm:text-4xl tracking-widest text-white uppercase">
                    ROG
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base tracking-widest text-electric uppercase px-2 py-0.5 rounded bg-electric/10 border border-electric/40">
                    REPUBLIC OF GAMERS
                  </span>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-slate-400 mt-1">
                  FOR THOSE WHO DARE &bull; OFFICIAL RATE CARD
                </span>
              </div>

              <h3 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase mt-2">
                PICK YOUR GAME.<br />
                <span className="text-electric text-glow">
                  DOMINATE YOUR TIME.
                </span>
              </h3>
            </div>

            {/* 4 Themed Rate Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-8">
              
              {/* Card 1: ROG ESPORTS PC & SIM RACING */}
              <div className="rounded-2xl bg-navy-950 border border-electric/40 p-6 backdrop-blur-md shadow-card-glow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-navy-800">
                    <span className="font-display font-bold text-sm tracking-widest text-electric uppercase">
                      ROG ESPORTS PC & SIM RACING
                    </span>
                    <div className="w-8 h-8 rounded-full bg-electric/20 border border-electric flex items-center justify-center text-electric">
                      <Gamepad2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-electric font-bold">&bull;</span>
                        <span className="text-white font-bold tracking-wide">ROG STRIX PC (RTX 4090)</span>
                      </div>
                      <span className="text-white font-bold">
                        Rs. 500<span className="text-[11px] text-slate-400 font-normal">/hour</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-electric font-bold">&bull;</span>
                        <span className="text-white font-bold tracking-wide">VIP STREAMER STUDIO</span>
                      </div>
                      <span className="text-white font-bold">
                        Rs. 900<span className="text-[11px] text-slate-400 font-normal">/hour</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-electric font-bold">&bull;</span>
                        <span className="text-white font-bold tracking-wide">SIM RACING (20Nm DIRECT-DRIVE)</span>
                      </div>
                      <span className="text-electric font-bold">
                        Rs. 1,200<span className="text-[11px] text-slate-400 font-normal">/hour</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-electric font-bold">&bull;</span>
                        <span className="text-white font-bold tracking-wide">5v5 ARENA STAGE (10 RIGS)</span>
                      </div>
                      <span className="text-white font-bold">
                        Rs. 4,500<span className="text-[11px] text-slate-400 font-normal">/hour</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-navy-900 text-[10px] font-mono text-slate-400">
                  RTX 4090 • 540Hz & 360Hz ROG OLED • Azoth Mechanical • 10Gbps Dedicated Fiber
                </div>
              </div>

              {/* Card 2: CONSOLE & PRIVATE THEATER */}
              <div className="rounded-2xl bg-navy-950 border border-electric/40 p-6 backdrop-blur-md shadow-card-glow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-navy-800">
                    <span className="font-display font-bold text-sm tracking-widest text-electric uppercase">
                      CONSOLE & PRIVATE THEATER
                    </span>
                    <div className="w-8 h-8 rounded-full bg-electric/20 border border-electric flex items-center justify-center text-electric">
                      <Film className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-5 font-mono text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-electric font-bold">&bull;</span>
                        <span className="text-white font-bold tracking-wide">PS5 PRO VIP LOUNGE</span>
                      </div>
                      <span className="text-white font-bold">
                        Rs. 900<span className="text-[11px] text-slate-400 font-normal">/hour</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-electric font-bold">&bull;</span>
                        <span className="text-white font-bold tracking-wide">ROG PRIVATE 4K CINEMA</span>
                      </div>
                      <span className="text-electric font-bold text-base sm:text-lg">
                        Rs. 1,500<span className="text-[11px] text-slate-400 font-normal">/hour</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-navy-900 text-[10px] font-mono text-slate-400">
                  65" ROG 144Hz OLED • DualSense Edge • 180" Laser 9.2.4 Dolby Atmos Theater
                </div>
              </div>

              {/* Card 3: CHAMPIONSHIP CUE SPORTS */}
              <div className="rounded-2xl bg-navy-950 border border-electric/40 p-6 backdrop-blur-md shadow-card-glow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-navy-800">
                    <span className="font-display font-bold text-sm tracking-widest text-electric uppercase">
                      CHAMPIONSHIP CUE SPORTS
                    </span>
                    <div className="w-8 h-8 rounded-full bg-electric/20 border border-electric flex items-center justify-center text-electric">
                      <span className="font-mono font-bold text-xs">8</span>
                    </div>
                  </div>

                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-electric font-bold">&bull;</span>
                        <span className="text-white font-bold tracking-wide">TOURNAMENT SNOOKER</span>
                      </div>
                      <span className="text-white font-bold">
                        Rs. 16<span className="text-[11px] text-slate-400 font-normal">/min</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-electric font-bold">&bull;</span>
                        <span className="text-white font-bold tracking-wide">VIP SNOOKER SUITE</span>
                      </div>
                      <span className="text-electric font-bold">
                        Rs. 20<span className="text-[11px] text-slate-400 font-normal">/min</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-electric font-bold">&bull;</span>
                        <span className="text-white font-bold tracking-wide">AMERICAN POOL</span>
                      </div>
                      <span className="text-white font-bold">
                        Rs. 14<span className="text-[11px] text-slate-400 font-normal">/min</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-navy-900 text-[10px] font-mono text-slate-400">
                  Wiraka 12ft tables with Strachan 6811 Gold cloth • Super Aramith Pro balls
                </div>
              </div>

              {/* Card 4: INDOOR SOCIAL & ARCADE */}
              <div className="rounded-2xl bg-navy-950 border border-electric/40 p-6 backdrop-blur-md shadow-card-glow flex flex-col justify-between">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-navy-800">
                  <span className="font-display font-bold text-sm tracking-widest text-electric uppercase">
                    INDOOR SOCIAL & ARCADE
                  </span>
                  <div className="w-8 h-8 rounded-full bg-electric/20 border border-electric flex items-center justify-center text-electric">
                    <Trophy className="w-4 h-4" />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full font-mono text-xs sm:text-sm">
                    <thead>
                      <tr className="text-right text-[11px] uppercase tracking-wider text-slate-400 pb-2">
                        <th className="text-left font-normal pb-2">Game</th>
                        <th className="font-normal pb-2 pr-4">Half Hour</th>
                        <th className="font-normal pb-2">Hour</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-navy-900">
                      <tr>
                        <td className="py-2.5 font-bold text-white flex items-center gap-2">
                          <span className="text-electric">&bull;</span> TABLE TENNIS
                        </td>
                        <td className="py-2.5 text-right pr-4 text-slate-300">Rs. 350</td>
                        <td className="py-2.5 text-right font-bold text-white">Rs. 700</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-white flex items-center gap-2">
                          <span className="text-electric">&bull;</span> FOOSBALL
                        </td>
                        <td className="py-2.5 text-right pr-4 text-slate-300">Rs. 250</td>
                        <td className="py-2.5 text-right font-bold text-white">Rs. 500</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-white flex items-center gap-2">
                          <span className="text-electric">&bull;</span> CARROM
                        </td>
                        <td className="py-2.5 text-right pr-4 text-slate-500">-</td>
                        <td className="py-2.5 text-right font-bold text-white">Rs. 450</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold text-white flex items-center gap-2">
                          <span className="text-electric">&bull;</span> LUDO LOUNGE
                        </td>
                        <td className="py-2.5 text-right pr-4 text-slate-500">-</td>
                        <td className="py-2.5 text-right font-bold text-white">Rs. 400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* ROG RED BRAND CALLOUT BANNER */}
            <div className="rounded-2xl bg-gradient-to-r from-electric via-electric-light to-electric border-2 border-white/20 p-6 sm:p-8 shadow-glow flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4 cyber-cut">
              <div>
                <span className="font-display font-black text-xl sm:text-3xl text-white tracking-wider uppercase leading-tight block">
                  YOUR BATTLEFIELD. YOUR SQUAD. YOUR VICTORY.
                </span>
                <span className="text-xs font-mono text-white/90 uppercase tracking-widest mt-1 block">
                  Open until 05:00 AM every night in DHA Phase 6, Karachi
                </span>
              </div>
              <button
                onClick={() => handleBook()}
                className="px-8 py-3 rounded-lg bg-black hover:bg-navy-950 text-white font-mono text-xs font-bold uppercase tracking-wider border border-white/30 transition-all flex items-center gap-2 shadow-lg flex-shrink-0"
              >
                <span>Book Station Now</span>
                <ArrowRight className="w-4 h-4 text-electric" />
              </button>
            </div>

            {/* Bottom Footer Tagline */}
            <div className="text-center pt-8 border-t border-navy-800 relative z-10 mt-8">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-[0.25em] text-white uppercase">
                ROG REPUBLIC OF GAMERS &bull; FOR THOSE WHO DARE.
              </span>
            </div>

          </div>
        )}

        {/* View 2: Monthly Memberships */}
        {viewMode === 'monthly' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {PRICING_MONTHLY.map((tier) => {
              const isHighlighted = tier.popular;

              return (
                <div
                  key={tier.id}
                  className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                    isHighlighted
                      ? 'bg-gradient-to-b from-navy-900 to-navy-950 border-2 border-electric shadow-glow lg:-translate-y-2'
                      : 'bg-navy-950 border border-navy-800 hover:border-navy-700 shadow-card-glow'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                        {tier.name}
                      </span>
                      {tier.badge && (
                        <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded border uppercase font-bold ${
                          isHighlighted 
                            ? 'border-electric text-white bg-electric shadow-sm' 
                            : 'border-navy-700 text-slate-300 bg-navy-900'
                        }`}>
                          {tier.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline gap-2 pb-5 mb-5 border-b border-navy-800">
                      <span className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                        {tier.price}
                      </span>
                      <span className="text-xs font-mono text-slate-400 uppercase">
                        / {tier.period}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 font-sans mb-6 min-h-[34px] leading-relaxed">
                      {tier.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {tier.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-electric flex-shrink-0 mt-0.5" />
                          <span className="font-light">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleBook(tier.id)}
                    className={`w-full py-3.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
                      isHighlighted
                        ? 'bg-electric hover:bg-electric-light text-white border border-white/20 shadow-glow cyber-cut'
                        : 'bg-navy-900 hover:bg-navy-800 text-slate-200 border border-navy-800 hover:border-electric'
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* View 3: Session Bundles */}
        {viewMode === 'bundles' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {PRICING_BUNDLES.map((bundle) => {
              const isHighlighted = bundle.popular;

              return (
                <div
                  key={bundle.id}
                  className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                    isHighlighted
                      ? 'bg-gradient-to-b from-navy-900 to-navy-950 border-2 border-electric shadow-glow lg:-translate-y-2'
                      : 'bg-navy-950 border border-navy-800 hover:border-navy-700 shadow-card-glow'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
                        {bundle.name}
                      </span>
                      {bundle.badge && (
                        <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded border uppercase font-bold ${
                          isHighlighted 
                            ? 'border-electric text-white bg-electric shadow-sm' 
                            : 'border-navy-700 text-slate-300 bg-navy-900'
                        }`}>
                          {bundle.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex items-baseline gap-2 pb-5 mb-5 border-b border-navy-800">
                      <span className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                        {bundle.price}
                      </span>
                      <span className="text-xs font-mono text-slate-400 uppercase">
                        / {bundle.period}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 font-sans mb-6 min-h-[34px] leading-relaxed">
                      {bundle.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {bundle.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-electric flex-shrink-0 mt-0.5" />
                          <span className="font-light">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleBook(bundle.id)}
                    className={`w-full py-3.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
                      isHighlighted
                        ? 'bg-electric hover:bg-electric-light text-white border border-white/20 shadow-glow cyber-cut'
                        : 'bg-navy-900 hover:bg-navy-800 text-slate-200 border border-navy-800 hover:border-electric'
                    }`}
                  >
                    <span>{bundle.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-12 text-center text-[11px] text-slate-400 font-mono">
          * Private cinema booking, 5v5 scrim reservations, and corporate tournament buyouts bookable directly on WhatsApp (+92 300 8274687).
        </div>

      </div>
    </section>
  );
}
