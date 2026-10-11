import React, { useState } from 'react';
import { ArrowRight, Sparkles, Layers, ShieldCheck, Zap } from 'lucide-react';
import { ZONES, AMENITIES_HIGHLIGHTS } from '../data/mockData';

export default function Zones({ onSelectZone }) {
  const [selectedHighlight, setSelectedHighlight] = useState(AMENITIES_HIGHLIGHTS[0]);

  const handleReserve = (zoneId) => {
    if (onSelectZone) onSelectZone(zoneId);
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const featuredZone = ZONES[0]; // ROG Strix Esports Arena
  const secondaryFeatured = ZONES[1]; // 5v5 Competitive Tournament Stage
  const otherZones = ZONES.slice(2);

  return (
    <section id="zones" className="py-24 relative bg-midnight border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Stacked vertically, no split-header) */}
        <div className="mb-14 pb-6 border-b border-navy-800">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase mb-3">
            Elite Gaming Services
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-2xl font-light leading-relaxed">
            From liquid-cooled RTX 4090 battlestations and soundproof 5v5 competition stages to 20Nm motion racing sims and championship billiards, powered by ASUS ROG.
          </p>
        </div>

        {/* Quick Rate & Specification Telemetry Navigator */}
        <div className="mb-14 rounded-2xl bg-navy-950 border border-electric/40 p-5 sm:p-7 shadow-card-glow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-navy-800 gap-3">
            <div className="flex items-center gap-2.5">
              <Layers className="w-4 h-4 text-electric" />
              <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
                Hardware & Telemetry Explorer
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              KARACHI ARENA // DHA PHASE 6 // POWERED BY ASUS ROG
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {AMENITIES_HIGHLIGHTS.map((item) => (
              <button
                key={item.activity}
                onClick={() => setSelectedHighlight(item)}
                className={`px-3.5 py-1.5 rounded text-xs font-mono transition-all ${
                  selectedHighlight.activity === item.activity
                    ? 'bg-electric text-white border border-white/40 shadow-glow font-bold'
                    : 'bg-navy-900 text-slate-300 hover:text-white border border-navy-800 hover:border-electric/50'
                }`}
              >
                {item.activity}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-navy-900/90 border border-navy-800">
              <span className="text-[10px] text-slate-400 uppercase block mb-1">Standard Rate</span>
              <span className="font-display font-bold text-xl sm:text-2xl text-white text-glow">
                {selectedHighlight.rate}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-navy-900/90 border border-navy-800">
              <span className="text-[10px] text-slate-400 uppercase block mb-1">Core Hardware</span>
              <span className="font-bold text-xs sm:text-sm text-white block mt-1 truncate">
                {selectedHighlight.setup}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-navy-900/90 border border-navy-800">
              <span className="text-[10px] text-slate-400 uppercase block mb-1">Key Features</span>
              <span className="font-bold text-xs sm:text-sm text-electric block mt-1 truncate">
                {selectedHighlight.features}
              </span>
            </div>
            <div className="p-4 rounded-xl bg-navy-900/90 border border-navy-800">
              <span className="text-[10px] text-slate-400 uppercase block mb-1">Capacity</span>
              <span className="font-bold text-xs sm:text-sm text-slate-300 block mt-1 truncate">
                {selectedHighlight.capacity}
              </span>
            </div>
          </div>
        </div>

        {/* Master Asymmetric Layout */}
        <div className="space-y-8">
          
          {/* Top 2 Flagship Zones (ROG Strix Arena & 5v5 Stage) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Featured Hero 1: ROG Strix Esports Arena (7 Cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 border border-electric/40 p-6 sm:p-8 shadow-card-glow relative overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-navy-950 border border-navy-800 mb-6">
                  <img
                    src={featuredZone.imageUrl}
                    alt={featuredZone.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-200 bg-midnight/90 px-3.5 py-2 rounded-lg border border-navy-800 backdrop-blur-md">
                    <span className="text-electric font-bold">RTX 4090 OC // 540HZ OLED</span>
                    <span>10GBPS SYMMETRIC FIBER</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-electric uppercase tracking-wider font-bold">
                    {featuredZone.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-white bg-navy-900 px-2.5 py-1 rounded border border-electric/40">
                    {featuredZone.pricing}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                  {featuredZone.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6 font-light">
                  {featuredZone.description}
                </p>

                {/* Specs table */}
                <div className="space-y-2 mb-6 border-y border-navy-800 py-3.5 font-mono text-xs">
                  {featuredZone.specs.map((item, i) => (
                    <div key={i} className="flex justify-between items-start gap-4">
                      <span className="text-slate-400 text-[11px] uppercase tracking-wider">{item.label}</span>
                      <span className="text-white text-right font-medium text-[11px]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleReserve(featuredZone.id)}
                className="w-full py-3.5 rounded-lg bg-electric hover:bg-electric-light text-white text-xs font-mono font-bold tracking-wider transition-all duration-200 border border-white/20 flex items-center justify-center gap-2 shadow-glow hover:shadow-glow-lg cyber-cut"
              >
                <span>Reserve ROG Battlestation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Featured Hero 2: 5v5 Competitive Arena Stage (5 Cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 border border-electric/40 p-6 sm:p-8 shadow-card-glow relative overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-navy-950 border border-navy-800 mb-6">
                  <img
                    src={secondaryFeatured.imageUrl}
                    alt={secondaryFeatured.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-slate-200 bg-midnight/90 px-3.5 py-2 rounded-lg border border-navy-800 backdrop-blur-md">
                    <span className="text-electric font-bold">DUAL SOUNDPROOF BOOTHS</span>
                    <span>200" ARENA JUMBOTRON</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-electric uppercase tracking-wider font-bold">
                    {secondaryFeatured.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-white bg-navy-900 px-2.5 py-1 rounded border border-electric/40">
                    {secondaryFeatured.pricing}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                  {secondaryFeatured.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6 font-light">
                  {secondaryFeatured.description}
                </p>

                {/* Specs table */}
                <div className="space-y-2 mb-6 border-y border-navy-800 py-3.5 font-mono text-xs">
                  {secondaryFeatured.specs.map((item, i) => (
                    <div key={i} className="flex justify-between items-start gap-4">
                      <span className="text-slate-400 text-[11px] uppercase tracking-wider">{item.label}</span>
                      <span className="text-white text-right font-medium text-[11px]">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleReserve(secondaryFeatured.id)}
                className="w-full py-3.5 rounded-lg bg-navy-900 hover:bg-electric text-white text-xs font-mono font-bold tracking-wider transition-all duration-200 border border-navy-800 hover:border-electric flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Book 5v5 Tournament Stage</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Grid of Remaining Services (Sim Racing, PS5, Streamer Studio, Cinema, Cue Sports, Indoor, Fuel Bar) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherZones.map((zone) => (
              <div
                key={zone.id}
                className="rounded-xl bg-navy-950 border border-navy-800 hover:border-electric/60 transition-all duration-300 flex flex-col justify-between p-5 group shadow-card-glow hover:bg-navy-900/80"
              >
                <div>
                  <div className="relative h-44 w-full rounded-lg overflow-hidden mb-4 bg-navy-950">
                    <img
                      src={zone.imageUrl}
                      alt={zone.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono text-slate-300 bg-midnight/90 px-2 py-0.5 rounded border border-navy-800">
                      {zone.capacity}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-electric font-bold uppercase tracking-wider">
                      {zone.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-white">
                      {zone.pricing}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-white mb-2 group-hover:text-electric transition-colors">
                    {zone.title}
                  </h4>

                  <p className="text-xs text-slate-300 font-sans font-light leading-relaxed mb-4">
                    {zone.description}
                  </p>

                  <div className="space-y-1.5 mb-4 text-[11px] font-mono text-slate-400">
                    {zone.specs.slice(0, 3).map((sp, idx) => (
                      <div key={idx} className="flex justify-between border-b border-navy-900 pb-1">
                        <span>{sp.label}</span>
                        <span className="text-white text-right truncate max-w-[170px]">{sp.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-navy-800">
                  <button
                    onClick={() => handleReserve(zone.id)}
                    className="w-full py-2.5 rounded-lg bg-navy-900 hover:bg-electric text-slate-200 hover:text-white text-xs font-mono font-bold tracking-wider border border-navy-800 hover:border-electric transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Reserve Station</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
