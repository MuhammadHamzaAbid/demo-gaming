import React, { useState } from 'react';
import { Camera, CheckCircle2, Clock, Maximize2, X, Zap } from 'lucide-react';
import { GALLERY_ITEMS, CONSTRUCTION_PROGRESS } from '../data/mockData';

export default function EventsGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Esports PC', 'Esports Arena', 'Sim Racing', 'Console Gaming', 'Private Cinema', 'Cue Sports', 'Fuel & Café'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="gallery" className="py-24 relative bg-midnight border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-navy-800">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
              Arena Atmosphere
            </h2>
          </div>

          {/* Minimal category filters */}
          <div className="mt-4 md:mt-0 flex flex-wrap gap-1.5 font-mono text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeFilter === cat
                    ? 'bg-electric text-white border border-white/30 shadow-glow font-bold'
                    : 'bg-navy-950 text-slate-400 hover:text-white border border-navy-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-navy-950 border border-navy-800 hover:border-electric cursor-pointer transition-all duration-300 shadow-card-glow"
            >
              <div className="h-64 w-full overflow-hidden bg-navy-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent flex flex-col justify-end p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-electric bg-midnight/90 px-2 py-0.5 rounded border border-navy-800 font-bold">
                    {item.category}
                  </span>
                  <div className="w-7 h-7 rounded bg-navy-900 border border-navy-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-electric" />
                  </div>
                </div>
                <h4 className="font-display font-bold text-lg text-white mt-1 group-hover:text-electric transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 font-sans mt-0.5 font-light line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arena Commissioning Strip */}
        <div id="progress" className="pt-12 border-t border-navy-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 gap-2">
            <div>
              <span className="text-[10px] font-mono text-electric uppercase tracking-[0.2em] block mb-1">
                TELEMETRY & COMMISSIONING
              </span>
              <h3 className="font-display font-bold text-2xl text-white uppercase">
                Arena Build & Calibration Tracker
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              TARGET ARENA OPENING: NOVEMBER 15, 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONSTRUCTION_PROGRESS.map((stage, idx) => {
              const isDone = stage.status === 'Completed';

              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-navy-950 border border-navy-800 shadow-card-glow flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        {stage.phase}
                      </span>
                      <h4 className="font-display font-bold text-sm text-white mt-0.5">
                        {stage.title}
                      </h4>
                    </div>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border flex items-center gap-1 ${
                        isDone
                          ? 'border-electric/40 bg-electric/10 text-electric font-bold'
                          : 'border-white/20 bg-navy-900 text-slate-300'
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-3 h-3 text-electric" />
                      ) : (
                        <Clock className="w-3 h-3 text-electric animate-pulse" />
                      )}
                      <span>{stage.status}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 font-sans font-light mb-4 mt-2">
                    {stage.detail}
                  </p>

                  <div>
                    <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                      <span>Progress</span>
                      <span className="text-white font-bold">{stage.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-navy-900 border border-navy-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-electric to-electric-light rounded-full shadow-[0_0_8px_#FF0033]"
                        style={{ width: `${stage.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-2xl bg-navy-950 border-2 border-electric overflow-hidden shadow-glow"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-navy-900 text-white border border-navy-700 hover:border-electric transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-cover"
            />
            <div className="p-6 bg-navy-950 border-t border-navy-800">
              <span className="text-xs font-mono text-electric uppercase font-bold">{selectedImage.category}</span>
              <h4 className="font-display font-bold text-xl text-white mt-1">{selectedImage.title}</h4>
              <p className="text-sm text-slate-300 font-sans font-light mt-1">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
